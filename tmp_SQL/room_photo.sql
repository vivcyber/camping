-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2022 年 06 月 11 日 13:22
-- 伺服器版本： 10.4.21-MariaDB
-- PHP 版本： 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `projecttest`
--

-- --------------------------------------------------------

--
-- 資料表結構 `room_photo`
--

CREATE TABLE `room_photo` (
  `sid` int(100) NOT NULL,
  `Room_Type` varchar(40) NOT NULL,
  `Room_Image` varchar(255) NOT NULL,
  `Created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `room_photo`
--

INSERT INTO `room_photo` (`sid`, `Room_Type`, `Room_Image`, `Created_at`) VALUES
(1, 'Room1', 'campRoom1-0.jpg', '0000-00-00'),
(2, 'Room1', 'campRoom1-1.jpg', '2022-06-09'),
(3, 'Room1', 'campRoom1-2.jpg', '2022-06-09'),
(4, 'Room1', 'campRoom1-3.jpg', '2022-06-09'),
(5, 'Room1', 'campRoom1-4.jpg', '2022-06-09'),
(6, 'Room1', 'campRoom1-5.jpg', '2022-06-09'),
(7, 'Room2', 'campRoom2-0.jpg', '0000-00-00'),
(26, 'car1', '', '0000-00-00'),
(27, 'car1', '', '0000-00-00'),
(28, 'car1', '', '0000-00-00'),
(29, 'car1', '', '0000-00-00'),
(30, 'car1', '', '0000-00-00'),
(31, 'car1', '', '0000-00-00'),
(34, 'Room2', 'campRoom2-1.jpg', '0000-00-00'),
(35, 'Room2', 'campRoom2-2.jpg', '0000-00-00'),
(36, 'Room2', 'campRoom2-3.jpg', '0000-00-00'),
(39, 'Room2', 'campRoom2-4.jpg', '0000-00-00'),
(40, 'Room2', 'campRoom2-5.jpg', '0000-00-00'),
(41, 'Room3', 'campRoom3-0.jpg', '0000-00-00'),
(42, 'Room3', 'campRoom3-1.jpg', '0000-00-00'),
(43, 'Room4', 'campRoom4-0.jpg', '0000-00-00'),
(46, 'Room4', 'campRoom4-1.jpg', '0000-00-00'),
(66, 'Room4', 'campRoom4-3.jpg', '0000-00-00'),
(67, 'Room4', 'campRoom4-2.jpg', '2022-06-11'),
(76, 'Room5', 'campRoom1-4.jpg', '2022-06-11'),
(77, 'Room5', 'campRoom1-5.jpg', '2022-06-11'),
(78, 'Room5', 'campRoom2-0.jpg', '2022-06-11'),
(79, 'Room5', 'campRoom2-1.jpg', '2022-06-11'),
(80, 'Room5', 'campRoom2-0.jpg', '2022-06-11'),
(81, 'Room5', 'campRoom2-1.jpg', '2022-06-11'),
(82, 'Room5', 'campRoom2-2.jpg', '2022-06-11'),
(83, 'Room5', 'campRoom2-3.jpg', '2022-06-11');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `room_photo`
--
ALTER TABLE `room_photo`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `room_photo`
--
ALTER TABLE `room_photo`
  MODIFY `sid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
