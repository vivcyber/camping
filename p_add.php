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
                            <select name="productcategory" id="productcategory" class="form-control">
                                <option value="">--商品種類--</option>
                                <option value="餐廚">餐廚</option>
                                <option value="桌椅">桌椅</option>
                                <option value="帳篷">帳篷</option>
                            </select>
                            <div class="form-text red"></div>
                        </div>


                        <div class="mb-3">
                            <label for="productcolor" class="form-label">商品顏色</label> <br>
                            <div class="color1">
                                <input class="form-check-input" type="radio" id="productcolor" name="productcolor" value="黑色">
                                <label class="form-check-label" for="flexRadioDefault1">
                                黑色
                                </label>
                            </div>
                            <div class="color1">
                                <input class="form-check-input" type="radio" id="productcolor" name="productcolor" value="沙色">
                                <label class="form-check-label" for="flexRadioDefault1">
                                沙色
                                </label>
                            </div>
                            <div class="color1">
                                <input class="form-check-input" type="radio" id="productcolor" name="productcolor" value="綠色">
                                <label class="form-check-label" for="flexRadioDefault1">
                                綠色
                                </label>
                            </div>
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
                    <!-- <form action="p_add_upload_api.php" method="post" enctype="multipart/form-data">
                     Select Image File to Upload:
                    <input type="file" name="file" class="form-control my-3">
                    <input type="submit" name="submit" value="Upload" class="btn btn-outline-secondary my-1">
                    </form> -->
                    
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