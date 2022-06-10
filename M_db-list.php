<?php
require __DIR__ . '/part/connect_db.php';
$pageName = 'db-list';
$title = "通訊錄列表";

$perPage = 10;

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
        header("Location: ?pages=$totalPages");
        exit;
    }

    $sql = sprintf(
        "SELECT * FROM `memberdata` ORDER BY m_id LIMIT %s,%s",
        ($page - 1) * $perPage,
        $perPage
    );

    $rows = $pdo->query($sql)->fetchAll();
}



?>

<?php include __DIR__ . '/part/html-head.php' ?>
<?php include __DIR__ . '/part/navbar.php' ?>


<div class="container">



    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th scope="col"><i class="fa-solid fa-trash-can"></i></th>
                <th scope="col">#</th>
                <th scope="col">姓名</th>
                <th scope="col">手機</th>
                <th scope="col">電郵</th>
                <th scope="col">生日</th>
                <th scope="col">地址</th>
                <th scope="col"><i class="fa-solid fa-pen-to-square"></i></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($rows as $r) : ?>
                <tr>
                    <td>
                        <a href="javascript: delete_it(<?= $r['m_id'] ?>)">
                            <i class="fa-solid fa-trash-can"></i></a>
                    </td>
                    <td><?= $r['m_id'] ?></td>
                    <td><?= $r['m_name'] ?></td>
                    <td><?= $r['m_phone'] ?></td>
                    <td><?= $r['m_email'] ?></td>
                    <td><?= $r['m_birthday'] ?></td>
                    <td><?= $r['m_address'] ?></td>
                    <td>
                        <a href="db-edit.php?sid=<?= $r['m_id'] ?>">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </a>

                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>

    </table>


    <div class="row">
        <div class="col">
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

</div>
<p><a href="/M_log-out.php">登出</a></p>


<?php include __DIR__ . '/html-scripts.php' ?>
<script>
    // function trashCanCilcked(event) {
    //     console.log(event.target);
    //     const a_tag = event.currentTarget;
    //     const tr = a_tag.closest('tr');
    //     tr.remove();
    // }

    function delete_it(sid) {
        if (confirm(`確定要刪除第${sid}號的資料嗎？`)) { //$是backtik不是php
            location.href = `M_db-delete.php?m_id=${sid}`;
        }
    }
</script>
<?php include __DIR__ . '/part/html-foot.php' ?>