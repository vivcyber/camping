<?php

session_start();

require __DIR__ . '/part/connect_db.php';

$pageName = 'db-edit';
$title = '會員資料修改';

$username = isset($_SESSION['loginUser']) ? $_SESSION['loginUser'] : 0;

if (empty($username)) {
    echo "sid empty";
    // header('Location:db-list-01.html');
    exit;
}

$sql = "SELECT * FROM `memberdata` WHERE `m_username` = '" .  $_SESSION['loginUser']['m_username'] . "';";
//edit需要回傳所以需要fetch , delete不需回傳所以不用fetch

$stmt = $pdo->query($sql);

$row  = $stmt->fetch();


if (empty($row)) {
    echo 'row empty';
    // header("Location:db-list-01.html");
    exit;
}

?>

<?php include __DIR__ . '/c_part/c_head.php' ?>
<?php include __DIR__ . '/c_part/c_nav.php' ?>


<div class="container mx-auto w-100 p-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div>
                <div class="edit-card-body p-5">
                    <h5 class="edit-card-title">修改會員資料</h5>
                    <form name="form1" onsubmit="sendData();return false;" novalidate>
                        <input type="hidden" name="sid" value="<?= $row['m_id'] ?>">
                        <div class="mb-3">
                            <label for="name" class="form-label">name</label>
                            <input type="text" class="form-control" id="name" name="name" required value="<?= htmlentities($row['m_name']) ?>">
                            <div class="form-text red"></div>
                        </div>
                        <!-- <div class="mb-3">
                            <label for="avatar" class="form-label">修改大頭貼</label>
                            <input type="file" class="form-control" id="avatar" name="avatar" required>
                            <div class="avatar">
                                <img class="my-pic" src="./uploaded/<?= $row['m_avatar'] ?>" alt="" style="width:150px;height:150px;object-fit:cover;border-radius:50%;margin-top:25px;">
                            </div>
                            <div class="form-text red"></div>
                        </div> -->
                        <div>
                            <input type="file" name="avatar" accept="image/*" style="display: none;" />
                        </div>
                        <button type="button" id="btn" onclick="uploadAvatar()">修改大頭貼</button>
                        <br />
                        <img id="myimg" src="./M_uploaded/<?= $row['m_avatar'] ?>" alt="" style="display:inline;width:150px;height:150px;object-fit:cover;border-radius:50%;margin:25px 0" />


                        <div class="mb-3">
                            <label for="email" class="form-label">email</label>
                            <input type="email" class="form-control" id="email" name="email" value="<?= $row['m_email'] ?>">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="mobile" class="form-label">mobile</label>
                            <input type="text" class="form-control" id="mobile" name="mobile" pattern="09\d{8}" value="<?= $row['m_phone'] ?>">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="birthday" class="form-label">birthday</label>
                            <input type="date" class="form-control" id="birthday" name="birthday" value="<?= $row['m_birthday'] ?>">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="address" class="form-label">address</label>
                            <textarea class="form-control" name="address" id="address" cols="30" rows="3"><?= $row['m_address'] ?></textarea>
                            <div class="form-text"></div>
                        </div>

                        <button type="submit" class="btn btn-primary">修改</button>
                    </form>
                    <div id="info-bar" class="alert alert-success mt-2" role="alert" style="display:none;">
                        資料編輯成功
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<?php include __DIR__ . '/c_part/c_scripts.php' ?>

<script>
    const row = <?= json_encode($row, JSON_UNESCAPED_UNICODE); ?>;


    const email_re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/;
    const mobile_re = /^09\d{2}-?\d{3}-?\d{3}$/;

    const info_bar = document.querySelector('#info-bar');
    const name_f = document.form1.name;
    const email_f = document.form1.email;
    const mobile_f = document.form1.mobile;

    const fields = [name_f, email_f, mobile_f];
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
        if (email_f.value && !email_re.test(email_f.value)) {
            // alert('email 格式錯誤');
            fields[1].classList.add('red');
            fieldTexts[1].innerText = 'email 格式錯誤';
            isPass = false;
        }
        if (mobile_f.value && !mobile_re.test(mobile_f.value)) {
            // alert('手機號碼格式錯誤');
            fields[2].classList.add('red');
            fieldTexts[2].innerText = '手機號碼格式錯誤';
            isPass = false;
        }

        if (!isPass) {
            return; // 結束函式
        }

        const fd = new FormData(document.form1);
        const r = await fetch('M_db-edit-api.php', {
            method: 'POST',
            body: fd,
        });

        const result = await r.json();
        console.log(result);

        info_bar.style.display = 'block'; //顯示訊息列

        if (result.success) {
            info_bar.classList.remove('alert-danger');
            info_bar.classList.add('alert-success');
            info_bar.innerText = '資料修改成功';

            setTimeout(() => {
                location.href = 'M_login-page.php';
            }, 2000);
        } else {
            info_bar.classList.remove('alert-success');
            info_bar.classList.add('alert-danger');
            info_bar.innerText = result.error || '資料沒有修改';
        }

    }


    const btn = document.querySelector("#btn");
    const myimg = document.querySelector("#myimg");
    const avatar = document.form1.avatar;


    avatar.addEventListener("change", async function() {
        // 上傳表單
        const file = this.files[0];
        console.log(file);
        const reader = new FileReader();

        // 資料載入後 (讀取完成後)
        reader.onload = function() {
            console.log(reader.result);
            myimg.src = reader.result;


        };
        reader.readAsDataURL(file);
    });


    function uploadAvatar() {
        avatar.click(); // 模擬點擊
    }
</script>


<?php include __DIR__ . '/c_part/c_foot.php' ?>