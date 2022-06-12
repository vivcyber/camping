<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'act_add';
$title = '增加活動';
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
                    <h5 class="card-title">新增活動</h5>
                    <form name="form1" onsubmit="sendData(); return false;" novalidate>
                        <div class="mb-3">
                            <label for="act_name" class="form-label">* 活動名稱</label>
                            <input type="text" class="form-control" id="act_name" name="act_name" required>
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="act_price" class="form-label">* 活動價格</label>
                            <input type="number" class="form-control" id="act_price" name="act_price">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="act_s_time" class="form-label">* 開始時間</label>
                            <input type="datetime-local" class="form-control" id="act_s_time" name="act_s_time">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="act_e_time" class="form-label">* 結束時間</label>
                            <input type="datetime-local" class="form-control" id="act_e_time" name="act_e_time">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="min_people" class="form-label">* 開團人數</label>
                            <input type="number" class="form-control" id="min_people" name="min_people">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="max_people" class="form-label">* 人數限制</label>
                            <input type="number" class="form-control" id="max_people" name="max_people">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="min_age" class="form-label">* 最小年齡</label>
                            <input type="number" class="form-control" id="min_age" name="min_age">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="max_age" class="form-label">* 最大年齡</label>
                            <input type="number" class="form-control" id="max_age" name="max_age">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="act_desc" class="form-label">* 活動特色</label>
                            <textarea class="form-control" name="act_desc" id="act_desc" cols="30" rows="3"></textarea>
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="act_notice" class="form-label">* 注意事項</label>
                            <textarea class="form-control" name="act_notice" id="act_notice" cols="30" rows="3"></textarea>
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="act_schedule" class="form-label">* 行程安排</label>
                            <textarea class="form-control" name="act_schedule" id="act_schedule" cols="30" rows="3"></textarea>
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="act_prepare" class="form-label">* 個人準備事項</label>
                            <textarea class="form-control" name="act_prepare" id="act_prepare" cols="30" rows="3"></textarea>
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <input type="file" class="form-control" name="act_img" id="act_img" multiple></input>
                            <div class="form-text red"></div>
                        </div>
                        <button type="submit" class="btn btn-primary text-white">新增</button>
                        <a href="act_list.php" class="btn btn-primary text-white">取消</a>
                    </form>
                    <!-- <form action="p_add_upload_api.php" method="post" enctype="multipart/form-data">
                    Select Image File to Upload:
                    <input type="file" name="file" class="form-control my-3">
                    <input type="submit" name="submit" value="Upload" class="btn btn-outline-secondary my-1">
                    </form> -->
                    
                    <div id="info_bar" class="alert alert-success p-2" role="alert" style="display:none;">
                        資料新增成功
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<?php include __DIR__ . '/part/scripts.php' ?>
<script>
    //限定開始日期只能大於今日日期與最多60天內的選擇
    let today = new Date();
    let future = new Date(today.setDate(today.getDate() + 60)).toISOString().slice(0, 16);
    today = new Date().toISOString().slice(0, 16);

    document.getElementsByName("act_s_time")[0].min = today;
    document.getElementsByName("act_s_time")[0].max = future;
    document.getElementsByName("act_e_time")[0].min = today;
    document.getElementsByName("act_e_time")[0].max = future;

    const act_name_f = document.form1.act_name; 
    const act_price_f = document.form1.act_price; 
    const act_s_time_f = document.form1.act_s_time; 
    const act_e_time_f = document.form1.act_e_time; 
    const min_people_f = document.form1.min_people; 
    const max_people_f = document.form1.max_people; 
    const min_age_f = document.form1.min_age; 
    const max_age_f = document.form1.max_age; 
    const act_desc_f = document.form1.act_desc; 
    const act_notice_f = document.form1.act_notice; 
    const act_schedule_f = document.form1.act_schedule; 
    const act_prepare_f = document.form1.act_prepare; 
    
    const fields = [act_name_f, act_price_f, act_s_time_f, act_e_time_f, min_people_f, max_people_f, min_age_f, max_age_f, act_desc_f, act_notice_f, act_schedule_f, act_prepare_f];
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
        let start = Date.parse($("input#-act_s_time").val());
        let end = Date.parse($("input#-act_e_time").val());

        if (act_name_f.value.length < 1) {
            // alert('姓名至少兩個字');
            // name_f.classList.add('red');
            // name_f.nextElementSibling.classList.add('red');
            // name_f.closest('.mb-3').querySelector('.form-text').classList.add('red');
            fields[0].classList.add('red');
            fieldTexts[0].innerText = '請輸入活動名稱';
            isPass = false;
        }
        if (act_price_f.value.length < 1) {
            fields[1].classList.add('red');
            fieldTexts[1].innerText = '請輸入活動價錢';
            isPass = false;
        }
        if (act_s_time_f.value.length < 1) {
            fields[2].classList.add('red');
            fieldTexts[2].innerText = '請選擇活動開始日期與時間';
            isPass = false;
        }
        if (act_e_time_f.value.length < 1) {
            fields[3].classList.add('red');
            fieldTexts[3].innerText = '請選擇活動結束日期與時間';
            isPass = false;
        }
        if (start < end) {
            fields[3].classList.add('red');
            fieldTexts[3].innerText = '請選擇開始時間後的時間';
            isPass = false;
        }
        if (min_people_f.value.length < 1) {
            fields[4].classList.add('red');
            fieldTexts[4].innerText = '請輸入開團人數';
            isPass = false;
        }
        if (max_people_f.value.length < 1) {
            fields[5].classList.add('red');
            fieldTexts[5].innerText = '請輸入限制人數';
            isPass = false;
        }
        if (min_age_f.value.length < 1) {
            fields[6].classList.add('red');
            fieldTexts[6].innerText = '請輸入最小年齡';
            isPass = false;
        }
        if (max_age_f.value.length < 1) {
            fields[7].classList.add('red');
            fieldTexts[7].innerText = '請輸入最大年齡';
            isPass = false;
        }
        if (act_desc_f.value.length < 1) {
            fields[8].classList.add('red');
            fieldTexts[8].innerText = '請輸入活動特色';
            isPass = false;
        }
        if (act_notice_f.value.length < 1) {
            fields[9].classList.add('red');
            fieldTexts[9].innerText = '請輸入活動注意事項';
            isPass = false;
        }
        if (act_schedule_f.value.length < 1) {
            fields[10].classList.add('red');
            fieldTexts[10].innerText = '請輸入活動行程安排';
            isPass = false;
        }
        if (act_prepare_f.value.length < 1) {
            fields[11].classList.add('red');
            fieldTexts[11].innerText = '請輸入活動個人準備事項';
            isPass = false;
        }    


        if (!isPass) {
            return; // 結束函式
        }

        const fd = new FormData(document.form1);
        const r = await fetch('act_add_api.php', {
            method: 'POST',
            body: fd,
        });
        const result = await r.json();
        console.log(result);

        info_bar.style.display = 'block'; // 顯示訊息列
        if (result.success) {
            info_bar.innerText = '新增成功';

            setTimeout(() => {
                location.href = 'act_list.php'; // 跳轉到列表頁
            }, 1000);
        } else {
            info_bar.innerText = result.error || '資料沒有新增';
        }
    }
</script>
<?php include __DIR__.'/part/html-foot.php' ?>