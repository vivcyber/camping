<?php require __DIR__ . '/part/connect_db.php';

$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;
if (!empty($sid)) {
    $pdo->query("DELETE FROM `recipes` WHERE sid=$sid");
}

header("Location: j_list.php");
