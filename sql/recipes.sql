-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-06-11 13:51:44
-- 伺服器版本： 10.4.24-MariaDB
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
-- 資料表結構 `recipes`
--

CREATE TABLE `recipes` (
  `sid` int(11) NOT NULL,
  `resname` varchar(255) NOT NULL,
  `tool` varchar(255) NOT NULL,
  `ingredient` varchar(255) NOT NULL,
  `tutorial` text NOT NULL,
  `serves` varchar(255) NOT NULL,
  `cook_time` varchar(255) NOT NULL,
  `recipetype` varchar(255) NOT NULL,
  `resimgtext` text NOT NULL,
  `resimg` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `recipes`
--

INSERT INTO `recipes` (`sid`, `resname`, `tool`, `ingredient`, `tutorial`, `serves`, `cook_time`, `recipetype`, `resimgtext`, `resimg`) VALUES
(1, '麻辣鍋', '湯鍋或任何有深度的鍋子，若能準備中間有隔板的鴛鴦鍋更棒。', '麻辣鍋湯底\r\n高麗菜或其他葉菜類\r\n鴨血\r\n豆腐\r\n火鍋料\r\n各式肉類\r\n水\r\n', '1.將麻辣鍋底放入鍋中加熱。\r\n2.依序放入火鍋料、鴨血、豆腐和菇類等較耐煮的食材。\r\n3.若有露營夥伴不敢吃辣，可使用鴛鴦鍋、在另一側烹4.煮不辣的湯底。\r\n5.鍋內煮滾後即可享用，肉片隨涮隨吃。', '4-6', '30', '素/葷', '', ''),
(2, '壽喜燒', '湯鍋或任何有深度的鍋子，若能準備中間有隔板的鴛鴦鍋更棒。', '美式賣場買的柴魚醬油（日式醬油）或壽喜燒醬汁\r\n味醂\r\n蔥段\r\n高麗菜或其他葉菜類\r\n火鍋料\r\n牛肉或其他肉片\r\n水\r\n\r\n', '1.將肉片和蔥段放入鍋中拌炒。\r\n2.加入柴魚醬油、味醂和水，比例大約是 1：1：2，可3.依個人口味調整湯汁濃度。\r\n4.將食材加入鍋中烹煮，煮熟後即可享用！', '4-6', '25', '素/葷', '', ''),
(51, '牛油果雞蛋煙肉三文治', '無', '牛油果 1 個、煙肉 4塊、麵包 4 塊、雞蛋2隻', '1）先煎好一隻太陽蛋 2）將煙肉煎至焦香 3）使用煙肉油分將麵包煎香 4）牛油果起肉，切粒，輕輕攪拌至半果溶狀態 5）將配料順序放上方包及灑上鹽及胡椒調味', '1-2', '15分', '葷', '歐伊系!', '4330215149b94fc877347e7ebb41c9cb.png'),
(52, 'Pancake', '平底鍋', '日本 Pancake 預拌粉、雞蛋 1 至 2 隻、鮮奶 1 盒、牛油', '1）將雞蛋及鮮奶加入預拌粉 2）於平底鍋上加入牛油並預熱 3）倒入 Pancake 漿使用慢火每邊煎約 5 分鐘  4）加上果醬、煉奶或水果作配料', '1-2', '20分', '素', '甜而不膩，出門遠遊好伙食！', '2ff3bef4f67bce63afd3174d29c60f4d.png'),
(53, '白菜肥牛壽喜燒鍋', '火鍋', '火鍋肥牛片300g、大白菜半個、洋蔥半個、金針菇或其他菇類', '1）大白菜剝開將菜葉洗乾淨，洋蔥切幼條  2）一層白菜一層肥牛的方式，層層疊放。然後切成大片狀。3）將洋蔥、一半菇鋪在鍋底，再將每塊菜肉從鍋的外圍向內擺放，中間再放菇。  4）將壽喜燒醬汁和雞湯倒入鍋中，將食材煮熟即可', '2-4', '30分', '葷', '好飽', '68271727e3a1c50443bdff434ce138f6.png'),
(54, '三文魚燉飯', '平底鍋', '米2杯、三文魚2-3塊、洋蔥半個、蘑菇3-4隻、雞湯一盒、牛奶或鮮奶油150g', '1）將洋蔥、蘑菇切成小塊；將蒜切片；用鹽、胡椒將三文魚調味；米洗好並先浸20分鐘。  2）落油熱鍋，煎熟三文魚後暫時取起。  3）將洋蔥、蒜、蘑菇炒香。  4）加入已浸泡的白米炒熱。  5）倒入牛奶或奶油翻炒，蓋上鍋蓋燉煮。煮至濃稠後，可適量加入雞湯或水再繼續燉煮，直至米粒全熟。  6）在飯上放上先前煎好的三文魚。', '1-2', '20分', '葷', '暖呼呼的', '8ab7279e810b67b87fdecd54b63fbb86.png'),
(55, '北非蛋', '平底鍋', '罐頭蕃茄1罐、蛋3隻、洋蔥半個、紅椒半個、蘑菇4隻、麵包數塊', '1）將洋蔥、紅椒、蘑菇切成小塊。  2）預熱平底鍋，落油，將洋蔥、紅椒炒香。  3）放入蘑菇炒熱，再加入適量鹽、胡椒調味。  4）將罐頭番茄倒入平底鍋鍋，加入半杯清水，蓋上鍋蓋將番茄煮到軟爛，再收乾少少水。  5）在番茄糊中用匙羹挖幾個淺洞，打入雞蛋。  6）蓋上鍋蓋煮雞蛋，因應時間可製作流心蛋或全熟蛋  7）可在平底鍋烤麵包，烤脆兩面後配上北非蛋食。', '1-2', '20分', '素', '北非諜影', '5d0b4305c8d7f5735d520d022bd76ae7.png'),
(56, '三文魚燉飯', '平底鍋', '米2杯、三文魚2-3塊、洋蔥半個、蘑菇3-4隻、雞湯一盒、牛奶或鮮奶油150g', '1）將洋蔥、蘑菇切成小塊；將蒜切片；用鹽、胡椒將三文魚調味；米洗好並先浸20分鐘。 2）落油熱鍋，煎熟三文魚後暫時取起。 3）將洋蔥、蒜、蘑菇炒香。 4）加入已浸泡的白米炒熱。 5）倒入牛奶或奶油翻炒，蓋上鍋蓋燉煮。煮至濃稠後，可適量加入雞湯或水再繼續燉煮，直至米粒全熟。 6）在飯上放上先前煎好的三文魚。', '1-2', '20分', '葷', '暖呼呼的', '7bef52593f9f24033b7c448da7066c97.png');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `recipes`
--
ALTER TABLE `recipes`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
