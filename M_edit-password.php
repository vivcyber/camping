<?php
session_start();

require __DIR__ . '/part/connect_db.php';

$pageName = 'edit-password';
$title = '會員卡';


if (!isset($_SESSION)) {
    echo 'session empty!';
    exit;
}


$password = isset($_SESSION['loginUser']['m_passwd']) ? $_SESSION['loginUser']['m_passwd'] : '';

if ($password == '') {
    echo '請先登入！';
    header("Location:M_log-in.php");
}



?>
<?php include __DIR__ . '/c_part/c_head.php' ?>
<?php include __DIR__ . '/c_part/c_nav.php' ?>


<div class=" login-card" style="width:30rem;margin: 5rem auto ;">
    <div class="login-page-card-body">
        <form name="form1" method="post" onsubmit="setPassword();return false;" novalidate>
            <div class="old-password d-flex">
                <div class="member-title" style="font-style:normal;font-size:1rem;margin:0 10px;align-self:center">請輸入舊密碼:</div>
                <input id="old-password" name="oldpassword" type="password" style="height: 25px;align-self:center">

            </div>
            <div class="new-password d-flex">
                <div class="member-title" style="font-style:normal;font-size:1rem;margin:0 10px;align-self:center">請輸入新密碼:</div>
                <input type="password" name="newpassword" style="height: 25px;align-self:center">
            </div>
            <div class="new-password d-flex">
                <div class="member-title" style="font-style:normal;font-size:1rem;margin:0 10px;align-self:center">請確認新密碼:</div>
                <input id="confirm" type="password" style="height: 25px;align-self:center">
            </div>
            <div class="caution-bar" style="text-shadow: none; font-style:normal;color:red;align-self:center;display:none;">密碼錯誤</div>
            <button type="submit" class="login-button">提交</button>
        </form>

    </div>
</div>




<?php include __DIR__ . '/c_part/c_scripts.php' ?>
<script>
    const oldP = document.querySelector('#oldpassword');
    const cBar = document.querySelector('.caution-bar');
    const password = '<?php echo $password ?>';
    const newPassword = document.form1.newpassword;
    const confirm = document.querySelector('#confirm');

    // console.log(document.form1);


    async function setPassword() {

        if (newPassword.value !== confirm.value) {

            cBar.style.display = 'block';
            cBar.innerText = '新密碼與確認密碼不符';

        } else {


            console.log('456');
            // let isPass = true;

            // if (!isPass) {
            //     return; // 結束函式
            // }

            const fd = new FormData(document.form1);
            const r = await fetch('M_edit-password-api.php', {
                method: 'POST',
                body: fd,
            });

            const result = await r.json();
            console.log(result);


            if (result.success) {

                cBar.style.display = 'none';

                alert("修改成功！請重新登入");

                setTimeout(function() {
                    location.href = 'M_log-in.php';
                }, 1000);

            } else {
                cBar.style.display = 'block';
                cBar.innerText = '舊密碼輸入錯誤';
            }
        }
    }
</script>
<?php include __DIR__ . '/c_part/c_foot.php' ?>



<?php
