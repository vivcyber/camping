<?php

session_start();

require __DIR__ . '/part/connect_db.php';

$pageName = 'db-login-page';
$title = '會員卡';

// if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
//     echo "會員已登入";
// } else {
//     echo "會員未登入";
//     exit;
// }

$sql = "SELECT * FROM `memberdata` WHERE `m_username` = '" . $_SESSION['loginUser']['m_username'] . "';";

$stmt = $pdo->query($sql);

$result = $stmt->fetch();



$name = $result['m_name'];
$username = $result['m_username'];
$birthday = $result['m_birthday'];
$avatar = $result['m_avatar'];
$level = '';
$score = $result['m_score'];

if ($result['m_level'] == 'member') {
    $level = '銅級會員';
} else {
    $level = '金牌會員';
}

?>


<?php include __DIR__ . '/c_part/c_head.php' ?>
<?php include __DIR__ . '/c_part/c_nav.php' ?>

<?php if (isset($_SESSION['loginUser'])) : ?>
    <div class=" login-card " style="width:34rem;margin: 5rem auto ;">
        <div class="login-page-card-body">
            <form method="post">
                <div class="member-card-container d-flex justify-content-between w-100">
                    <div class="mb-3">
                        <p class="mb-3 member-card-title">MEMBER CARD</p>
                        <p>會員姓名：<span><?php echo $name ?></span></p>
                        <p>會員帳號：<span><?php echo $username ?></span></p>
                        <p>會員生日：<span><?php echo $birthday ?></span></p>
                        <p>會員等級：<span><?php echo $level ?></span></p>
                        <p>會員積分：<span><?php echo $score ?></span></p>
                        <div class="bg-img"></div>
                    </div>
                    <div class="mb-3">
                        <img src="./M_uploaded/<?php echo $avatar ?>" alt="" style="width:150px;height:150px;object-fit:cover;border-radius:50%">
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div id="page-wrap">
        <div class="member-hello">
            <span class="member-hi">Hi,<?php echo $name ?> </span>
        </div>
        <div id="all">
            <ul>
                <li> <a href="M_db-edit.php">修改會員資料</a></li>
                <li><a href="M_edit-password.php">修改密碼</a></li>
                <li><a href="sc_order_detail.php">購買紀錄</a></li>
                <li> <a href="M_log-out.php">登出</a></li>
            </ul>
        </div>
    </div>






<?php endif; ?>


<?php include __DIR__ . '/c_part/c_scripts.php' ?>
<?php include __DIR__ . '/c_part/c_foot.php' ?>