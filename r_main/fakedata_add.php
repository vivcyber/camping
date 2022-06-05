<div>
<?php require($_SERVER['DOCUMENT_ROOT']."/campppppp/part/connect_db.php");
exit;
echo microtime(true)."<br>";


$lname = ['陳'. '林','李','吳','王'];
$fname = ['小明','小雅','小花','小鬼','小歸'];


$sql = "INSERT INTO `Room_Order`(
          `Date`, `Room_Type`, `Room_Spec`,`Price`, `ID_Comments`, `Create_at`
        ) VALUES (
         ?, ?, ?, ?, ?, NOW()
         )";

         //INSERT INTO `Room_Order`(`OrderNum`, `Date`, `Room_Type`, `Room_Spec`, `RoomPhoto`, `Price`, `ID_Comments`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]')

         //每次要放資料的格式就用這樣就好。

$stmt = $pdo->prepare($sql); //如果資料外面來的，一律都是prepare

for($i = 0 ; $i < 30 ; $i ++){
    shuffle($lname);
    shuffle($fname);
    $ts = rand(strtotime('2021-01-01'),strtotime('2022-05-31'));
    $stmt->execute([
        date('Y-m-d',$ts), //時間搭配 ts 的random 運算
        "Room-1",
        "fridge,hotpot,sheet,wardrobe,toiletpaper,toilet,hairdryer,tub,washroom,towel,slipper,desk,televsion,phone,channel",
        "3500",
        "NULL",
    ]);

}
// echo $stmt->rowCount();
echo microtime(true)."<br>";

?>
</div>