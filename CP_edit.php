<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'CP_edit';
$title = '編輯商品';


$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;
if (empty($sid)) {
    header('Location:CP_product_list.php');
    exit;
}

$sql = sprintf("SELECT *
    FROM `customize_product` cp
    WHERE cp.sid = $sid ");

$row = $pdo->query($sql)->fetch();
$customize = $row['customize'] ?? '';
$customize2 = $row['customize2'] ?? '';
$customize3 = $row['customize3'] ?? '';
if (empty($row)) {
    header('Location:CP_product_list.php');
    exit;
};

?>

<?php include __DIR__ . '/part/html-head.php' ?>
<?php include __DIR__ . '/part/navbar.php' ?>
<div class="container">
    <div class="row">
        <div class="col-md-6 mx-auto">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">修改商品</h5>
                    <form name="form1" onsubmit="sendData();return false;">
                        <div class="name mb-3">
                            <label for="name" class="form-label">* 商品名稱</label>
                            <input type="text" class="form-control" id="name" name="name" value="<?= $row['name'] ?>" required>
                            <div class="form-text red"></div>
                        </div>

                        <div class="pcode mb-3">
                            <label for="p_code" class="form-label">產品檢索碼</label>
                            <input type="text" class="form-control" id="p_code" name="p_code" placeholder="兩個大寫英文字母" maxlength="2" value="<?= $row['p_code'] ?>" required>
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
                            <img class="mt-3 mb-3 rounded-circle d-block" id="myimg" src="./CP_imgs/<?= $row['frame_pic'] ?>" alt="" style="display:none; width:150px; height:150px;" />
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
                            <textarea class="form-control" name="introduction" id="introduction" cols="30" rows="5"><?= $row['introduction'] ?></textarea>
                            <div class="form-text red"></div>
                        </div>

                        <div class="price mb-3">
                            <label for="price" class="form-label">商品價格</label>
                            <input type="text" class="form-control" id="price" name="price" value="<?= $row['price'] ?>">
                            <div class="form-text red"></div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary text-white">修改</button>
                            <a href="CP_product_detail.php">
                                <div class="btn btn-outline-primary">
                                    返回
                                </div>
                            </a>
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
    const customize = document.querySelector('#customize');
    const customize2 = document.querySelector('#customize2');
    const customize3 = document.querySelector('#customize3');
    const arraycus = [customize, customize2, customize3];

    const c1 = <?= json_encode($customize, JSON_UNESCAPED_UNICODE); ?>;
    const c2 = <?= json_encode($customize2, JSON_UNESCAPED_UNICODE); ?>;
    const c3 = <?= json_encode($customize3, JSON_UNESCAPED_UNICODE); ?>;
    const arrayc = [c1, c2, c3];

    arraycus.forEach((r) => {
        arrayc.forEach((a) => {
            if (a == r.value) {
                r.checked = true;
            }
        })
    });
    const price_re = /^\d*$/;
    const p_code_re = /^[A-Z]{2}$/;

    const info_bar = document.querySelector('#info-bar');
    const p_codef = document.form1.p_code;
    const pricef = document.form1.price;

    const fields = [p_codef, pricef];
    const fieldText = [];
    for (let f of fields) {
        fieldText.push(f.nextElementSibling);
    }

    async function sendData() {
        // TODO: 欄位檢查, 前端的檢查
        //讓欄位外觀回復原來狀態
        for (let i in fields) {
            fields[i].classList.remove('text-danger');
            fieldText[i].innerText = '';
        }



        //欄位檢查，前端的檢查

        let isPass = true; //預設通過檢查

        // 商品編碼

        if (!p_code_re.test(p_codef.value)) {
            fieldText[0].innerText = '請輸入兩個大寫英文字母';
            isPass = false;
        }

        //價格

        if (!price_re.test(pricef.value)) {
            fieldText[1].innerText = '請輸入阿拉伯數字';
            isPass = false;

        }

        //若驗證不通過

        if (!isPass) {
            return; //結束sendData();
        }


        const fd = new FormData(document.form1);
        const r = await fetch('CP_edit_api.php?sid=<?= $sid ?>', {
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
            info_bar.innerText = "資料修改成功";
            setTimeout(() => {
                location.href = 'CP_product_list.php';
            }, 1000);
            // 設定2秒後跳轉到 db-list.php

        } else {
            // 如果失敗 
            info_bar.classList.add('alert-danger');
            info_bar.classList.remove('alert-success');
            info_bar.innerText = "資料修改失敗";
            // info_bar.innerText = result.error || '資料無法修改';

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
    }
</script>
<?php include __DIR__ . '/part/html-foot.php' ?>