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


$resname = $_POST['resname'];
$tool = $_POST['tool'] ?? '';
$ingredient = $_POST['ingredient'] ?? '';
$tutorial = $_POST['tutorial'] ?? '';
$serves = $_POST['serves'] ?? '';
$cook_time = $_POST['cook_time'] ?? '';
$recipetype = $_POST['recipetype'] ?? '';
$resimg = $_POST['resimg'] ?? '';


// if (!empty($email) and filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
//     $output['error'] = 'email 格式錯誤';
//     $output['code'] = 405;
//     echo json_encode($output, JSON_UNESCAPED_UNICODE);
//     exit;
// }
// TODO: 其他欄位檢查




$sql = "INSERT INTO `recipes`( `resname`, `tool`, `ingredient`, `tutorial`, `serves`, `cook_time`, `recipetype`, `resimg`) VALUES ('$resname','$tool','$ingredient','$tutorial','$serves','$cook_time','$recipetype','$resimg')";



$stmt = $pdo->prepare($sql);

$stmt->execute([
    $_POST['resname'],
    $_POST['tool'],
    $_POST['ingredient'],
    $_POST['tutorial'],
    $_POST['serves'],
    $_POST['cook_time'],
    $_POST['recipetype'],
    $_POST['resimg'],
]);



if ($stmt->rowCount() == 1) {
    $output['success'] = true;
} else {
    $output['error'] = '資料無法新增';
}



echo json_encode($output, JSON_UNESCAPED_UNICODE);
