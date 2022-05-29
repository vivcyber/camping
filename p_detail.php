<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'p_detail';
$title = '商品詳情';


$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;
if (empty($sid)) {
    header('Location:p_list.php');
    exit;
}

$row=$pdo->query("SELECT * FROM camproduct2 WHERE sid =$sid")->fetch();
if(empty($row)){
    header('Location:p_list.php');
    exit;
};


?>

<?php include __DIR__.'/part/html-head.php'?>
<?php include __DIR__.'/part/navbar.php' ?>
<style>
    .form-control.red {
        border: 1px solid red;
    }

    .form-text.red {
        color: red;
    }
</style>
<div class="container">

    <div class="row m-5">
        <div class="col-md-10">
            <div class="card p-5">
                <div class="card-body">
                    <h5 class="card-title text-secondary border-bottom border-secondary p-2">商品詳情</h5>
                    <form name="form1">
            
                        <div class="my-5">
                            <h6 class="m-0">商品名稱</h6>
                            <?= $row['productname'] ?>   
                        </div>

                        <div class="my-5">
                            <h6 class="m-0">商品分類</h6>
                            <?= $row['productcategory'] ?>   
                        </div>

                        <div class="my-4">
                            <h6 class="m-0">商品描述</h6>
                            <?= $row['productinfo'] ?>   
                        </div>


                        <div class="my-4">
                            <h6 class="m-0">商品價格</h6>
                            <?= $row['productprice'] ?>   
                        </div>

                        <div class="my-4">
                            <h6 class="">商品封面</h6>
                            <img src="./imgs/product/<?= $row['productimg'] ?>.jpg" alt="" class="card-img" style="width:200px;"> 
                        </div>


                        <div class="my-4">
                            <h6 class="">內頁圖片</h6>
                            <img src="./imgs/product/<?= $row['productimg2'] ?>.jpg" alt="" class="card-img" style="width:200px;"> 
                            <img src="./imgs/product/<?= $row['productimg3'] ?>.jpg" alt="" class="card-img" style="width:200px;"> 
                        </div>


                        <div class="my-4">
                            <h6 class="m-0">庫存</h6>
                            <?= $row['productleft'] ?>   
                        </div>


                        <div class="my-4">
                            <h6 class="m-0">規格</h6>
                            <?= $row['productspec'] ?>   
                        </div>


                        <div class="my-4">
                            <h6 class="m-0">商品包含</h6>
                            <?= $row['productinclude'] ?>   
                        </div>
                    </form>

                    <div class="mt-5">
                    <a class="text-decoration-none" href="p_list.php">
                    <i class="fa-solid fa-arrow-left"></i> 返回
                    </a>

                    
                   
                </div>
            </div>
        </div>
    </div>

</div>
<?php include __DIR__ . '/part/scripts.php' ?>
<script>

    // const row = <?= json_encode($row, JSON_UNESCAPED_UNICODE); ?>;

    // async function sendData() {
      
    //     const fd = new FormData(document.form1);
    //     const r = await fetch('p_edit_api.php', {
    //         method: 'POST',
    //         body: fd,
    //     });
    //     const result = await r.json();
    //     console.log(result);


    // }
</script>
<?php include __DIR__.'/part/html-foot.php' ?>