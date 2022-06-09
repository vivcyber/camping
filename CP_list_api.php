<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'CP_list_api';
$title = '舒營 - 列表api ';

$perPage = 20; // 每一頁有幾筆

// 用戶要看第幾頁
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
if ($page < 1) {
    header('Location: ?page=1');
    exit;
}

$t_sql = "SELECT COUNT(1) FROM address_book";
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0]; // 總筆數

$totalPages = ceil($totalRows / $perPage); // 總共有幾頁

$rows = [];

if ($totalRows > 0) {
    // 頁碼若超過總頁數
    if ($page > $totalPages) {
        header("Location: ?page=$totalPages");
        exit;
    }

    $sql = sprintf("SELECT cp.`sid`, cp.`name`,cp.`customize`,cp.`customize2`,cp.`customize3`, pc.pic_name, cp.introduction , cp.price FROM `customize_product` cp JOIN `picture` pc ON pc.product_id = cp.sid LIMIT %s, %s", ($page - 1) * $perPage, $perPage);
    // 第一個 %s 代表從索引第幾筆資料開始顯示
    // 第二個 %s 代表一頁顯示有幾筆資料
    $rows = $pdo->query($sql)->fetchAll();
    // 把每一頁的資料抓出來放到 rows
}

$output = [
    'perPage' => $perPage,
    'page' => $page,
    'totalRows' => $totalRows,
    'totalPages' => $totalPages,
    'rows' => $rows,
];

echo json_encode($output, JSON_UNESCAPED_UNICODE);
