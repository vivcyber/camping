<?php

session_start();

// session_destroy(); // 清除所有的 session
unset($_SESSION['loginAdmin']); // 移除 'user' 對應的值
unset($_SESSION['isLoggedIn']); // 移除 'user' 對應的值

// 轉向, redirect
header('Location: M_log-in-admin.php');
