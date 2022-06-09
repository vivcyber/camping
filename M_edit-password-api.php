<?php
session_start();
require __DIR__ . '/M_databse-connect.php';


$output = [
    'success' => false,
    'post' => $_POST,
    'error' => '',
];

$password = $_POST['old-password'] ? $_POST['old-password'] : '';
$nPassword = $_POST['new-password'] ? $_POST['new-password'] : '';
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


$sql = "UPDATE `memberdata` SET `m_passwd`='" . $password . "' WHERE `m_id` = '" . $sid . "';";

$result = $pdo->prepare($sql);

$result->execute(
    [
        $password
    ]
);
