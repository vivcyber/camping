<?php
session_start();

require __DIR__ . '/part/connect_db.php';


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

    <div class=" admin-card-body d-flex flex-column">
        <!-- <img src="./W9gIYt4h.jpeg" class="card-img-top" alt="..."> -->
        <div class="admin-title" style="color:#fff">後台管理者登入</div>
        <form name="form1" method="post" style="margin: auto;" onsubmit="return checkForm()">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="login-label  form-label">account</label>
                <input type="text" name="admin" placeholder="帳號" value="<?= isset($_POST['admin']) ? htmlentities($_POST['admin']) : '' ?>">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class=" login-label form-label">password</label>
                <input id="password-eye" type="password" name="password" placeholder="密碼">
                <i id="checkEye" class="fas fa-eye"></i>
            </div>
            <!-- <div class="mb-3 captcha d-flex flex-column">

                <p style="color: #fff;font-size:0.8rem">請輸入下圖字樣：(點擊圖片可更換驗證碼)</p>
                <img id="imgcode" src="M_captcha.php" onclick="refresh_code()" style="width: 150px;" />
                <label for="checkword" class="checkword-label form-label">輸入驗證碼</label>
                <input type="text" name="checkword" size="10" maxlength="10" />

            </div> -->
            <button class="login-button">登入</button>
            <div id="info-bar" class="alert alert-success mt-2" role="alert" style="display:none;">
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
        $.post('M_login-admin-api.php', $(document.form1).serialize(), function(data) {

            if (data.success) {
                $('#info-bar').removeClass('alert-danger').addClass("alert-success");
                $('#info-bar').show().text('登入成功');

                setTimeout(function() {
                    location.href = 'M_member-list.php';
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