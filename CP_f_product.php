<?php include __DIR__ . "/part/connect_db.php";

$pageName = 'CP_f_product';
$title = '舒營 - 客製化商品前台首頁';
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;


$perPage = 6;

$t_sql = "SELECT count(1) FROM customize_product"; //計算總筆數
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0]; //總筆數

$totalPages = ceil($totalRows / $perPage); //總共有幾頁

$rows = []; //先建立預設值

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
<?php include __DIR__ . '/c_part/c_head.php' ?>
<?php include __DIR__ . '/c_part/c_nav.php' ?>

<style>
    body {
        background: url(./imgs/pexels-lumn-167685.jpg);
        background-size: cover;
        background-repeat: no-repeat;
    }

    .CP_card {
        width: 23rem;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        overflow: hidden;
    }

    .CP_card:hover .img {
        opacity: 1;
        transform: scale(1.1, 1.1);
    }

    .CP_card:hover p,
    .CP_card:hover h6 {
        color: white;
    }

    .CP_card:hover {
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .img {
        height: 23rem;
        width: 23rem;
        overflow: hidden;
        border-radius: 10px;
        margin: auto;
        opacity: 0.7;
        transition: .5s;
    }

    .CP_card p,
    .CP_card h6 {
        color: rgba(255, 255, 255, 0.7);
        ;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: 50% 0%;
    }

    .pagination {
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>

<div class="container">
    <div class="row">
        <div class="">

        </div>
        <div class=" mt-5 ">
            <div class="row p-3">
                <?php foreach ($rows as $r) : ?>
                    <div class="col-md-4 product-unit my-3 " data-sid="<?= $r['sid'] ?>">
                        <div class="CP_card">
                            <figure class="img">
                                <img src="./CP_imgs/<?= $r['frame_pic'] ?>" alt="" class="card-img-top">
                            </figure>

                            <div class="card-body pb-3 mt-3">
                                <h6 class="card-title fs-5" style="height:50px;"><?= $r['name'] ?></h6>
                                <h6 class="card-title">可客製化內容 </h6>
                                <p class="card-text ">
                                    <?= $r['customize'] ?>
                                    <?= $r['customize2'] ?>
                                    <?= $r['customize3'] ?>
                                </p>
                                <p class="card-text fs-3 ">NT. <?= $r['price'] ?></p>

                                <a href="CP_f_detail.php?sid=<?= $r['sid'] ?>" class="btn btn-outline-secondary mt-2 w-100">商品詳情</a>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>



            <div class="col d-flex justify-content-center mt-5">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <!-- 製作回到第一頁的按鈕 -->
                        <!-- <li class="page-item <?= $page == 1 ? 'disabled' : '' ?>">
                            <a class="page-link" href="?page=1">
                                <i class="fa-solid fa-backward-fast"></i>
                            </a>
                        </li> -->

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
                        <!-- <li class="page-item <?= $page == $totalPages ? 'disabled' : '' ?>">
                            <a class="page-link" href="?page=<?= $totalPages ?>">
                                <i class="fa-solid fa-forward-fast"></i>
                            </a>
                        </li> -->
                    </ul>
                </nav>
            </div>
        </div>
    </div>

</div>

<!-- <script src="js/jquery-3.4.1.js"></script>
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
</script> -->
<!-- <script>
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
</script> -->
<?php include __DIR__ . '/c_part/c_foot.php' ?>