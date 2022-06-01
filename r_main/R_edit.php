<?php require __DIR__ . '/part/connect_db.php';

$pageName = 'R_edit'; 
$title = '房間類型_編輯頁面';

$perPage = 20;

$page = isset($_GET['page']) ? intval($_GET['page']) : 1;

if($page < 1) {
    header('Location: >page=1');
    exit;
}

$t_sql = "SELECT COUNT(1) FROM Room_Order";
$totalRows = $pdo -> query($t_sql) -> fetch(PDO::FETCH_NUM)[0];

$totalPages = ceil($totalRows / $perPage);

$row = [];

if($totalRows > 0){
    if($page > $totalPages){
        header("Location: ?page= $totalPages");
        exit;
    }
}

$sql = sprintf('SELECT * FROM Room_Order WHERE CONCAT(Date,Room_Type,Price,ID_Comments) ORDER BY OrderNum DESC LIMIT %s, %s, ($page -1) * $perPage, $perPage');


?>

<?php include __DIR__ . '/part/html-head.php' ?>
<?php include __DIR__ . '/part/navbar.php' ?>

<div class="container">
    <div class="row">
        <div class="col d-flex justify-content-between">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item <?= $page == 1 ? 'disabled' : '' ?> ">
                    <a class="page-link" href="?page<?= $page == 1 ?>">
                    <i class="fa-solid fa-angles-left"></i>    
                    </a>
                    </li>
                    <li class="page-item <?= $page == 1 ? 'disabled' : '' ?> ">
                        <a class="page-link" href="?page=<?= $page - 1 ?>">
                            <i class="fa-solid fa-angle-left"></i>
                        </a>
                    </li>
                    <?php for ($i = $page - 5; $i <= $page + 5; $i++) {
                        if ($i >= 1 and $i <= $totalPages) : //這裡是如果小於0就不要秀出來，而最大值是 5+5+1 
                    ?>
                            <li class="page-item <?= $page == $i ? 'active' : '' ?>">
                                <a class="page-link" href="?page=<?= $i ?>"><?= $i ?></a>
                            </li>
                    <?php
                        endif;
                    } ?>
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
            <form action="ab_list.php" method="post">
                <div class="d-flex" style="height:40px; margin-top: 10px;">

                    <input type="text" class="form-control" name="search" id="search" placeholder="搜需資料">

                    <button type="submit" value="Submit" name="submit" class="btn btn-primary " style="width:80px; margin-left:10px;">搜尋</button>
                </div>
            </form>
        </div>
    </div>

    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                
                <th scope="col">Order_No</th>
                <th scope="col">預定日期</th>
                <th scope="col">房型</th></th>
                <th scope="col">價格</th>
                <th scope="col">會員留言</th>
                <th scope="col"><i class="fa-solid fa-file-pen"></i></th>
                <th scope="col"><i class="fa-solid fa-trash-can"></i></th>
                
            </tr>
        </thead>
        <tbody>
            <?php

            if ($rows2 != 0) {
                foreach ($results as $items) {
            ?>
                    <tr>
                       
                        <td><?= $items['OrderNum']; ?></td>
                        <td><?= $items['Date']; ?></td>
                        <td><?= $items['Room_Type']; ?></td>
                        <td><?= $items['Price']; ?></td>
                        <td><?= $items['ID_Comments']; ?></td>
                        <td><a href="ab-edit.php?sid=<?= $items['sid'] ?>">
                                <i class="fa-solid fa-file-pen">

                                </i></a></td>
                        <td>
                            <a href="javascript: delete_it(<?= $items['sid'] ?>)">
                                <i class="fa-solid fa-trash-can"></i>
                            </a>
                        </td>
                    </tr>
                <?php
                }
            } else if ($row2 < 0) {
                ?>
                <?php foreach ($rows as $r) : ?>
                    <tr>
                        <?php /*
                    <td><a href="ab-delete.php?sid=<?= $r['sid'] ?>" onclick= "return confirm('確定要刪除編號<?= $r['sid']?>的資料嗎？')">
                        */ ?>
                        
                        <td><?= $r['OrderNum'] ?></td>
                        <td><?= $r['Date'] ?></td>
                        <td><?= htmlentities($r['Room_Type']) ?></td>
                        <td><?= $r['Price'] ?></td>
                        <td><?= $r['ID_Comments'] ?></td>
                        <!-- <td><?= $r['address'] ?></td>
                        <td><?= strip_tags($r['address']) ?></td> -->
                        <!-- 如果有任何tag的<>就會直接做跳脫 -->
                        <td><a href="ab-edit.php?sid=<?= $r['sid'] ?>">
                                <i class="fa-solid fa-file-pen">

                                </i></a></td>
                        <td>
                            <a href="javascript: delete_it(<?= $r['sid'] ?>)">
                                <i class="fa-solid fa-trash-can"></i>
                            </a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            <?php
            }
            ?>


        </tbody>

    </table>

</div>


<?php include __DIR__ . '/part/scripts.php' ?>

<script>
    function delete_it(sid) {
        if (confirm(`確定要刪除編號為 ${sid} 的資料嗎？`)) {
            location.href = `ab-delete.php?sid=${sid};`
        }
    }
</script>

<?php include __DIR__ . '/part/html-foot.php' ?>
