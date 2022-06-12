<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'j-list';
$title = '商品頁';

$perPage = 5; // 每一頁有幾筆

// 用戶要看第幾頁
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
if ($page < 1) {
    header('Location: ?page=1');
    exit;
}

$t_sql = "SELECT COUNT(1) FROM recipes";
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0]; // 總筆數

$totalPages = ceil($totalRows / $perPage); // 總共有幾頁

$rows = [];

if ($totalRows > 0) {
    // 頁碼若超過總頁數
    if ($page > $totalPages) {
        header("Location: ?page=$totalPages");
        exit;
    }

    $sql = sprintf("SELECT * FROM recipes ORDER BY sid DESC LIMIT %s, %s", ($page - 1) * $perPage, $perPage);
    $rows = $pdo->query($sql)->fetchAll();
}

?>
<?php include __DIR__ . '/part/html-head.php' ?>
<?php include __DIR__ . '/part/navbar.php' ?>

<div class="container p-5 pt-0">
   


   
    <div class="w-100 d-flex justify-content-end">
         <!-- 新增商品按鈕 -->
         <a class="nav-link text-dark p-3" href="j_add.php">
            <i class="fa-solid fa-plus"></i>
             新增食譜
            </a>

         <!-- 前往前台的按鈕 -->
         <a class="nav-link text-dark p-3" href="c_product.php" target="_blank">
         <i class="fa-solid fa-eye"></i>
            View Site
         </a>
    </div>



   <!-- 表單卡片 -->
    <div class="card p-4 ">
    <div class="row">
        <div class="col-4">
            
        </div>
    </div>


    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th scope="col p-3">刪除</i></th>
                <th scope="col p-3">序號</th>
                <th scope="col p-3">食譜名稱</th>
                <th scope="col p-3">所需鍋具</th>
                <th scope="col p-3">食材</th>
                <th scope="col p-3">教學</th>
                <th scope="co p-3l">人數</th>
                <th scope="col p-3">烹煮時間</th>
                <th scope="col p-3">葷素</th>
                <th scope="col p-3">圖片描述</th>
                <th scope="col p-3">圖片</th>
                <th scope="col p-3">修改</i></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($rows as $r) : ?>
                <tr class="p-5">
                    <td class="p-3">
                        <!--?php 
                        <a href="ab-delete.php?sid=<?= $r['sid'] ?>" onclick="return confirm('確定要刪除編號為 <?= $r['sid'] ?> 的資料嗎?')">
                        ?-->

                        <a href="javascript: delete_it(<?= $r['sid'] ?>)">
                            <i class="fa-solid fa-trash-can"></i>
                        </a>
                    </td>
                    <td class="p-3"><?= $r['sid'] ?></td>
                    <td class="p-3"><?= htmlentities($r['resname']) ?></td>
                    <td class="p-3"><?= $r['tool'] ?></td>
                    <td class="p-3"><?= $r['ingredient'] ?></td>
                    <td class="p-3"><?= $r['tutorial'] ?></td>
                    <td class="p-3"><?= $r['serves'] ?></td>
                    <td class="p-3"><?= $r['cook_time'] ?></td>
                    <td class="p-3"><?= $r['recipetype'] ?></td>
                    <td class="p-3"><?= $r['resimgtext'] ?></td>
                    <td class="p-3"><img src="./imgs/recipesimg/<?= $r['resimg'] ?>" alt="" class="card-img" style="width: 150px;"></td>
                    <td class="p-3">
                        <a href="j_edit.php?sid=<?= $r['sid'] ?>">
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
            location.href = `j_delete.php?sid=${sid}`;
        }
    }
</script>

<?php include __DIR__ . '/part/html-foot.php' ?>
