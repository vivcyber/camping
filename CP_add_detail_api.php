<?php require __DIR__ . '/part/connect_db.php';
header('Content-Type: application/json');

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

$filename = $_FILES['d_frame_pic1']['name'];
$pic_name1 = $_FILES['pic_name1']['name'];
$pic_name2 = $_FILES['pic_name2']['name'];
$pic_name3 = $_FILES['pic_name3']['name'];

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
    $output['error'] = '無法搬動檔案';
}

$sql2 = "INSERT INTO `details`( `c_code`, `color`, `color_code`, `stock`, `product_id`, `ink1`, `ink2`, `ink3`, `ink4`, `ink_price`, `font_style1`, `font_type1`, `font_style2`, `font_type2`, `font_style3`, `font_type3`,`font_price`, `d_frame_pic`,`pic_name1`, `pic_name2`, `pic_name3`) 
VALUES (?,?,?,?,$sid,
        ?,?,?,?,?,
        ?,?,?,?,?,
        ?,?,?,?,?,?)";




$stmt2 = $pdo->prepare($sql2);

$stmt2->execute([
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




if ($stmt2->rowCount() == 1) {
    $output['success'] = true;
} else {
    $output['error'] = '資料無法新增';
}



echo json_encode($output, JSON_UNESCAPED_UNICODE);
