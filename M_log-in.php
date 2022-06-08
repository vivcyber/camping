<?php
session_start();

require __DIR__ . '/M_databse-connect.php';


// if (isset($_SESSION['loginUser']['m_username'])) {
//     header("Location:M_login-page.php");
//     exit;
// }

$output = [
    'postData' => $_POST,
    'error' => '',
];


?>

<?php include __DIR__ . '/c_part/c_head.php' ?>
<?php include __DIR__ . '/c_part/c_nav.php' ?>



<div class="login-card" style="width:33rem; height:auto; margin: 5rem auto ;">

    <div class="login-card card-body d-flex flex-column">
        <!-- <img src="./W9gIYt4h.jpeg" class="card-img-top" alt="..."> -->
        <div class="member-title" style="color:#fff">會員登入</div>
        <form name="form1" method="post" style="margin: auto;" onsubmit="return checkForm()">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="login-label  form-label">account</label>
                <input type="text" name="username" placeholder="帳號" value="<?= isset($_POST['username']) ? htmlentities($_POST['username']) : '' ?>">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class=" login-label form-label">password</label>
                <input type="password" name="password" placeholder="密碼">
            </div>
            <div class="mb-3 captcha d-flex flex-column">

                <p style="color: #fff;font-size:0.8rem">請輸入下圖字樣：(點擊圖片可更換驗證碼)</p>
                <img id="imgcode" src="M_captcha.php" onclick="refresh_code()" style="width: 150px;" />
                <label for="checkword" class="checkword-label form-label">輸入驗證碼</label>
                <input type="text" name="checkword" size="10" maxlength="10" />

            </div>
            <button class="login-button">登入</button>
            <div id="info-bar" class="alert alert-success mt-2" role="alert" style="display:none;">
            </div>
            <div class="register d-flex justify-content-center">
                <p style="color: #fff;">還沒有帳號嗎？</p>
                <a href="./M_db-add.php">會員註冊</a>
            </div>
        </form>
    </div>
</div>




<?php include __DIR__ . '/c_part/c_scripts.php' ?>
<script>
    function refresh_code() {
        document.getElementById("imgcode").src = "M_captcha.php";
    }



    function checkForm() {
        $.post('M_login-api.php', $(document.form1).serialize(), function(data) {

            if (data.success) {
                $('#info-bar').show().text('登入成功');

                setTimeout(function() {
                    location.href = 'M_login-page.php';
                }, 1000);

            } else {

                $('#info-bar').show().text(JSON.stringify(data.error));
            }
        }, 'json');

        return false;
    }
</script>
<script src="./js/jquery-3.4.1.js"></script>
<?php include __DIR__ . '/c_part/c_foot.php' ?>