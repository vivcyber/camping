<?php
header('Content-Type: application/json');

$folder = __DIR__ . '/uploaded/';

$extMap = [
    'image/jpeg' => '.jpg',
    'image/png' => '.png',
    'image/gif' => '.gif',

];

$output = [
    'success' => false,
    'filename' => '',
    'error' => '',
];

if (empty($extMap[$_FILES['picture']['type']])) {
    $output['error'] = '檔案類型錯誤';
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}

$ext = $extMap[$_FILES['picture']['type']];

$filename = md5($_FILES['picture']['name'] . rand());
$output['filename'] = $filename;



if (move_uploaded_file($_FILES['picture']['tmp_name'], $folder . $filename)) {
    $output['success'] = true;
} else {
    $output['error'] = '無法搬動檔案';
}

echo json_encode($output);
