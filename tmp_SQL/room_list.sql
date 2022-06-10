-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2022 at 09:46 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projecttest`
--

-- --------------------------------------------------------

--
-- Table structure for table `room_list`
--

CREATE TABLE `room_list` (
  `SID` int(11) NOT NULL,
  `Room_Type` varchar(40) NOT NULL,
  `Room_Spec` varchar(255) NOT NULL,
  `Price` int(11) NOT NULL,
  `RImage_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room_list`
--

INSERT INTO `room_list` (`SID`, `Room_Type`, `Room_Spec`, `Price`, `RImage_ID`) VALUES
(1, 'Room1', 'cleaningStaff,Fridge,Hotpot,sheep,Toiletpaper,Toilet,Wardrobe,Hairdryer,Tub,Washroom,Towel,Sliper,Desk,Television,Phone,Channel', 5000, 1),
(2, 'Room2', 'cleaningStaff,Fridge,Hotpot,sheep,Toiletpaper,Toilet,Hairdryer,Towel,Sliper,Desk,Phone,Washroom', 4000, 2),
(3, 'Room3', 'cleaningStaff,Hotpot,sheep,Toiletpaper,Toilet,Wardrobe,Hairdryer,Towel,Sliper,Desk,Phone,Television', 3500, 3),
(4, 'Room4', 'cleaningStaff,Hotpot,Wardrobe,Toiletpaper,Hairdryer,Towel,Sliper,Desk,Phone', 2000, 4),
(5, 'Car1', 'cleaningStaff,Fridge,Hotpot,Sheep,Wardrob,Toiletpapere,Toilet,Hairdryer,Tub,Washroom,Towel,Sliper,Desk,Television,Phone,Channel', 6000, 5),
(6, 'Car2', 'cleaningStaff,Fridge,Hotpot,Sheep,Wardrob,Toiletpapere,Hairdryer,Towel,Sliper,Desk,Television,Phone,Channel', 4000, 6),
(7, 'Car3', 'cleaningStaff,Fridge,Hotpot,Sheep,Wardrob,Toiletpapere,Hairdryer,Towel,Sliper,Phone', 1800, 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `room_list`
--
ALTER TABLE `room_list`
  ADD PRIMARY KEY (`SID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `room_list`
--
ALTER TABLE `room_list`
  MODIFY `SID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
