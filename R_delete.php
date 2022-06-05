<?php require __DIR__ . '/part/connect_db.php';

$sid = isset($_GET['OrderNum']) ? intval($_GET['OrderNum']) : 0;
if (!empty($sid)) {
    $pdo->query("DELETE FROM `room_order` WHERE OrderNum=$sid");
}

header("Location: R_room_back.php");
