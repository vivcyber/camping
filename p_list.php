<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'p-list';
$title = '商品頁';

$perPage = 3; // 每一頁有幾筆

// 用戶要看第幾頁
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
if ($page < 1) {
    header('Location: ?page=1');
    exit;
}

$t_sql = "SELECT COUNT(1) FROM camproduct2";
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0]; // 總筆數

$totalPages = ceil($totalRows / $perPage); // 總共有幾頁

$rows = [];

if ($totalRows > 0) {
    // 頁碼若超過總頁數
    if ($page > $totalPages) {
        header("Location: ?page=$totalPages");
        exit;
    }

    $sql = sprintf("SELECT * FROM camproduct2 ORDER BY sid DESC LIMIT %s, %s", ($page - 1) * $perPage, $perPage);
    $rows = $pdo->query($sql)->fetchAll();
}

?>
<?php include __DIR__ . '/part/html-head.php' ?>
<?php include __DIR__ . '/part/navbar.php' ?>

<div class="container p-5 pt-0">
   


   
    <div class="w-100 d-flex justify-content-end">
         <!-- 新增商品按鈕 -->
         <a class="nav-link text-dark p-3" href="p_add_b.php">
            <i class="fa-solid fa-plus"></i>
             新增商品
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
                <th scope="col p-3"><i class="fa-solid fa-trash-can"></i></th>
                <th scope="col p-3">#</th>
                <th scope="col p-3">產品名稱</th>
                <th scope="col p-3">產品封面</th>
                <th scope="col p-3">分類</th>
                <th scope="col p-3">顏色</th>
                <th scope="co p-3l">產品詳情</th>
                <th scope="col p-3">價格</th>
                <th scope="col p-3">庫存</th>
                <th style="display: none" scope="col p-3">規格</th>   
                <th style="display: none" scope="col p-3">包含</th>
                <th style="display: none" scope="col p-3">詳情圖</th>
                <th style="display: none" scope="col p-3">詳情圖2</th>
                <th scope="col p-3"><i class="fa-solid fa-pen-to-square"></i></th>
                <th scope="col p-3"> <i class="fa-solid fa-list"></i></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($rows as $r) : ?>
                <tr class="p-5">
                    <td class="p-3">
                    <?php /*
                        <a href="ab-delete.php?sid=<?= $r['sid'] ?>" onclick="return confirm('確定要刪除編號為 <?= $r['sid'] ?> 的資料嗎?')">
                        */ ?>

                        <a href="javascript: delete_it(<?= $r['sid'] ?>)">
                            <i class="fa-solid fa-trash-can"></i>
                        </a>
                    </td>
                    <td class="p-3"><?= $r['sid'] ?></td>
                    <td class="p-3"><?= htmlentities($r['productname']) ?></td>
                    <td class="p-3"><img src="./imgs/product/<?= $r['productimg'] ?>" alt="" class="card-img"></td>
                    <td class="p-3"><?= $r['productcategory'] ?></td>
                    <td class="p-3"><?= $r['productcolor'] ?></td>
                    <td class="p-3"><?= $r['productinfo'] ?></td>
                    <td class="p-3"><?= $r['productprice'] ?></td>
                    <td class="p-3"><?= $r['productleft'] ?></td>
                    <td style="display: none" class="p-3"><?= $r['productspec'] ?></td>
                    <td style="display: none" class="p-3"><?= $r['productinclude'] ?></td>
                    <td style="display: none" class="p-3"><img src="./imgs/product/<?= $r['productimg2'] ?>" alt="" class="card-img"></td>
                    <td style="display: none" class="p-3"><img src="./imgs/product/<?= $r['productimg3'] ?>" alt="" class="card-img"></td>
                    <td class="p-3">
                        <a href="p_edit.php?sid=<?= $r['sid'] ?>">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </a>
                    </td>
                    <td class="p-3">
                        <a  href="p_detail.php?sid=<?= $r['sid'] ?>">
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
            location.href = `p_delete.php?sid=${sid}`;
        }
    }
</script>

<?php include __DIR__ . '/part/html-foot.php' ?>
