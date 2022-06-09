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
$sid = isset($_POST['sid']) ? intval($_POST['sid']) : 0;

$productname = $_POST['productname'];
$productcategory = $_POST['productcategory'] ?? '';
$productcolor = $_POST['productcolor'] ?? '';
$productinfo = $_POST['productinfo'] ?? '';
$productinfo = $_POST['productimg'] ?? '';

$productimg = $_FILES['productimg']['name'];
$productimg_tmp = $_FILES['productimg']['tmp_name']?? '';
// $productinfo = $_POST['productimg'] ?? '';
$productinfo = $_POST['productprice'] ?? '';
$productleft = $_POST['productleft'] ?? '';
$productspec = $_POST['productspec'] ?? '';
$productinclude = $_POST['productinclude'] ?? '';

$productimg2 = $_FILES['productimg2']['name'];
$productimg2_tmp = $_FILES['productimg2']['tmp_name']?? '';
// $productimg2 = $_POST['productimg2'] ?? '';


$productimg3 = $_FILES['productimg3']['name'];
$productimg3_tmp = $_FILES['productimg3']['tmp_name']?? '';
// $productimg3= $_POST['productimg3'] ?? '';

move_uploaded_file($productimg_tmp,"./imgs/product/$productimg");
move_uploaded_file($productimg2_tmp,"./imgs/product/$productimg2");
move_uploaded_file($productimg3_tmp,"./imgs/product/$productimg3");


$con = mysqli_connect("localhost","root","","projecttest");


// if (!empty($email) and filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
//     $output['error'] = 'email 格式錯誤';
//     $output['code'] = 405;
//     echo json_encode($output, JSON_UNESCAPED_UNICODE);
//     exit;
// }
// TODO: 其他欄位檢查




$sql= "UPDATE `camproduct2` SET `productname`=?,`productcategory`=?,`productcolor`=?,`productinfo`=?,`productimg`=?,`productprice`=?,`productleft`=?,`productspec`=?,`productinclude`=?,`productimg2`=?,`productimg3`=? WHERE `sid`=$sid";



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