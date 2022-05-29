<?php require __DIR__ . '/part/connect_db.php';

$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;
if (!empty($sid)) {
    $pdo->query("DELETE FROM `camproduct2` WHERE sid=$sid");
}

header("Location: p_list.php");
