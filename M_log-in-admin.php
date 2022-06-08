<?php
session_start();

require __DIR__ . '/M_databse-connect.php';



$output = [
    'postData' => $_POST,
    'error' => '',
];

//test


if (isset($_POST['admin_account'])) {


    $account = $_POST['admin_account'];
    $password = $_POST['admin_password'];

    // 兩個欄位都要有值
    if (!empty($_POST['admin_account']) and !empty($_POST['admin_password'])) {


        $sql = "SELECT * FROM `admin_list` WHERE `admin_account` = '" . $account . "' AND `admin_password` = '" . $password . "'";

        $stmt = $pdo->query($sql);

        $result = $stmt->fetch();

        if ($_POST['admin_password'] == $password) {
            echo "登入成功";
            $_SESSION['admin_account'] = $username;
            $_SESSION['admin_password'] = $password;
            $_SESSION['loggedin'] = true;

            header("Location:M_member-list.php");
        } else {

            $output['error'] = '帳號密碼錯誤';
        }
    }
}

?>

<?php include __DIR__ . '/c_part/c_head.php' ?>
<?php include __DIR__ . '/c_part/c_nav.php' ?>


<?php if (isset($_SESSION['loggedin'])) : ?>


    <!-- <?php else : ?>
    <?php if (isset($_SESSION['msg'])) : ?>
        <div style="color:red;"><?= $_SESSION['msg'] ?></div> -->
    <!-- <?php endif; ?> -->

    <!-- <form method="post">
            <input type="text" name="account" placeholder="帳號" value="<?= isset($_POST['account']) ? htmlentities($_POST['account']) : '' ?>">
            <br>
            <input type="password" name="password" placeholder="密碼">
            <br>
            <button>登入</button>
        </form> -->


    <div class="card login-card" style="width:33rem; height:20rem; margin: 5rem auto ;">

        <div class="login-card card-body d-flex flex-column">
            <!-- <img src="./W9gIYt4h.jpeg" class="card-img-top" alt="..."> -->
            <div class="admin-title" style="color:#fff">管理者登入</div>
            <form method="post" style="margin: auto;">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="login-label  form-label">account</label>
                    <input type="text" name="admin_account" placeholder="帳號" value="<?= isset($_POST['admin_account']) ? htmlentities($_POST['admin_account']) : '' ?>">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class=" login-label form-label">password</label>
                    <input type="password" name="admin_password" placeholder="密碼">
                </div>
                <button class="login-button">登入</button>
                <div class="register d-flex justify-content-center pb-4">
                    <a href="./M_log-in.php" style="text-decoration: none;">切換到會員登入</a>
                </div>
            </form>
        </div>
    </div>





<?php endif; ?>







<?php include __DIR__ . '/c_part/c_scripts.php' ?>
<?php include __DIR__ . '/c_part/c_foot.php' ?>