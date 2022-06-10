<?php require __DIR__ . '/part/connect_db.php';

$title = "通訊錄列表";


$sid = isset($_GET['m_id']) ? intval($_GET['m_id']) : 0;



if (!empty($sid)) {
    $pdo->query("DELETE FROM `memberdata` WHERE `m_id`=$sid");
}


$come_from = '/M_member-list.php';
if (!empty($_SERVER['HTTP_REFERER'])) {
    $come_from = $_SERVER['HTTP_REFERER'];
}

// header("Location: $come_from");

$output = [
    'success' => true,
    'error' => ''
];

echo json_encode($output, JSON_UNESCAPED_UNICODE);
