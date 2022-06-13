<?php require __DIR__ . '/part/connect_db.php';

$pageName = 'R_room_List';
$title = '房間類型_編輯頁面';

$perPage = 20;

$page = isset($_GET['page']) ? intval($_GET['page']) : 1;

if ($page < 1) {
    header('Location: >page=1');
    exit;
}

$t_sql = "SELECT COUNT(1) FROM room_order";
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];

$totalPages = ceil($totalRows / $perPage);

$row = [];

if ($totalRows > 0) {
    if ($page > $totalPages) {
        header("Location: ?page= $totalPages");
        exit;
    }
}

$sql = sprintf("SELECT OrderNum,Date,RoomType,room_list.Price,ID_Comments,Create_at FROM room_order LEFT JOIN room_list ON room_order.RoomType IN(room_list.Room_Type) ORDER BY OrderNum ASC LIMIT %s , %s", ($page - 1) * $perPage, $perPage);
//追加 ORDER BY 排序
//SELECT `OrderNum`,`Date`,`RoomType`,`room_order`.`price`,`ID_Comments`,`Create_at` FROM `room_order` JOIN `room_list` ON `room_order`.`RoomType` = `room_list`.`Room_Type` WHERE `room_list`.`Price`=`room_order`.`price` ORDER BY `OrderNum` ASC
$rows = $pdo->query($sql)->fetchAll();
//SELECT * FROM address_book LIMIT 0,5 這樣也是5筆，可是這樣可以選擇從第幾筆取到第幾筆
//MVC 資料處理，呈現，跟客戶的互動

$row2 = 0;
if (!empty($_GET['search'])) {
    //如果搜尋的input不是空白的值時
    $search = $_GET['search'];
    //$search就等於拿到‘search的值’
    $query = $pdo->prepare("SELECT OrderNum,Date,RoomType,room_list.Price,ID_Comments,Create_at FROM room_order LEFT JOIN room_list ON room_order.RoomType IN(room_list.Room_Type) WHERE CONCAT(OrderNum,Date,RoomType,room_list.Price,ID_Comments,Create_at) LIKE :keyword ORDER BY OrderNum ASC"); //這裡就是用pdo準備好 SQL取值的寫法。用concat一口氣全部都拿然後用keyword定位。
    $query->bindValue(':keyword', '%' . $search . '%', PDO::PARAM_STR);
    //取出來的值我讓他變成string然後用execute演算。
    $query->execute();
    $results = $query->fetchAll();
    //結果是，這個取出來的值，我全都要。
    $rows2 = $query->rowCount();
    //再把它排列出來。
}
?>

<?php include __DIR__ . '/part/html-head.php' ?>
<style>
    td,th{
        text-align: left;
    }

</style>
<?php include __DIR__ . '/part/navbar.php' ?>

<div class="container">
    <div class="pt-5 pb-5 d-flex justify-content-between">
                <h2 style="font-size: 2rem; font-weight:500;">訂房資料頁  &  房型修改頁</h2>
                <a href="R_Add.php" class="btn btn-primary">新增房間類型</a>
            </div>
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
            <form action="R_room_back.php" method="get">
                <div class="d-flex mb-3" style="height:40px; margin-top: 10px;">

                    <input type="text" class="form-control" name="search" id="search" placeholder="搜尋資料">

                    <button type="submit" value="Submit" name="submit" class="btn btn-primary " style="width:80px; margin-left:10px;">搜尋</button>
                </div>
            </form>
        </div>
    </div>

    <table class="table table-dark table-hover">
        <thead>
            <tr>

                <th scope="col">Order_No</th>
                <th scope="col">預訂日期</th>
                <th scope="col">房型</th>
                <th scope="col"><i class="fa-solid fa-file-pen"></i></th>
                <!-- </th> -->
                <!-- <th scope="col">房間配備</th> -->
                <!-- </th> -->
                <th scope="col">價 格</th>
                <th scope="col">會員留言</th>
                <th scope="col">建立日期</th>

                <th scope="col"><i class="fa-solid fa-trash-can"></i></th>

            </tr>
        </thead>
        <tbody>
            <?php

            if (!empty($rows2)) {
                foreach ($results as $items) {
            ?>
                    <tr>

                        <td><?= $items['OrderNum']; ?></td>
                        <td><?= $items['Date']; ?></td>
                        <td><?= $items['RoomType']; ?></td>
                        <td><a href="R_edit.php?RoomType=<?= $items['RoomType'] ?>">
                                <i class="fa-solid fa-file-pen">

                                </i></a></td>
                        <td><?= $items['Price']; ?></td>
                        <td><?= $items['ID_Comments']; ?></td>
                        <td><?= $items['Create_at']; ?></td>

                        <td>
                            <a href="javascript: delete_it(<?= $items['OrderNum'] ?>)">
                                <i class="fa-solid fa-trash-can"></i>
                            </a>
                        </td>
                    </tr>
                <?php
                }
            } else {
                ?>
                <?php foreach ($rows as $r) : ?>
                    <tr>
                        <?php /*
        <td><a href="ab-delete.php?sid=<?= $r['sid'] ?>" onclick= "return confirm('確定要刪除編號<?= $r['sid']?>的資料嗎？')">
            */ ?>

                        <td><?= $r['OrderNum']; ?></td>
                        <td><?= $r['Date']; ?></td>
                        <td><?= $r['RoomType']; ?></td>
                        <td><a href="R_edit.php?RoomType=<?= $r['RoomType'] ?>">
                                <i class="fa-solid fa-file-pen">

                                </i></a></td>
                        <td><?= $r['Price']; ?></td>
                        <td><?= $r['ID_Comments']; ?></td>
                        <td><?= $r['Create_at']; ?></td>

                        <td>
                            <a href="javascript: delete_it(<?= $r['OrderNum'] ?>)">
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
            location.href = `R_delete.php?OrderNum=${sid};`
        }
    }
</script>

<?php include __DIR__ . '/part/html-foot.php' ?>