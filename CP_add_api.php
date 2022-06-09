<?php require __DIR__ . '/part/connect_db.php';
header('Content-Type: application/json');

$output = [
    'success' => false,
    'postData' => $_POST,
    'code' => 0,
    'error' => ''
];
// 若沒有輸入則設為空值
$customize = $_POST['customize'] ?? '';
$customize2 = $_POST['customize2'] ?? '';
$customize3 = $_POST['customize3'] ?? '';

$sql1 = "INSERT INTO `customize_product`(`p_code`, `frame_pic`, `name`, `customize`, `customize2`, `customize3`, `introduction`, `price`)
VALUES (? ,? ,? ,? ,? ,? ,? ,?)";


$stmt1 = $pdo->prepare($sql1);

$stmt1->execute([
    $_POST['p_code'],
    $_POST['frame_pic'],
    $_POST['name'],
    $customize,
    $customize2,
    $customize3,
    $_POST['introduction'],
    $_POST['price'],
]);



if ($stmt1->rowCount() == 1) {
    $output['success'] = true;
} else {
    $output['error'] = '資料無法新增';
}


echo json_encode($output, JSON_UNESCAPED_UNICODE);
