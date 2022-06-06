<?php

require __DIR__ . '/parts/connect_db.php';

header('Content-Type: application/json');


$output = [
    'success' => false,
    'postData' => $_POST,
    'code' => 0,
    'error' => '',
];

$sid = isset($_POST['OrderNum']) ? intval($_POST['OrderNum']) : 0;

//如果名字是空字串，那就不做了！

if (empty($sid) or empty($_POST['OrderNum'])) { //檢查必填的姓名欄位
    //如果這裡的empty換成isset 也會判定為true哦。
    $output['error'] = '沒有相關資料';
    $output['code'] = 400; //自己給予的網路編碼，像404就是伺服器讀取錯誤。
    echo json_encode($output, JSON_UNESCAPED_UNICODE);
    exit;
}


//這裡是檢查所有的值是否符合條件
$OrderNum = $_POST['OrderNum'];
$Date = $_POST['Date'] ?? ''; //這個的條件是當email是underfine的話，就會判斷為控空值
$Room_Type = $_POST['Room_Type'] ?? ''; //如果不是underfine的話，就會丟值過來。
$Room_Spec1 = empty($_POST['Room_spec']) ? NULL : $_POST['Room_spec'];
$Room_spec = implode($Room_Spec1);
$Price = $_POST['Price'] ?? '';
$ID_Comment = $_POST['ID_Comments'] ?? '';

//這裡是判斷email 是否沒有值
//如果Email有填值，但不符合格式
// if (!empty($email) and filter_var($email, FILTER_VALIDATE_EMAIL) === false) { //regular expression
//     // ;
//     $output['error'] = 'Email格式錯誤';
//     $output['code'] = 405; //自己給予的網路編碼，像404就是伺服器讀取錯誤。
//     echo json_encode($output, JSON_UNESCAPED_UNICODE);
//     exit;
// }

// if (!empty($mobile) and filter_var($mobile, FILTER_VALIDATE_EMAIL) === false) { //regular expression
//     // ;
//     $output['error'] = '沒有姓名資料';
//     $output['code'] = 405; //自己給予的網路編碼，像404就是伺服器讀取錯誤。
//     echo json_encode($output, JSON_UNESCAPED_UNICODE);
//     exit;
// }

// TODO: 其他的欄位檢查

$sql = "UPDATE `room_order` SET `Date`=?, `Room_Type`=?, `Room_Spec`=?, `Price`=?, `ID_Comments`=? WHERE `OrderNum` = $sid";

$stmt = $pdo->prepare($sql);
$stmt->execute([
    $Date,
    $Room_Type,
    $Room_spec,
    $Price,
    $ID_Comment,

]);

//    $output['success'] = !! $stmt->rowCount(); // 或者寫 $stmt -> rowCount()==1 看看有沒有等於1

if ($stmt->rowCount() == 1) {
    $output['success'] = true;
} else {
    $output['error'] = '資料沒有修改';
}
//isset（）判斷有沒有設定，只要有用 = 做設定的都算是有設定。有設定就是true
//empty() 如果裡面的值有設定，就等於false。如果裡面的值是空陣列，也同等於true。空值也算有設定。

echo json_encode($output, JSON_UNESCAPED_UNICODE);
