<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'leader_add';
$title = '新增教練';
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
                    <h5 class="card-title">新增教練</h5>
                    <form name="form1" onsubmit="sendData(); return false;" novalidate>
                        <div class="mb-3">
                            <label for="act_l_name" class="form-label">* 教練名稱</label>
                            <input type="text" class="form-control" id="act_l_name" name="act_l_name" required>
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="act_l_age" class="form-label">教練年齡</label>
                            <input type="number" class="form-control" id="act_l_age" name="act_l_age">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="act_l_mobile" class="form-label">教練手機</label>
                            <input type="text" class="form-control" id="act_l_mobile" name="act_l_mobile" pattern="09\d{8}">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="act_l_address" class="form-label">教練住址</label>
                            <input type="text" class="form-control" id="act_l_address" name="act_l_address">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="act_l_license" class="form-label">教練證照</label>
                            <input type="text" class="form-control" id="act_l_license" name="act_l_license">
                            <div class="form-text red"></div>
                        </div>
                        <button type="submit" class="btn btn-primary text-white">新增</button>
                        <a href="leader_list.php" class="btn btn-primary text-white">取消</a>
                    </form>
                    <!-- <form action="p_add_upload_api.php" method="post" enctype="multipart/form-data">
                    Select Image File to Upload:
                    <input type="file" name="file" class="form-control my-3">
                    <input type="submit" name="submit" value="Upload" class="btn btn-outline-secondary my-1">
                    </form> -->

                    <div id="info_bar" class="alert alert-success p-2" role="alert" style="display:none;">
                        新增成功
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<?php include __DIR__ . '/part/scripts.php' ?>
<script>
    const name_f = document.form1.name;
    const act_l_name_f = document.form1.act_l_name;
    const act_l_age_f = document.form1.act_l_age;
    const act_l_mobile_f = document.form1.act_l_mobile;
    const act_l_address_f = document.form1.act_l_address;
    const act_l_license_f = document.form1.act_l_license;
    const fields = [act_l_name_f, act_l_age_f, act_l_mobile_f, act_l_address_f, act_l_license_f];
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

        let isPass = true; // 預設是通過檢查的

        // TODO: 欄位檢查, 前端的檢查

        if (act_l_name_f.value.length < 1) {
            // alert('姓名至少兩個字');
            // name_f.classList.add('red');
            // name_f.nextElementSibling.classList.add('red');
            // name_f.closest('.mb-3').querySelector('.form-text').classList.add('red');
            fields[0].classList.add('red');
            fieldTexts[0].innerText = '請輸入教練名字';
            isPass = false;
        }
        if (act_l_age_f.value.length < 1) {
            fields[1].classList.add('red');
            fieldTexts[1].innerText = '請輸入教練年齡';
            isPass = false;
        }
        if (act_l_mobile_f.value.length < 1) {
            fields[2].classList.add('red');
            fieldTexts[2].innerText = '請輸入教練手機';
            isPass = false;
        }
        if (act_l_address_f.value.length < 1) {
            fields[3].classList.add('red');
            fieldTexts[3].innerText = '請輸入教練地址';
            isPass = false;
        }
        if (act_l_license_f.value.length < 1) {
            fields[4].classList.add('red');
            fieldTexts[4].innerText = '請輸入教練證照';
            isPass = false;
        }
        if (!isPass) {
            return; // 結束函式
        }

        const fd = new FormData(document.form1);
        const r = await fetch('leader_add_api.php', {
            method: 'POST',
            body: fd,
        });
        const result = await r.json();
        console.log(result);
        info_bar.style.display = 'block'; // 顯示訊息列
        if (result.success) {
            info_bar.innerText = '新增成功';

            setTimeout(() => {
                location.href = 'leader_list.php'; // 跳轉到列表頁
            }, 1000);
        } else {
            info_bar.innerText = result.error || '資料沒有新增';
        }

    }
</script>
<?php include __DIR__ . '/part/html-foot.php' ?>