<?php
session_start();

require __DIR__ . '/databse-connect.php';

// $users = [
//     'ming' => [
//         'password' => '1234',
//         'nickname' => '孔明'
//     ],
//     'no_two' => [
//         'password' => '5678',
//         'nickname' => '關二哥'
//     ],
//     'YenYu' => [
//         'password' => 'admin',
//         'nickname' => 'YenYu',
//     ]
// ];



$output = [
    'postData' => $_POST,
    'error' => '',
];

//test






//     if ($username && $password) {



//         $sql = "SELECT * FROM `memberdata` WHERE `m_username` = '" . $username . "' AND `m_passwd` = '" . $password . "'";

//         $stmt = $pdo->query($sql);

//         $result = $stmt->fetch();

//         print_r($result);

//         exit;

//         if ($rows) {
//             $_SESSION['is_login'] = TRUE;
//             header('Location: login-page.php');
//         } else {
//             $_SESSION['is_login'] = FALSE;
//             $_SESSION['msg'] = '登入失敗，請確認帳號密碼!!';
//         };
//     } else {
//         $_SESSION['msg'] = '請輸入帳號或密碼!!';
//     };
// }







if (isset($_POST['username'])) {
    // echo json_encode($_POST);
    // exit; // 立刻停止 php 程式執行
    // die();

    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    // 兩個欄位都要有值
    if (!empty($_POST['username']) and !empty($_POST['password'])) {


        $sql = "SELECT * FROM `memberdata` WHERE `m_username` = '" . $username . "' AND `m_passwd` = '" . $password . "'";

        $stmt = $pdo->query($sql);

        $result = $stmt->fetch();

        if (password_verify($_POST['password'], $password)) {
            echo "登入成功";
            $_SESSION['username'] = $username;
            $_SESSION['password'] = $password;
            $_SESSION['loggedin'] = true;

            header("Location:login-page.php");
        } else {

            $output['error'] = '帳號密碼錯誤';
        }
        // if (!empty($users[$_POST['account']])) {

        //     if ($_POST['password'] === $users[$_POST['username']]['password']) {
        //         // 登入成功
        //         // 把資料設定到 session 裡
        //         $_SESSION['user'] = [
        //             'username' => $_POST['username'],
        //             'nickname' => $users[$_POST['username']]['nickname'],
        //         ];
        //         header('Location:member-list.php');
        //     }
        // }
    }

    // if (!isset($_SESSION['user'])) {
    //     $error_msg = '帳號或密碼錯誤';
    // }
}

?>

<?php include __DIR__ . '/c_part/c_head.php' ?>
<?php include __DIR__ . '/c_part/c_nav.php' ?>


<?php if (isset($_SESSION['loggedin'])) : ?>

    <!--if會員成功登入-->
    <!-- <h2><?= $_SESSION['user']['nickname'] ?> 您好</h2>
    <p><a href="./log-out.php">登出</a></p> -->
<?php else : ?>
    <?php if (isset($_SESSION['msg'])) : ?>
        <div style="color:red;"><?= $_SESSION['msg'] ?></div>
    <?php endif; ?>

    <!-- <form method="post">
            <input type="text" name="account" placeholder="帳號" value="<?= isset($_POST['account']) ? htmlentities($_POST['account']) : '' ?>">
            <br>
            <input type="password" name="password" placeholder="密碼">
            <br>
            <button>登入</button>
        </form> -->


    <div class="card login-card" style="width:33rem; height:20rem; margin: 5rem auto ;">

        <div class="login-card card-body d-flex">
            <!-- <img src="./W9gIYt4h.jpeg" class="card-img-top" alt="..."> -->
            <form method="post" style="margin: auto;">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="login-label  form-label">account</label>
                    <input type="text" name="username" placeholder="帳號" value="<?= isset($_POST['account']) ? htmlentities($_POST['account']) : '' ?>">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class=" login-label form-label">password</label>
                    <input type="password" name="password" placeholder="密碼">
                </div>
                <button class="login-button">登入</button>
                <div class="register d-flex justify-content-center">
                    <p style="color: #fff;">還沒有帳號嗎？</p>
                    <a href="./db-add.php">會員註冊</a>
                </div>
            </form>
        </div>
    </div>





<?php endif; ?>







<?php include __DIR__ . '/c_part/c_scripts.php' ?>
<?php include __DIR__ . '/c_part/c_foot.php' ?>