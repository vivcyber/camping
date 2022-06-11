<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'CP_add';
$title = '新增倉品';

?>

<?php include __DIR__ . '/part/html-head.php' ?>
<?php include __DIR__ . '/part/navbar.php' ?>

<div class="container">
    <div class="row">
        <div class="col-md-6 mx-auto">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">新增商品</h5>
                    <form name="form1" onsubmit="sendData();return false;">
                        <div class="name mb-3">
                            <label for="name" class="form-label">* 商品名稱</label>
                            <input type="text" class="form-control" id="name" name="name" required>
                            <div class="form-text red"></div>
                        </div>

                        <div class="pcode mb-3">
                            <label for="p_code" class="form-label">產品檢索碼</label>
                            <input type="text" class="form-control" id="p_code" name="p_code" placeholder="兩個大寫英文字母" maxlength="2" required>
                            <div class="form-text red"></div>
                        </div>

                        <div class="frame_pic mb-3">
                            <!-- <label for="frame_pic" class="form-label">商品封面</label>
                            <input type="text" class="form-control" id="frame_pic" name="frame_pic">
                            <div class="form-text red"></div>
                            <div> -->
                            <input type="file" name="frame_pic1" accept="image/*" style="display: none;" />


                            <button class="btn btn-outline-primary rounded-pill" type="button" id="btn" onclick="uploadAvatar()">上傳封面圖片</button>
                            <br />
                            <img class="mt-3 mb-3 rounded-circle d-block" id="myimg" src="" alt="" style="display:none;" />
                        </div>

                        <div class="customize mb-3">
                            <h5>可客製化的內容</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="顏色" id="customize" name="customize">
                                <label class="form-check-label" for="customize">
                                    顏色
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="圖案" id="customize2" name="customize2">
                                <label class="form-check-label" for="customize2">
                                    圖案
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="文字" id="customize3" name="customize3">
                                <label class="form-check-label" for="customize3">
                                    文字
                                </label>
                            </div>



                        </div>

                        <div class="introduction mb-3">
                            <label for="introduction" class="form-label">商品介紹</label>
                            <textarea class="form-control" name="introduction" id="introduction" cols="30" rows="5"></textarea>
                            <div class="form-text red"></div>
                        </div>

                        <div class="price mb-3">
                            <label for="price" class="form-label">商品價格</label>
                            <input type="text" class="form-control" id="price" name="price">
                            <div class="form-text red"></div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary text-white">新增</button>
                            <button type="submit" class="btn border-1 border-primary">
                                <a href="CP_product_list.php" class=" text-decoration-none">返回</a>
                            </button>
                        </div>
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
        const r = await fetch('CP_add_api.php', {
            method: 'POST',
            body: fd,
        });
        const result = await r.json();
        console.log(result);

        const info_bar = document.querySelector('#info-bar');

        info_bar.style.display = 'block'; //顯示訊息列
        if (result.success) {
            // 如果成功
            info_bar.classList.remove('alert-danger');
            info_bar.classList.add('alert-success');
            info_bar.innerText = "資料新增成功";
            setTimeout(() => {
                location.href = 'CP_product_list.php';
            }, 1000);
            // 設定2秒後跳轉到 db-list.php

        } else {
            // 如果失敗 
            info_bar.classList.add('alert-danger');
            info_bar.classList.remove('alert-success');
            info_bar.innerText = "資料新增失敗";
            info_bar.innerText = result.error || '資料無法新增';

        }

    }

    const btn = document.querySelector("#btn");
    const myimg = document.querySelector("#myimg");
    const frame_pic1 = document.form1.frame_pic1;


    frame_pic1.addEventListener("change", async function() {
        // 上傳表單
        const file = this.files[0];
        console.log(file);
        const reader = new FileReader();

        // 資料載入後 (讀取完成後)
        reader.onload = function() {
            console.log(reader.result);
            myimg.src = reader.result;
            myimg.style = "width:150px;height:150px;object-fit:cover;"

        };
        reader.readAsDataURL(file);
    });


    function uploadAvatar() {
        frame_pic1.click(); // 模擬點擊
    }
</script>
<?php include __DIR__ . '/part/html-foot.php' ?>