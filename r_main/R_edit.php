<?php require __DIR__ . '/part/connect_db.php';?>

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
                <th scope="col"><i class="fa-solid fa-trash-can"></i></th>
                <th scope="col">#</th>
                <th scope="col">姓名</th>
                <th scope="col">手機</th>
                <th scope="col">電郵</th>
                <th scope="col">生日</th>
                <th scope="col">地址</th>
                <th scope="col"><i class="fa-solid fa-file-pen"></i></th>
            </tr>
        </thead>
        <tbody>
            <?php

            if ($rows2 != 0) {
                foreach ($results as $items) {
            ?>
                    <tr>
                        <td>
                            <a href="javascript: delete_it(<?= $items['sid'] ?>)">
                                <i class="fa-solid fa-trash-can"></i>
                            </a>
                        </td>
                        <td><?= $items['sid']; ?></td>
                        <td><?= $items['name']; ?></td>
                        <td><?= $items['email']; ?></td>
                        <td><?= $items['mobile']; ?></td>
                        <td><?= $items['birthday']; ?></td>
                        <td><?= $items['address']; ?></td>
                        <td><a href="ab-edit.php?sid=<?= $items['sid'] ?>">
                                <i class="fa-solid fa-file-pen">

                                </i></a></td>
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
                        <td>
                            <a href="javascript: delete_it(<?= $r['sid'] ?>)">
                                <i class="fa-solid fa-trash-can"></i>
                            </a>
                        </td>
                        <td><?= $r['sid'] ?></td>
                        <td><?= htmlentities($r['name']) ?></td>
                        <td><?= $r['mobile'] ?></td>
                        <td><?= $r['email'] ?></td>
                        <td><?= $r['birthday'] ?></td>
                        <!-- <td><?= htmlentities($r['address']) ?></td> -->
                        <td><?= strip_tags($r['address']) ?></td>
                        <!-- 如果有任何tag的<>就會直接做跳脫 -->
                        <td><a href="ab-edit.php?sid=<?= $r['sid'] ?>">
                                <i class="fa-solid fa-file-pen">

                                </i></a></td>
                    </tr>
                <?php endforeach; ?>
            <?php
            }
            ?>


        </tbody>

    </table>

</div>


<?php include __DIR__ . '/part/scripts.php' ?>
<?php include __DIR__ . '/part/html-foot.php' ?>
