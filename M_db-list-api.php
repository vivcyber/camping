<?php
require __DIR__ . '/part/connect_db.php';
$pageName = 'db-list';
$title = "通訊錄列表";

$perPage = 5;

$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
//如果用戶有用GET method設定頁數，則轉去當前頁數，若輸入數字非整數，則取整數，兩種都否的話，跳轉第一頁

if ($page < 1) {
    header('Location: ? page = 1');
    exit;
}

$t_sql = "SELECT COUNT(*) FROM `memberdata`";
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];


$totalPages = ceil($totalRows / $perPage);


$rows = [];

if ($totalRows > 0) {
    if ($page > $totalPages) {
        // header("Location: ?pages=$totalPages");
        // exit;
        $page = $totalPages;
    }

    $sql = sprintf(
        "SELECT * FROM `memberdata` ORDER BY m_id LIMIT %s,%s",
        ($page - 1) * $perPage,
        $perPage
    );

    $rows = $pdo->query($sql)->fetchAll();
}


$output = [
    'perPage' => $perPage,
    'page' => $page,
    'totalRows' => $totalRows,
    'totalPages' => $totalPages,
    'rows' => $rows,
];

echo json_encode($output, JSON_UNESCAPED_UNICODE);
