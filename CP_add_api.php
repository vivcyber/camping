<?php require __DIR__ . '/part/connect_db.php';
header('Content-Type: application/json');

$output = [
    'success' => false,
    'postData' => $_POST,
    'code' => 0,
    'error' => '',
    'filename' => ''
];
// 若沒有輸入則設為空值
$customize = $_POST['customize'] ?? '';
$customize2 = $_POST['customize2'] ?? '';
$customize3 = $_POST['customize3'] ?? '';

$folder = __DIR__ . '/CP_imgs/';

// 用來篩選檔案, 用來決定副檔名
$extMap = [
    'image/jpeg' => '.jpg',
    'image/png' => '.png',
    'image/gif' => '.gif',
];

if (empty($extMap[$_FILES['frame_pic1']['type']])) {
    $output['error'] = '檔案類型錯誤';
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}
$ext = $extMap[$_FILES['frame_pic1']['type']]; // 副檔名

$filename = $_FILES['frame_pic1']['name'] . $ext;

$output['filename'] = $filename;

// 把上傳的檔案搬移到指定的位置
if (move_uploaded_file($_FILES['frame_pic1']['tmp_name'], $folder . $filename)) {
    $output['success'] = true;
} else {
    $output['error'] = '無法搬動檔案';
}
$sql1 = "INSERT INTO `customize_product`(`p_code`, `frame_pic`, `name`, `customize`, `customize2`, `customize3`, `introduction`, `price`)
VALUES (? ,? ,? ,? ,? ,? ,? ,?)";


$stmt1 = $pdo->prepare($sql1);

$stmt1->execute([
    $_POST['p_code'],
    $filename,
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
