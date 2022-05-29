<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'p_add';
$title = '加商品';

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
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">新增商品</h5>
                    <form name="form1" onsubmit="sendData();return false;" novalidate>
                        <div class="mb-3">
                            <label for="productname" class="form-label">* 商品名稱</label>
                            <input type="text" class="form-control" id="productname" name="productname" required>
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="productcategory" class="form-label">商品分類</label>
                            <input type="productcategory" class="form-control" id="productcategory" name="productcategory">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="productinfo" class="form-label">商品描述</label>
                            <textarea class="form-control" name="productinfo" id="pproductinfo" cols="30" rows="3"></textarea>
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="productprice" class="form-label">價格</label>
                            <input type="text" class="form-control" id="productprice" name="productprice">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="productimg" class="form-label">商品封面</label>
                            <input type="text" class="form-control" id="productimg" name="productimg">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="productleft" class="form-label">庫存</label>
                            <input type="text" class="form-control" id="productleft" name="productleft">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="productleft" class="form-label">商品規格</label>
                            <input type="text" class="form-control" id="productspec" name="productspec">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="productleft" class="form-label">商品包含</label>
                            <input type="text" class="form-control" id="productinclude" name="productinclude">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="productleft" class="form-label">商品圖片</label>
                            <input type="text" class="form-control" id="productimg2" name="productimg2">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="productleft" class="form-label">商品圖片</label>
                            <input type="text" class="form-control" id="productimg3" name="productimg3">
                            <div class="form-text"></div>
                        </div>
                       

                        <button type="submit" class="btn btn-primary text-white">新增</button>
                    </form>
                    <div id="info-bar" class="alert alert-success p-2" role="alert" style="display:none;">
                        資料新增成功
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<?php include __DIR__ . '/part/scripts.php' ?>
<script>
    async function sendData() {
        // TODO: 欄位檢查, 前端的檢查
        const fd = new FormData(document.form1);
        const r = await fetch('p_add_api.php', {
            method: 'POST',
            body: fd,
        });
        const result = await r.json();
        console.log(result);


    }
</script>
<?php include __DIR__.'/part/html-foot.php' ?>