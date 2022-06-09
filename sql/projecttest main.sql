-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2022 年 06 月 09 日 09:40
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
-- 資料庫： `projecttest`
--

-- --------------------------------------------------------

--
-- 資料表結構 `act`
--

CREATE TABLE `act` (
  `act_id` int(255) NOT NULL,
  `act_name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `act_s_time` datetime NOT NULL,
  `act_e_time` datetime NOT NULL,
  `min_people` int(255) NOT NULL,
  `max_people` int(255) NOT NULL,
  `min_age` int(255) DEFAULT NULL,
  `max_age` int(255) DEFAULT NULL,
  `act_price` int(255) NOT NULL,
  `act_desc` varchar(255) CHARACTER SET utf8 NOT NULL,
  `act_notice` varchar(500) CHARACTER SET utf8 NOT NULL,
  `act_schedule` varchar(500) CHARACTER SET utf8 NOT NULL,
  `act_prepare` varchar(500) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `act`
--

INSERT INTO `act` (`act_id`, `act_name`, `act_s_time`, `act_e_time`, `min_people`, `max_people`, `min_age`, `max_age`, `act_price`, `act_desc`, `act_notice`, `act_schedule`, `act_prepare`) VALUES
(1, '漂流探險', '2022-04-01 09:00:00', '2022-09-30 09:00:00', 1, 10, 5, 65, 1000, '1. 輕鬆自在：\r\n利用溪水漂流的方式，一覽南澳獨特山水景色，並享受沁涼溪水的小旅行。\r\n2. 老少咸宜：\r\n在漂流行程中，除可讓小孩子學習獨立自主的行為態度，更能有效促進親子關係唷！\r\n3. 安全有趣：\r\n溪水漂流活動好玩安全，除行前的安全規定與訓練教學外，全程皆由教練陪同，不但讓大家玩得安全，更玩得盡興！', '1. 活動費用不含交通接駁，請您自行開車前往至指定地點集合。\r\n2. 當天集合時到場後請主動與帶隊教練或承辦人電話聯繫，以避免找不到人。\r\n3. 活動過程中，需聽從教練指示，不得脫隊，不得卸下任何安全裝備。\r\n4. 活動當天集合時，請勿遲到。為確保其他參加者的權益，遲到超過半小時，不再等待直接出發，且無退款。\r\n5. 本公司教練保留臨場路線規劃及活動安排之權利。\r\n6. 當天天氣狀況視情況照常進行，除非另外通知。', '上午團\r\n09:00 那山那谷休閒農場集合\r\n09:30 出發換裝、行前講解、暖身\r\n10:00 開始漂流，沿途體驗沁涼溪水、激流冒險、團隊互助、壯闊山景！\r\n12:00 返回那山那谷休閒農場洗澡換裝\r\n\r\n下午團\r\n13:00 那山那谷休閒農場集合\r\n13:30 出發換裝、行前講解、暖身\r\n14:00 開始漂流，沿途體驗沁涼溪水、激流冒險、團隊互助、壯闊山景！\r\n16:00 返回那山那谷休閒農場洗澡換裝\r\n\r\n活動時間約 3 小時', '1. 活動當天著泳裝或輕便服裝下水（請勿穿牛仔褲）。\r\n2. 活動當天會提供溯溪鞋，為了換裝方便，建議自行攜帶拖鞋或涼鞋。\r\n3. 個人飲水。\r\n4. 個人毛巾、塑膠袋（當天放置車上即可）。\r\n5. 有戴眼鏡的朋友，請加掛眼鏡帶，以防被溪水沖掉。\r\n6. 使用隱形眼鏡的朋友，請多帶一副一般眼鏡以下水備用。\r\n7. 活動前請先修剪指甲，長指甲於活動時易斷裂。\r\n8. 我們會準備防水相機為大家拍照，但若您也想要自行攜帶防水相機也可以，但務必要注意固定方式，因為相機在溪裡的遺失率很高。\r\n9. 手機、錢包、鑰匙、手錶、項鍊、戒指在溪中容易損壞且遺失，請務必放置自己車上，其他貴重物品也請勿帶下水，如不慎掉落溪中，教練會盡力協尋，但恕無法保證能找回。'),
(2, '漂流探險', '2022-04-01 13:00:00', '2022-09-30 13:00:00', 1, 10, 5, 65, 1000, '', '', '', ''),
(3, '親子溯溪', '2022-04-01 09:00:00', '2022-09-30 09:00:00', 4, 10, 5, 65, 1200, '1. 適合初學者，行程促進親子交流與團隊互助，體驗在溪流中冒險的強健心智！\r\n2. 造訪不為人知的世外桃源，無名溪水質豐沛清澈，沿途的小3. 瀑布一座接一座，生態魚況豐富，溯行探密最能發掘它的樂趣。\r\n4人以上方可成團，歡迎預約報名。', '1. 活動費用不含交通接駁，請您自行開車前往至指定地點集合。\r\n2. 當天集合時到場後請主動與帶隊教練或承辦人電話聯繫，以避免找不到人。\r\n3. 活動過程中，需聽從教練指示，不得脫隊，不得卸下任何安全裝備。\r\n4. 活動當天集合時，請勿遲到。為確保其他參加者的權益，遲到超過半小時，不再等待直接出發，且無退款。\r\n5. 本公司教練保留臨場路線規劃及活動安排之權利。\r\n6. 當天天氣狀況視情況照常進行，除非另外通知。', '上午團\r\n09:00 那山那谷休閒農場集合（請自行開車前往）\r\n09:30 出發換裝、行前講解、暖身\r\n10:00 開始溯溪，逆流而上，沿途體驗峽谷、深潭，團隊互助、溪流冒險\r\n12:00 返回那山那谷休閒農場洗澡換裝\r\n\r\n下午團\r\n13:00 那山那谷休閒農場集合（請自行開車前往）\r\n13:30 出發換裝、行前講解、暖身\r\n14:00 開始溯溪，逆流而上，沿途體驗峽谷、深潭，團隊互助、溪流冒險\r\n16:00 返回那山那谷休閒農場洗澡換裝', '1. 活動當天著泳裝或輕便服裝下水（請勿穿牛仔褲），也可帶蛙鏡浮潛看小魚。\r\n2. 活動當天會提供溯溪鞋，為了換裝方便，建議自行攜帶拖鞋或涼鞋。\r\n3. 個人毛巾、塑膠袋（當天放置車上即可）。\r\n4. 有戴眼鏡的朋友，請加掛眼鏡帶，以防被溪水沖掉。\r\n5. 使用隱形眼鏡的朋友，請多帶一副一般眼鏡以下水備用。\r\n6. 活動前請先修剪指甲，長指甲於活動時易斷裂。\r\n7. 我們會準備防水相機為大家拍照，但若您也想要自行攜帶防水相機也可以，但務必要注意固定方式，因為相機在溪裡的遺失率很高。\r\n8. 手機、錢包、鑰匙、手錶、項鍊、戒指在溪中容易損壞且遺失，請務必放置自己車上，其他貴重物品也請勿帶下水，如不慎掉落溪中，教練會盡力協尋，但恕無法保證能找回。'),
(4, '親子溯溪', '2022-04-01 13:00:00', '2022-09-30 13:00:00', 4, 10, 5, 65, 1200, '', '', '', ''),
(5, '全地形沙灘車', '2022-04-01 10:00:00', '2022-09-30 10:00:00', 1, 10, 5, 65, 1200, '前進溪谷廣闊山景，享受穿越在不同地形上的樂趣！徜徉南澳溪谷、沙灘奔馳、叢林穿越、網美拍照。親子情侶或是三五好友都能雙載輕鬆玩，兩人即可出發！', '1. 駕駛者年齡年滿 16 歲且身體健康無虞，有心血管疾病、孕婦請勿報名。駕駛沙灘車不須駕照，但有機車騎乘經驗者為佳。\r\n2. 每台沙灘車限乘兩人。\r\n3. 患有下列疾病或其他不宜受到過度刺激的旅客無法參加此項目：高血壓、心臟病、懷孕婦女、癲癇、氣喘。\r\n4. 活動費用不含交通接駁，請您自行開車前往至指定地點集合。\r\n5. 當天集合時到場後請主動與帶隊教練或承辦人電話聯繫，以避免找不到人。\r\n6. 活動過程中，需聽從教練指示，不得脫隊，不得卸下任何安全裝備。\r\n7. 活動當天集合時，請勿遲到。為確保其他參加者的權益，遲到超過半小時，不再等待直接出發，且無退款。\r\n8. 本公司教練保留臨場路線規劃及活動安排之權利。\r\n9. 當天天氣狀況視情況照常進行，除非另外通知。', '請於預訂之集合時間提前 10 分鐘抵達，報到後進行活動介紹、設備及操作講解並示範。\r\n\r\n上午團\r\n10:00 那山那谷休閒農場集合\r\n10:10 活動介紹、設備介紹與操作講解示範\r\n10:30 溪谷自駕 – 教練隨團\r\n11:30 返回那山那谷休閒農場\r\n\r\n下午團\r\n14:00 那山那谷休閒農場集合\r\n14:10 活動介紹、設備介紹與操作講解示範\r\n14:30 溪谷自駕 – 教練隨團\r\n15:30 返回那山那谷休閒農場', '穿著輕便衣服以及攜帶愉快的心。'),
(6, '全地形沙灘車', '2022-04-01 14:00:00', '2022-09-30 14:00:00', 1, 10, 5, 65, 1200, '', '', '', ''),
(7, '全地形沙灘車', '2022-04-01 16:00:00', '2022-09-30 16:00:00', 1, 10, 5, 65, 1200, '', '', '', ''),
(8, '夜遊觀星月', '2022-01-01 20:00:00', '2022-12-31 20:00:00', 1, 10, 1, 130, 200, '宜蘭五大「夢幻夜景」神級海景視野是許多攝影愛好者的朝聖之地，從遠處就能看到清晰的龜山島。 這裡白天擁有美翻的碧海藍天風景，入夜轉變為星光熠熠夜景，非常值得一去！', '1. 活動介紹過程請跟緊隊伍，請勿擅自脫隊。\r\n2. 夜晚行進過程請勿大聲喧嚷。', '請於預訂之集合時間提前 10 分鐘抵達，報到後進行活動介紹、設備及操作講解並示範。\r\n\r\n20:00 那山那谷休閒農場集合\r\n20:10 活動介紹、設備介紹與操作講解示範\r\n20:30 駕駛機車 – 抵達夜景區、夜景區介紹\r\n21:40 自由活動\r\n22:00 返回那山那谷休閒農場', '1. 穿著輕便衣服以及攜帶愉快的心。\r\n2. 請勿攜帶過亮手電筒會影響野生動物。');

-- --------------------------------------------------------

--
-- 資料表結構 `act_img`
--

CREATE TABLE `act_img` (
  `act_img_id` int(255) NOT NULL,
  `act_rf_img` varchar(255) NOT NULL,
  `act_atv_img` varchar(255) NOT NULL,
  `act_ups_img` varchar(255) NOT NULL,
  `act_nt_img` varchar(255) NOT NULL,
  `act_leaders_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `act_leaders`
--

CREATE TABLE `act_leaders` (
  `act_l_id` int(255) NOT NULL,
  `act_l_name` varchar(255) NOT NULL,
  `act_l_age` int(255) NOT NULL,
  `act_l_mobile` varchar(255) NOT NULL,
  `act_l_address` varchar(255) NOT NULL,
  `act_l_license` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `act_leaders`
--

INSERT INTO `act_leaders` (`act_l_id`, `act_l_name`, `act_l_age`, `act_l_mobile`, `act_l_address`, `act_l_license`) VALUES
(1, '張兆軒', 30, '0970500901', '新北市', '潛水教練'),
(2, '簡文清', 31, '0912345578', '新北市', '健身教練');

-- --------------------------------------------------------

--
-- 資料表結構 `act_order`
--

CREATE TABLE `act_order` (
  `order_id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `act_id` int(11) NOT NULL,
  `act_l_id` int(11) NOT NULL,
  `num_people` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `order_date` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `address_book`
--

CREATE TABLE `address_book` (
  `sid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `address_book`
--

INSERT INTO `address_book` (`sid`, `name`, `email`, `mobile`, `birthday`, `address`, `created_at`) VALUES
(1, '酷寶', '5781@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(2, '煞氣A健康的郭', '546@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(5, '李小明4', '5387@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(6, '李小明5', '5297@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(7, '李小明6', '324@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(8, '李小明7', '5729@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(9, '李小明8', '7673@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(10, '李小明9', '1179@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(13, '健氣☆ㄟ如', '2876@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(17, '李小明4', '841@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(18, '李小明5', '5580@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(19, '李小明6', '5375@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(20, '李小明7', '133@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(21, '李小明8', '4544@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(22, '李小明9', '2319@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(23, '李小明10', '7962@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(24, '花蓮雪莉', '2854@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(25, '高雄郭郭', '383@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(26, '李小明13', '3352@gmail.com', '0918111222', '1990-05-07', '台南市', '2020-04-06 16:31:02'),
(27, '方大同', '5613@gmail.com', '0918-222555', '1990-04-01', '新北市', '2020-04-08 11:50:22'),
(29, 'gdsgdsfg', '3196@gmail.com', '0918-222333', '2020-04-08', 'dfgdfg\r\n                    ', '2020-04-09 14:56:05'),
(30, '哈老大', '1959@gmail.com', '0918-222333', '2020-04-01', '哈老大', '2020-04-09 15:11:01'),
(33, '方大同', '206@gmail.com', '0918-222555', '2020-04-01', 'asdfasd', '2020-04-09 16:31:09'),
(34, '林小白', '5155@gmail.com', '0999-123-456', '1995-05-05', '台北市', '2020-04-10 09:23:56'),
(36, 'dfhdfh', '5156@gmail.com', 'fghf', '2020-04-09', 'fgh', '2020-04-10 10:12:09'),
(37, '>sdfsdasd\\\\\\\\\\\\', '316@gmail.com', '0918-222333', '2020-04-01', 'sdfgsd', '2020-04-10 14:03:13'),
(38, '來來來', '1234@gmail.com', '0936223223', '2022-05-19', '來來來來', '2022-05-28 00:54:37');

-- --------------------------------------------------------

--
-- 資料表結構 `admin_list`
--

CREATE TABLE `admin_list` (
  `admin_id` int(11) NOT NULL,
  `admin_account` varchar(255) NOT NULL,
  `admin_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `admin_list`
--

INSERT INTO `admin_list` (`admin_id`, `admin_account`, `admin_password`) VALUES
(1, 'YenYu', 'YenYu');

-- --------------------------------------------------------

--
-- 資料表結構 `camproduct1`
--

CREATE TABLE `camproduct1` (
  `sid` int(9) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `productcategory` varchar(255) NOT NULL,
  `productcolor` varchar(255) NOT NULL,
  `productinfo` text NOT NULL,
  `productimg` varchar(255) NOT NULL,
  `productprice` varchar(255) NOT NULL,
  `productleft` varchar(255) NOT NULL,
  `productspec` text NOT NULL,
  `productinclude` text NOT NULL,
  `productimg2` varchar(255) NOT NULL,
  `productimg3` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `camproduct1`
--

INSERT INTO `camproduct1` (`sid`, `productname`, `productcategory`, `productcolor`, `productinfo`, `productimg`, `productprice`, `productleft`, `productspec`, `productinclude`, `productimg2`, `productimg3`) VALUES
(14, 'OneTigris壹虎 啟示自立帳 CE-HZP01-CB', '帳篷', '沙色', '輕量六角形自立帳，前後門多了置物空間，更堅固防風\r\n', 'tent_onetiger', '5511', '10', '尺寸：220cm*132cm*110cm\r\n重量：2.4kg\r\n包裝：50cm*16cm\r\n材質：20D 格子防撕裂聚酯外帳篷、70D 尼龍帳篷底部、40D 尼龍網內帳篷、YKK® 拉鍊、#7001 鋁合金帳篷桿\r\n防水等級：1500mm\r\n', '帳篷*1，帳篷支架*3，營繩帶調節器*4，地釘*10，收納袋*1', 'tent_onetiger_1', 'tent_onetiger_2'),
(15, 'tent-Mark DESIGNS 馬戲團帳篷TC-DX', '帳篷', '沙色', 'tent-Mark最著名的是他們所使用的特殊布料-TC科技棉，\r\n在下雨時棉質纖維會膨脹並堵住水氣因而防水，不易結露，\r\n兼具遮光與透風的特點，夏天通風、冬天保暖，算是非常耐用與實用的帳蓬，\r\n同時也是很多網美照、IG上常出現的產品；\r\n這款帳蓬在2016年6月第一次上市時，就創下一天內就完售的超人氣記錄!', 'tent_mark', '19500', '8', '品名：tent-Mark DESIGNS 馬戲團帳篷TC-DX\r\n材質：\r\n帳篷本體：科技棉TC(65%聚酯纖維、35%棉)/ 加工:表面顏料塗層\r\n下擺：防撕裂聚酯纖維150D/ 加工:PU塗層 \r\n營柱：鋼製5段式主營柱(Φ32mm/280cm) x1/ 鋼製4段式副營柱(Φ22mm/200cm) x1\r\n收納袋：防撕裂聚酯纖維150D、聚酯纖維網布\r\n耐水壓：1500mm \r\n尺寸：442×420×(H)280cm\r\n收納尺寸：Φ27×63cm\r\n重量：12.3kg(包含營釘、營繩、營柱、收納袋)', '副營柱*1、營釘(主體用)*16、營釘(定位用)*1、營繩*5、收納袋*4、搭設定位用套件', 'tent_mark_1', 'tent_mark_2'),
(16, 'Naturehike 亙 戶外加厚棉布屋式帳篷4.8 Glamping系列', '帳篷', '沙色', 'Glamping系列，亙4.8 享受戶外美學\r\n雙人寬敞設計，約4.8平方公尺\r\n主要材質是經過特別的防霉處理後的棉布材質，\r\n優點是能將防潑水與透氣性合理平衡，舒適不悶熱\r\n以此材質製作的帳篷質感與吸睛程度也非常的高\r\n但小編不建議長期在雨中使用哦~', 'tent_naturehike', '18900', '23', '品牌: 挪客 材質: 外帳:混紡棉布 拉鍊: YKK拉鍊 紗網:滌綸網紗 底帳:耐磨PVC複合布 縫線:膨脹線 尺寸:展開: 235X210X145cm、收納: 78X25X35cm  顏色:流沙金 重量:約16.2kg(含配件和收納袋)', '支撐杆X4,天幕杆X2,風繩X14,鋼釘X18', 'tent_naturehike_2', 'tent_naturehike_3'),
(17, 'ANGLE HIRO 戰術桌全套 Helinox Tactical Table M戰術桌 ', '桌椅', '黑色', '搭配Helinox Table M提升桌面的實用性\r\n桌邊增設機能掛桿可掛裝備及餐具\r\n桌面四角設計M8尺寸固定孔洞\r\n可搭配燈桿與角度多功能擴充鋁桿\r\n耐用鋁合金框架輕量便攜組裝快速', 'desk_angelhiro', '2900', '30', '品名：ANGLE HIRO 戰術桌板 適用Helinox Tactical Table M戰術桌 尺寸：41 X 61cm (桌板固定處同Helinox Table M) 重量：1.3kg 包裝：63 x 43 x 8.5cm / 1.5kg 款式：單一款式 材質：鋁 ', '戰術桌板 x 1、收納袋 x 1', 'desk_angelhiro_1', 'desk_angelhiro_3'),
(18, 'Coleman 扶手休閒椅 CM-38829/CM-38831 ', '桌椅', '黑色', '兩側皆有飲料架方便存放手機飲料\r\n大小適中配色百搭可輕鬆收進束袋\r\n耐用及穩固的基本椅子且便於攜帶\r\n基本入門款椅子，多種場合皆適用\r\n附收納袋便於收納攜帶', 'chair_coleman', '900', '45', '使用尺寸：約81×51×高87cm 收納尺寸：約14×14×高87cm 重量：約2.95kg 材質：座布 ／聚酯纖維、骨架 ／鋼 座面幅：約53cm 座面高：約43cm 附屬配件：收納袋  最大承載重量：約80kg', '配有寬大的扶手。 扶手上各有一個杯架。', 'chair_coleman_1', 'chair_coleman_2'),
(19, 'ANGLE露營風格保冰桶 10QT / 方形飲料桶 Water Jug Cooler', '', '綠色', '5cm 雙層厚實 PU 隔熱設\r\n360度防漏水密封膠條長效保冰\r\n上蓋防滑墊置物安穩也能做為椅子', 'cook_angle_black', '4200', '33', '品名：ANGLE 露營風格保冰桶 10QT / 方形飲料桶 Water Jug Cooler 尺寸：外部尺寸 : 27 x 24 x 35 cm / 內部尺寸 : 19 x 18 x 27 cm 重量：4.5 kg 容量：約 9.5 L / 2.5 Gallon / 10 QT 規格：黑色、沙色 材質：LLDPE 內外一體、PU 發泡保溫層、尼龍塑料手柄、矽膠密封條、304 不鏽鋼水龍頭 內容：保冰桶 x 1、304 不鏽鋼水龍頭 x 1、旋塞 x 1 保冰保冷：裝滿冰塊，在25°室內，最長7天化完。 適用：野餐、露營、垂釣、駕駛、家庭外出聚會、運動賽事、野餐和BBQ、其他戶外活動等', '替換式配件 水龍頭＋塞蓋  - 保冰桶 / 飲水桶 功能任意轉換 - ．304食品級不鏽鋼水龍頭 - 飲用水、各式飲品安全無虞 ．保冰用旋式塞蓋 - 完全阻塞，液體不易漏出', 'cook_angle_black1', 'cook_angle_black2');

-- --------------------------------------------------------

--
-- 資料表結構 `camproduct2`
--

CREATE TABLE `camproduct2` (
  `sid` int(9) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `productcategory` varchar(255) NOT NULL,
  `productcolor` varchar(255) NOT NULL,
  `productinfo` text NOT NULL,
  `productimg` varchar(255) NOT NULL,
  `productprice` varchar(255) NOT NULL,
  `productleft` varchar(255) NOT NULL,
  `productspec` text NOT NULL,
  `productinclude` text NOT NULL,
  `productimg2` varchar(255) NOT NULL,
  `productimg3` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `camproduct2`
--

INSERT INTO `camproduct2` (`sid`, `productname`, `productcategory`, `productcolor`, `productinfo`, `productimg`, `productprice`, `productleft`, `productspec`, `productinclude`, `productimg2`, `productimg3`) VALUES
(14, 'OneTigris壹虎 啟示自立帳 CE-HZP01-CB', '帳篷', '沙色', '輕量六角形自立帳，前後門多了置物空間，更堅固防風\r\n', 'tent_onetiger.jpg', '5511', '10', '尺寸：220cm*132cm*110cm\r\n重量：2.4kg\r\n包裝：50cm*16cm\r\n材質：20D 格子防撕裂聚酯外帳篷、70D 尼龍帳篷底部、40D 尼龍網內帳篷、YKK® 拉鍊、#7001 鋁合金帳篷桿\r\n防水等級：1500mm\r\n', '帳篷*1，帳篷支架*3，營繩帶調節器*4，地釘*10，收納袋*1', 'tent_onetiger_1.jpg', 'tent_onetiger_2.jpg'),
(15, 'tent-Mark DESIGNS 馬戲團帳篷TC-DX', '帳篷', '沙色', 'tent-Mark最著名的是他們所使用的特殊布料-TC科技棉，\r\n在下雨時棉質纖維會膨脹並堵住水氣因而防水，不易結露，\r\n兼具遮光與透風的特點，夏天通風、冬天保暖，算是非常耐用與實用的帳蓬，\r\n同時也是很多網美照、IG上常出現的產品；\r\n這款帳蓬在2016年6月第一次上市時，就創下一天內就完售的超人氣記錄!', 'tent_mark.jpg', '19500', '8', '品名：tent-Mark DESIGNS 馬戲團帳篷TC-DX\r\n材質：\r\n帳篷本體：科技棉TC(65%聚酯纖維、35%棉)/ 加工:表面顏料塗層\r\n下擺：防撕裂聚酯纖維150D/ 加工:PU塗層 \r\n營柱：鋼製5段式主營柱(Φ32mm/280cm) x1/ 鋼製4段式副營柱(Φ22mm/200cm) x1\r\n收納袋：防撕裂聚酯纖維150D、聚酯纖維網布\r\n耐水壓：1500mm \r\n尺寸：442×420×(H)280cm\r\n收納尺寸：Φ27×63cm\r\n重量：12.3kg(包含營釘、營繩、營柱、收納袋)', '副營柱*1、營釘(主體用)*16、營釘(定位用)*1、營繩*5、收納袋*4、搭設定位用套件', 'tent_mark_1.jpg', 'tent_mark_2.jpg'),
(16, 'Naturehike 亙 戶外加厚棉布屋式帳篷4.8 Glamping系列', '帳篷', '沙色', 'Glamping系列，亙4.8 享受戶外美學\r\n雙人寬敞設計，約4.8平方公尺\r\n主要材質是經過特別的防霉處理後的棉布材質，\r\n優點是能將防潑水與透氣性合理平衡，舒適不悶熱\r\n以此材質製作的帳篷質感與吸睛程度也非常的高\r\n但小編不建議長期在雨中使用哦~', 'tent_naturehike.jpg', '18900', '23', '品牌: 挪客 材質: 外帳:混紡棉布 拉鍊: YKK拉鍊 紗網:滌綸網紗 底帳:耐磨PVC複合布 縫線:膨脹線 尺寸:展開: 235X210X145cm、收納: 78X25X35cm  顏色:流沙金 重量:約16.2kg(含配件和收納袋)', '支撐杆X4,天幕杆X2,風繩X14,鋼釘X18', 'tent_naturehike_2.jpg', 'tent_naturehike_3.jpg'),
(17, 'ANGLE HIRO 戰術桌全套 Helinox Tactical Table M戰術桌 ', '桌椅', '黑色', '搭配Helinox Table M提升桌面的實用性\r\n桌邊增設機能掛桿可掛裝備及餐具\r\n桌面四角設計M8尺寸固定孔洞\r\n可搭配燈桿與角度多功能擴充鋁桿\r\n耐用鋁合金框架輕量便攜組裝快速', 'desk_angelhiro.jpg', '2900', '30', '品名：ANGLE HIRO 戰術桌全套 (附桌腳) 桌板適用Helinox Tactical Table M戰術桌\r\n尺寸：HIRO戰術桌板 ：41 X 61cm / HIRO戰術桌腳：展開後高度約為38cm (桌板固定處同Helinox Table M)\r\n重量：桌板約: 1.3kg / 桌腳約: 0.44kg\r\n包裝：63 x 43 x 8.5cm / 2.3kg\r\n款式：單一款式\r\n材質：鋁\r\n', '戰術桌板 x 1\r\n收納袋 x 1', 'desk_angelhiro_1.jpg', 'desk_angelhiro_3.jpg'),
(18, 'Coleman 扶手休閒椅 CM-38829/CM-38831 ', '桌椅', '黑色', '兩側皆有飲料架方便存放手機飲料\r\n大小適中配色百搭可輕鬆收進束袋\r\n耐用及穩固的基本椅子且便於攜帶\r\n基本入門款椅子，多種場合皆適用\r\n附收納袋便於收納攜帶', 'chair_coleman.jpg', '900', '45', '使用尺寸：約81×51×高87cm \r\n收納尺寸：約14×14×高87cm \r\n重量：約2.95kg \r\n材質：座布 ／聚酯纖維、骨架 ／鋼 座面幅：約53cm \r\n座面高：約43cm \r\n附屬配件：收納袋  \r\n最大承載重量：約80kg', '附屬配件：收納袋 杯架', 'chair_coleman_1.jpg', 'chair_coleman_2.jpg'),
(19, 'ANGLE露營風格保冰桶 10QT / 方形飲料桶 Water Jug Cooler', '餐廚', '綠色', '5cm 雙層厚實 PU 隔熱設\r\n360度防漏水密封膠條長效保冰\r\n上蓋防滑墊置物安穩也能做為椅子', 'cook_angle_black.jpg', '4200', '33', '品名：ANGLE 露營風格保冰桶 10QT / 方形飲料桶 Water Jug Cooler \r\n尺寸：外部尺寸 : 27 x 24 x 35 cm / 內部尺寸 : 19 x 18 x 27 cm \r\n重量：4.5 kg \r\n容量：約 9.5 L / 2.5 Gallon / 10 QT \r\n規格：黑色、沙色 \r\n材質：LLDPE 內外一體、PU 發泡保溫層、尼龍塑料手柄、矽膠密封條、304 不鏽鋼水龍頭 \r\n內容：保冰桶 x 1、304 不鏽鋼水龍頭 x 1、旋塞 x 1 保冰保冷：裝滿冰塊，在25°室內，最長7天化完。 \r\n適用：野餐、露營、垂釣、駕駛、家庭外出聚會、運動賽事、野餐和BBQ、其他戶外活動等', '替換式配件 水龍頭＋塞蓋  \r\n保冰桶 / 飲水桶 功能任意轉換 \r\n304食品級不鏽鋼水龍頭 - \r\n飲用水、各式飲品安全無虞 ．保冰用旋式塞蓋 \r\n完全阻塞，液體不易漏出', 'cook_angle_black1.jpg', 'cook_angle_black2.jpg'),
(76, '2', ' 桌椅', '沙色', '2                                    ', 'flower16.jpg', '2', '  2', ' 2', ' ', 'flower08.jpg', 'flower10.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `cart`
--

CREATE TABLE `cart` (
  `sid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `categories`
--

CREATE TABLE `categories` (
  `sid` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `parent_sid` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `categories`
--

INSERT INTO `categories` (`sid`, `name`, `parent_sid`) VALUES
(1, '帳篷', 0),
(2, '桌椅', 0),
(3, '餐廚', 0),
(4, 'PHP', 1),
(5, 'JavaScript', 1),
(7, 'PS', 2),
(8, 'Chrome', 3),
(9, '騙錢的', 3),
(10, 'C++', 1),
(16, '椅拉', 2);

-- --------------------------------------------------------

--
-- 資料表結構 `customize_product`
--

CREATE TABLE `customize_product` (
  `sid` int(11) NOT NULL,
  `p_code` varchar(11) NOT NULL,
  `frame_pic` varchar(100) NOT NULL,
  `name` text NOT NULL,
  `customize` text DEFAULT NULL,
  `customize2` varchar(11) DEFAULT NULL,
  `customize3` varchar(11) DEFAULT NULL,
  `introduction` text NOT NULL,
  `price` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `customize_product`
--

INSERT INTO `customize_product` (`sid`, `p_code`, `frame_pic`, `name`, `customize`, `customize2`, `customize3`, `introduction`, `price`) VALUES
(1, 'BG', 'frame-bag.jpg', '舒營(shu-in) - 多功能旅行袋 (40L)', '顏色', '', '文字', '－堅固耐用適合旅行&出差\r\n－四周泡棉填充確保安全\r\n－可手提上飛機的最大尺寸 ', 4000),
(2, 'MG', 'frame-bbq-grill.jpg', '舒營(shu-in)\n迷你攜帶型烤肉架', '顏色', NULL, '文字', '－精緻金屬質感\n－輕便好攜帶\n－質感品牌鋼印\n－實木防燙把手\n－德國LFGB食品級認證鐵鉻烤網', 999),
(3, 'CP', 'frame-cup.jpg', '舒營(shu-in)\n鈦金屬折疊把手輕量圖騰鈦杯', '', '圖案\n', '文字', '－韓國製高品質鈦合金材質\n－耐高溫、抗酸鹼、重量極輕\n－適合泡咖啡', 499),
(4, 'BX', 'frame-box.jpg', '舒營(shu-in)\n木蓋折疊收納箱 30L', '顏色', '圖案', NULL, '－商品規格:  容量：30L\n－商品材質：耐用PP / 木質複合板\n－摺叠尺寸：42*29*6 cm\n－打開尺寸：42*29*24 cm\n－重量：1.2kg\n－平均耐重50公斤', 1499),
(5, 'FH', 'frame-hat.jpg', '舒營(shu-in)\n漁夫帽 ', '顏色', '圖案', '文字', '- 透氣防水抗UV\n- 帽緣兩側透氣孔設計\n- 透過調節扣，可自由調整鬆緊\n', 890),
(37, 'CR', 'frame-chair.png', '晴空椅', '顏色', '圖案', '', '真，正，好，坐。\r\n不，信，你，試，試。', 1200);

-- --------------------------------------------------------

--
-- 資料表結構 `details`
--

CREATE TABLE `details` (
  `d_sid` int(11) NOT NULL,
  `c_code` text NOT NULL,
  `color` varchar(255) NOT NULL,
  `color_code` varchar(10) NOT NULL,
  `stock` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `ink1` varchar(50) DEFAULT NULL,
  `ink2` varchar(50) DEFAULT NULL,
  `ink3` varchar(50) DEFAULT NULL,
  `ink4` varchar(50) DEFAULT NULL,
  `ink_price` int(11) DEFAULT 0,
  `font_style1` varchar(50) DEFAULT NULL,
  `font_type1` varchar(50) DEFAULT NULL,
  `font_style2` varchar(50) DEFAULT NULL,
  `font_type2` varchar(50) DEFAULT NULL,
  `font_style3` varchar(50) DEFAULT NULL,
  `font_type3` varchar(50) DEFAULT NULL,
  `word` varchar(50) DEFAULT 'SHINDER',
  `font_price` int(11) DEFAULT 0,
  `d_frame_pic` varchar(100) NOT NULL,
  `pic_name1` varchar(100) DEFAULT NULL,
  `pic_name2` varchar(100) DEFAULT NULL,
  `pic_name3` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `details`
--

INSERT INTO `details` (`d_sid`, `c_code`, `color`, `color_code`, `stock`, `product_id`, `ink1`, `ink2`, `ink3`, `ink4`, `ink_price`, `font_style1`, `font_type1`, `font_style2`, `font_type2`, `font_style3`, `font_type3`, `word`, `font_price`, `d_frame_pic`, `pic_name1`, `pic_name2`, `pic_name3`) VALUES
(1, '000001', '深海藍', 'navy', 20, 1, '', '', '', '', 0, 'Lora', 'serif', 'Roboto Condensed', 'sans-serif', 'Spline Sans Mono', 'monospace', 'SHINDER', 100, 'bag-blue02.jpeg', 'bag-blue02.jpeg', 'bag-blue03.jpeg', 'bag-blue04.jpeg'),
(2, '000002', '松綠色', '#004400', 20, 1, '', '', '', '', 0, 'Lora', 'serif', 'Roboto Condensed', 'sans-serif', 'Spline Sans Mono', 'monospace', 'SHINDER', 100, 'bag-green02.jpeg', 'bag-green02.jpeg', 'bag-green03.jpeg', 'bag-green04.jpeg'),
(3, '000003', '咖哩黃', '#daae00', 20, 1, '', '', '', '', 0, 'Lora', 'serif', 'Roboto Condensed', 'sans-serif', 'Spline Sans Mono', 'monospace', 'SHINDER', 100, 'bag-yellow02.jpeg', 'bag-yellow03.jpeg', 'bag-yellow02.jpeg', NULL),
(4, '000004', '麥田棕', '#b5ab83', 20, 1, '', '', '', '', 0, 'Lora', 'serif', 'Roboto Condensed', 'sans-serif', 'Spline Sans Mono', 'monospace', 'SHINDER', 100, 'bag-brown01.jpeg', 'bag-brown01.jpeg', 'bag-brown02.jpeg', NULL),
(5, '000005', '史丹綠', '#2e452e', 20, 2, '', '', '', '', 0, 'Lora', 'serif', 'Roboto Condensed', 'sans-serif', 'Spline Sans Mono', 'monospace', 'SHINDER', 100, 'bbq-grill-green01.jpeg', 'bbq-grill-green01.jpeg', 'bbq-grill-green02.jpeg', 'bbq-grill-green03.jpeg'),
(6, '000006', '橙橘紅', '#c12300', 20, 2, '', '', '', '', 0, 'Lora', 'serif', 'Roboto Condensed', 'sans-serif', 'Spline Sans Mono', 'monospace', 'SHINDER', 100, 'bbq-grill-red01.jpeg', 'bbq-grill-red01.jpeg', 'bbq-grill-red02.jpeg', 'bbq-grill-red03.jpeg'),
(7, '000007', '典雅白', '#fefcef', 20, 2, '', '', '', '', 0, 'Lora', 'serif', 'Roboto Condensed', 'sans-serif', 'Spline Sans Mono', 'monospace', 'SHINDER', 100, 'bbq-grill-white01.jpeg', 'bbq-grill-white01.jpeg', 'bbq-grill-white02.jpeg', 'bbq-grill-white03.jpeg'),
(8, '000008', '神秘黑', '#000000', 20, 4, 'tent', 'caravan', 'mountain-sun', 'campground', 200, '', '', '', '', '', '', '', 0, 'box-black.png', 'box-black.png', NULL, NULL),
(9, '000009', '牛奶白', '#eeeeee', 20, 4, 'tent', 'caravan', 'mountain-sun', 'campground', 200, '', '', '', '', '', '', '', 0, 'box-white.png', 'box-white.png', NULL, NULL),
(10, '000010', '就是灰', '#727272', 20, 4, 'tent', 'caravan', 'mountain-sun', 'campground', 200, '', '', '', '', '', '', '', 0, 'box-gray.png', 'box-gray.png', NULL, NULL),
(11, '000011', '軍綠色', '#162e0c', 20, 4, 'tent', 'caravan', 'mountain-sun', 'campground', 200, '', '', '', '', '', '', '', 0, 'box-deepgreen.png', 'box-deepgreen.png', NULL, NULL),
(12, '000012', '深海藍', '#083674', 20, 4, 'tent', 'caravan', 'mountain-sun', 'campground', 200, '', '', '', '', '', '', '', 0, 'box-navyblue.png', 'box-navyblue.png', NULL, NULL),
(13, '000013', '百搭黑', '#010305', 20, 5, 'tent', 'caravan', 'mountain-sun', 'campground', 200, 'Lora', 'serif', 'Roboto Condensed', 'sans-serif', 'Spline Sans Mono', 'monospace', 'SHINDER', 100, 'hat-black.jpg', 'hat-black.jpg', 'hat-outlook-black.jpg', NULL),
(14, '000014', '水泥灰', '#3e4143', 20, 5, 'tent', 'caravan', 'mountain-sun', 'campground', 200, 'Lora', 'serif', 'Roboto Condensed', 'sans-serif', 'Spline Sans Mono', 'monospace', 'SHINDER', 100, 'hat-gray.jpg', 'hat-gray.jpg', 'hat-outlook-gray.jpg', NULL),
(15, '000015', '秘境綠', '#345541', 30, 5, 'tent', 'caravan', 'mountain-sun', '', 200, 'Lora', 'serif', 'Roboto Condensed', 'sans-serif', 'Spline Sans Mono', 'monospace', 'SHINDER', 500, 'hat-green.jpg', 'hat-green.jpg', 'hat-outlook-green.jpg', ''),
(16, '000016', '楓葉棕', '#A35E47', 20, 5, 'tent', 'caravan', 'mountain-sun', 'campground', 200, 'Lora', 'serif', 'Roboto Condensed', 'sans-serif', 'Spline Sans Mono', 'monospace', 'SHINDER', 100, 'hat-brown.jpg', 'hat-brown.jpg', 'hat-outlook-brown.jpg', NULL),
(17, '000017', '紋絲灰', '#808080', 60, 3, 'tent', 'caravan', 'mountain-sun', 'campground', 200, 'Lora', 'serif', 'Roboto Condensed', 'sans-serif', 'Spline Sans Mono', 'monospace', 'SHINDER', 100, 'cup1.jpg', 'cup2.jpg', 'cup4.jpg', 'cup3.jpg'),
(51, '080007', '超級黑', '#000000', 25, 37, 'tent', 'caravan', 'mountain-sun', 'campground', 200, '', '', '', '', '', '', 'SHINDER', 0, 'chair-black1.jpeg', 'chair-black1.jpeg', 'chair-black2.jpeg', '');

-- --------------------------------------------------------

--
-- 資料表結構 `equip`
--

CREATE TABLE `equip` (
  `equip_id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `cate_id` int(255) NOT NULL,
  `info` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `rest` int(255) NOT NULL,
  `spec` varchar(255) NOT NULL,
  `include` varchar(255) NOT NULL,
  `img2` varchar(255) NOT NULL,
  `img3` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `equip`
--

INSERT INTO `equip` (`equip_id`, `name`, `cate_id`, `info`, `img`, `price`, `rest`, `spec`, `include`, `img2`, `img3`) VALUES
(1, 'OneTigris壹虎 啟示自立帳 CE-HZP01-CB', 1, '堅固的防風和遮蔽結構的穩定性\r\n防止側風影響露營者的睡眠\r\n帶有尼龍網狀內帳\r\n', 'tent_onetiger', 1800, 10, '尺寸：220cm*132cm*110cm\r\n重量：2.4kg\r\n包裝：50cm*16cm\r\n材質：20D 格子防撕裂聚酯外帳篷、70D 尼龍帳篷底部、40D 尼龍網內帳篷、YKK® 拉鍊、#7001 鋁合金帳篷桿\r\n防水等級：1500mm\r\n', '帳篷*1，帳篷支架*3，營繩帶調節器*4，地釘*10，收納袋*1', 'tent_onetiger_1', 'tent_onetiger_2'),
(2, 'tent-Mark DESIGNS 馬戲團帳篷TC-DX', 1, 'tent-Mark最著名的是他們所使用的特殊布料-TC科技棉，\r\n', 'tent_mark', 1000, 8, '品名：tent-Mark DESIGNS 馬戲團帳篷TC-DX\r\n材質：\r\n帳篷本體：科技棉TC(65%聚酯纖維、35%棉)/ 加工:表面顏料塗層\r\n下擺：防撕裂聚酯纖維150D/ 加工:PU塗層 \r\n營柱：鋼製5段式主營柱(Φ32mm/280cm) x1/ 鋼製4段式副營柱(Φ22mm/200cm) x1\r\n收納袋：防撕裂聚酯纖維150D、聚酯纖維網布\r\n耐水壓：1500mm \r\n尺寸：442×420×(H)280cm\r\n收納尺寸：Φ27×63cm\r\n重量：12.3kg(包含營釘、營繩、營柱、收納袋)', '副營柱*1、營釘(主體用)*16、營釘(定位用)*1、營繩*5、收納袋*4、搭設定位用套件', 'tent_mark_1', 'tent_mark_2'),
(3, 'Naturehike 亙 戶外加厚棉布屋式帳篷4.8 Glamping系列', 1, 'Glamping系列，亙4.8 享受戶外美學\r\n雙人寬敞設計，約4.8平方公尺\r\n主要材質是經過特別的防霉處理後的棉布材質，\r\n優點是能將防潑水與透氣性合理平衡，舒適不悶熱\r\n以此材質製作的帳篷質感與吸睛程度也非常的高\r\n但小編不建議長期在雨中使用哦~', 'tent_naturehike', 1500, 23, '品牌: 挪客 材質: 外帳:混紡棉布 拉鍊: YKK拉鍊 紗網:滌綸網紗 底帳:耐磨PVC複合布 縫線:膨脹線 尺寸:展開: 235X210X145cm、收納: 78X25X35cm  顏色:流沙金 重量:約16.2kg(含配件和收納袋)', '支撐杆X4,天幕杆X2,風繩X14,鋼釘X18', 'tent_naturehike_2', 'tent_naturehike_3'),
(4, 'ANGLE HIRO 戰術桌全套 Helinox Tactical Table M戰術桌 ', 2, '搭配Helinox Table M提升桌面的實用性\r\n桌邊增設機能掛桿可掛裝備及餐具\r\n桌面四角設計M8尺寸固定孔洞\r\n可搭配燈桿與角度多功能擴充鋁桿\r\n耐用鋁合金框架輕量便攜組裝快速', 'desk_angelhiro', 200, 30, '品名：ANGLE HIRO 戰術桌板 適用Helinox Tactical Table M戰術桌 尺寸：41 X 61cm (桌板固定處同Helinox Table M) 重量：1.3kg 包裝：63 x 43 x 8.5cm / 1.5kg 款式：單一款式 材質：鋁 ', '戰術桌板 x 1、收納袋 x 1', 'desk_angelhiro_1', 'desk_angelhiro_3'),
(5, 'Coleman 扶手休閒椅 CM-38829/CM-38831 ', 2, '兩側皆有飲料架方便存放手機飲料\r\n大小適中配色百搭可輕鬆收進束袋\r\n耐用及穩固的基本椅子且便於攜帶\r\n基本入門款椅子，多種場合皆適用\r\n附收納袋便於收納攜帶', 'chair_coleman\r\n', 200, 45, '使用尺寸：約81×51×高87cm 收納尺寸：約14×14×高87cm 重量：約2.95kg 材質：座布 ／聚酯纖維、骨架 ／鋼 座面幅：約53cm 座面高：約43cm 附屬配件：收納袋  最大承載重量：約80kg', '配有寬大的扶手。 扶手上各有一個杯架。', 'chair_coleman_1', 'chair_coleman_2'),
(6, 'ANGLE露營風格保冰桶 10QT / 方形飲料桶 Water Jug Cooler', 3, '5cm 雙層厚實 PU 隔熱設\r\n360度防漏水密封膠條長效保冰\r\n上蓋防滑墊置物安穩也能做為椅子', 'cook_angle_black', 250, 33, '品名：ANGLE 露營風格保冰桶 10QT / 方形飲料桶 Water Jug Cooler 尺寸：外部尺寸 : 27 x 24 x 35 cm / 內部尺寸 : 19 x 18 x 27 cm 重量：4.5 kg 容量：約 9.5 L / 2.5 Gallon / 10 QT 規格：黑色、沙色 材質：LLDPE 內外一體、PU 發泡保溫層、尼龍塑料手柄、矽膠密封條、304 不鏽鋼水龍頭 內容：保冰桶 x 1、304 不鏽鋼水龍頭 x 1、旋塞 x 1 保冰保冷：裝滿冰塊，在25°室內，最長7天化完。', '替換式配件 水龍頭＋塞蓋  - 保冰桶 / 飲水桶 功能任意轉換 - ．304食品級不鏽鋼水龍頭 - 飲用水、各式飲品安全無虞 ．保冰用旋式塞蓋 - 完全阻塞，液體不易漏出', 'cook_angle_black1', 'cook_angle_black2');

-- --------------------------------------------------------

--
-- 資料表結構 `equip_cate`
--

CREATE TABLE `equip_cate` (
  `cate_id` int(11) NOT NULL,
  `name` varchar(11) NOT NULL,
  `parent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `equip_cate`
--

INSERT INTO `equip_cate` (`cate_id`, `name`, `parent_id`) VALUES
(1, '帳篷', 0),
(2, '桌椅', 0),
(3, '食物用品', 0);

-- --------------------------------------------------------

--
-- 資料表結構 `equip_order`
--

CREATE TABLE `equip_order` (
  `order_id` int(11) NOT NULL,
  `member_sid` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `s_date` datetime NOT NULL,
  `e_date` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `memberdata`
--

CREATE TABLE `memberdata` (
  `m_id` int(11) NOT NULL,
  `m_name` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `m_username` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `m_passwd` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `m_birthday` date DEFAULT NULL,
  `m_level` enum('admin','member','VIP') COLLATE utf8_unicode_ci DEFAULT 'member',
  `m_email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `m_phone` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `m_address` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `m_avatar` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 傾印資料表的資料 `memberdata`
--

INSERT INTO `memberdata` (`m_id`, `m_name`, `m_username`, `m_passwd`, `m_birthday`, `m_level`, `m_email`, `m_phone`, `m_address`, `m_avatar`) VALUES
(1, '五十嵐真貴', 'admin', '$2y$10$FO70lc.3/vTeE0Vaf7O3Jes.UArylzLnnxfZffTF7410vndnvhScm', '1998-05-05', 'member', '50@gmail.com', '09125050505', '台北市松山區五十巷五十號', '50.png'),
(2, '張惠玲', 'elven', '$2y$10$YdUhOvUTvwK5oWp/i3LafOd2ImwsE/85YmmoY2konsxdmMSsvczFO', '1987-04-05', 'member', 'elven@superstar.com', '0966765556', '台北市濟洲北路12號1樓', 'D5f_bs_UIAANqHk.jpeg'),
(3, '彭建志', 'jinglun', '$2y$10$WqB2bnMSO/wgBiHSOBV2iuLbrUCsp8VmNJdK2AyIW6IANUL9jeFjC', '1987-07-01', 'member', 'jinglun@superstar.com', '0918181111', '台北市敦化南路93號15樓', 'D5f_bs-UwAE-vxf.jpeg'),
(4, '謝耿鴻', 'sugie', '$2y$10$6uWtdYATI3b/wMRk.AaqIei852PLf.WjeKm8X.Asl0VTmpxCkqbW6', '1987-08-11', 'member', 'edreamer@gmail.com', '0914530768', '台北市中央路201號17樓', 'yellowcat.png'),
(5, '蔣志明', 'shane', '$2y$10$pWefN9xkeXOKCx59GF6ZJuSGNnIFBY4q/DCmCvAwOFtnoTCujb3Te', '1984-06-20', 'member', 'shane@superstar.com', '0946820035', '台北市建國路177號6樓', '7c273f22-68e2-4c3f-bb28-cfb9c904db6b.png'),
(6, '王佩珊', 'ivy', '$2y$10$RPrt3YfaSs0d82inYIK6he.JaPqOrisWMqASuxN5g62EyRio.lyEa', '1988-02-15', 'member', 'ivy@superstar.com', '0920981230', '台北市忠孝東路520號6樓', 'anya.png'),
(7, '林志宇', 'zhong', '$2y$10$pee.jvO6f4sSKahlc4cLLO9RUMyx8aphyqkSUdwHTNSy4Ax7YPdpq', '1987-05-05', 'member', 'zhong@superstar.com', '0951983366', '台北市三民路1巷10號', 'HrNlUNP.jpeg'),
(8, '李曉薇', 'lala', '$2y$10$oiC9CaGiOdWu.6w5b3.b/Ora6fSuh8Lrbj8Kg5BUPT15O3QptksQS', '1985-08-30', 'member', 'lala@superstar.com', '0918123456', '台北市仁愛路100號', '9b86d7ceab3f9e2f0f543ab6f0f1ae62.jpeg'),
(9, '賴秀英', 'crystal', '$2y$10$8Q0.JEGILRM91qAlMmWnB.wpcY.rJEbgNgV5ntIlqZmdGaHPwikji', '1986-12-10', 'member', 'crystal@superstar.com', '0907408965', '台北市民族路24號', '467d353f7e2d43563ce13fddbb213709.gif'),
(10, '張雅琪', 'peggy', '$2y$10$RNqnXDNHkcTI2Zh2bkTKnOesz0FLXhihhT8ZL8OHoMeYSq7jsILMi', '1988-12-01', 'member', 'peggy@superstar.com', '0916456723', '台北市建國北路101號', 'b51e871af241a73ab319ed5e00ec61ae.jpeg'),
(11, '陳燕博', 'albert', '$2y$10$seMLwqcQRQiWa0jMBAcMMertjLbrPLRGNZoKc0NZ5FxTwWha7W3lm', '1993-08-10', 'member', 'albert@superstar.com', '0918976588', '台北市北環路2巷80號', 'd44445a8f9519816229cc4352ba1b662.jpeg'),
(13, '黃信溢', 'dkdreamer', '$2y$10$Fx0rLJtV5mVtJzAJ52B/hup1AmviTe7Ciu0mtWBCZAkYC0qmg6OJy', '1987-04-05', 'member', 'edreamer@gmail.com', '955648889', '愛蘭里梅村路213巷8號', 'd632ace1c221d953065afb4e6ad9f918.gif'),
(123, 'elephant', 'elephant', '$2y$10$A.bJbLHa2KVPO5wjZvG6iOrb8nrYQZ7mCUavBWUYD7YbTA2CilG.W', '2022-06-19', 'member', '123@test.com', '0912345678', '234', '2cc13a46fde665db6ec59379f1393cbc.jpg'),
(126, 'penpen', 'penpen', '$2y$10$Oj9N8ZsZ/N0S4aK1eLbMO.GgF8U/DEISqoy/zmIAQeKpR9bzveYf2', '2022-06-15', 'member', '123@test.com', '0912345677', '123 45', 'e07e97b395c35aef13fc8e7d3c85e8e0.jpg'),
(127, '熊熊', 'bearbear', '$2y$10$eit5KXibqdyKwEjbmuuMo.Gn9EmjaUEesHazj7N2Tb0wNuAPzjA1a', '2022-06-14', 'member', '123@test.com', '0912345678', '43566667', 'fac2f88a43b53e0c0459111ea1dff535.png');

-- --------------------------------------------------------

--
-- 資料表結構 `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `hash` varchar(255) NOT NULL,
  `activated` int(11) NOT NULL DEFAULT 0,
  `nickname` varchar(255) NOT NULL,
  `create_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `members`
--

INSERT INTO `members` (`id`, `email`, `password`, `mobile`, `address`, `birthday`, `hash`, `activated`, `nickname`, `create_at`) VALUES
(3, 'ming@gg.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', '0918222333', '', '1990-02-02', '52c61e86824899ca67e8d815a7a7afb0ce43878c', 0, '老明', '2019-01-07 10:39:38'),
(4, 'aaa@qq.com', '3d4f2bf07dc1be38b20cd6e46949a1071f9d0e3d', '0988888888', '', '0000-00-00', '1bc88dddf4783874a5f50c8955b703be32775ca1', 0, 'aaa', '2019-01-10 10:29:53'),
(5, 'aaa@qq.coma', '3d4f2bf07dc1be38b20cd6e46949a1071f9d0e3d', '0911111111', '', '0000-00-00', '93264d4396836844f43a4cb1669827ba41ff5d58', 0, 'aaaa', '2019-01-10 10:33:20'),
(6, 'aaaaaaaa@qq.coma', 'fba9f1c9ae2a8afe7815c9cdd492512622a66302', '0911111111', '', '0000-00-00', '57774e6b1c6ccc3913fd8be593836c384d5da1a3', 0, 'aaaa', '2019-01-10 10:34:27'),
(7, 'new@gmail.com', '1234', '1234', '1234', '2012-06-01', '1234', 0, '1234', '2022-06-04 09:32:10');

-- --------------------------------------------------------

--
-- 資料表結構 `orders`
--

CREATE TABLE `orders` (
  `sid` int(11) NOT NULL,
  `member_sid` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `order_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `orders`
--

INSERT INTO `orders` (`sid`, `member_sid`, `amount`, `order_date`) VALUES
(4, 1, 1820, '2016-03-25 12:15:08'),
(5, 1, 1820, '2016-03-25 12:19:05'),
(9, 1, 2070, '2016-06-01 11:01:37'),
(10, 13, 1460, '2016-06-01 11:15:53'),
(11, 1, 2030, '2017-10-03 13:49:20'),
(12, 3, 3260, '2019-01-11 10:25:39');

-- --------------------------------------------------------

--
-- 資料表結構 `order_details`
--

CREATE TABLE `order_details` (
  `sid` int(11) NOT NULL,
  `order_sid` int(11) NOT NULL,
  `product_sid` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `order_details`
--

INSERT INTO `order_details` (`sid`, `order_sid`, `product_sid`, `price`, `quantity`) VALUES
(1, 4, 22, 580, 1),
(2, 4, 17, 620, 2),
(3, 4, 22, 580, 1),
(4, 5, 22, 580, 1),
(5, 5, 17, 620, 2),
(6, 9, 6, 450, 1),
(7, 9, 8, 520, 2),
(8, 9, 22, 580, 1),
(9, 10, 1, 560, 1),
(10, 10, 2, 420, 1),
(11, 10, 3, 480, 1),
(12, 11, 5, 690, 2),
(13, 11, 15, 650, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `products`
--

CREATE TABLE `products` (
  `sid` int(11) NOT NULL,
  `author` varchar(50) NOT NULL,
  `bookname` varchar(60) NOT NULL,
  `category_sid` int(11) NOT NULL DEFAULT 1,
  `book_id` varchar(30) NOT NULL,
  `publish_date` date NOT NULL,
  `pages` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `isbn` varchar(30) NOT NULL,
  `on_sale` tinyint(1) NOT NULL DEFAULT 1,
  `introduction` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `products`
--

INSERT INTO `products` (`sid`, `author`, `bookname`, `category_sid`, `book_id`, `publish_date`, `pages`, `price`, `isbn`, `on_sale`, `introduction`) VALUES
(1, '洪一新、許瑞珍', '圖解C++程式設計\r\n', 16, 'PG30036', '2010-02-08', 624, 560, '978-986-201-306-9 ', 1, 'C++語言融合了傳統的程序式語言、物件導向設計以及C++樣版三種不同程式設計方式，使它成為近代最受重視且普及的程式語言。\r\n本書強調理論與實作並重，依C++功能循序漸進、由淺入深，詳實地說明了C++語言相關的語法，書中融入大量的程式範例，每一個範例程式都經過測試，可以正確無誤地執行，並且從實作中熟悉各種程式設計技巧。\r\n除了課文內大量的程式範例外，每章均有「上機實習課程」單元，可以讓使用者有更多的實際演練機會。在課後大量精心設計的習題，驗收學習成效，提供更多的程式實作經驗。'),
(2, '吳睿紘', '圖解資料結構-使用JAVA', 1, 'PG30035', '2009-12-15', 384, 420, '978-986-201-281-9 ', 1, '資料結構一直是電腦科學領域非常重要的基礎課程，本書是以教導如何將資料結構概念用Java程式語言來實作的重要著作。其特色在於將複雜的理論輔以圖文並茂的解說方式，搭配豐富的圖表及範例介紹，將資料結構中重要的觀念及演算法加以詮釋，集中學習焦點。\r\n每章重要理論均有範例實作，書中收錄了精華的演算法及程式的執行畫面，隨書光碟則附與完整的範例程式，提供詳盡的探討，提昇學習的成效。\r\n\r\n◎內容架構完整，邏輯清楚，採用豐富的圖例來闡述基本觀念及應用，有效提高可讀性。\r\n◎以JAVA程式語言實作資料結構中的重要理論，以範例程式說明資料結構的內涵。\r\n◎精選重點習題，參斟國家重要的考試命題重點，課後立即複習，達到事半功倍的效果。'),
(3, '江家頡、陳怡均', 'Visual C# 2008網路遊戲程式設計', 1, 'PG30034', '2009-11-27', 424, 480, '978-986-201-278-9 ', 1, '本書特色在於網路與遊戲的結合，如何把動畫加入在遊戲中呈現，並且撰寫出最簡單扼要的程式碼。再來是網路程式撰寫部份，如何把網路功能加入到遊戲裡面達到玩家與玩家溝通的效果，結合遊戲概念與網路程式的實作使遊戲變的有趣。\r\n全書共分三篇16章，內容由淺入深，首先介紹Visual C#的基本語法與控制項使用方式，讓沒接觸過Visual C#的讀者能夠快速上手。接著簡單的說明網路概念，並教各位如何利用Visual C#來寫Socket網路程式，進而完成一個簡單的聊天室。而第二、三篇則是實作基本與進階的網路遊戲。透過不斷的實作，讓讀者能夠從中獲得更多的經驗值。\r\n本書對於想進入遊戲設計門檻者而言可說是最佳學習途徑，不僅快速領略Visual C# 2008程式設計的基礎，更藉由各個範例程式瞭解視窗程式的高階設計技巧，期使本書能對讀者在視窗程式設計能有卓著的進步。'),
(4, '結城 浩', 'Java 重構- Java Refactoring', 1, 'PG20252', '2010-01-21', 432, 490, '978-986-201-087-7 ', 1, '本書的特徵有以下幾點：\r\n◆用Java語言所寫成的範例程式\r\n因為重構最主要的目的是改善軟體的體質，所以用具體的範例程式來解說是不可或缺的。\r\n◆詳細地解說重要的重構\r\n在Martin Fowler的『Refactoring』一書中，共用了70個重構的例子來說明。然而本書並沒有針對所有重構以同樣的篇幅來說明，而是針對重要的重構整理出要點，並做詳細的解釋。至於在本書中無法詳細解說到的重構部分，我們擇要在書末的附錄A中做介紹說明。\r\n◆利用練習問題來確認基礎知識是否紮實\r\n重構的解說由於出現了許多細膩的步驟，因此往往會因不留神而忽略了重點的部分。在本書的各章節的章末中都附有練習問題，可以讓你針對這章節中所學到的基礎知識再做一次複習。\r\n◆透過練習問題來發現「不祥的徵兆」\r\n當你在進行重構時，及時找出程式所散發出的「不祥的徵兆」的練習也是很重要的一環。在本書的練習問題中，不僅包括如何去找出程式碼所發出的「不祥的徵兆」的練習。由於存有不用撰寫程式也能做確認的結構，因此即使抽不出時間學習的人也能輕鬆地挑戰。'),
(5, '平田豊', 'Linux Device Driver Programming 驅動程式設計', 1, 'PG20280', '2009-01-05', 624, 690, '978-986-201-186-7 ', 1, '本書是一本寫給Linux裝置驅動程式開發者的書籍。以初次開發裝置驅動程式的開發者也容易理解的角度，從基礎概念開始詳加解說。\r\n\r\n全書前半部以著重於裝置驅動程式開發前的基本知識及其思考方法做為主要介紹，在後半部則依每個不同的硬體做專章的探討。網羅從計時器、記憶體、中斷的基礎到 PCI Express、ACPI、IPMI等最新的硬體知識。除此之外，還包含執行手法、偵錯手法、同步與鎖定…等等主題，一直到解讀既有驅動程式碼的技巧，全都收錄在本書中。\r\n\r\n本書獲得日本Amazon讀者票選五顆星的青睞，書中隨附光碟內更收錄了書中範例程式碼。不管對入門者或是專業的 Linux程式設計師來說，本書內所提及的開發驅動程式的精華，絕對會讓您很快就成為驅動程式的開發戰力。 '),
(6, '王鴻儒', 'Excel VBA 2007程式設計 - 增訂新版', 1, 'PG20271', '2008-05-27', 400, 450, '978-986-201-129-4', 1, '本書的設計主軸，即是以企業人員目前所面臨到的資料應用為課題，以深入淺出的方式，利用最簡單的VBA語言工具，快速而有效率的處理在企業中所會面臨到的會計帳務處理、行銷問卷整合、業務經銷資料佣金計算或者是行政人員所面臨的人事出缺席計算等課題，用既有的活頁簿資料，輔以VBA程式，快速的計算出帳務資料、經銷佣金或出缺席資料…等問題。\r\n\r\n透過本書，讀者可以深入學習Excel最經典的部份，經由深入淺出的說明，引導讀者一步步熟悉 VBA在Excel中的應用，為讀者建立VBA程式設計的基礎；搭配豐富的圖文解說，導引學習並熟悉VBA語法及架構，教讀者對問題迎刃而解的最佳法則！'),
(7, '姜姃延', '彩繪天堂Painter數位插畫輕鬆學', 2, 'GH20187', '2009-09-14', 448, 550, '978-986-201-255-0', 1, '各式各樣的筆刷配合影像完美演出\r\n創造搶眼奪目的藝術品！\r\n學Painter的第一本書\r\n初學者邁向實務設計者之路\r\n囊括基本繪圖至應用插畫、影像編輯效果！\r\n展現手繪質感的各種技法與實務工作者的現場訪談！\r\n\r\n■只要5分鐘，Painter基本功能與概念OK！\r\n階段性深入探討在畫布上呈現惟我獨尊藝術感的超強繪圖軟體Painter，其數位插畫之設計過程。\r\n■輕鬆學習以實務為中心的核心範例\r\n說明部分與輕鬆學練習是初學者必讀的內容。若能確實瞭解此部分的內容，超脫painter初學者身份將無庸置疑。\r\n■使自身設計實力晉昇‘哇~’階級的實際Know How\r\n更進一步說明Painter的架構。以Painter為主軸的使用者們必備的資訊，在範例學習過程當中，若想更深入學習，須認真研讀。\r\n■現代painter實務工作者們的工作經驗\r\n透過訪談活躍於各個領域的實務工作者，間接體驗各領域的實際工作環境。對未曾聽聞的新領域或已知卻苦無機會參觀現場的人而言，將是絕佳的實務指南。'),
(8, '金惠京', '不一樣的創作設計風格- Photoshop Artworks Stylebook ', 2, 'GH20200', '2009-11-30', 304, 520, '978-986-201-276-5', 1, '如果您想要了解掌握世界上數位藝術創作的趨勢，並學習一流獨特的技法，本書是您必看的選擇。想要了解如何用Photoshop創作安迪‧沃荷的普普風格，或是創作像蒙太奇、超現實主義、夢幻仙境風格、復古流行的表現手法；另外還有好萊塢風格的海報、中國水墨畫風格、水彩或粉筆畫風的創作...等，本書內含世界級超水準的20組作品，詳實地將創作技巧與實作方法全部公開，配合隨書附上DVD的高解析度作品相關檔案來學習，讓您邁向世界級的創作領域。\r\n\r\n本書一開始便整理出創作不一樣設計時要知道的三種Photoshop核心功能，接著以20個專題實例，分別是粉筆畫風格創作、水彩畫的合作創作、水墨畫創作、城市藝術的普普風、蒙太奇、超現實主義、夢幻仙境風格、復古流行的表現手法、好萊塢風格的海報...等等，各種當前世界上主流設計風尚作品。最後更有延伸學習的創意收集發想技巧、素材製作技巧，以及一流作品欣賞。\r\n'),
(9, '大室はじめ Hajime', '日式風格藝術紋樣素材選集', 2, 'GH20182', '2009-03-09', 128, 350, '978-986-201-203-1', 1, '在日式風格的設計作品裡，蘊涵著樸實與簡潔的獨有特質，不喧賓奪主的背景紋樣更能襯托出強烈的日式風情之存在感。\r\n\r\n本書收錄521種以底紋、插圖、裝飾框線等三大分類的日式傳統圖紋，總計有3900個以上的EPS、JPG、GIF紋樣檔。書中素材圖案皆取材自豐富的自然風土、昆蟲動物、花草植物與傳統插畫，經由反覆的組合排列，建構出獨特的紋路美感與優雅意象。\r\n\r\n*隨附DVD適用Mac & Win,內含EPS、JPG、GIF精緻圖檔。為了方便讀者使用，圖檔顏色更分為全彩、半彩、黑白等三種效果。'),
(10, '五島由實', 'Illustrator GOODS COLLECTION', 2, 'GH20173', '2008-10-29', 192, 350, '978-986-201-172-0 ', 1, '華麗的美感已經太多，簡單實用才夠迷人\r\n用自己的雙手，一折一割所做出來輕巧迷人的作品，總是有種說不出來的魅力！從開啟範本、套用圖樣、轉印、切割、縫製到完成，每個過程或許花費的時間並不多，但從動手做的那一刻開始，一股難掩的愉悅及成就感便滿滿充斥著內心。\r\n有別於一般書籍只帶給讀者單方面的介紹，本書著重於動手製作與軟體操作的相互搭配，雖然自己動手難免線條歪斜、成品也不盡完美，但樸拙的手感卻是電腦所無法比擬的。每一個製作的過程、每一次的成果都令人熱切期待；製作完成的作品，除了美觀之外，更可以依自己喜好運用在日常生活上，兼具美感與實用性－這，就是本書所帶給您的無窮魅力。\r\n\r\n◎本書著重於動手製作與軟體操作的相互搭配，並依照難易度共分為5個星等，但其實每一個製作步驟都很簡單，無需準備太多的工具與花費太多時間，就能輕鬆做出屬於自己的作品。\r\n◎透過本書將近50個作品範例的學習，激發讀者對生活的靈感，將平時隨手可得的物品，利用一點巧思設計製作，不但可增加生活樂趣，更具備再生利用的環保概念。\r\n◎本書貼心收錄以PDF格式所儲存的完成檔，讓沒有安裝Illustrator軟體的讀者，可以直接開啟PDF檔案後，直接列印使用，既省時又便利。'),
(11, '久米原榮、上田浩', 'Wireshark 網路協定分析與管理', 3, 'NE20287', '2010-01-12', 400, 480, '978-986-201-292-5', 1, '學會通訊協定與網路問題疑難排解的Wireshark實踐技術！\r\n這是一本專為想徹底了解Wireshark及網路協定的讀者們所撰寫的書籍。全書分為九大章節，在前面的章節是以Wireshark初學者必備的知識作為開端，說明網路的基本及Wireshark的概要。而在後半段為了要讓讀者在查閱上更加方便，分別以不同目的作為分類基礎，劃分成擷取操作、檔案操作、自訂設定、協定、網路、Tips、疑難排解等七個主題進行說明。\r\n\r\n本書分類清楚、圖解眾多，除了可以學會通訊協定外，也適用於想進行疑難排解的網路管理者。是一本絕對能夠為您釐清概念，讓您完全掌握這一套整合度完整的 Wireshark軟體。 '),
(12, '陳佩婷', 'Flash CS4動畫設計應用集', 3, 'NE30021', '2010-01-07', 464, 520, '978-986-201-290-1', 1, '◎以範例為導向，結合基礎觀念的說明與實用範例的步驟操作，範例精彩動人，循序漸進教導學習者進入Flash殿堂。\r\n◎內容包含基礎概念、圖文設計、動畫製作、按鈕設定、到ActionScript的程式應用，讓學習者輕鬆學會Flash的各項技巧功能。\r\n◎範例操作步驟詳盡清楚，讓學習者現學功能現用技巧，之後再舉一反三，自我驗收成果。\r\n◎熟讀本書，輕鬆學會製作酷炫動畫及精巧Flash遊戲。 '),
(13, '陳東偉', 'Internet網路實務與應用', 3, 'NE30018', '2010-01-04', 512, 500, '978-986-201-286-4', 1, '本書掌握Internet最新的觀念，結合時尚的新知與應用，教導如何利用這些網路資源來強化人脈經營、輔助學習、商業應用、社群經營、微網誌建立和網頁美化，對於網路安全的認識與防範、資訊倫理、電子商務、行動商務，也是本書關心的重點。在內容安排上，絕對是一本真正能夠掌握網際網路相關入門知識及最新科技應用的重點書籍。特色如下：\r\n\r\n■內容充實完備\r\n涵蓋的主題包括最新網際網路新知與科技應用，內容完備且豐富，依單元可分為：網路入門篇、人脈經營篇、資源活用篇、網路商業篇、視覺美化篇。\r\n■搭配圖例原理\r\n針對不易理解的原理，加入大量的圖例及示意圖來增加理解程度，期以最輕鬆的方式，吸收Internet相關應用的精華資訊。\r\n■融入實例操作\r\n將重要的軟體功能搭配實例演練，藉由循序步驟式的操作的過程從中學習實用的功能。\r\n■課後大量習題\r\n各章末尚有安排習題測驗，提供學生課後練習的機會，可作為老師驗收教學成效的測驗平台。'),
(14, '奧山壽史', '打開就能用的整站網頁設計範例集', 3, 'NE20286', '2009-12-23', 176, 380, '978-986-201-284-0', 1, '由專業設計師彙整集結了當下最具美感的網頁設計實例，您再也不需要因為沒有靈感而浪費掉寶貴的時間，本書隨附時尚的網頁設計版面，立即讓您擁有設計大師的超水準！\r\n本書共分成商店網頁的設計架構、專為介紹大量商品所設計的網頁架構、以圖片為主的簡單網頁架構、專為整合及傳達資訊所設計的網頁架構、專為個人網站所設計的架構等5個單元，並從中分析了高級感的設計、清新多彩的設計、信賴感的設計、以圖片傳達資訊的設計等14類各式的整站網頁設計，是一本可以自由使用的整站網頁設計範例集。每個設計至少都準備了一個最基本的網頁範本，只要依照本書所寫的步驟一步步執行，則無論是誰，皆可作出漂亮美觀的網頁。\r\n本書隨附光碟收錄書中所介紹設計的HTML檔案及CSS檔案，含括高級感的設計、清新多彩的設計、信賴感的設計、乾淨清爽感的設計、以圖片傳達資訊的設計等14類整站設計。打開收錄檔案可以隨修即用，加速網頁設計。'),
(15, 'Time研究室 陳錦輝', 'ASP.NET 3.5初學指引-使用Visual Basic 2008', 3, 'NE30015', '2009-10-29', 896, 650, '978-986-201-270-3', 1, '本書使用VWD採拖拉方式設計網頁介面，以事件處理模式開發ASP.NET程式為主軸，以及使用現成的相關資源來建置網站。例如使用Login等相關控制製作會員登入程式，利用驗證控制項進行輸入範圍的篩選，充分展現ASP.NET開發網頁程式的方便性。\r\n除此之外，網頁資料庫與新型態的AJAX網頁設計也包含在本書範圍之中。網頁資料庫方面可使用現成的資料控制項，幾乎不用撰寫程式就可以取得資料庫的資料，當然也能夠透過指定的SQL命令進行資料庫的存取。\r\n在觀念方面，本書將介紹ASP.NET程式的流程，並詳細說明ASP.NET為何能夠以事件處理模式開發ASP.NET程式，包含按鈕的PostBack與特定元件的AutoPostBack等行為。除此之外，也將說明AJAX運作的原理與一般網頁有何不同。\r\n\r\n本書特色\r\n■ 以「圖解」的方式來解說網站運作流程。\r\n■透過大量「實例」說明各種控制項，以實作建立ASP.NET網頁。\r\n■透過聊天室、網路書局、網路相簿等整合實例，示範如何開發具有特定功能的網站。\r\n■採用內嵌程式碼分割模型(Inline Code Separation Model，單一檔案模式)開發ASP.NET程式，讀者不必深入VB2008語法亦可學會設計ASP.NET。\r\n■隨書附贈Visual Web Developer 2008 Express（內含SQL Server Express 2008）開發網頁程式，並且大多數範例使用【檔案系統】方式建置，不需牽涉IIS與其他資料庫即可執行。\r\n■讀者不但能夠迅速學會使用 ASP.NET設計網頁，亦可增進更多的網頁知識，增強網頁設計的功力。'),
(16, '榮欽科技 鄭苑鳳', 'Dreamweaver CS4網頁設計應用集', 3, 'NE30020', '2009-09-07', 480, 520, '978-986-201-261-1', 1, '本書以範例導向，利用Step by step方式，引導初學者進入Dreamweaver CS4的世界。透過書中步驟式教學，能在短時間內熟悉網站設計建置的各項功能技巧與應用。\r\n內容分四篇，共十六章，方便教師規劃一學期的教學課程，課後評量附上各類試題與實作題練習，可評估學習效果。在各章節之後所規畫的「應用範例」，將完成一個完整的網站製作。涵蓋範圍如下：\r\n◎網站的前置規劃\r\n第一階段介紹完美的網站前置作業，學習如何規劃網站內容，提供初學者在設計網站前應有的觀念與架構。\r\n◎網頁設計基礎\r\n第二階段為網頁設計基礎，包括建立網站、設定文字以強化重點、加入表格以編排頁面、圖片編排以美化網頁、設定超連結以暢行無阻、以及網站的上傳與管理。\r\n◎ 多媒體建置篇\r\n第三階段著重在多媒體建置，包括Div設定以靈活頁面、加入頁框以多元化網頁、插入多媒體物件、Spry組件的應用、以及CSS樣式效果的運用。\r\n◎網站管理篇\r\n第四階段為互動、優化及輕鬆管理網站，介紹資源、圖庫與範本的使用，互動式表單，以及行為指令的使用。'),
(17, '賈蓉生、胡大源、許世豪', 'Java互動網站實作 -JSP與資料庫', 3, 'NE30017', '2009-08-13', 656, 620, '978-986-201-250-5', 1, '本書以初學基礎觀點，輕鬆切入JSP/Html/Java/Access設計資料庫的互動網頁操作程式，每一個學習重點都涵蓋了JSP網頁與Access 資料庫之設計與應用，藉由148則範例完全剖析JSP/Access基礎程式設計之各類問題，最後以三個實例系統貫穿全書，帶領讀者快速進入實務應用的領域。\r\n\r\n本書特色如下：\r\n* JSP/Access/JAVA環境：JSP使用jdk6.0、Tomcat6.0及Access 2007等最新版系統，介紹如何以Java語言支援JSP/Html網頁與資料庫之應用，建立第一個JSP網站資料庫。\r\n*互動式網頁設計：包括物件概念、輸入互動、預設物件、Java Bean應用、資料庫基礎操作、使用者認證等。\r\n* JSP與資料庫指令：包括Java Bean與資料庫、資料查詢、集合運算、聚合函數、巢式子查詢等。\r\n*交易管理設計：以銀行交易轉帳為例，詳細討論交易處理、轉帳交易與故障修補。\r\n* 基礎網頁框架：包括網頁框架設計與應用。將網頁分隔成數個次網頁，各個次網頁之間互相關連，使網頁多元生動，倍增功能應用。\r\n* JSP/Access應用實例：包括甄試與查榜系統、網路銀行系統、學生操行成績電腦化系統，三套系統實例引導完整設計與操作。'),
(18, '田中康博、林拓也', 'ActionScript 3.0 活用範例大辭典', 3, 'NE20280', '2009-03-23', 544, 550, '978-986-201-207-9', 1, '本書特色\r\n●依照ActionScript 3.0的各種實際應用功能來劃分成280個單元，讓讀者可以快速找到相關的內容。\r\n●詳細說明各種屬性與方法之格式、型態、傳回值、用途，以及所屬類別。\r\n●以圖片表示的執行結果，搭配範例程式碼和語法說明，讓您徹底精通 ActionScript 3.0。\r\n●隨附光碟收錄了本書所有範例的fla檔、swf檔、html檔，方便您進行學習和修改使用。'),
(19, '數位新知', '網頁設計應用集 -Dreamweaver+PhotoImpact+Flash', 3, 'NE30007', '2009-03-16', 464, 520, '978-986-201-202-4', 1, '想要製作精緻動人的網站或網頁並不是難事，但對於初學者來說往往不知該如何選擇軟體，本書將推薦以Flash來製作網頁動畫，以PhotoImpact編修影像、製作網頁元件，以Dreamweaver來做網頁的整合處理。相信看完本書之後，設計一個具專業水準又實用的網頁，對您來說絕對是件容易的事。\r\n書中內容共分為五篇，首先針對網站企劃與設計要領作介紹，接著從Dreamweaver CS3的編輯與整合開始，到PhotoImpact X3的影像編輯製作，接著搭配Flash CS3的酷炫動畫，三項超強網頁設計軟體，以一圖一步驟詳細的圖文解說方式，帶領您循序操作，輕鬆學會書中所有技巧，最後一篇結合本書所有軟體的技巧，完整的應用，讓您感受網頁製作上一氣呵成的快感。並且提昇網頁設計的功力，輕鬆完成具有個人獨特風格的網頁。'),
(20, '陳湘揚 ', '網路概論(第二版)', 3, 'NE30010', '2008-12-30', 592, 580, '978-986-201-187-4', 1, '◎參考全國多位老師教學經驗設計編撰，專為大專網路概論所設計的教學用書。\r\n◎書中以圖解和個案來談論網路的運作概念，避免艱深技術，方便老師授課。\r\n◎書中也安排簡易的網路實作練習，讓讀者可自行學習之用。\r\n◎網路基礎篇首先介紹網路的各種用途與分類；通訊協定和網路模型則介紹重要的OSI七層協定和DoD四層協定；而傳輸媒介和和網路設備，則介紹目前實際運用的媒介和概念，讓讀者知道實際網路的實體組成。\r\n◎網路原理篇針對網路運作的原理來進行比較深入的談論。深入介紹區域網路的主流-乙太網路和廣域網路，包括ADSL和Cable Modem等；另外介紹DoD模型最重要的IP層和TCP層的相關原理。\r\n◎應用層篇係討論網路應用層重要的相關應用和其原理。例如：DNS和 DHCP、WWW、檔案傳輸協定(FTP)與點對點傳輸(P2P)、電子郵件的POP3和SMTP協定、即時通軟體和網路電話等等。\r\n◎無線網路和資訊安全篇則探討無線網路和資訊安全相關應用和原理。'),
(21, '林季嫻', 'Joomla圖解架站實例應用', 3, 'NE20279', '2008-11-25', 560, 490, '978-986-201-178-2', 1, '讓您輕鬆架設及管理互動式網站的神兵利器-Joomla\r\n本書是以初、中階級的讀者為導向，將Joomla的操作程序及架設網站等功能，利用圖解加上實例導向的方式，為您深入淺出地引領至Joomla的最高殿堂。全書內容不但包含遠端主機的架設及Joomla的選單管理、內容管理、元件管理等，另外還專章深入為讀者介紹Joomla的擴充套件。透過隨附光碟的動態操作示範及實地建構，本書絕對是您在架設Joomla互動式網站時的必備工具書。\r\n\r\n◎利用步驟式的圖解說明，帶您一步步掌握Joomla的全貌\r\n◎以個案實例的解析手法，實地培養您的Joomla實戰經驗\r\n◎ 專章分析網頁、選單、內容、元件等管理，讓您輕輕鬆鬆成為Joomla達人\r\n◎透過隨附光碟內的動態教學操作示範，帶您實際體驗架站的樂趣\r\n◎ 介紹符合讀者需求的擴充套件，架設個人化的Joomla互動式網站\r\n◎由作者精選網羅線上的架站資源，讓您的網站更加豐富化 '),
(22, '前沿科技 溫謙', 'Web CSS網頁設計大全', 3, 'NE20277', '2008-10-29', 448, 580, '978-986-201-169-0', 1, '●內容深入淺出，配合範例詳細解說\r\n本書以獨特的探索方式針對CSS設計技術的原理和方法進行講解，符合自學自修的參考與應用。配合書中講解及光碟的範例，讀者不但知其然，而且知其所以然，明白了道理之後，應用起來就能遊刃有餘。\r\n●一流作品的範例實作技巧與經驗分享\r\n本書帶領大家深入探索，並透過實作與實驗，讓讀者自己體會。對各種設計中常用的網頁元素和版面配置的設計提供完整的思路和製作方法，對學習和工作過程中遇到的問題提供過來人的經驗分享。\r\n●時下最流行的設計應用技巧與實作\r\n對各種網頁元素和版面配置方式，包括各種導航、導覽功能表（水平的、垂直的、固定寬度的、自我調整寬度的、下拉的等），Tab面板、可收合式面板和折疊式面板，以及各種多欄式編排的版面配置（固定寬度的、變化寬度的、固定寬度與變化寬度結合的）…等等，都提供詳細的分類和歸納，便於讀者在理解的基礎上，直接修改後使用。\r\n作者與「CSS禪意花園」的創建者Dave Shea取得了連絡，並獲得了使用禪意花園作品的授權。本書會結合禪意花園網站中的一些精彩案例，提出技巧與設計的分析和說明。最後將綜合前面所學，從創意、拍攝素材到實際完成的全過程，培養實際製作出一流作品的實力。'),
(23, '林新德', 'Flash CS3 ActionScript 3.0應用程式設計', 3, 'NE20265', '2007-11-22', 560, 520, '978-986-201-067-9', 1, '◎詳述 ActionScript 3.0 基本觀念\r\nActionScript 3.0 的語法只有基本的部份和 ActionScript 2.0 相同，事件處理、類別定義和 API 都有極多的差異。使用Flash CS3當然要使用ActionScript 3.0，若只是使用ActionScript 2.0，顯然是停留在被淘汰的邊緣，和使用舊版本的Flash相差無幾。本書從最基本的語法、最基本的觀念開始，一步步帶領讀者進入 ActionScript 3.0的驚奇世界。\r\n◎降低物件導向的學習門檻\r\n以適當的譬喻說明物件導向程式設計，並以範例印證觀念，釐清ActionScript 3.0和其它物件導向程式語言的不同。\r\n◎細說視覺物件與組件的使用\r\n仔細說明視覺物件的架構及相互關係，並以範例說明各個組件的用法及應用。\r\n◎是觀念書也是範例書\r\n本書第一部份「基礎語法與物件導向」不厭其煩敘述基本觀念，並以範例說明觀念，打穩ActionScript 3.0基礎。第二部份「視覺物件與組件」和第三部份「資料交換與XML」使用大量範例說明常用類別的用法，讓讀者開發專案時能更得心應手。');

-- --------------------------------------------------------

--
-- 資料表結構 `product_color`
--

CREATE TABLE `product_color` (
  `sid` int(11) NOT NULL,
  `product_sid` int(11) NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` int(11) NOT NULL,
  `p_no` varchar(255) NOT NULL,
  `imgs` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `product_color`
--

INSERT INTO `product_color` (`sid`, `product_sid`, `color`, `size`, `p_no`, `imgs`) VALUES
(1, 2, '紅色', 10, 'bbb_red_10_001', 'a.png,bb.png,c.jpg'),
(2, 2, '藍色', 15, '', ''),
(3, 2, '紅色', 20, 'bbb_red_20_002', ''),
(4, 2, '藍色', 30, '', '');

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
  `recipetype` varchar(255) NOT NULL,
  `resimg` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `recipes`
--

INSERT INTO `recipes` (`sid`, `resname`, `tool`, `ingredient`, `tutorial`, `serves`, `recipetype`, `resimg`) VALUES
(1, '麻辣鍋', '湯鍋或任何有深度的鍋子，若能準備中間有隔板的鴛鴦鍋更棒。', '麻辣鍋湯底\r\n高麗菜或其他葉菜類\r\n鴨血\r\n豆腐\r\n火鍋料\r\n各式肉類\r\n水\r\n', '1.將麻辣鍋底放入鍋中加熱。\r\n2.依序放入火鍋料、鴨血、豆腐和菇類等較耐煮的食材。\r\n3.若有露營夥伴不敢吃辣，可使用鴛鴦鍋、在另一側烹4.煮不辣的湯底。\r\n5.鍋內煮滾後即可享用，肉片隨涮隨吃。', '4-6', '素/葷', ''),
(2, '壽喜燒', '湯鍋或任何有深度的鍋子，若能準備中間有隔板的鴛鴦鍋更棒。', '美式賣場買的柴魚醬油（日式醬油）或壽喜燒醬汁\r\n味醂\r\n蔥段\r\n高麗菜或其他葉菜類\r\n火鍋料\r\n牛肉或其他肉片\r\n水\r\n\r\n', '1.將肉片和蔥段放入鍋中拌炒。\r\n2.加入柴魚醬油、味醂和水，比例大約是 1：1：2，可3.依個人口味調整湯汁濃度。\r\n4.將食材加入鍋中烹煮，煮熟後即可享用！', '4-6', '素/葷', '');

-- --------------------------------------------------------

--
-- 資料表結構 `room_type`
--

CREATE TABLE `room_type` (
  `SID` int(11) NOT NULL,
  `Room_Type` varchar(40) NOT NULL,
  `Room_Spec` varchar(255) NOT NULL,
  `Price` int(11) NOT NULL,
  `RPhoto01` varchar(255) NOT NULL,
  `RPhoto02` varchar(255) NOT NULL,
  `RPhoto03` varchar(255) NOT NULL,
  `RPhoto04` varchar(255) NOT NULL,
  `RPhoto05` varchar(255) NOT NULL,
  `RPhoto06` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `room_type`
--

INSERT INTO `room_type` (`SID`, `Room_Type`, `Room_Spec`, `Price`, `RPhoto01`, `RPhoto02`, `RPhoto03`, `RPhoto04`, `RPhoto05`, `RPhoto06`) VALUES
(1, 'Room1', 'cleaningStaff,Fridge,Hotpot,sheep,Toiletpaper,Toilet,Wardrobe,Hairdryer,Tub,Washroom,Towel,Sliper,Desk,Television,Phone,Channel', 5000, '', '', '', '', '', ''),
(2, 'Room2', 'cleaningStaff,Fridge,Hotpot,sheep,Toiletpaper,Toilet,Hairdryer,Towel,Sliper,Desk,Television,Phone,Channel', 4000, '', '', '', '', '', ''),
(3, 'Room3', 'cleaningStaff,Hotpot,sheep,Toiletpaper,Toilet,Wardrobe,Hairdryer,Towel,Sliper,Desk,Phone', 3500, '', '', '', '', '', ''),
(4, 'Room4', 'cleaningStaff,Hotpot,sheep,Toiletpaper,Wardrobe,Hairdryer,Towel,Sliper,Desk,Phone', 2000, '', '', '', '', '', ''),
(5, 'Car1', '清潔用品,冰箱,電熱水壺,床單,衛生紙,廁所,衣櫃,吹風機,毛巾,拖鞋,書桌,平面電視,電話,有線頻道', 6000, '', '', '', '', '', ''),
(6, 'Car2', '清潔用品,冰箱,電熱水壺,床單,衛生紙,吹風機,毛巾,拖鞋,書桌,電話', 4000, '', '', '', '', '', ''),
(7, 'Car3', '清潔用品,冰箱,電熱水壺,衛生紙,吹風機,毛巾,拖鞋,電話', 1800, '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- 資料表結構 `tourist_spot`
--

CREATE TABLE `tourist_spot` (
  `sid` int(11) NOT NULL,
  `pic` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `area` varchar(15) CHARACTER SET utf8 NOT NULL,
  `name` varchar(25) CHARACTER SET utf8 NOT NULL,
  `type` varchar(30) CHARACTER SET utf8 NOT NULL,
  `open_time` varchar(30) CHARACTER SET utf8 NOT NULL,
  `close_day` varchar(15) DEFAULT NULL,
  `tel` varchar(15) DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8 NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 NOT NULL,
  `event_site` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `tourist_spot`
--

INSERT INTO `tourist_spot` (`sid`, `pic`, `area`, `name`, `type`, `open_time`, `close_day`, `tel`, `address`, `description`, `event_site`) VALUES
(1, '5b7524a3a8405716ef6ceec79e523f46.jpg', '員山鄉', '銀車西拉雅觀光酒廠', '觀光工廠', '10:00-18:00', '週一休館', '03-1234-3424', '宜蘭縣員山鄉員山路二段623號', '銀車西拉雅為台灣第十座威士忌酒廠，運用中央山脈與雪山山脈的清澈水源，打造獨一無二台灣自行生產的威士忌。', 'asdgfadgdaf'),
(2, '4ad82ce182e3c546c13c341b42e53387.jpg', '礁溪鄉', '猴洞坑瀑布', '步道', '全年開放', '', '', '宜蘭縣礁溪efeveffffddddfd++', '猴洞坑瀑布為宜蘭dscsdcsdcffffffddddfd++', 'asdasdasdSDFsd'),
(3, '196f8737d5c878571401a088149a0881.jpg', '礁溪鄉', '抹茶山步道', '步道', '全年開放', '', '', '宜蘭縣礁溪鄉五峰旗風景區', '抹茶山步道為宜蘭縣有名之步道，攀登難易度較高，一趟需要走4-5小時左右，適合喜愛挑戰的旅客前往。', 'moch'),
(4, '2f70a5018ff6ff56a1644c9afc85754b.jpg', '員山鄉', '琥珀兔鉛筆學校', '觀光工廠', '9:00-18:00', '週二休館', '03-1345-3452', '宜蘭縣員山鄉員山路三段10號', '琥珀兔鉛筆工廠為宜蘭在地40年之老字號工廠，有DIY製作鉛筆活動，適合有小朋友的家庭前往。', 'https://www.rabbit1.com.tw/'),
(5, '1f39e0cd79838f6fc4b655368c93671c.jpg', '冬山鄉', '梅花湖', '湖泊', '全年開放', '', '', '宜蘭縣冬山鄉得安村環湖路1號', '梅花湖為天然蓄水池，因湖的形狀類似五瓣梅花而得名，可以進行划船、游泳等多項水上活動。', ''),
(6, '4350ef0619b35d5ca172b30a878ca2bc.jpg', '冬山鄉', '水豚山丘', '農場', '9:00-18:00', '', '03-1155-1235', '宜蘭縣冬山鄉冬山路三段105號', '水豚山丘飼養數十隻水豚，並且設有互動專區，可和可愛的水豚互動，適合全家大小一同前往', 'https://www.zhangmeiama.com/'),
(7, '0aecdbfc497a447bddd72ee5fe885345.jpg', '礁溪鄉', '跑馬古道', '步道', '全年開放', '', '', '宜蘭縣礁溪鄉白石腳路125號', '跑馬古道是早期往返北宜兩地搬運貨物的路線，後來作為軍用運輸道路，故又稱陸軍道或跑馬路。跑馬步道有南、北兩個登山口，路線寬廣平坦好走，部份位於國有林地區內，林相十分豐富；沿途還能看到原有圓木枕、拖運木馬、礦坑的蹤影，慢慢走到高處後，整個礁溪街景、蘭陽平原及遠處的龜山島都能盡收眼底。', 'asdfasdfsafasfasdf'),
(8, '753314bb7c6b53408ef6a80ad9f372f6.jpg', '大同鄉', '清水地熱谷', '自然景點', '10:00-18:00', '週一休館', '03-1234-3424', '宜蘭縣大同鄉三星路8段501巷139號', '遊客除了將煮食的竹簍放置在池內煮食，及煮熟後取回外，不得停滯逗留池邊，禁止邊走邊吃，使用泡腳池時，請依照社交距離標示入座使用，使用休憩桌椅也要依照社交距離標示入座', ''),
(9, '86d94ffce6a89da63841f0c6f3fc7022.jpg', '員山鄉', '蘭陽博物館', '博物館', '10:00-18:00', '週一休館', '03-1234-3424', '宜蘭縣員山鄉員山路二段623號', '位於龜山島對面的博物館，歷經18年的籌劃建設，於民國99年10月正式開館，常設展將整座四層樓建築分別設計，並以宜蘭的氣候、地形以及生物物種等特性，規劃有「山之層」、「平原層」、「海之層」等三處常設展廳。', 'https://www.lym.gov.tw/ch/index.html'),
(11, '5490bd3f8aa380ebbb3f4c8e3d2337d1.jpg', '羅東鎮', '羅東夜市', '夜市', '17:00-02:00', '全年開放', '', '宜蘭縣羅東鎮民生路、民權路及公園路', '觀光客非常多的地方，但是本地人不怎麼去。觀光客羅東夜市必吃地圖：Top 16羅東夜市附近美食推薦 · 阿灶伯當歸羊肉湯 · 羊鋪子當歸羊肉湯 · 義豐蔥油派 · 羅東紅豆湯圓 · 羅東帝爺廟口喥咕麵 · 魏姐包心粉圓等。', '');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `act`
--
ALTER TABLE `act`
  ADD PRIMARY KEY (`act_id`);

--
-- 資料表索引 `act_img`
--
ALTER TABLE `act_img`
  ADD PRIMARY KEY (`act_img_id`);

--
-- 資料表索引 `act_leaders`
--
ALTER TABLE `act_leaders`
  ADD PRIMARY KEY (`act_l_id`);

--
-- 資料表索引 `act_order`
--
ALTER TABLE `act_order`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `member_id` (`member_id`,`act_id`),
  ADD KEY `act_l_id` (`act_l_id`);

--
-- 資料表索引 `address_book`
--
ALTER TABLE `address_book`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `admin_list`
--
ALTER TABLE `admin_list`
  ADD PRIMARY KEY (`admin_id`);

--
-- 資料表索引 `camproduct1`
--
ALTER TABLE `camproduct1`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `camproduct2`
--
ALTER TABLE `camproduct2`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `customize_product`
--
ALTER TABLE `customize_product`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `details`
--
ALTER TABLE `details`
  ADD PRIMARY KEY (`d_sid`);

--
-- 資料表索引 `equip`
--
ALTER TABLE `equip`
  ADD PRIMARY KEY (`equip_id`),
  ADD KEY `cate_id` (`cate_id`);

--
-- 資料表索引 `equip_cate`
--
ALTER TABLE `equip_cate`
  ADD PRIMARY KEY (`cate_id`);

--
-- 資料表索引 `memberdata`
--
ALTER TABLE `memberdata`
  ADD PRIMARY KEY (`m_id`),
  ADD UNIQUE KEY `m_username` (`m_username`),
  ADD KEY `m_email` (`m_email`),
  ADD KEY `m_phone` (`m_phone`);

--
-- 資料表索引 `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- 資料表索引 `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`sid`),
  ADD KEY `order_sid` (`order_sid`),
  ADD KEY `product_sid` (`product_sid`);

--
-- 資料表索引 `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `product_color`
--
ALTER TABLE `product_color`
  ADD PRIMARY KEY (`sid`),
  ADD KEY `product_sid` (`product_sid`);

--
-- 資料表索引 `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `room_type`
--
ALTER TABLE `room_type`
  ADD PRIMARY KEY (`SID`);

--
-- 資料表索引 `tourist_spot`
--
ALTER TABLE `tourist_spot`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `act`
--
ALTER TABLE `act`
  MODIFY `act_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `act_img`
--
ALTER TABLE `act_img`
  MODIFY `act_img_id` int(255) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `act_leaders`
--
ALTER TABLE `act_leaders`
  MODIFY `act_l_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `act_order`
--
ALTER TABLE `act_order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `address_book`
--
ALTER TABLE `address_book`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `admin_list`
--
ALTER TABLE `admin_list`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `camproduct1`
--
ALTER TABLE `camproduct1`
  MODIFY `sid` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `camproduct2`
--
ALTER TABLE `camproduct2`
  MODIFY `sid` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cart`
--
ALTER TABLE `cart`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `categories`
--
ALTER TABLE `categories`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `customize_product`
--
ALTER TABLE `customize_product`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `details`
--
ALTER TABLE `details`
  MODIFY `d_sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `equip`
--
ALTER TABLE `equip`
  MODIFY `equip_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `equip_cate`
--
ALTER TABLE `equip_cate`
  MODIFY `cate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `memberdata`
--
ALTER TABLE `memberdata`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orders`
--
ALTER TABLE `orders`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_details`
--
ALTER TABLE `order_details`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `products`
--
ALTER TABLE `products`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_color`
--
ALTER TABLE `product_color`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `recipes`
--
ALTER TABLE `recipes`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `room_type`
--
ALTER TABLE `room_type`
  MODIFY `SID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `tourist_spot`
--
ALTER TABLE `tourist_spot`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
