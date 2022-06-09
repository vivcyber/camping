<?php include __DIR__ . "/part/connect_db.php";
$pageName = 'CP-product-detail2';
$title = '舒營 - 客製化商品後台詳情';

$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;
if (empty($sid)) {
    echo "nononononononsid";
    // header('Location:CP_product_detail.php');
    exit;
}

$d_sid = isset($_GET['d_sid']) ? intval($_GET['d_sid']) : 0;
if (empty($d_sid)) {
    // header('Location:CP_product_detail.php');
    echo "no d_sid";
    exit;
}
$rows = [];
$rows = $pdo->query("SELECT d.* , cp.*
FROM `details` as d
JOIN `customize_product` as cp
ON cp.sid = d.product_id
WHERE d.d_sid = $d_sid;")->fetch();

if (empty($rows)) {
    header('Location:CP_product_detail.php');
    exit;
};


?>

<?php include __DIR__ . '/part/html-head.php' ?>
<?php include __DIR__ . '/part/navbar.php' ?>
<div class="container w-75">
    <div class="intro d-flex">
        <div class="card" style="width: 33%">
            <h5 class="card-header"><?= $rows['name'] ?></h5>
            <div class="card-body">
                <h5 class="card-title"><?= $rows['p_code'],
                                        $rows['c_code'] ?></h5>
                <img src="./CP_imgs/<?= $rows['frame_pic'] ?>" class="card-img-bottom" alt="" />
            </div>
        </div>
        <div class="card" style="width: 33%">
            <h5 class="card-header">Introduction</h5>
            <div class="card-body">
                <div>
                    <pre><?= $rows['introduction'] ?></pre>
                </div>
            </div>
        </div>
        <div class="card" style="width: 33%">
            <h5 class="card-header">Color</h5>
            <div class="card-body">
                <div class="color_box d-flex">

                    <div class="colors img-thumbnail border-2" style="
                                    background-color: <?= $rows['color_code'] ?>;
                                    height: 30px;
                                    width: 30px;
                                "></div>
                </div>
            </div>
        </div>
    </div>
    <div class="other d-flex">
        <div class="card" style="width: 100%">
            <h5 class="card-header">other picture</h5>
            <div class="card-body">
                <div class="img_box d-flex">

                    <div class="img" style="width: 33%;">
                        <img src="./CP_imgs/<?= $rows['pic_name1'] ?>" class="card-img-top" alt="" width="100%" />
                    </div>
                    <div class="img" style="width: 33%;">
                        <img src="./CP_imgs/<?= $rows['pic_name2'] ?>" class="card-img-top" alt="" width="100%" />
                    </div>
                    <div class="img" style="width: 33%;">
                        <img src="./CP_imgs/<?= $rows['pic_name3'] ?>" class="card-img-top" alt="" width="100%" />
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="ink d-flex">
        <div class="card" style="width: 100%">
            <h5 class="card-header">圖案</h5>
            <div class="card-body">
                <div class="ink_box d-flex">

                    <div class="inkbox" style="width: 25%">
                        <h5 class="card-title"><?= $rows['ink1'] ?></h5>
                        <i class="fa-solid fa-<?= $rows['ink1'] ?>"></i>
                    </div>
                    <div class="inkbox" style="width: 25%">
                        <h5 class="card-title"><?= $rows['ink2'] ?></h5>
                        <i class="fa-solid fa-<?= $rows['ink2'] ?>"></i>
                    </div>
                    <div class="inkbox" style="width: 25%">
                        <h5 class="card-title"><?= $rows['ink3'] ?></h5>
                        <i class="fa-solid fa-<?= $rows['ink3'] ?>"></i>
                    </div>
                    <div class="inkbox" style="width: 25%">
                        <h5 class="card-title"><?= $rows['ink4'] ?></h5>
                        <i class="fa-solid fa-<?= $rows['ink4'] ?>"></i>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="font d-flex">
        <div class="card" style="width: 100%">
            <h5 class="card-header">字體</h5>
            <div class="card-body">
                <div class="img_box d-flex">

                    <div class="fontbox" style="width: 25%">
                        <h5 style="font-family: '<?= $rows['font_style1'] ?>', <?= $rows['font_type1'] ?>"><?= $rows['word'] ?></h5>
                    </div>
                    <div class="fontbox" style="width: 25%">
                        <h5 style="font-family: '<?= $rows['font_style2'] ?>', <?= $rows['font_type2'] ?>"><?= $rows['word'] ?></h5>
                    </div>
                    <div class="fontbox" style="width: 25%">
                        <h5 style="font-family: '<?= $rows['font_style3'] ?>', <?= $rows['font_type3'] ?>"><?= $rows['word'] ?></h5>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="price d-flex">
        <div class="card" style="width: 33%">
            <div class="card-body">
                <h5 class="card-title">價格</h5>
                <div>
                    <pre>Product:<?= $rows['price'] ?></pre>
                    <pre>Font:<?= $rows['font_price'] ?></pre>
                    <pre>Ink:<?= $rows['ink_price'] ?></pre>
                    <pre>Total:<?= $rows['price'] + $rows['font_price'] + $rows['ink_price'] ?></pre>
                </div>
            </div>
        </div>
        <div class="card" style="width: 33%">
            <div class="card-body">
                <h5 class="card-title">庫存</h5>
                <div>
                    <pre><?= $rows['stock'] ?></pre>
                </div>
            </div>
        </div>
    </div>
    <div class="my-5">
        <button type="button" class="btn btn-light">
            <a class="text-decoration-none" href="CP_product_detail.php?sid=<?= $sid ?>">
                <i class="fa-solid fa-arrow-left"></i> 返回
            </a>
        </button>
    </div>
    <?php include __DIR__ . '/part/scripts.php' ?>

    <?php include __DIR__ . '/part/html-foot.php' ?>