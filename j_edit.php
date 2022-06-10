<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'j_edit';
$title = '編輯商品';


$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;
if (empty($sid)) {
    header('Location:j_list.php');
    exit;
}

$row = $pdo->query("SELECT * FROM recipes WHERE sid =$sid")->fetch();
if (empty($row)) {
    header('Location:j_list.php');
    exit;
};







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
                    <h5 class="card-title">編輯商品</h5>
                    <form name="form1" onsubmit="sendData();return false;" novalidate>
                        <input type="hidden" name="sid" value="<?= $row['sid'] ?>">
                        <div class="mb-3">
                            <label for="productname" class="form-label">食譜名稱</label>
                            <input type="text" class="form-control" id="resname" name="resname" required value="<?= htmlentities($row['resname']) ?>">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="tool" class="form-label">所需鍋具</label>
                            <input type="text" class="form-control" id="tool" name="tool" required value="<?= $row['tool'] ?>">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="ingredient" class="form-label">食材</label>
                            <input type="text" class="form-control" id="ingredient" name="ingredient" required value="<?= $row['ingredient'] ?>">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="tutorial" class="form-label">教學</label>
                            <input type="text" class="form-control" id="tutorial" name="tutorial" value="<?= $row['tutorial'] ?>">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="serves" class="form-label">人數</label>
                            <input type="text" class="form-control" id="serves" name="serves" required value="<?= $row['serves'] ?>">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="cook_time" class="form-label">烹煮時間</label>
                            <input type="text" class="form-control" id="cook_time" name="cook_time" required value="<?= $row['cook_time'] ?>">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="recipetype" class="form-label">葷素</label>
                            <input type="text" class="form-control" id="recipetype" name="recipetype" required value="<?= $row['recipetype'] ?>">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="resimg" class="form-label">成品圖片</label>
                            <input type="text" class="form-control" id="resimg" name="resimg" required value="<?= $row['resimg'] ?>">
                            <div class="form-text red"></div>
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
    const info_bar = document.querySelector('#info-bar');
    const name_f = document.form1.resname;

    const fields = [name_f];
    const fieldTexts = [];
    for (let f of fields) {
        fieldTexts.push(f.nextElementSibling);
    }

    async function sendData() {
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
        const r = await fetch('j_edit_api.php', {
            method: 'POST',
            body: fd,
        });
        const result = await r.json();
        console.log(result);
        info_bar.style.display = 'block'; // 顯示訊息列
        if (result.success) {
            info_bar.classList.remove('alert-danger');
            info_bar.classList.add('alert-success');
            info_bar.innerText = '修改成功';

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