<?php
require __DIR__ . '/M_databse-connect.php';
header("Content-Type:application/json");

$output = [
    'success' => false,
    'postData' => $_POST,
    'code' => 0,
    'error' => '',
    'filename' => ''
];


$sid = isset($_POST['sid']) ? intval($_POST['sid']) : 0;



//後端欄位檢查

//後端欄位檢查

if (empty($sid)) {
    $output['error'] = '沒有姓名資料';
    $output['code'] = 400;
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}

$name = $_POST['name'];
$email = $_POST['email'] ?? '';
$mobile = $_POST['mobile'] ?? '';
$birthday = empty($_POST['birthday']) ? NULL : $_POST['birthday'];
$address = $_POST['address'] ?? '';
$filename = '';

//''是因為要存進資料庫，不能為空值，但birthday在資料表時就有勾選空值

$folder = __DIR__ . '/M_uploaded/';

$extMap = [
    'image/jpeg' => '.jpg',
    'image/png' => '.png',
    'image/gif' => '.gif',
];
// print_r(empty($extMap[$_FILES['avatar']['type']]));
// exit;

if (!empty($_FILES['avatar']['name'])) {
    if (empty($extMap[$_FILES['avatar']['type']])) {
        $output['error'] = '檔案類型錯誤';
        echo json_encode($output, JSON_UNESCAPED_UNICODE);
        exit;
    }

    $ext = $extMap[$_FILES['avatar']['type']]; // 副檔名

    $filename = md5($_FILES['avatar']['name'] . rand()) . $ext;

    $output['filename'] = $filename;

    // 把上傳的檔案搬移到指定的位置
    if (move_uploaded_file($_FILES['avatar']['tmp_name'], $folder . $filename)) {
        $output['success'] = true;
    } else {
        $output['error'] = '無法搬動檔案';
    }
}



//email不為空值 且 email不通過驗證
if (!empty($email) and filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    $output['error'] = 'email 格式錯誤';
    $output['code'] = 405;
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}

//其他欄位檢查：

$sql = "UPDATE `memberdata` SET `m_name`=?,`m_avatar`=?, `m_email`=?, `m_phone`=?, `m_birthday`=?, `m_address`=? WHERE `m_id`=$sid ";
$sql_no_pic = "UPDATE `memberdata` SET `m_name`=?, `m_email`=?, `m_phone`=?, `m_birthday`=?, `m_address`=? WHERE `m_id`=$sid ";

if ($filename == '') {
    $stmt = $pdo->prepare($sql_no_pic);

    $stmt->execute([
        $name,
        $email,
        $mobile,
        $birthday,
        $address

    ]);
} else {
    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        $name,
        $filename,
        $email,
        $mobile,
        $birthday,
        $address

    ]);
}




if ($stmt->rowCount() == 1) {
    $output['success'] = '資料成功新增';
} else {
    $output['error'] = '資料沒有修改唷';
}

echo json_encode($output, JSON_UNESCAPED_UNICODE);
