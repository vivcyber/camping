<?php
session_start();
require __DIR__ . '/part/connect_db.php';

if (!isset($_POST)) {
    echo 'no post';
    exit;
}

$output = [
    'success' => false,
    'post' => $_POST,
    'error' => '',
];

$password = $_POST['oldpassword'] ? $_POST['oldpassword'] : '';
$nPassword = $_POST['newpassword'] ? $_POST['newpassword'] : '';
$sid = $_SESSION['loginUser']['m_id'];

if ($password == '') {
    $output['error'] = '請輸入密碼';
    echo json_encode($output);
    exit;
}

if (!password_verify($password, $_SESSION['loginUser']['m_passwd'])) {

    $output['error'] = '密碼錯誤';
    echo json_encode($output);
    exit;
}

$password = password_hash($password, PASSWORD_BCRYPT);



if ($nPassword !== '') {


    $nPassword = password_hash($nPassword, PASSWORD_BCRYPT);

    $sql = "UPDATE `memberdata` SET `m_passwd`='" . $password . "' WHERE `m_id` = '" . $sid . "';";

    $result = $pdo->prepare($sql);

    $result->execute(
        [
            $password
        ]
    );


    if ($result->rowCount()) {
        $output['success'] = true;

        unset($_SESSION['loginUser']);
        unset($_SESSION['isLoggedIn']);
    } else {
        $output['error'] = '資料無法新增';
    }
}

echo json_encode($output, JSON_UNESCAPED_UNICODE);
