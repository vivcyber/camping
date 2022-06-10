<?php

require __DIR__ . '/part/connect_db.php';

header('Content-Type: application/json');


$output = [
    'success' => false,
    'postData' => $_POST,
    'code' => 0,
    'error' => '',
];


if($_POST['Roomttype']) {
//Count total Files
    $countfiles = count($_FILES['files']['name']);

    //to store uploaded file path
    $files_arr = array();

    //Prepared statement to mySQL
    $sql = "INSERT INTO room_photo(Room_Type,Room_Image) VALUES (?,?)";
    $stmt = $pdo->prepare($sql);

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
            $stmt->execute(array($_POST['Roomttype'],$filename));
        }
    }

    echo "File upload successfully";
}

?>