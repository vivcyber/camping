<?php require __DIR__ . '/part/connect_db.php';
header('Content-Type: application/json');

$d_sid = isset($_GET['d_sid']) ? intval($_GET['d_sid']) : 0;
$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;

$output = [
    'success' => false,
    'postData' => $_POST,
    'code' => 0,
    'error' => '',
    'filename' => '',
    'pic_name1' => '',
    'pic_name2' => '',
    'pic_name3' => ''
];
$sql_select = sprintf("SELECT d.* 
FROM `details` d
WHERE d.d_sid = $d_sid");


$row = $pdo->query($sql_select)->fetch();
$filename =  $_FILES['d_frame_pic1']['name'];
$pic_name1 = $_FILES['pic_name1']['name'];
$pic_name2 = $_FILES['pic_name2']['name'];
$pic_name3 = $_FILES['pic_name3']['name'];

if ($filename == '') {
    $filename = $row['d_frame_pic'];
} else {
    $filename =  $_FILES['d_frame_pic1']['name'];
}
if ($pic_name1 == '') {
    $pic_name1 = $row['pic_name1'];
} else {
    $pic_name1 = $_FILES['pic_name1']['name'];
}
if ($pic_name2 == '') {
    $pic_name2 = $row['pic_name2'];
} else {
    $pic_name2 = $_FILES['pic_name2']['name'];
}
if ($pic_name3 == '') {
    $pic_name3 = $row['pic_name3'];
} else {
    $pic_name3 = $_FILES['pic_name3']['name'];
}

$font_style1 = $_POST['font_style1'] ?? '';
$font_type1 = $_POST['font_type1'] ?? '';
$font_style2 = $_POST['font_style2'] ?? '';
$font_type2 = $_POST['font_type2'] ?? '';
$font_style3 = $_POST['font_style3'] ?? '';
$font_type3 = $_POST['font_type3'] ?? '';

$ink1 = $_POST['ink1'] ?? '';
$ink2 = $_POST['ink2'] ?? '';
$ink3 = $_POST['ink3'] ?? '';
$ink4 = $_POST['ink4'] ?? '';

$folder = __DIR__ . '/CP_imgs/';

// 用來篩選檔案, 用來決定副檔名
// $extMap = [
//     'image/jpeg' => '.jpg',
//     'image/png' => '.png',
//     'image/gif' => '.gif',
// ];

// if (empty($extMap[$_FILES['d_frame_pic1']['type']])) {
//     $output['error'] = '檔案類型錯誤';
//     echo json_encode($output, JSON_UNESCAPED_UNICODE);
//     exit;
// }
// $ext = $extMap[$_FILES['d_frame_pic1']['type']]; // 副檔名
// $ext1 = $extMap[$_FILES['pic_name1']['type']]; // 副檔名
// $ext2 = $extMap[$_FILES['pic_name2']['type']]; // 副檔名
// $ext3 = $extMap[$_FILES['pic_name3']['type']]; // 副檔名






$output['filename'] = $filename;
$output['pic_name1'] = $pic_name1;
$output['pic_name2'] = $pic_name2;
$output['pic_name3'] = $pic_name3;

// 把上傳的檔案搬移到指定的位置
move_uploaded_file($_FILES['pic_name1']['tmp_name'], $folder . $pic_name1);
move_uploaded_file($_FILES['pic_name2']['tmp_name'], $folder . $pic_name2);
move_uploaded_file($_FILES['pic_name3']['tmp_name'], $folder . $pic_name3);

if (move_uploaded_file($_FILES['d_frame_pic1']['tmp_name'], $folder . $filename)) {
    $output['success'] = true;
} else {
    $output['error'] = '無法修改檔案';
}

$sql = "UPDATE `details` d 
SET  `c_code` = ?, `color` = ?, `color_code` = ?, `stock` = ?, `product_id` = $sid, `ink1` = ?, `ink2` = ?, `ink3` = ?, `ink4` = ?, `ink_price` = ?, `font_style1` = ?, `font_type1` = ?, `font_style2` = ?, `font_type2` = ?, `font_style3` = ?, `font_type3` = ?,`font_price` = ?,`d_frame_pic` = ?, `pic_name1` = ?, `pic_name2` = ?, `pic_name3` = ?
WHERE d.`d_sid` = $d_sid";



$stmt = $pdo->prepare($sql);



$stmt->execute([
    $_POST['c_code'],
    $_POST['color'],
    $_POST['color_code'],
    $_POST['stock'],
    $ink1,
    $ink2,
    $ink3,
    $ink4,
    $_POST['ink_price'],
    $font_style1,
    $font_type1,
    $font_style2,
    $font_type2,
    $font_style3,
    $font_type3,
    $_POST['font_price'],
    $filename,
    $pic_name1,
    $pic_name2,
    $pic_name3,
]);





if ($stmt->rowCount() == 1) {
    $output['success'] = true;
} else {
    $output['error'] = '資料無法新增';
}



echo json_encode($output, JSON_UNESCAPED_UNICODE);
