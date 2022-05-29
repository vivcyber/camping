<?php require __DIR__ . '/part/connect_db.php';
header('Content-Type: application/json');

$output = [
    'success' => false,
    'postData' => $_POST,
    'code' => 0,
    'error' => ''
];

// TODO: 欄位檢查, 後端的檢查
// if (empty($_POST['productname'])) {
//     $output['error'] = '沒有姓名資料';
//     $output['code'] = 400;
//     echo json_encode($output, JSON_UNESCAPED_UNICODE);
//     exit;
// }


$productname = $_POST['productname'];
$productcategory = $_POST['productcategory'] ?? '';
$productcolor= $_POST['productcolor'] ?? '';
$productinfo = $_POST['productinfo'] ?? '';
$productinfo = $_POST['productimg'] ?? '';
$productinfo = $_POST['productprice'] ?? '';
$productleft = $_POST['productleft'] ?? '';
$productspec = $_POST['productspec'] ?? '';
$productinclude = $_POST['productinclude'] ?? '';
$productimg2 = $_POST['productimg2'] ?? '';
$productimg3= $_POST['productimg3'] ?? '';


// if (!empty($email) and filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
//     $output['error'] = 'email 格式錯誤';
//     $output['code'] = 405;
//     echo json_encode($output, JSON_UNESCAPED_UNICODE);
//     exit;
// }
// TODO: 其他欄位檢查




$sql= "INSERT INTO `camproduct2`(`productname`, `productcategory`, `productcolor`,`productinfo`, `productimg`, `productprice`, `productleft`, `productspec`, `productinclude`, `productimg2`, `productimg3`) VALUES (?,?,?,?,?,?,?,?,?,?,?)";



$stmt = $pdo->prepare($sql);

$stmt->execute([
    $_POST['productname'],
    $_POST['productcategory'],
    $_POST['productcolor'],
    $_POST['productinfo'],
    $_POST['productimg'],
    $_POST['productprice'],
    $_POST['productleft'],
    $_POST['productspec'],
    $_POST['productinclude'],
    $_POST['productimg2'],
    $_POST['productimg3'],
]);



if ($stmt->rowCount() == 1) {
    $output['success'] = true;
} else {
    $output['error'] = '資料無法新增';
}



echo json_encode($output, JSON_UNESCAPED_UNICODE);