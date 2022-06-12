<?php
session_start();
require __DIR__ . '/part/connect_db.php';


$output = [
    'success' => false,
    'post' => $_POST,
    'error' => '',
];

$username = isset($_POST['username']) ? $_POST['username'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';



//若帳號密碼欄都為空
if (empty($_POST['username']) && empty($_POST['password'])) {

    $output['error'] = '請輸入帳號密碼';

    echo json_encode($output);

    exit;
}

if (!empty($_POST['username']) && !empty($_POST['password'])) {

    if (empty($_POST['checkword'])) {

        $output['error'] = '請輸入驗證碼';
        echo json_encode($output);
        exit;
    }
}



// $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

$sql = "SELECT * FROM `memberdata` WHERE `m_username` = '" . $username . "';";
$stmt = $pdo->query($sql);
$result = $stmt->fetch();

// print_r($result['m_passwd']);





//帳號欄不為空且資料庫撈不到資料
if (!empty($_POST['username']) && $result == []) {
    $output['error'] = '帳號或密碼錯誤';
    echo json_encode($output);
    exit;
}




if ($_POST['username'] == $result['m_username'] && password_verify($password, $result['m_passwd'])) {



    if ($stmt->rowCount()) {
        $output['session_check'] = $_SESSION['check_word'];
        $output['post_check'] = $_POST['checkword'];
        if ((!empty($_SESSION['check_word'])) && (!empty($_POST['checkword']))) {  //判斷此兩個變數是否為空

            if ($_SESSION['check_word'] == $_POST['checkword']) {


                $_SESSION['loginUser'] = $result;
                $_SESSION['isLoggedIn'] = true;

                $output['success'] = true;

                $_SESSION['check_word'] = ''; //比對正確後，清空將check_word值




                // exit;
            } else {
                $output['error'] = '驗證碼錯誤';
                echo json_encode($output);
                exit;
            }
        } else {
            $output['error'] = '請輸入驗證碼';
            echo json_encode($output);
            exit;
        }
    }
} else {
    $output['error'] = '帳號或密碼錯誤';
    $output['success'] = false;
    echo json_encode($output);
    exit;
}


header('Content-Type: application/json');
echo json_encode($output);
