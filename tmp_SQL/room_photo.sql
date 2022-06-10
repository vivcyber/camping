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
-- Table structure for table `room_photo`
--

CREATE TABLE `room_photo` (
  `sid` int(100) NOT NULL,
  `Room_Type` varchar(40) NOT NULL,
  `Room_Image` varchar(255) NOT NULL,
  `Created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room_photo`
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
(47, 'Room4', 'campRoom4-2.jpg', '0000-00-00'),
(66, 'Room4', 'campRoom4-3.jpg', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `room_photo`
--
ALTER TABLE `room_photo`
  ADD PRIMARY KEY (`sid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `room_photo`
--
ALTER TABLE `room_photo`
  MODIFY `sid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
