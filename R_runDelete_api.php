<?php

include_once __DIR__ . '/part/connect_db.php';

if($_POST['Roomttype']) {
    
    $query = "DELETE FROM room_photo WHERE sid='".$_POST['Roomttype']."'";
    
    if($result = $pdo->query($query)){
        echo "Delete Successful";
    }else {
        echo "Error deleting images";
    }
    
    exit();
}
?>



