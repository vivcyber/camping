<?php
session_start();

require __DIR__ . '/M_databse-connect.php';

$pageName = 'edit-password';
$title = '會員卡';

print_r($_SESSION);
exit;

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
        <form method="post" onsubmit="return setPassword()">
            <div class="old-password d-flex">
                <div class="member-title" style="font-style:normal;font-size:1rem;margin:0 10px;align-self:center">請輸入舊密碼:</div>
                <input id="old-password" name="old-password" type="password" style="height: 25px;align-self:center">
                <div class="caution-bar" style="text-shadow: none; font-style:normal;color:red;align-self:center;display:none;">密碼錯誤</div>
            </div>
            <div class="new-password d-flex">
                <div class="member-title" style="font-style:normal;font-size:1rem;margin:0 10px;align-self:center">請輸入新密碼:</div>
                <input type="password" name="new-password" style="height: 25px;align-self:center">
            </div>
            <div class="new-password d-flex">
                <div class="member-title" style="font-style:normal;font-size:1rem;margin:0 10px;align-self:center">請確認新密碼:</div>
                <input type="password" style="height: 25px;align-self:center">
            </div>
            <button class="login-button">提交</button>
        </form>
    </div>
</div>


<?php include __DIR__ . '/c_part/c_scripts.php' ?>
<script>
    const oldP = document.querySelector('#old-password');
    const cBar = document.querySelector('.caution-bar');
    const password = '<?php echo $password ?>';


    function setPassword() {

    }
</script>
<?php include __DIR__ . '/c_part/c_foot.php' ?>



<?php
