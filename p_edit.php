<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'p_edit';
$title = '編輯商品';


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
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">編輯商品</h5>
                    <form name="form1" onsubmit="sendData();return false;" novalidate>
                      <input type="hidden" name="sid" value="<?= $row['sid'] ?>">
                        <div class="mb-3">
                            <label for="productname" class="form-label">* 商品名稱</label>
                            <input type="text" class="form-control" id="productname" name="productname" required value="<?= $row['productname'] ?>">
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
                            <textarea class="form-control" name="productinfo" id="pproductinfo" cols="30" rows="3"><?= $row['productinfo'] ?></textarea>
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="productprice" class="form-label">價格</label>
                            <input type="text" class="form-control" id="productprice" name="productprice" value="<?= $row['productprice'] ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="productimg" class="form-label">圖片位址</label>
                            <input type="text" class="form-control" id="productimg" name="productimg" value="<?= $row['productimg'] ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="productleft" class="form-label">庫存</label>
                            <input type="text" class="form-control" id="productleft" name="productleft" value="<?= $row['productleft'] ?>">
                            <div class="form-text"></div>
                        </div>

                        <div class="mb-3">
                            <label for="productleft" class="form-label">商品規格</label>
                            <input type="text" class="form-control" id="productspec" name="productspec" value="<?= $row['productspec'] ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="productleft" class="form-label">商品包含</label>
                            <input type="text" class="form-control" id="productinclude" name="productinclude" value="<?= $row['productinclude'] ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="productleft" class="form-label">商品圖片</label>
                            <input type="text" class="form-control" id="productimg2" name="productimg2" value="<?= $row['productimg2'] ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="productleft" class="form-label">商品圖片</label>
                            <input type="text" class="form-control" id="productimg3" name="productimg3" value="<?= $row['productimg3'] ?>">
                            <div class="form-text"></div>
                        </div>

                        <button type="submit" class="btn btn-primary text-white">修改</button>
                    </form>
                    <div id="info-bar" class="alert alert-success p-2" role="alert" style="display:none;">
                        資料修改成功
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<?php include __DIR__ . '/part/scripts.php' ?>
<script>

    const row = <?= json_encode($row, JSON_UNESCAPED_UNICODE); ?>;

    async function sendData() {
        // TODO: 欄位檢查, 前端的檢查
        const fd = new FormData(document.form1);
        const r = await fetch('p_edit_api.php', {
            method: 'POST',
            body: fd,
        });
        const result = await r.json();
        console.log(result);


    }
</script>
<?php include __DIR__.'/part/html-foot.php' ?>