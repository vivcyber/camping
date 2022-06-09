<?php

include_once __DIR__ . '/part/connect_db.php';

if($_POST['Roomttype']) {
   
    $query = "SELECT * FROM room_photo WHERE Room_Type='".$_POST['Roomttype']."' GROUP BY Room_Image";
    
    $result = $pdo->query($query);
    
    $check = false;
    
    if($result-> rowCount() > 0){
       
        while($row = $result->fetchAll(PDO::FETCH_ASSOC)){
            // print_r($row);
        //   echo '<input type="text" class="form-control" id="Price" name="Price" value='.$row['Price'].'>';
            foreach($row as $ImgRow){
                if(strlen($ImgRow['Room_Image']) != 0){
                    // print_r($ImgRow);
                    echo '<div class="img-box ml-1 mr-1" id="'.$ImgRow['sid'].'">
                    <img src="./imgs/Roomimg/'.$ImgRow['Room_Image'].'" class="images-size ml-2" alt="">
                    <a href="javascript:void(0)" class="badge badge-danger" onclick="deleteImage("'.$ImgRow['sid'].'")"></a>
                    </div>';
                }
            }
        }
    }else {
        echo '<input>No image was selected</input>';
    }
}
?>



