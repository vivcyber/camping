<?php require __DIR__ . '/part/connect_db.php';
header('Content-Type: application/json');

$output = [
    'success' => false,
    'postData' => $_POST,
    'code' => 0,
    'error' => ''
];

//測試欄位有沒有丟對//
// echo json_encode($output, JSON_UNESCAPED_UNICODE);
// exit;

$sid =isset($_POST['sid'])?intval($_POST['sid']):0;



$productname = $_POST['productname'];
$productcategory = $_POST['productcategory'] ?? '';
$productinfo = $_POST['productinfo'] ?? '';
$productinfo = $_POST['productimg'] ?? '';
$productinfo = $_POST['productprice'] ?? '';
$productleft = $_POST['productleft'] ?? '';

// if (!empty($email) and filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
//     $output['error'] = 'email 格式錯誤';
//     $output['code'] = 405;
//     echo json_encode($output, JSON_UNESCAPED_UNICODE);
//     exit;
// }
// TODO: 其他欄位檢查




$sql= "UPDATE `camproduct2` SET `productname`=?,`productcategory`=?,`productinfo`=?,`productimg`=?,`productprice`=?,`productleft`,`productspec=?`, `productinclude=?`, `productimg2=?`, `productimg3=?`=? WHERE `sid`=$sid ";



$stmt = $pdo->prepare($sql);

$stmt->execute([
    $_POST['productname'],
    $_POST['productcategory'],
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
    $output['error'] = '資料沒有修改';
}



echo json_encode($output, JSON_UNESCAPED_UNICODE);