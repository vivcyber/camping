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
$folder = __DIR__ . '/imgs/recipesimg/';

$extMap = [
    'image/jpeg' => '.jpg',
    'image/png' => '.png',
    'image/gif' => '.gif',
];

if (empty($extMap[$_FILES['resimg']['type']])) {
    $output['error'] = '檔案類型錯誤';
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}
$ext = $extMap[$_FILES['resimg']['type']]; 

$filename = md5($_FILES['resimg']['name'] . rand()) . $ext;

$output['filename'] = $filename;


if (move_uploaded_file($_FILES['resimg']['tmp_name'], $folder . $filename)) {
    $output['success'] = true;
} else {
    $output['error'] = '無法搬動檔案';
}

$sid = isset($_POST['sid']) ? intval($_POST['sid']) : 0;

$resname = $_POST['resname'];
$tool = $_POST['tool'] ?? '';
$ingredient= $_POST['ingredient'] ?? '';
$tutorial = $_POST['tutorial'] ?? '';
$serves = $_POST['serves'] ?? '';
$cook_time = $_POST['cook_time'] ?? '';
$recipetype = $_POST['recipetype'] ?? '';
$resimgtext = $_POST['resimgtext'] ?? '';
$resimg = $filename;


// if (!empty($email) and filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
//     $output['error'] = 'email 格式錯誤';
//     $output['code'] = 405;
//     echo json_encode($output, JSON_UNESCAPED_UNICODE);
//     exit;
// }
// TODO: 其他欄位檢查




$sql= "UPDATE `recipes` SET `resname`=?,`tool`=?,`ingredient`=?,`tutorial`=?,`serves`=?,`cook_time`=?,`recipetype`=?,`resimgtext`=?,`resimg`=? WHERE `sid`=$sid ";



$stmt = $pdo->prepare($sql);

$stmt->execute([
    $_POST['resname'],
    $_POST['tool'],
    $_POST['ingredient'],
    $_POST['tutorial'],
    $_POST['serves'],
    $_POST['cook_time'],
    $_POST['recipetype'],
    $_POST['resimgtext'],
    $resimg = $filename,
]);



if ($stmt->rowCount() == 1) {
    $output['success'] = true;
} else {
    $output['error'] = '資料沒有修改';
}



echo json_encode($output, JSON_UNESCAPED_UNICODE);