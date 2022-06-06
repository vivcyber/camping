<?php require __DIR__ . '/part/connect_db.php';
header('Content-Type: application/json');

$output = [
    'success' => false,
    'postData' => $_POST,
    'code' => 0,
    'error' => ''
];

$folder = __DIR__ . '/uploaded/';


$extMap = [
    'image/jpeg' => '.jpg',
    'image/png' => '.png',
    'image/gif' => '.gif',
];

if (empty($extMap[$_FILES['picture']['type']])) {
    $output['error'] = '檔案類型錯誤';
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}
$ext = $extMap[$_FILES['picture']['type']]; 

$filename = md5($_FILES['picture']['name'] . rand()) . $ext;

$output['filename'] = $filename;


if (move_uploaded_file($_FILES['picture']['tmp_name'], $folder . $filename)) {
    $output['success'] = true;
} else {
    $output['error'] = '無法搬動檔案';
}

$name = $_POST['name'] ?? '';
$pic = $filename;
$area = $_POST['area'] ?? '';
$type = $_POST['type'] ?? '';
$open_time = $_POST['open_time'] ?? '';
$close_day = $_POST['close_day'] ?? '';
$tel = $_POST['tel'] ?? '';
$address = $_POST['address'] ?? '';
$descripition = $_POST['description'] ?? '';
$event_site = $_POST['event_site'] ?? '';



$sql = "INSERT INTO `tourist_spot`( `pic`, `area`, `name`, `type`, `open_time`, `close_day`, `tel`, `address`, `description`, `event_site`) VALUES (?,?,?,?,?,?,?,?,?,?)";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    $pic,
    $area,
    $name,
    $type,
    $open_time,
    $close_day,
    $tel,
    $address,
    $descripition,
    $event_site,
]);


if ($stmt->rowCount() == 1) {
    $output['success'] = true;
    $output['lastInsertId'] = $pdo->lastInsertId();
} else {
    $output['error'] = '資料無法新增';
}


echo json_encode($output, JSON_UNESCAPED_UNICODE);
