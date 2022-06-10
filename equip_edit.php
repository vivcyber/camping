<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'equip_edit';
$title = '編輯租賃裝備';


$equip_id = isset($_GET['equip_id']) ? intval($_GET['equip_id']) : 0;
if (empty($equip_id)) {
    header('Location:equip_list.php');
    exit;
}
$row=$pdo->query("SELECT * FROM equip WHERE equip_id =$equip_id")->fetch();
if(empty($row)){
    header('Location:equip_list.php');
    exit;
};


?>

<?php include __DIR__.'/part/html-head.php'?>
<?php include __DIR__.'/part/navbar.php' ?>
<style>
    
</style>
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">編輯租賃裝備</h5>
                    <form name="form1" onsubmit="sendData();return false;" novalidate>
                        <input type="hidden" name="equip_id" value="<?= $row['equip_id'] ?>">
                        <div class="mb-3">
                            <label for="name" class="form-label">* 裝備名稱</label>
                            <input type="text" class="form-control" id="name" name="name" value="<?= $row['name'] ?>" required>
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="info" class="form-label">裝備介紹</label>
                            <textarea class="form-control" name="info" id="info" cols="30" rows="4"><?= $row['info'] ?></textarea>
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="img" class="form-label">裝備照片</label>
                            <button type="button" id="btn" onclick="uploadPhotos()">
                                上傳照片
                            </button>
                            <input type="hidden" name="img" id="img" value="[]" />
                            <br />
                            <div id="photo_container" style="width: 600px; display:flex;"></div>
                            <div id="pastimg" style="width: 600px; display:flex;"></div>
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">價格/天</label>
                            <input type="datetime" class="form-control" id="price" name="price" value="<?= $row['price'] ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="rest" class="form-label">庫存</label>
                            <input type="number" class="form-control" id="rest" name="rest" value="<?= $row['rest'] ?>">
                            <div class="form-text"></div>
                        </div>
                        <button type="submit" class="btn btn-primary text-white">修改</button>
                        <a href="equip_list.php" class="btn btn-primary text-white">取消</a>
                    </form>
                    <form name="form2" style="display: none">
                        <input type="file" name="photos[]" accept="image/*" multiple />
                    </form>
                    <div id="info_bar" class="alert alert-success p-2" role="alert" style="display:none;">
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

    
    const btn = document.querySelector("#btn");
    const photo_container = document.querySelector("#photo_container");
    const photos = document.form2.elements[0];

    const photoItem = (f) => {
        return `
                <div class="photoItem" style="display: inline-block" data-f="${f}">
                    <img src="./ae_uploaded/${f}" style="width: 200px;" alt="" />    
                </div>
                `;
    };
        <?php
            foreach( preg_split("/[\,]/", $row["img"]) as $v) {
            $i = preg_replace('/[\"\[\]]+/','', $v);
            
        ?>
            photo_container.innerHTML += photoItem("<?= $i ?>");
        <?php } ?> 
    photos.addEventListener("change", async function() {
        photo_container.innerHTML = '';
        // 上傳表單
        const fd = new FormData(document.form2);
        const r = await fetch("equip_addimg_api.php", {
            method: "POST",
            body: fd,
        });
        const obj = await r.json();
        console.log(obj);
        if (obj.filenames && obj.filenames.length) {
            photo_container.innerHTML += obj.filenames
                .map((f) => photoItem(f))
                .join("");
        }
        const photoAr = [];

        document.querySelectorAll(".photoItem").forEach((el) => {
            photoAr.push(el.getAttribute("data-f"));
        });
        document.getElementById("img").value = JSON.stringify(photoAr);
        // document.form1.img.value = JSON.stringify(photoAr);
    });



    async function sendData() {

        info_bar.style.display = 'none'; // 隱藏訊息列
        // TODO: 欄位檢查, 前端的檢查
        const fd = new FormData(document.form1);
        const r = await fetch('equip_edit_api.php', {
            method: 'POST',
            body: fd,
        });
        const result = await r.json();
        console.log(result);
        
        info_bar.style.display = 'block'; // 顯示訊息列
        if (result.success) {
            info_bar.innerText = '新增成功';

            setTimeout(() => {
                location.href = 'equip_list.php'; // 跳轉到列表頁
            }, 1000);
        } else {
            info_bar.innerText = result.error || '資料沒有新增';
        }
    }
    
    function uploadPhotos() {
        photos.click(); // 模擬點擊
    }
</script>
<?php include __DIR__.'/part/html-foot.php' ?>