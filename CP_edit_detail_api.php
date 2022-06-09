<?php require __DIR__ . '/part/connect_db.php';
header('Content-Type: application/json');

$d_sid = isset($_GET['d_sid']) ? intval($_GET['d_sid']) : 0;
$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;

$output = [
    'success' => false,
    'postData' => $_POST,
    'code' => 0,
    'error' => ''
];

$pic_name1 = $_POST['pic_name1'] ?? '';
$pic_name2 = $_POST['pic_name2'] ?? '';
$pic_name3 = $_POST['pic_name3'] ?? '';

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



$sql2 = "UPDATE `details` d 
SET  `c_code` = ?, `color` = ?, `color_code` = ?, `stock` = ?, `product_id` = $sid, `ink1` = ?, `ink2` = ?, `ink3` = ?, `ink4` = ?, `ink_price` = ?, `font_style1` = ?, `font_type1` = ?, `font_style2` = ?, `font_type2` = ?, `font_style3` = ?, `font_type3` = ?,`font_price` = ?, `pic_name1` = ?, `pic_name2` = ?, `pic_name3` = ?
WHERE d.`d_sid` = $d_sid";



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
