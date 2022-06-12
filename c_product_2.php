<?php
require __DIR__ . '/part/connect_db.php';
// require __DIR__. '/__connect_db.php';
$perPage = 6;

$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
$cate = isset($_GET['cate']) ? intval($_GET['cate']) : 0;
$pageBtnQS = [];

$where = ' WHERE 1 ';
if (!empty($cate)) {
    $where .= " AND category_sid=$cate ";
    $pageBtnQS['cate'] = $cate;
}


// 總筆數
$t_sql = "SELECT COUNT(1) FROM camproduct2 $where ";
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];

$totalPages = ceil($totalRows / $perPage); // 總頁數
if ($page < 1) $page = 1;
if ($page > $totalPages) $page = $totalPages;

$rows = [];
// 如果有資料
if ($totalRows > 0) {
    $sql = sprintf("SELECT * FROM camproduct2 $where LIMIT %s, %s", ($page - 1) * $perPage, $perPage);
    $stmt = $pdo->query($sql);
    $rows = $stmt->fetchAll();
}

// 分類資料
$c_sql = "SELECT * FROM categories WHERE parent_sid=0";
$cates = $pdo->query($c_sql)->fetchAll();


?>
<?php include __DIR__ . '/c_part/c_head.php' ?>
<?php include __DIR__ . '/c_part/c_nav.php' ?>
<style>
    body {
        background: url(./imgs/pexels-lumn-167685.jpg);
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>

<div class="container">
    <div class="row">
        <div class="">


            <!-- 分類選單 -->
            <!-- <div class=" mt-5" style="width: 100%">
                <a type="button" href="?" class="fs-6 px-5 text-decoration-none <?= empty($cate) ? 'btn btn-outline-primary text-white' : 'btn-outline-primary' ?>">+ All</a>
                <?php foreach ($cates as $c) : ?>
                    <a type="button" href="?cate=<?= $c['sid'] ?>" class="fs-6 px-5 text-decoration-none <?= $cate == $c['sid'] ? 'btn btn-outline-primary text-white' : 'btn-outline-primary' ?>">
                        +<?= $c['name'] ?></a>
                <?php endforeach; ?>
            </div> -->
        </div>
        <div class=" mt-5 ">
            <div class="row p-3">
                <?php foreach ($rows as $r) : ?>
                    <div class="col-md-4 product-unit my-3 " data-sid="<?= $r['sid'] ?>">
                        <div class="card">

                            <img src="./imgs/product/<?= $r['productimg'] ?>" alt="" class="card-img-top">

                            <div class="card-body pb-3">
                                <h6 class="card-title fs-5" style="height:64px;"><?= $r['productname'] ?></h6>
                                <p class="card-text text-primary "><i class="fa-solid fa-campground"></i><?= $r['productcategory'] ?></p>
                                <p class="card-text text-secondary fs-4">NT <?= $r['productprice'] ?></p>
                                <form>
                                    <div class="form-group w-100 d-flex justify-content-between">
                                        <select class="form-control qty mr-3" style="display: inline-block; width:100%">
                                            <?php for ($i = 1; $i <= 10; $i++) { ?>
                                                <option value="<?= $i ?>"><?= $i ?></option>
                                            <?php } ?>
                                        </select>

                                        <button type="button" class="btn btn-primary add-to-cart-btn px-4"><i class="fas fa-cart-plus"></i></button>
                                    </div>
                                    <a href="c_detail.php?sid=<?= $r['sid'] ?>" class="btn btn-outline-secondary mt-2 w-100">商品詳情</a>
                                </form>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>



            <div class="col d-flex justify-content-center mt-5">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item  <?= $page == 1 ? 'disabled' : '' ?>">
                            <a class="page-link " href="?<?php
                                                            $pageBtnQS['page'] = $page - 1;
                                                            echo http_build_query($pageBtnQS)
                                                            ?>">
                                <i class="fa-solid fa-angle-left"></i>
                            </a>
                        </li>
                        <?php for ($i = 1; $i <= $totalPages; $i++) :
                            $pageBtnQS['page'] = $i;
                        ?>
                            <li class="page-item  <?= $i === $page ? 'active' : '' ?>">
                                <a class="page-link" href="?<?= http_build_query($pageBtnQS) ?>">
                                    <?= $i ?></a>
                            </li>
                        <?php endfor; ?>
                        <li class="page-item <?= $page == $totalPages ? 'disabled' : '' ?>">
                            <a class="page-link" href="?<?php
                                                        $pageBtnQS['page'] = $page + 1;
                                                        echo http_build_query($pageBtnQS)
                                                        ?>">
                                <i class="fa-solid fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

</div>

<script src="js/jquery-3.4.1.js"></script>
<script>
    $.get('sc-add-to-cart-api.php', function(data) {
        countCartObj(data);
    }, 'json');

    function countCartObj(data) {
        let total = 0;
        for (let i in data) {
            total += data[i];
        }
        $('.cart-count').text(total);
    }
</script>
<script>
    const btn = $('.add-to-cart-btn');

    btn.click(function() {
        const sid = $(this).closest('.product-unit').attr('data-sid');
        //const qty = $(this).prev().val();
        const qty = $(this).closest('.product-unit').find('.qty').val();

        console.log({
            sid,
            qty
        });

        $.get('sc-add-to-cart-api.php', {
            sid,
            qty
        }, function(data) {
            countCartObj(data);
        }, 'json');
    });
</script>
<?php include __DIR__ . '/c_part/c_foot.php' ?>