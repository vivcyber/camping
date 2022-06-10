<?php require __DIR__ . '/part/connect_db.php';
header('Content-Type: application/json');

$folder = __DIR__ . './ae_uploaded/';

// 用來篩選檔案, 用來決定副檔名

$extMap = [
    'image/jpeg' => '.jpg',
    'image/png' => '.png',
    'image/gif' => '.gif',
];

$output = [
    'success' => false,
    'filenames' => [],
    'postData' => $_POST,
    'code' => 0,
    'error' => ''
];

// TODO: 欄位檢查, 後端的檢查
// if (empty($_POST['actname'])) {
//     $output['error'] = '沒有姓名資料';
//     $output['code'] = 400;
//     echo json_encode($output, JSON_UNESCAPED_UNICODE);
//     exit;
// }
if (empty($_FILES['photos'])) {
    $output['error'] = '沒有上傳檔案';
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}

if (!is_array($_FILES['photos']['name'])) {
    $output['error'] = '沒有上傳檔案2';
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}

foreach ($_FILES['photos']['name'] as $k => $f) {

    $ext = $extMap[$_FILES['photos']['type'][$k]]; // 副檔名
    $filename = md5($f . rand()) . $ext;
    $output['filenames'][] = $filename;

    // 把上傳的檔案搬移到指定的位置
    move_uploaded_file($_FILES['photos']['tmp_name'][$k], $folder . $filename);
}
$output['success'] = true;
echo json_encode($output);