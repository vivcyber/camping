<?php include __DIR__ . "/part/connect_db.php";

$pageName = 'CP-product-detail';
$title = '舒營 - 客製化商品後台首頁';


$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;
if (empty($sid)) {
    header('Location:CP_product_list.php');
    exit;
}




$rows = []; //先建立預設值



$sql = sprintf("SELECT cp.*, d.color ,d.stock , d.c_code, d.d_sid
    FROM `customize_product` cp 
    JOIN `details` d
    ON d.product_id = cp.sid 
    WHERE cp.sid = $sid ");

$sql2 = sprintf("SELECT *
    FROM `customize_product` cp
    WHERE cp.sid = $sid ");

$rows = $pdo->query($sql)->fetchAll();
$row = $pdo->query($sql2)->fetch();
$name = $row['name'] ?? '';
// 把每一頁的資料抓出來放到 rows

?>
<?php include __DIR__ . "/part/html-head.php"; ?>
<?php include __DIR__ . "/part/navbar.php"; ?>
<div class="container w-75">


    <h2 class=" text-center mt-3"><?= $name ?></h2>


    <div class="w-100 d-flex justify-content-end">
        <!-- 新增商品按鈕 -->
        <a class="nav-link text-dark p-3" href="CP_add_detail.php?sid=<?= $sid ?>">
            <i class="fa-solid fa-plus"></i>
            新增商品細項
        </a>

        <!-- 前往前台的按鈕 -->
        <a class="nav-link text-dark p-3" href="CP_f_product.php" target="_blank">
            <i class="fa-solid fa-eye"></i>
            View Site
        </a>
    </div>
    <table class="table table-light table-hover table-bordered">
        <thead>
            <tr class="text-center">
                <!-- 設定標題欄位名稱 -->
                <th scope="col">
                    <i class="fa-solid fa-trash-can"></i>
                </th>

                <th scope="col">#</th>
                <th scope="col">item_code</th>
                <th scope="col">Name</th>
                <th scope="col">Picture</th>
                <th scope="col">Customize</th>
                <th scope="col">Introduction</th>
                <th scope="col">Color</th>
                <th scope="col">stock</th>
                <th scope="col">Price</th>
                <th scope="col">
                    <i class="fa-solid fa-pen-to-square"></i>
                </th>
                <th scope="co p-3l">Details</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($rows as $r) : ?>
                <tr class="text-center">
                    <!-- $r['']要對應到SQL資料庫內的欄位名稱 -->
                    <td scope="col" class="p-3">
                        <a href="javascript: delete_it( <?= $r['d_sid'] ?>)">
                            <i class="fa-solid fa-trash-can"></i>
                        </a>
                    </td>
                    <td class="p-3"><?= $r['sid'] ?></td>
                    <td class="p-3"><?= $r['p_code'], $r['c_code'] ?></td>
                    <td class="p-3">
                        <pre><?= ($r['name']) ?></pre>
                    </td>
                    <td class="p-3" style="height: 200px; width: 200px; "><img src="./CP_imgs/<?= $r['frame_pic'] ?>" alt="" class="card-img img-thumbnail"></td>
                    <td class="p-3">
                        <pre><?= ($r['customize']) ?></pre>
                        <pre><?= ($r['customize2']) ?></pre>
                        <pre><?= ($r['customize3']) ?></pre>
                    </td>
                    <td class="p-3" style="text-align:left">
                        <pre><?= $r['introduction'] ?></pre>
                    </td>
                    <td class="p-3"><?= $r['color'] ?></td>
                    <td class="p-3"><?= $r['stock'] ?></td>
                    <td class="p-3"><?= $r['price'] ?></td>

                    <td scope="col" class="p-3">
                        <a href="CP_edit_detail.php?sid=<?= $sid ?>&d_sid=<?= $r['d_sid'] ?>">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </a>
                    </td>
                    <td class="p-3">
                        <a href="CP_product_detail2.php?sid=<?= $r['sid'] ?>&d_sid= <?= $r['d_sid'] ?>">
                            <i class="fa-solid fa-list"></i>
                        </a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

    <div class="my-2">
        <button type="button" class="btn btn-light">
            <a class="text-decoration-none" href="CP_product_list.php">
                <i class="fa-solid fa-arrow-left"></i> 返回
            </a>
        </button>
    </div>
</div>

<?php include __DIR__ . "/part/scripts.php"; ?>
<script>
    function delete_it(d_sid) {
        if (confirm(`確定要刪除編號${d_sid}的資料?`)) {
            location.href = `CP_delete_detail.php?d_sid=${d_sid}`;
        }
    }
</script>
<?php include __DIR__ . "/part/html-foot.php"; ?>