<?php

include_once __DIR__ . '/part/connect_db.php';

if($_POST['Roomttype']) {
   
    $query = "SELECT * FROM room_list WHERE Room_Type='".$_POST['Roomttype']."'";
    $result = $pdo->query($query);
    // $row = $result->fetch(PDO::FETCH_ASSOC);
    // var_dump($row);
    $check = false;
    
    if($result-> rowCount() > 0){
        while($row = $result->fetch(PDO::FETCH_ASSOC)){
            
          echo '<input type="hidden" name="SID" value='.$row['SID'].'>';
        }
    }else {
        echo '<input>No SID</input>';
    }
}



?>