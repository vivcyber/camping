<?php
require __DIR__ . '/part/connect_db.php';
session_start();

$pKeys = array_keys($_SESSION['cart']);

$rows = []; // 預設值
$data_ar = []; // dict


//有登入才能結帳
if (!isset($_SESSION['loginUser'])) {
    header('Location: c_product_2.php');
    exit;
}

if (!empty($pKeys)) {
    $sql = sprintf("SELECT * FROM camproduct2 WHERE sid IN(%s)", implode(',', $pKeys));
    // echo $sql;
    $rows = $pdo->query($sql)->fetchAll();
    $total = 0;
    foreach ($rows as $r) {
        // echo $r['sid'];
        $r['quantity'] = $_SESSION['cart'][$r['sid']];
        $data_ar[$r['sid']] = $r;
        $total += $r['quantity'] * $r['productprice'];
    }
    // foreach ($data_ar as $key => $val) {
    //     foreach ($val as $key2 => $val2) {
    //         echo $val2;
    //     }
    // }
} else {
    header('Location: c_product_2.php');
    exit;
}

$o_sql = "INSERT INTO `orders`(`member_sid`, `amount`, `order_date`) VALUES (?, ?, NOW())";
$o_stmt = $pdo->prepare($o_sql);
$o_stmt->execute([
    $_SESSION['loginUser']['m_id'],
    $total,
]);
$_SESSION['loginUser']['nickname'] = 3;

$order_sid = $pdo->lastInsertId(); // 最近新增資料的 PK

$od_sql = "INSERT INTO `order_details`(`order_sid`, `product_sid`, `productprice`, `quantity`) VALUES (?, ?, ?, ?)";
$od_stmt = $pdo->prepare($od_sql);

foreach ($_SESSION['cart'] as $p_sid => $qty) {
    $od_stmt->execute([
        $order_sid,
        $p_sid,
        $data_ar[$p_sid]['productprice'],
        $qty,
    ]);
}
unset($_SESSION['cart']); // 清除購物車內容


?>
<?php include __DIR__ . '/c_part/c_head.php'; ?>
<?php include __DIR__ . '/c_part/c_nav.php'; ?>
<style>
    body {
        background: url(./imgs/bg/pexels-karolina-grabowska-7291602.jpg);
        background-size: cover;
    }
</style>

<div class="container">

    <div class="main d-flex justify-content-center w-100">
        <div class="card col-6 m-5 p-5 text-center">
            <h4 class="mt-5 text-center">✧✧✧感謝購買✧✧✧ </h4>
            <h5 class="mt-3 text-center">您的訂單編號為</h5>
            <h1 class="fs-1 text-success text-center mb-5"><?= $order_sid ?></h1>
            <a href="sc_order_detail.php" class=" m-2 mt-5 btn btn-primary">查看訂購紀錄</a>
            <a href="index_.php" class="m-2 btn btn-outline-primary">回到首頁</a>
        </div>
    </div>

</div>
<?php include __DIR__ . '/c_part/c_scripts.php'; ?>

<?php include __DIR__ . '/c_part/c_foot.php'; ?>