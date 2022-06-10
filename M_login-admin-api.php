<?php
session_start();
require __DIR__ . '/part/connect_db.php';


$output = [
    'success' => false,
    'post' => $_POST,
    'error' => '',
];

$admin = isset($_POST['admin']) ? $_POST['admin'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';



//若帳號密碼欄都為空
if (empty($_POST['admin']) && empty($_POST['password'])) {

    $output['error'] = '請輸入帳號密碼';

    echo json_encode($output);

    exit;
}




// $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

$sql = "SELECT * FROM `admin_list` WHERE `admin_account` = '" . $admin . "';";
$stmt = $pdo->query($sql);
$result = $stmt->fetch();

// print_r($result['m_passwd']);





//帳號欄不為空且資料庫撈不到資料
if (!empty($_POST['admin']) && $result == []) {
    $output['error'] = '帳號或密碼錯誤';
    echo json_encode($output);
    exit;
}




if ($_POST['admin'] == $result['admin_account'] && $_POST['password'] == $result['admin_password']) {



    if ($stmt->rowCount()) {

        $_SESSION['loginAdmin'] = $result;
        $_SESSION['isLoggedIn'] = true;

        $output['success'] = true;


        // exit;
    }
} else {
    $output['error'] = '登入失敗，請檢查帳號和密碼';
    $output['success'] = false;
    echo json_encode($output);
    exit;
}


header('Content-Type: application/json');
echo json_encode($output);
