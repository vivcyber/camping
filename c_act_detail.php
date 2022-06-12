<?php require __DIR__ . '/part/connect_db.php';

$pageName = 'c_act';
$title = '活動加購前台首頁';


// $rows = [];
// $sql = sprintf("SELECT act.*, act_img.filename FROM act JOIN act_img ON act.act_id = act_img.act_id");
// $rows = $pdo->query($sql)->fetchAll();

$act_id = isset($_GET['act_id']) ? intval($_GET['act_id']) : 0;
if (empty($act_id)) {
header('Location:c_act.php');
exit;
}

$row=$pdo->query("SELECT * FROM act WHERE act_id =$act_id")->fetch();
// if(empty($row)){
// header('Location:c_act.php');
// exit;
// };

$img = [];
$sql = sprintf("SELECT * FROM act_img WHERE act_id =$act_id");
$img=$pdo->query($sql)->fetchAll();

?>
<?php include __DIR__ . '/c_part/c_head.php' ?>
<?php include __DIR__ . '/c_part/c_nav.php' ?>
<style>
    body{
                background: url(./imgs/pexels-lumn-167685.jpg);
                background-size: cover;
                background-repeat: no-repeat;
            }
</style>

<div class="container">
    <div class="card mt-5 mb-5 p-5">
        <div class="row py-5">
            <div class="col-6">
                <?php foreach ($img as $r) : ?>
                <img src="./imgs/act_img/<?= $r['filename']?>" class="card-img-top m-1 mb-1" alt="" style="width:250px; height: 200px; object-fit:cover">
                <?php endforeach; ?>
            </div>
            <div class="col-6 p-2">
                
                <div class="mb-2">
                    <h2><?= $row['act_name']?><button class="btn btn-dark">我要報名</button></h2>
                </div>
                
                <div class="mb-2">
                    <h4>活動價錢</h4>
                    <p>$<?= $row['act_price']?>/人</p>
                </div>
                <h4>活動介紹</h4>
                <p style=""><pre><?= $row['act_desc']?></pre></p>
                <h4>活動行程</h4>
                <p style="font-size: 9px;"><pre><?= $row['act_schedule']?></pre></p>
                <h4>個人準備物品</h4>
                <p style="font-size: 9px;"><pre><?= $row['act_prepare']?></pre></p>
                <h4>注意事項</h4>
                <p style="font-size: 9px;"><pre><?= $row['act_notice']?></pre></p>
            </div>
        </div>
    </div>
</div>





<?php include __DIR__ . '/c_part/c_scripts.php' ?>

        
<?php include __DIR__ . '/c_part/c_foot.php' ?>
