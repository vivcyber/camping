<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'activities_list';
$title = '活動加購';

$perPage = 1; // 每一頁有幾筆

// 用戶要看第幾頁
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
if ($page < 1) {
    header('Location: ?page=1');
    exit;
}

$t_sql = "SELECT COUNT(1) FROM activities";
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0]; // 總筆數

$totalPages = ceil($totalRows / $perPage); // 總共有幾頁

$rows = [];

if ($totalRows > 0) {
    // 頁碼若超過總頁數
    if ($page > $totalPages) {
        header("Location: ?page=$totalPages");
        exit;
    }

    $sql = sprintf("SELECT * FROM activities ORDER BY sid DESC LIMIT %s, %s", ($page - 1) * $perPage, $perPage);
    $rows = $pdo->query($sql)->fetchAll();
}

?>
<?php include __DIR__ . '/part/html-head.php' ?>
<?php include __DIR__ . '/part/navbar.php' ?>

<div class="container">

    <div class="w-100 d-flex justify-content-end">
         <!-- 新增商品按鈕 -->
         <a class="nav-link text-dark p-3" href="index_.php">
            <i class="fa-solid fa-plus"></i>
             新增商品
            </a>

         <!-- 前往前台的按鈕 -->
         <a class="nav-link text-dark p-3" href="c_index.php" target="_blank">
         <i class="fa-solid fa-eye"></i>
            View Site
         </a>
     </div>



    <div class="card p-5">
    <div class="row">
        <div class="col-6">
            
        </div>
    </div>


    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th scope="col"><i class="fa-solid fa-trash-can"></i></th>
                <th scope="col">#</th>
                <th scope="col">活動名稱</th>
                <th scope="col">活動價格</th>
                <th scope="col"></th>活動描述</th>
                <th scope="col">活動行程</th>
                <th scope="col">注意事項</th>
                <th scope="col">活動時間</th>
                <th scope="col"><i class="fa-solid fa-pen-to-square"></i></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($rows as $r) : ?>
                <tr>
                    <td>
                    <?php /*
                        <a href="ab-delete.php?sid=<?= $r['sid'] ?>" onclick="return confirm('確定要刪除編號為 <?= $r['sid'] ?> 的資料嗎?')">
                        */ ?>

                        <a href="javascript: delete_it(<?= $r['sid'] ?>)">
                            <i class="fa-solid fa-trash-can"></i>
                        </a>
                    </td>
                    <td><?= $r['sid'] ?></td>
                    <td><?= htmlentities($r['ac_name']) ?></td>
                    <td><?= $r['ac_price'] ?></td>
                    <td><?= $r['ac_info'] ?></td>
                    <td><?= $r['ac_schdule'] ?></td>
                    <td><?= $r['ac_notice'] ?></td>
                    <td><?= $r['ac_time'] ?></td>
                    <td>
                        <a href="ad_edit.php?sid=<?= $r['sid'] ?>">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>

    </table>
    <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item <?= $page == 1 ? 'disabled' : '' ?>">
                        <a class="page-link" href="?page=1">
                            <i class="fa-solid fa-angles-left"></i>
                        </a>
                    </li>
                    <li class="page-item <?= $page == 1 ? 'disabled' : '' ?>">
                        <a class="page-link" href="?page=<?= $page - 1 ?>">
                            <i class="fa-solid fa-angle-left"></i>
                        </a>
                    </li>
                    <?php for ($i = $page - 5; $i <= $page + 5; $i++) :
                        if ($i >= 1 and $i <= $totalPages) :
                    ?>
                            <li class="page-item <?= $page == $i ? 'active' : '' ?>">
                                <a class="page-link" href="?page=<?= $i ?>"><?= $i ?></a>
                            </li>
                    <?php endif;
                    endfor; ?>
                    <li class="page-item <?= $page == $totalPages ? 'disabled' : '' ?>">
                        <a class="page-link" href="?page=<?= $page + 1 ?>">
                            <i class="fa-solid fa-angle-right"></i>
                        </a>
                    </li>
                    <li class="page-item <?= $page == $totalPages ? 'disabled' : '' ?>">
                        <a class="page-link" href="?page=<?= $totalPages ?>">
                            <i class="fa-solid fa-angles-right"></i>
                        </a>
                    </li>
                </ul>
            </nav>

    </div>


</div>




<?php include __DIR__ . '/part/scripts.php' ?>

<script>
    function delete_it(sid) {
        if (confirm(`確定要刪除編號為 ${sid} 的資料嗎?`)) {
            location.href = `ad_delete.php?sid=${sid}`;
        }
    }
</script>

<?php include __DIR__ . '/part/html-foot.php' ?>
