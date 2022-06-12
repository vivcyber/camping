<?php require __DIR__ . '/part/connect_db.php';

$pageName = 'c_act';
$title = '活動加購前台首頁';


$rows = [];
    $sql = sprintf("SELECT act.*, act_cover.filename FROM act JOIN act_cover ON act.act_id = act_cover.act_id");
    $rows = $pdo->query($sql)->fetchAll();
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
    <div class="mt-5">
        <div class="row p-3">
            <?php foreach ($rows as $r) : ?>
                <div class="col-md-3 product-unit my-3">
                    <div class="card" style="width: 18rem; height:650px;">
                        <img src="./imgs/act_img/<?= $r['filename']?>" class="card-img-top" alt="" style="height: 250px; object-fit:cover">
                        <div class="card-body">
                            <h2 class="mt-2"><?= htmlentities($r['act_name']) ?></h2>
                            <p class="card-text mt-4"><?= $r['act_desc'] ?></p>
                        </div>
                        <a href="c_act_detail.php?act_id=<?= $r['act_id'] ?>" class="btn btn-outline-secondary mt-2  mb-2 m-3">活動詳細介紹</a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>





<?php include __DIR__ . '/c_part/c_scripts.php' ?>

        
<?php include __DIR__ . '/c_part/c_foot.php' ?>
