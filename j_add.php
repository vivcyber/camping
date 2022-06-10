<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'j_add';
$title = '加食譜';

?>

<?php include __DIR__ . '/part/html-head.php' ?>
<?php include __DIR__ . '/part/navbar.php' ?>
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
                    <h5 class="card-title">新增食譜</h5>
                    <form name="form1" onsubmit="sendData();return false;" novalidate>
                        <div class="mb-3">
                            <label for="resname" class="form-label">食譜名稱</label>
                            <input type="text" class="form-control" id="resname" name="resname" required>
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="tool" class="form-label">所需鍋具</label>
                            <input type="text" class="form-control" id="tool" name="tool">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="ingredient" class="form-label">食材</label>
                            <input type="text" class="form-control" id="ingredient" name="ingredient">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="tutorial" class="form-label">教學</label>
                            <input type="text" class="form-control" id="tutorial" name="tutorial">
                            <div class="form-text red"></div>
                        </div>
                        <!-- <div class="mb-3">
                            <label for="productinfo" class="form-label">教學</label>
                            <textarea class="form-control" name="tutorial" id="tutorial" cols="30" rows="3"></textarea>
                            <div class="form-text red"></div>
                        </div> -->
                        <div class="mb-3">
                            <label for="serves" class="form-label">人數</label>
                            <input type="text" class="form-control" id="serves" name="serves">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="cook_time" class="form-label">烹煮時間</label>
                            <input type="text" class="form-control" id="cook_time" name="cook_time">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="recipetype" class="form-label">葷素</label>
                            <input type="text" class="form-control" id="recipetype" name="recipetype">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="resimg" class="form-label">成品圖片</label>
                            <input type="text" class="form-control" id="resimg" name="resimg">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="pic" class="form-label">配圖</label>
                            <div method="post" enctype="multipart/form-data" style="width: 250px;">
                                <input type="file" id="pic" name="picture" class="form-control" accept=".jpg,.png,.jpeg" />
                            </div>
                            <br>
                            <img id="myimg" src="" alt="" style="width: 250px;" class="pt-2" />

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
    const info_bar = document.querySelector('#info-bar');
    const name_f = document.form1.resname;

    const fields = [name_f];
    const fieldTexts = [];
    for (let f of fields) {
        fieldTexts.push(f.nextElementSibling);
    }

    async function sendData() {
        // 讓欄位的外觀回復原來的狀態
        for (let i in fields) {
            fields[i].classList.remove('red');
            fieldTexts[i].innerText = '';
        }
        info_bar.style.display = 'none'; // 隱藏訊息列

        // TODO: 欄位檢查, 前端的檢查
        let isPass = true; // 預設是通過檢查的

        if (name_f.value.length < 2) {
            // alert('姓名至少兩個字');
            // name_f.classList.add('red');
            // name_f.nextElementSibling.classList.add('red');
            // name_f.closest('.mb-3').querySelector('.form-text').classList.add('red');
            fields[0].classList.add('red');
            fieldTexts[0].innerText = '姓名至少兩個字';
            isPass = false;
        }

        if (!isPass) {
            return; // 結束函式
        }
        // TODO: 欄位檢查, 前端的檢查
        const fd = new FormData(document.form1);
        const r = await fetch('j_add_api.php', {
            method: 'POST',
            body: fd,
        });
        const result = await r.json();
        console.log(result);
        info_bar.style.display = 'block'; // 顯示訊息列
        if (result.success) {
            info_bar.classList.remove('alert-danger');
            info_bar.classList.add('alert-success');
            info_bar.innerText = '新增成功';

            setTimeout(() => {
                // location.href = 'ab-list.php'; // 跳轉到列表頁
            }, 2000);
        } else {
            info_bar.classList.remove('alert-success');
            info_bar.classList.add('alert-danger');
            info_bar.innerText = result.error || '資料無法新增';
        }

    }
</script>
<?php include __DIR__ . '/part/html-foot.php' ?>