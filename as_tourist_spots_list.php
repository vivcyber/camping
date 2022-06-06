<?php require __DIR__ . '/parts/connect_db.php';
$pageName = 'as_tourist_spots_list';
$title = '周圍景點列表 - 舒營';


$perPage = 5; 


$page = isset($_GET['page']) ? intval($_GET['page']) : 1;

if ($page < 1) {
    header('Location: ?page=1');
    exit;
}

$t_sql = "SELECT COUNT(1) FROM tourist_spot";
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];


$totalPages = ceil($totalRows / $perPage); 

$rows = []; 
if ($totalRows > 0) {
    if ($page > $totalPages) {
        header("Location: ?page=$totalPages");
        exit;
    }

    $sql = sprintf("SELECT * FROM tourist_spot LIMIT %s,%s", ($page - 1) * $perPage, $perPage);

    $rows = $pdo->query($sql)->fetchAll();
}


?>

<?php include __DIR__ . '/parts/html-head.php' ?>
<?php include __DIR__ . '/parts/navbar.php' ?>


<div class="container p-5 pt-0">

    <div class="w-100 d-flex justify-content-end">
        <a class="nav-link text-dark p-3" href="as_tourist_spots_add.php">
            <i class="fa-solid fa-plus">
                新增景點
            </i>
        </a>
        <a class="nav-link text-dark p-3" href="as_tourist_spots_page.php" target="_blank">
            <i class="fa-solid fa-eye"></i>
            View Site
        </a>
    </div>
    <div class="card p-4">
        <div class="row">
            <div class="col-4">

            </div>
        </div>


        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th scope="col p-3">序號</th>
                    <th scope="col p-3">圖片</th>
                    <th scope="col p-3">地區</th>
                    <th scope="col p-3">名稱</th>
                    <th style="display: none" scope="col p-3">類型</th>
                    <th scope="col p-3">開放時間</th>
                    <th style="display: none" scope="col p-3">休館日</th>
                    <th style="display: none" scope="col p-3">電話</th>
                    <th style="display: none" scope="col p-3">地址</th>
                    <th style="display: none" scope="col p-3">描述</th>
                    <th style="display: none" scope="col p-3">活動網址</th>
                    <th style="display: none" scope="col p-3">有無活動</th>
                    <th scope="col p-3"><i class="fa-solid fa-trash-can"></i></th>
                    <th scope="col p-3"><i class="fa-solid fa-pen-to-square"></i></th>
                    <th scope="col p-3"> <i class="fa-solid fa-list"></i></th>

                </tr>
            </thead>
            <tbody>
                <?php foreach ($rows as $r) : ?>
                    <tr class="p-5">

                        <td class="p-3"><?= $r['sid'] ?></td>
                        <td class="p-3"><img src="./uploaded/<?= $r['pic'] ?>" alt="" class="card-img" style="width:100px"></td>
                        <td class="p-3"><?= htmlentities($r['area']) ?></td>
                        <td class="p-3"><?= htmlentities($r['name']) ?></td>
                        <td style="display: none" class="p-3"><?= htmlentities($r['type']) ?></td>
                        <td><?= htmlentities($r['open_time']) ?></td>
                        <td style="display: none" class="p-3"><?= htmlentities($r['close_day']) ?></td>
                        <td style="display: none" class="p-3"><?= htmlentities($r['tel']) ?></td>
                        <td style="display: none" class="p-3 size"><?= htmlentities($r['address']) ?></td>
                        <td style="display: none" class="p-3"><?= htmlentities($r['description']) ?></td>
                        <td style="display: none" class="p-3"><?= htmlentities($r['event_site']) ?></td>
                        <td style="display: none" class="p-3"><?= htmlentities($r['event_situation']) ?></td>
                        <td class="p-3">
                            <a href="javascript: delete_it(<?= $r['sid'] ?>)">
                                <i class="fa-solid fa-trash-can"></i>
                            </a>
                        </td>
                        <td class="p-3">
                            <a href="as_tourist_spots_edit.php?sid=<?= $r['sid'] ?>">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </a>
                        </td>
                        <td class="p-3">
                            <a href="as_tourist_spots_detail.php?sid=<?= $r['sid'] ?>">
                                <i class="fa-solid fa-list"></i>
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
                <?php for ($i = $page - 2; $i <= $page + 2; $i++) :
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
        </nav>
    </div>
</div>


</div>
</div>

<?php include __DIR__ . '/parts/scripts.php' ?>
<script>
    function delete_it(sid) {
        if (confirm(`確定要刪除編號為 ${sid} 的資料嗎?`)) {
            location.href = `as_tourist_spots_delete.php?sid=${sid}`;
        }
    }
</script>
<?php include __DIR__ . '/parts/html-foot.php' ?>