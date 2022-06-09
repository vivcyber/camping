<?php

include_once __DIR__ . '/part/connect_db.php';

if($_POST['Roomttype']) {
   
    $query = "SELECT * FROM room_list WHERE SID=".$_POST['Roomttype'];
    $result = $pdo->query($query);
    $check = false;
    
    if($result-> rowCount() > 0){
        while($row = $result->fetch(PDO::FETCH_ASSOC)){
            $R_Spec = $row['Room_Spec'];
            $r_spec = explode(',', $R_Spec);
            echo $R_Spec;
        //    foreach ($r_spec as $r) {
        //         // if (in_array($r, $r_spec)) {
        //             print_r($r);
        //         // }
        //    }
        }
    }
}



?>