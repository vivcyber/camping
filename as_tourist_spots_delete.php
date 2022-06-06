<?php require __DIR__ . '/part/connect_db.php';

$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;

if (!empty($sid)) {
    $pdo->query("DELETE FROM `tourist_spot` WHERE sid=$sid");
}


$come_from = 'as_tourist_spots_list.php';
if (!empty($_SEVER['HTTP_REFERER'])) {
    $come_from = $_SERVER['HTTP_REFERER'];
}


header("Location: as_tourist_spots_list.php");

