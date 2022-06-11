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
-- 資料表結構 `room_list`
--

CREATE TABLE `room_list` (
  `SID` int(11) NOT NULL,
  `Room_Type` varchar(40) NOT NULL,
  `Room_Spec` varchar(255) NOT NULL,
  `Price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `room_list`
--

INSERT INTO `room_list` (`SID`, `Room_Type`, `Room_Spec`, `Price`) VALUES
(1, 'Room1', 'cleaningStaff,Fridge,Hotpot,Wardrobe,Toiletpaper,Toilet,Hairdryer,Tub,Washroom,Towel,Sliper,Desk,Television,Phone,Channel', 5000),
(2, 'Room2', 'cleaningStaff,Fridge,Hotpot,sheep,Toiletpaper,Toilet,Hairdryer,Towel,Sliper,Desk,Phone,Washroom', 4000),
(3, 'Room3', 'cleaningStaff,Hotpot,sheep,Toiletpaper,Toilet,Wardrobe,Hairdryer,Towel,Sliper,Desk,Phone,Television', 3500),
(4, 'Room4', 'cleaningStaff,Hotpot,Wardrobe,Toiletpaper,Hairdryer,Towel,Sliper,Desk,Phone', 2000),
(5, 'Car1', 'cleaningStaff,Fridge,Hotpot,Sheep,Wardrob,Toiletpapere,Toilet,Hairdryer,Tub,Washroom,Towel,Sliper,Desk,Television,Phone,Channel', 6000),
(6, 'Car2', 'cleaningStaff,Fridge,Hotpot,Sheep,Wardrob,Toiletpapere,Hairdryer,Towel,Sliper,Desk,Television,Phone,Channel', 4000),
(7, 'Car3', 'cleaningStaff,Fridge,Hotpot,Sheep,Wardrob,Toiletpapere,Hairdryer,Towel,Sliper,Phone', 1800),
(10, 'Room5', 'Fridge,Wardrobe,Desk,Channel', 1800);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `room_list`
--
ALTER TABLE `room_list`
  ADD PRIMARY KEY (`SID`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `room_list`
--
ALTER TABLE `room_list`
  MODIFY `SID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
