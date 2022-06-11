<?php require __DIR__ . '/part/connect_db.php';
header('Content-Type: application/json');

$output = [
    'success' => false,
    'postData' => $_POST,
    'code' => 0,
    'error' => ''
];

$Room_Type = $_POST['Room_Type'] ?? '';
// $Room_Image = $filename;
$Room_Spec1 = empty($_POST['Room_spec']) ? NULL : $_POST['Room_spec'];
$Room_spec = implode(",",$Room_Spec1) ??'';
$Price = intval($_POST['Price']) ?? '';

$countfiles = count($_FILES['files']['name']);

//to store uploaded file path
$files_arr = array();

//Prepared statement to mySQL
$sql2 = "INSERT INTO room_photo(Room_Type,Room_Image,Created_at) VALUES (?,?,Now())";
$stmt = $pdo->prepare($sql2);

//Loop all files
for($i=0 ; $i<$countfiles ; $i++){

    //File Name
    $filename = $_FILES['files']['name'][$i];

    //location
    $target_file = './imgs/Roomimg/'.$filename;

    //file extension
    $file_extension = pathinfo($target_file,PATHINFO_EXTENSION);
    $file_extension = strtolower($file_extension);
    
    if(move_uploaded_file($_FILES['files']['tmp_name'][$i],$target_file)){
        $stmt->execute(array($Room_Type,$filename));
    }
}





$sql = "INSERT INTO `room_list`(`Room_Type`, `Room_Spec`, `Price`) VALUES (?,?,?)";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    $Room_Type,
    $Room_spec,
    $Price,
]);


if ($stmt->rowCount() == 1) {
    $output['success'] = true;
    $output['lastInsertId'] = $pdo->lastInsertId();
} else {
    $output['error'] = '資料無法新增';
}


echo json_encode($output, JSON_UNESCAPED_UNICODE);
