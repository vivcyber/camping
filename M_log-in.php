<?php
session_start();

require __DIR__ . '/part/connect_db.php';


if (isset($_SESSION['loginUser']['m_username'])) {
    header("Location:M_login-page.php");
    exit;
}

$output = [
    'postData' => $_POST,
    'error' => '',
];


?>

<?php include __DIR__ . '/c_part/c_head.php' ?>
<?php include __DIR__ . '/c_part/c_nav.php' ?>



<div class="login-card" style="width:33rem; height:auto; margin: 5rem auto ;">

    <div class=" login-card-body d-flex flex-column">
        <!-- <img src="./W9gIYt4h.jpeg" class="card-img-top" alt="..."> -->
        <div class="member-title" style="color:#fff">會員登入</div>
        <form name="form1" method="post" style="margin: auto;" onsubmit="return checkForm()">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="login-label  form-label">username</label>
                <input type="text" name="username" placeholder="帳號" value="<?= isset($_POST['username']) ? htmlentities($_POST['username']) : '' ?>">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class=" login-label form-label">password</label>
                <input id="password-eye" type="password" name="password" placeholder="密碼">
                <i id="checkEye" class="fas fa-eye"></i>
            </div>
            <div class="mb-3 captcha d-flex flex-column">

                <p style="color: #fff;font-size:0.8rem;text-shadow:none;">請輸入下圖字樣：(點擊圖片可更換驗證碼)</p>
                <img id="imgcode" src="M_captcha.php" onclick="refresh_code()" style="width: 150px;" />
                <label for="checkword" class="checkword-label form-label" style="text-shadow:none;">輸入驗證碼</label>
                <input type="text" name="checkword" size="10" maxlength="10" />

            </div>
            <button class="login-button">登入</button>
            <div id="info-bar" class="alert alert-success mt-2" role="alert" style="display:none;text-shadow:none">
            </div>
            <div class="register d-flex justify-content-center">
                <p style="color: #fff;text-shadow:none;">還沒有帳號嗎？</p>
                <a style="text-shadow:none;" href="./M_db-add.php">會員註冊</a>
            </div>
            <div class="mb3 mx-auto">
                <a class="text-center w-100 d-block" href="M_log-in-admin.php" style="text-shadow:none;font-size:0.8rem;">切換至後台登入</a>
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
                $('#info-bar').removeClass('alert-danger').addClass("alert-success");
                $('#info-bar').show().text('登入成功');

                setTimeout(function() {
                    location.href = 'M_login-page.php';
                }, 1000);

            } else {

                $('#info-bar').removeClass('alert-success').addClass("alert-danger");
                $('#info-bar').show().text(data.error);
            }
        }, 'json');

        return false;
    }


    const eye = document.querySelector('#checkEye');
    const eyePassword = document.querySelector('#password-eye');

    eye.addEventListener("click", function(e) {

        if (e.target.classList.contains('fa-eye')) {

            e.target.classList.remove('fa-eye');
            e.target.classList.add('fa-eye-slash');
            eyePassword.setAttribute('type', 'text');

        } else {
            eyePassword.setAttribute('type', 'password');
            e.target.classList.remove('fa-eye-slash');
            e.target.classList.add('fa-eye')
        }
    });
</script>
<script src="./js/jquery-3.4.1.js"></script>
<?php include __DIR__ . '/c_part/c_foot.php' ?>