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
$font1 = [$row['font_style1'], $row['font_type1']];
$font2 = [$row['font_style2'], $row['font_type2']];
$font3 = [$row['font_style3'], $row['font_type3']];
$fontAll = [$font1, $font2, $font3];

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

    .btn:hover p {
        color: #000;
    }

    .btn p {
        color: #9b9b9b;
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
                <div class="discribe mx-1">
                    <h6 class="text-secondary border-secondary pb-2 border-bottom mt-5 ">
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
                                <button class="btn btn-outline-primary w-100 mx-1 rounded-pill">
                                    <a href="CP_f_detail.php?sid= <?= $sid ?>&page=<?= $k ?>" class=" text-decoration-none">
                                        <div class="rounded-circle m-auto mt-2" style="
                                                width: 30px;
                                                height: 30px;
                                                background-color: <?= $r['color_code'] ?>;
                                                
                                            "></div>
                                        <p class=" text-center mt-2 mb-0">
                                            <?= $r['color'] ?>
                                        </p>
                                    </a>
                                </button>
                            <?php endforeach; ?>
                        </div>

                    </div>
                    <div class="ink">
                        <h6 class="border-bottom border-secondary pb-2 text-secondary mt-5">
                            圖案
                        </h6>
                        <div class="ink_box mt-3">
                            <div class="ink_card d-flex w-100">
                                <?php foreach ($ink as $i) : ?>
                                    <button class="btn btn-outline-primary w-100 mx-1 rounded-pill">
                                        <div class="m-auto d-flex mt-2" style="
                                                    width: 30px;
                                                    height: 30px;
                        
                                                ">
                                            <i class="fa-solid fa-<?= $i ?> m-auto"></i>
                                        </div>
                                        <h6 class=" text-center my-0 ">
                                            <?= $i ?>
                                        </h6>
                                        <p class=" text-center mt-2 mb-1 ">
                                            + NT. <?= $row['ink_price'] ?>
                                        </p>
                                    </button>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                    <div class="font">
                        <h6 class="border-bottom border-secondary pb-2 text-secondary mt-5">
                            字型
                        </h6>
                        <div class="font_box mt-3">
                            <div class="font_card d-flex w-100">
                                <?php foreach ($fontAll as $f) : ?>
                                    <button class="btn btn-outline-primary w-100 mx-1 rounded-pill">
                                        <h5 class="m-auto mt-2 " style="font-family: <?= $f[0] ?>,<?= $f[1] ?>">
                                            <?= $row['word'] ?>
                                        </h5>
                                        <p class="text-center  mt-2 mb-0">
                                            <?= $f[0] ?>
                                        </p>
                                        <p class=" mb-1">
                                            + NT. <?= $row['font_price'] ?>
                                        </p>
                                    </button>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                    <h6 class="border-bottom border-secondary pb-2 text-secondary mt-5">
                        價格
                    </h6>

                    <h2 class="mt-3 mb-3 fw-bold text-white">
                        NT <?= $row['price'] ?>
                    </h2>

                    <h6 class="border-bottom border-secondary pb-2 text-secondary mt-5">數量</h6>
                    <input type="number" class="form-control" />
                    <p class="">
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
            <a href="CP_f_product.php" class=" text-decoration-none">
                <button type="button" class=" btn mt-2 btn-outline-primary">

                    <i class="fa-solid fa-arrow-left"></i>返回

                </button>
            </a>
        </div>
    </div>


    <?php include __DIR__ . '/c_part/c_scripts.php' ?>
    <script>
        // 判斷是否有該客製化內容
        const ink = document.querySelector('.ink');
        const font = document.querySelector('.font');
        const c2 = <?= json_encode($row['customize2'], JSON_UNESCAPED_UNICODE); ?>;
        const c3 = <?= json_encode($row['customize3'], JSON_UNESCAPED_UNICODE); ?>;
        // 如果沒有就不要顯示
        if (c2 == "") {
            ink.style.display = 'none';
        }
        if (c3 == "") {
            font.style.display = 'none';
        }
    </script>
    <?php include __DIR__ . '/c_part/c_foot.php' ?>