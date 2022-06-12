<?php include __DIR__ . "/part/connect_db.php";

$pageName = 'CP-product-list';
$title = '舒營 - 客製化商品後台首頁';
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
// 從資料庫中會得到 $_GET['page']這個值
// 如果沒有則預設 $page = 1 
// intval()轉換成整數


// 無論如何都會回到page=1;

$perPage = 5; // 每一頁有幾筆

$t_sql = "SELECT count(1) FROM customize_product"; //計算總筆數
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0]; //總筆數
// 當你用 FETCH_NUM 時會產生一個索引式陣列 
// 而計算總筆數的資料只有一個 所以用fetch(PDO::FETCH_NUM)[0] 就可以取得總筆數的資料

$totalPages = ceil($totalRows / $perPage); //總共有幾頁
//ceil() -> 向上取整數值

$rows = []; //先建立預設值

// 當頁數<1時
if ($page < 1) {
    header('Location: ?page=1');
    // 標頭指向page=1 ,回到 page=1
    exit;
}
// 如果資料數不為零
if ($totalRows > 0) {
    // 當頁碼若超過總頁數時
    if ($page > $totalPages) {
        header("Location: ?page=$totalPages");
        // 標題指向 totalPages ,回到 totalPages
        exit;
    }
    $sql = sprintf("SELECT cp.*
    FROM `customize_product` cp 
    LIMIT %s, %s", ($page - 1) * $perPage, $perPage);
    // 第一個 %s 代表從索引第幾筆資料開始顯示
    // 第二個 %s 代表一頁顯示有幾筆資料
    $rows = $pdo->query($sql)->fetchAll();
    // 把每一頁的資料抓出來放到 rows
}
?>
<?php include __DIR__ . "/part/html-head.php"; ?>
<?php include __DIR__ . "/part/navbar.php"; ?>
<div class="container w-75">
    <h2 class=" text-center mt-3">舒營 (SHU-IN)</h2>
    <div class="w-100 d-flex justify-content-end">
        <!-- 新增商品按鈕 -->
        <a class="nav-link text-dark p-3" href="CP_add.php">
            <i class="fa-solid fa-plus"></i>
            新增商品
        </a>

        <!-- 前往前台的按鈕 -->
        <a class="nav-link text-dark p-3" href="CP_f_product.php" target="_blank">
            <i class="fa-solid fa-eye"></i>
            View Site
        </a>
    </div>
    <table class="table table-light table-hover table-bordered ">
        <thead>
            <tr class="text-center">
                <!-- 設定標題欄位名稱 -->
                <th scope="col">
                    <i class="fa-solid fa-trash-can"></i>
                </th>

                <th scope="col">#</th>
                <th scope="col">item_code</th>
                <th scope="col">Name</th>
                <th scope="col">Picture</th>
                <th scope="col">Customize</th>
                <th scope="col">Introduction</th>
                <th scope="col">Price</th>
                <th scope="col">
                    <i class="fa-solid fa-pen-to-square"></i>
                </th>
                <th scope="co p-3l">Details</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($rows as $r) : ?>
                <tr style="text-align:center">
                    <!-- $r['']要對應到SQL資料庫內的欄位名稱 -->
                    <td scope="col" class="p-3">
                        <a href="javascript: delete_it(<?= $r['sid'] ?>)">
                            <i class="fa-solid fa-trash-can"></i>
                        </a>
                    </td>
                    <td class="p-3"><?= $r['sid'] ?></td>
                    <td class="p-3"><?= $r['p_code'] ?></td>
                    <td class="p-3">
                        <pre><?= ($r['name']) ?></pre>
                    </td>
                    <td class="p-3" style="height: 200px; width: 200px; "><img src="./CP_imgs/<?= $r['frame_pic'] ?>" alt="" class="card-img img-thumbnail"></td>
                    <td class="p-3">
                        <pre><?= ($r['customize']) ?></pre>
                        <pre><?= ($r['customize2']) ?></pre>
                        <pre><?= ($r['customize3']) ?></pre>
                    </td>
                    <td class="p-3" style="text-align:left">
                        <pre><?= $r['introduction'] ?></pre>
                    </td>
                    <td class="p-3"><?= $r['price'] ?></td>

                    <td scope="col" class="p-3">
                        <a href="CP_edit.php?sid=<?= $r['sid'] ?>">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </a>
                    </td>
                    <td class="p-3">
                        <a href="CP_product_detail.php?sid=<?= $r['sid'] ?>">
                            <i class="fa-solid fa-list"></i>
                        </a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <!-- 製作回到第一頁的按鈕 -->
            <li class="page-item <?= $page == 1 ? 'disabled' : '' ?>">
                <a class="page-link" href="?page=1">
                    <i class="fa-solid fa-backward-fast"></i>
                </a>
            </li>

            <!-- 判斷當前頁數已經為第一頁時，新增 disabled 這個class 讓Previous按鈕失去功能 -->
            <li class="page-item <?= $page == 1 ? 'disabled' : '' ?>">
                <a class="page-link" href="?page=<?= $page - 1 ?>">
                    <i class="fa-solid fa-caret-left"></i>
                </a>
            </li>
            <!-- 為了讓按鈕保持最多正負5顆的寫法 -->
            <?php for ($i = $page - 5; $i <= $page + 5; $i++) : ?>
                <?php if ($i > 0 and $i <= $totalPages) : ?>
                    <!-- 判斷當前頁數時，新增active這個class，讓所選按鈕反白 -->
                    <li class="page-item<?= $page == $i ? 'active' : '' ?>">
                        <a class="page-link" href="?page=<?= $i ?>"><?= $i ?></a>
                    </li>
            <?php endif;
            endfor; ?>

            <!-- 判斷當前頁數已經為最後一頁時，新增 disabled 這個class 讓Next按鈕失去功能 -->
            <li class="page-item <?= $page == $totalPages ? 'disabled' : '' ?>">
                <a class="page-link" href="?page=<?= $page + 1 ?>">
                    <i class="fa-solid fa-caret-right"></i>
                </a>
            </li>
            <!-- 製作到最後一頁的按鈕 -->
            <li class="page-item <?= $page == $totalPages ? 'disabled' : '' ?>">
                <a class="page-link" href="?page=<?= $totalPages ?>">
                    <i class="fa-solid fa-forward-fast"></i>
                </a>
            </li>
        </ul>
    </nav>

</div>

<?php include __DIR__ . "/part/scripts.php"; ?>
<script>
    function delete_it(sid) {
        if (confirm(`確定要刪除編號${sid}的資料?`)) {
            location.href = `CP_delete.php?sid=${sid}`;
        }
    }
</script>
<?php include __DIR__ . "/part/html-foot.php"; ?>