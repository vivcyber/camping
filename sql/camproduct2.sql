-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2022 年 05 月 28 日 07:52
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
-- 資料表結構 `camproduct`
--

CREATE TABLE `camproduct` (
  `sid` int(9) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `productcategory` varchar(255) NOT NULL,
  `productinfo` text NOT NULL,
  `productimg` varchar(255) NOT NULL,
  `productprice` varchar(255) NOT NULL,
  `productleft` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `camproduct`
--

INSERT INTO `camproduct` (`sid`, `productname`, `productcategory`, `productinfo`, `productimg`, `productprice`, `productleft`) VALUES
(14, 'OneTigris壹虎 啟示自立帳 CE-HZP01-CB', '帳篷', '堅固的防風和遮蔽結構的穩定性\r\n防止側風影響露營者的睡眠\r\n帶有尼龍網狀內帳\r\n', 'tent_onetiger', '5511', '10'),
(15, 'tent-Mark DESIGNS 馬戲團帳篷TC-DX', '帳篷', 'tent-Mark最著名的是他們所使用的特殊布料-TC科技棉，\r\n在下雨時棉質纖維會膨脹並堵住水氣因而防水，不易結露，\r\n兼具遮光與透風的特點，夏天通風、冬天保暖，算是非常耐用與實用的帳蓬，\r\n同時也是很多網美照、IG上常出現的產品；\r\n這款帳蓬在2016年6月第一次上市時，就創下一天內就完售的超人氣記錄!', 'tent_mark', '19500', '8'),
(16, 'Naturehike 亙 戶外加厚棉布屋式帳篷4.8 Glamping系列', '帳篷', 'Glamping系列，亙4.8 享受戶外美學\r\n雙人寬敞設計，約4.8平方公尺\r\n主要材質是經過特別的防霉處理後的棉布材質，\r\n優點是能將防潑水與透氣性合理平衡，舒適不悶熱\r\n以此材質製作的帳篷質感與吸睛程度也非常的高\r\n但小編不建議長期在雨中使用哦~', 'tent_naturehike', '18900', '23'),
(17, 'ANGLE HIRO 戰術桌全套 Helinox Tactical Table M戰術桌 ', '桌椅', '搭配Helinox Table M提升桌面的實用性\r\n桌邊增設機能掛桿可掛裝備及餐具\r\n桌面四角設計M8尺寸固定孔洞\r\n可搭配燈桿與角度多功能擴充鋁桿\r\n耐用鋁合金框架輕量便攜組裝快速', 'desk_angelhiro', '2900', '30'),
(18, 'Coleman 扶手休閒椅 CM-38829/CM-38831 ', '桌椅', '兩側皆有飲料架方便存放手機飲料\r\n大小適中配色百搭可輕鬆收進束袋\r\n耐用及穩固的基本椅子且便於攜帶\r\n基本入門款椅子，多種場合皆適用\r\n附收納袋便於收納攜帶', 'chair_coleman', '900', '45'),
(19, 'ANGLE露營風格保冰桶 10QT / 方形飲料桶 Water Jug Cooler', '餐廚', '5cm 雙層厚實 PU 隔熱設\r\n360度防漏水密封膠條長效保冰\r\n上蓋防滑墊置物安穩也能做為椅子', 'cook_angle_black2', '4200', '33');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `camproduct`
--
ALTER TABLE `camproduct`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `camproduct`
--
ALTER TABLE `camproduct`
  MODIFY `sid` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
