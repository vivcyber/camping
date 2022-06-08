<?php include __DIR__ . "/part/connect_db.php";

$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;
if (!empty($sid)) {
    $pdo->query("DELETE cp.*, d.*, p.*
    FROM `customize_product` cp 
    JOIN `details` d
    ON d.product_id = cp.sid
    JOIN picture p
    ON p.product_id = cp.sid
    WHERE cp.sid = $sid");
}

$come_from = 'CP_product_list.php';

if (!empty($_SERVER['HTTP_REFERER'])) {
    $come_from = $_SERVER['HTTP_REFERER'];
}

header("Location: $come_from");
