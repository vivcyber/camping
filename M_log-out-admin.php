<?php

session_start();

// session_destroy(); // 清除所有的 session
unset($_SESSION['admin_account']); // 移除 'user' 對應的值
unset($_SESSION['admin_password']); // 移除 'user' 對應的值
unset($_SESSION['loggedin']); // 移除 'user' 對應的值

// 轉向, redirect
header('Location: log-in-admin.php');
