<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'CP_f_detail';
$title = '商品詳情';


$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;
$page = isset($_GET['page']) ? intval($_GET['page']) : 0;


if (empty($sid)) {
    header('Location:CP_f_product.php');
    exit;
}

$perPage = 1;


$t_sql = "SELECT COUNT(1)
FROM customize_product cp
JOIN details d
ON d.product_id = cp.sid
WHERE cp.sid = $sid";
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0]; // 總筆數

$totalPages = ceil($totalRows / $perPage); // 總共有幾頁

$row = [];

$sql = sprintf("SELECT cp.*, d.*
    FROM customize_product cp
    JOIN details d
    ON d.product_id = cp.sid
    WHERE cp.sid = $sid LIMIT %s, %s", $page * $perPage, $perPage);

$row = $pdo->query($sql)->fetch();

$ink = [$row['ink1'], $row['ink2'], $row['ink3'], $row['ink4']];

$rows = [];

$sql2 = sprintf("SELECT cp.*,d.*
        FROM customize_product cp
        JOIN details d
        ON d.product_id = cp.sid
        WHERE cp.sid = $sid ");

$rows = $pdo->query($sql2)->fetchAll();
// 把每一頁的資料抓出來放到 rows
?>

<?php include __DIR__ . '/c_part/c_head.php' ?>
<?php include __DIR__ . '/c_part/c_nav.php' ?>
<style>
    body {
        background: url(./imgs/pexels-lumn-167685.jpg);
        background-size: cover;
        background-repeat: no-repeat;
    }

    .pic {
        width: 33%;
        height: 12rem;
    }
</style>


<div class="container">
    <div class="m-5 p-3 rounded" style="background-color: rgba(0, 0, 0, 0.7);">
        <div class="d-flex py-5 " id="main-content">
            <div class="w-50 sidbar mx-2" id="sidbar">
                <div class="sidbar_inner sticky-top mx-1">
                    <img src="./CP_imgs/<?= $row['d_frame_pic'] ?>" alt="" class="card-img" />
                    <div class="smallpic d-flex mt-3 ">
                        <div class=" pic ">
                            <img src="./CP_imgs/<?= $row['pic_name1'] ?>" alt="" class="card-img" />
                        </div>
                        <div class="pic mx-2 ">
                            <img src="./CP_imgs/<?= $row['pic_name2'] ?>" alt="" class="card-img" />
                        </div>
                        <div class="pic ">
                            <img src="./CP_imgs/<?= $row['pic_name3'] ?>" alt="" class="card-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-grow-1">
                <div class="discribe">
                    <h6 class="text-secondary border-secondary pb-2 border-bottom mt-5">
                        商品名稱
                    </h6>
                    <h3 class="my-3 mx-1 text-white">
                        <?= $row['name'] ?>

                    </h3>
                    <h6 class="text-secondary mb-5 mx-1">
                        <?= $row['p_code'], $row['c_code'] ?>

                    </h6>

                    <h6 class="border-bottom border-secondary pb-2 text-secondary mt-5">
                        商品描述
                    </h6>
                    <div class="intro mb-2 rounded-2 w-50">
                        <pre class="mx-3 text-white-50"><?= $row['introduction'] ?></pre>
                    </div>
                    <h6 class="border-bottom border-secondary pb-2 text-secondary mt-5">
                        顏色
                    </h6>
                    <div class="color_box mt-3">

                        <div class="color_card d-flex w-100">
                            <?php foreach ($rows as $k => $r) : ?>
                                <div class="btn btn-outline-primary w-100 mx-1 ">
                                    <a href="CP_f_detail.php?sid= <?= $sid ?>&page=<?= $k ?>" class=" text-decoration-none">
                                        <div class="rounded-circle m-auto" style="
                                                width: 30px;
                                                height: 30px;
                                                background-color: <?= $r['color_code'] ?>;
                                                
                                            "></div>
                                        <h5 class="text-secondary text-center mt-2">
                                            <?= $r['color'] ?>
                                        </h5>
                                    </a>
                                </div>
                            <?php endforeach; ?>
                        </div>

                    </div>
                    <h6 class="border-bottom border-secondary pb-2 text-secondary mt-5">
                        圖案
                    </h6>
                    <div class="ink_box mt-3">

                        <div class="ink_card d-flex flex-wrap w-100">

                            <?php foreach ($ink as $i) : ?>
                                <div class="btn btn-outline-primary w-25 px-1">
                                    <div class="m-auto d-flex " style="
                                                width: 50px;
                                                height: 50px;
                                                
                                            ">
                                        <i class="fa-solid fa-<?= $i ?> m-auto"></i>
                                    </div>
                                    <h5 class=" text-center my-0 ">
                                        <?= $i ?>
                                    </h5>
                                    <p class="text-secondary text-center">
                                        + NT. <?= $row['ink_price'] ?>

                                    </p>
                                </div>
                            <?php endforeach; ?>

                        </div>
                    </div>
                    <h6 class="border-bottom border-secondary pb-2 text-secondary mt-5">
                        字型
                    </h6>
                    <div class="font_box mt-3">

                        <div class="font_card d-flex w-100">
                            <div class="btn btn-outline-primary w-100 mx-1">
                                <h3 class="m-auto mt-3 " style="font-family: <?= $row['font_style1'] ?>,<?= $row['font_type1'] ?>">
                                    <?= $row['word'] ?>
                                </h3>
                                <p class="text-center text-secondary mb-0">
                                    <?= $row['font_style1'] ?>
                                </p>
                                <p class="text-secondary m-0 p-0">
                                    + NT. <?= $row['font_price'] ?>
                                </p>
                            </div>
                            <div class="btn btn-outline-primary w-100 mx-1">
                                <h3 class="m-auto mt-3 " style="font-family: <?= $row['font_style2'] ?>,<?= $row['font_type2'] ?>">
                                    <?= $row['word'] ?>
                                </h3>
                                <p class="text-center text-secondary mb-0">
                                    <?= $row['font_style2'] ?>
                                </p>
                                <p class="text-secondary m-0 p-0">
                                    + NT. <?= $row['font_price'] ?>
                                </p>
                            </div>
                            <div class="btn btn-outline-primary w-100 mx-1">
                                <h3 class="m-auto mt-3 " style="font-family: <?= $row['font_style3'] ?>,<?= $row['font_type3'] ?>">
                                    <?= $row['word'] ?>
                                </h3>
                                <p class="text-center  text-secondary mb-0">
                                    <?= $row['font_style3'] ?>
                                </p>
                                <p class="text-secondary m-0 p-0">
                                    + NT. <?= $row['font_price'] ?>
                                </p>
                            </div>


                        </div>
                    </div>

                    <h6 class="border-bottom border-secondary pb-2 text-secondary mt-5">
                        價格
                    </h6>

                    <h2 class="mt-3 fw-bold text-white">
                        NT <?= $row['price'] ?>
                    </h2>
                    <br /><br /><br />
                    <h6 class="border-bottom border-secondary pb-2 text-secondary mt-2">數量</h6>
                    <input type="number" class="form-control" />
                    <p class="text-secondary">
                        尚餘
                        <span>

                            <?= $row['stock'] ?>
                        </span>個
                    </p>

                    <button type="button" class="btn btn-primary mt-2">
                        +加入購物車
                    </button>

                </div>
            </div>
        </div>
        <div class="back text-center">
            <button type="button" class=" btn mt-2 btn-outline-primary">
                <a href="CP_f_product.php" class=" text-decoration-none">
                    <i class="fa-solid fa-arrow-left"></i>返回
                </a>
            </button>
        </div>
    </div>


    <?php include __DIR__ . '/c_part/c_scripts.php' ?>

    <?php include __DIR__ . '/c_part/c_foot.php' ?>