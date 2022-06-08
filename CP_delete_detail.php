<?php include __DIR__ . "/part/connect_db.php";

$d_sid = isset($_GET['d_sid']) ? intval($_GET['d_sid']) : 0;
if (!empty($d_sid)) {
    $pdo->query("DELETE d.*
    FROM `details` d
    WHERE d.d_sid = $d_sid");
}

$come_from = 'CP_product_detail.php';

if (!empty($_SERVER['HTTP_REFERER'])) {
    $come_from = $_SERVER['HTTP_REFERER'];
}

header("Location: $come_from");
