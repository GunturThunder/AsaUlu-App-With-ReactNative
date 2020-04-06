-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2020 at 10:03 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pof_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cashier`
--

CREATE TABLE `cashier` (
  `id_cashier` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `salt` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cashier`
--

INSERT INTO `cashier` (`id_cashier`, `email`, `password`, `salt`) VALUES
(1, 'angkasa@gmail.com', 'be394fb278c00ce733dea26c64650e2434a6560565d2e7c4b78e06daee96841a8e3891db75a2727498cbeea4f7a92e24f5b5a2db7f39479c51f5f585b176e022', 'b9673bf273cbd62021'),
(2, 'gangkasa8@gmail.com', 'd1188963773292ae55717eb31964fc0b98a60c9ac3e466d7a9d05a9b00c56091a48dbe16c4e431a68aba180665611a2858e90398c05b6f21d77e304bb8840750', '9b49ce583de8fc458b');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id_category` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id_category`, `name`) VALUES
(1, 'Food'),
(2, 'Drink'),
(27, 'kk'),
(28, 'fff'),
(31, 'Food'),
(32, 'Food');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id_buyer` varchar(255) NOT NULL,
  `total` int(11) NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id_buyer`, `total`, `date_added`) VALUES
('03aadf38-a748-46d7-b8ff-1a9ce1c26644', 80000, '2020-04-01 10:41:12'),
('03e41650-bc4d-4643-881c-10baa95ab248', 60000, '2020-04-03 09:56:58'),
('066e64a4-5ca3-4b24-8bcb-797efa4433c1', 60000, '2020-04-03 10:02:22'),
('0ec7d647-33b4-484e-b153-625b05e3fddf', 80000, '2020-04-01 10:41:01'),
('133302b6-e9f2-45de-bd32-a31e0c50ca7f', 80000, '2020-04-01 10:41:04'),
('1ac79502-412a-4dcb-96ef-8eeb847350e4', 5000, '2020-04-01 13:17:40'),
('28c3596d-0acf-4576-8226-c38647158871', 58000, '2020-04-01 16:45:05'),
('2c423fd0-fd11-41ef-aa3c-876112bd0d0a', 40000, '2020-04-01 10:39:14'),
('2daac834-0965-4cf9-9cc5-d84801299ae4', 80000, '2020-04-02 03:03:29'),
('2fa6e799-eb77-4170-9706-4861077b85ab', 25000, '2020-04-06 03:52:53'),
('398ec070-b717-4cf5-86b5-15ada609c2b8', 60000, '2020-04-03 09:50:19'),
('3e31ad9c-cfb3-46d3-94f3-7865eaab49d9', 80000, '2020-04-01 10:41:03'),
('3fa3e465-e805-4518-a3cd-3645efb150bc', 80000, '2020-04-01 10:41:09'),
('45e5ecee-521e-49ab-aacb-a8efeec2b8c5', 40000, '2020-04-01 10:38:38'),
('4935bcf5-8fe0-4a73-8769-a9a57e442bb4', 53000, '2020-04-06 04:36:33'),
('4d796baa-4204-4635-a2fa-feeb434aca1e', 80000, '2020-04-01 10:41:09'),
('56f559f5-9f1c-45c6-9bbe-f116a2ba2260', 60000, '2020-04-01 13:11:53'),
('5d2cbb5f-44ce-4072-b31a-0c9b9d636c10', 60000, '2020-04-01 13:11:50'),
('5f400ec8-8888-4019-94fc-ab72e8a1e732', 60000, '2020-04-03 10:00:44'),
('621bafcd-8a34-418a-9751-9ef9fcb1516f', 80000, '2020-04-01 10:41:04'),
('62c2c4ac-4b71-4ac9-8b74-d976636b2f44', 80000, '2020-04-01 10:41:09'),
('6384d285-6e43-422b-acc7-00ae41cf21a7', 25000, '2020-04-03 09:51:29'),
('73441734-0dd6-4440-8967-d48919615eb3', 80000, '2020-04-03 11:11:54'),
('7b8f009d-5ab8-46fc-8223-e78a81ebf636', 60000, '2020-04-01 14:12:47'),
('7d0c114b-a03b-4ed3-9b70-0ff9a06291f5', 60000, '2020-04-03 10:46:52'),
('7e74837e-d6b0-4fa7-bac0-3c1dfa56f359', 60000, '2020-04-01 13:13:25'),
('8029d979-dd8c-499e-b072-0fc5af12b764', 0, '2020-04-03 10:16:48'),
('839c49d5-4816-41b7-b53d-9c0c8183f9de', 60000, '2020-04-01 14:33:23'),
('86570edb-c591-4e95-9563-6271bc97bda0', 65000, '2020-03-31 15:24:31'),
('883cb6f6-65b2-40ce-a0b6-ed72bd6aa77f', 80000, '2020-04-01 10:41:12'),
('8bc91d7e-0aec-45cf-9955-802324c744d3', 60000, '2020-04-06 03:48:02'),
('8d02e90a-ff85-46ea-a661-3525aecba854', 100000, '2020-04-02 03:06:03'),
('8d3ef4bf-cac9-4d2d-b90b-1c79a0bbdb40', 60000, '2020-04-01 13:11:49'),
('8dd66f97-bd51-42c0-844d-d2656702430f', 20000, '2020-04-01 14:33:00'),
('8e4f0504-7e0d-49ed-a8cf-998ceeeacf1f', 60000, '2020-04-02 01:55:45'),
('8f7dd66e-0339-4929-93a9-04adf6743602', 135000, '2020-04-06 07:39:33'),
('95dc7ac6-047b-46ab-88cf-ab4f7abd98b6', 60000, '2020-04-03 10:03:09'),
('96282b9c-c196-47f9-8bae-08482a4ed6cf', 80000, '2020-04-01 10:41:04'),
('996282bc-8c14-4e14-bc40-9705ffc1a3ed', 40000, '2020-04-02 03:04:40'),
('a2801728-8e10-464a-b098-b79a633618cf', 60000, '2020-04-03 10:00:19'),
('a987dd73-851e-45a9-b9b5-5fb90e431b16', 65000, '2020-03-31 15:06:55'),
('a9add971-87db-401f-811e-227903988189', 80000, '2020-04-01 10:41:03'),
('aa7eb1bc-0dc5-445e-b214-53a4600e7eee', 80000, '2020-04-01 10:41:03'),
('ab2fe3e4-4b84-4891-813e-be08bafc58f8', 60000, '2020-04-06 03:46:53'),
('ab763fe1-13b8-47b8-85ca-3d3818ac9c83', 120000, '2020-04-01 14:12:03'),
('adba4732-ca12-4d25-a627-89c7374c5854', 60000, '2020-04-03 10:49:05'),
('afbca756-91df-4bc8-998d-f8adfa989337', 60000, '2020-03-31 15:07:57'),
('b08233f9-a92b-4654-b1b7-f4d8e18ab974', 60000, '2020-04-01 12:55:06'),
('b0afcf24-23b9-4d22-8f69-619dffd7033c', 80000, '2020-04-01 10:41:03'),
('b7904a0a-8d34-4af4-8d80-df82f40c6f36', 65000, '2020-03-31 15:26:42'),
('c10f9db6-298a-4df5-b082-81fbe55687b6', 100000, '2020-04-01 13:00:23'),
('c1171c23-19ce-4555-84d7-022f9a3d4809', 65000, '2020-04-03 10:09:20'),
('c13b1ca3-e7d7-4fbf-935d-d700b5a5ab27', 0, '2020-04-03 10:18:36'),
('c2e32a87-7796-47a0-8c02-1d86249c2c42', 38000, '2020-04-01 10:38:18'),
('ca76424b-0abc-4845-81cc-0f5db7b78123', 60000, '2020-04-03 10:59:19'),
('cb55b439-434f-4a68-bfea-167c59be2009', 60000, '2020-04-01 13:11:40'),
('cd597e4c-02d9-4dca-b9c3-ba8bfbc1c824', 65000, '2020-04-02 05:44:33'),
('cdf5df0f-981c-498f-8137-99c236056524', 135000, '2020-03-31 15:06:38'),
('cf0b5df5-721b-4935-ba06-c1c8ea455d83', 80000, '2020-04-01 10:41:10'),
('da942a6c-9147-4e10-a260-dc4ba14a7851', 135000, '2020-04-06 07:39:54'),
('e338708d-bb27-432a-894b-fc919dce0840', 80000, '2020-03-01 10:41:04'),
('eb563d50-672b-45bd-83d2-76733d7bc64f', 80000, '2020-04-01 10:40:44'),
('ebec5c2a-6acc-4033-97a4-1d66af68e9c9', 80000, '2020-04-01 10:41:09'),
('ed8b9a32-900b-4484-8278-98f58a266958', 60000, '2020-04-03 10:02:07'),
('ef83a9b8-4dad-4127-a2c9-fd3387612865', 80000, '2020-04-01 10:41:10'),
('f09c4ce2-e86a-4863-b20f-4fedb67d0754', 40000, '2020-04-03 09:50:55'),
('faa3a69b-21d9-4e71-9549-9e5b7a179212', 60000, '2020-04-03 10:23:08'),
('fe7b0a79-059e-494c-a346-6f823fb47158', 65000, '2020-03-31 15:22:08');

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `id_order` int(11) NOT NULL,
  `id_buyer` varchar(255) NOT NULL,
  `id_product` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`id_order`, `id_buyer`, `id_product`, `stock`, `price`) VALUES
(81, 'cdf5df0f-981c-498f-8137-99c236056524', 47, 3, 15000),
(82, 'cdf5df0f-981c-498f-8137-99c236056524', 5, 3, 120000),
(83, 'a987dd73-851e-45a9-b9b5-5fb90e431b16', 5, 1, 40000),
(84, 'a987dd73-851e-45a9-b9b5-5fb90e431b16', 4, 1, 20000),
(85, 'a987dd73-851e-45a9-b9b5-5fb90e431b16', 47, 1, 5000),
(86, 'afbca756-91df-4bc8-998d-f8adfa989337', 5, 1, 40000),
(87, 'afbca756-91df-4bc8-998d-f8adfa989337', 4, 1, 20000),
(88, 'fe7b0a79-059e-494c-a346-6f823fb47158', 5, 1, 40000),
(89, 'fe7b0a79-059e-494c-a346-6f823fb47158', 4, 1, 20000),
(90, 'fe7b0a79-059e-494c-a346-6f823fb47158', 47, 1, 5000),
(91, '86570edb-c591-4e95-9563-6271bc97bda0', 47, 1, 5000),
(92, '86570edb-c591-4e95-9563-6271bc97bda0', 4, 1, 20000),
(93, '86570edb-c591-4e95-9563-6271bc97bda0', 5, 1, 40000),
(94, 'b7904a0a-8d34-4af4-8d80-df82f40c6f36', 5, 1, 40000),
(95, 'b7904a0a-8d34-4af4-8d80-df82f40c6f36', 4, 1, 20000),
(96, 'b7904a0a-8d34-4af4-8d80-df82f40c6f36', 47, 1, 5000),
(97, 'c2e32a87-7796-47a0-8c02-1d86249c2c42', 47, 1, 5000),
(98, 'c2e32a87-7796-47a0-8c02-1d86249c2c42', 8, 1, 20000),
(99, 'c2e32a87-7796-47a0-8c02-1d86249c2c42', 9, 1, 13000),
(100, '45e5ecee-521e-49ab-aacb-a8efeec2b8c5', 5, 1, 40000),
(101, '2c423fd0-fd11-41ef-aa3c-876112bd0d0a', 5, 1, 40000),
(102, 'eb563d50-672b-45bd-83d2-76733d7bc64f', 5, 2, 80000),
(103, '0ec7d647-33b4-484e-b153-625b05e3fddf', 5, 2, 80000),
(104, 'a9add971-87db-401f-811e-227903988189', 5, 2, 80000),
(105, 'aa7eb1bc-0dc5-445e-b214-53a4600e7eee', 5, 2, 80000),
(106, 'b0afcf24-23b9-4d22-8f69-619dffd7033c', 5, 2, 80000),
(107, '3e31ad9c-cfb3-46d3-94f3-7865eaab49d9', 5, 2, 80000),
(108, '133302b6-e9f2-45de-bd32-a31e0c50ca7f', 5, 2, 80000),
(109, '621bafcd-8a34-418a-9751-9ef9fcb1516f', 5, 2, 80000),
(110, 'e338708d-bb27-432a-894b-fc919dce0840', 5, 2, 80000),
(111, '96282b9c-c196-47f9-8bae-08482a4ed6cf', 5, 2, 80000),
(112, '3fa3e465-e805-4518-a3cd-3645efb150bc', 5, 2, 80000),
(113, 'ebec5c2a-6acc-4033-97a4-1d66af68e9c9', 5, 2, 80000),
(114, '4d796baa-4204-4635-a2fa-feeb434aca1e', 5, 2, 80000),
(115, '62c2c4ac-4b71-4ac9-8b74-d976636b2f44', 5, 2, 80000),
(116, 'cf0b5df5-721b-4935-ba06-c1c8ea455d83', 5, 2, 80000),
(117, 'ef83a9b8-4dad-4127-a2c9-fd3387612865', 5, 2, 80000),
(118, '883cb6f6-65b2-40ce-a0b6-ed72bd6aa77f', 5, 2, 80000),
(119, '03aadf38-a748-46d7-b8ff-1a9ce1c26644', 5, 2, 80000),
(120, 'b08233f9-a92b-4654-b1b7-f4d8e18ab974', 5, 1, 40000),
(121, 'b08233f9-a92b-4654-b1b7-f4d8e18ab974', 4, 1, 20000),
(122, 'c10f9db6-298a-4df5-b082-81fbe55687b6', 5, 1, 40000),
(123, 'c10f9db6-298a-4df5-b082-81fbe55687b6', 4, 1, 20000),
(124, 'c10f9db6-298a-4df5-b082-81fbe55687b6', 6, 1, 20000),
(125, 'c10f9db6-298a-4df5-b082-81fbe55687b6', 86, 1, 20000),
(126, 'cb55b439-434f-4a68-bfea-167c59be2009', 4, 1, 20000),
(127, 'cb55b439-434f-4a68-bfea-167c59be2009', 5, 1, 40000),
(128, '8d3ef4bf-cac9-4d2d-b90b-1c79a0bbdb40', 4, 1, 20000),
(129, '8d3ef4bf-cac9-4d2d-b90b-1c79a0bbdb40', 5, 1, 40000),
(130, '5d2cbb5f-44ce-4072-b31a-0c9b9d636c10', 4, 1, 20000),
(131, '5d2cbb5f-44ce-4072-b31a-0c9b9d636c10', 5, 1, 40000),
(132, '56f559f5-9f1c-45c6-9bbe-f116a2ba2260', 4, 1, 20000),
(133, '56f559f5-9f1c-45c6-9bbe-f116a2ba2260', 5, 1, 40000),
(134, '7e74837e-d6b0-4fa7-bac0-3c1dfa56f359', 4, 1, 20000),
(135, '7e74837e-d6b0-4fa7-bac0-3c1dfa56f359', 5, 1, 40000),
(136, '1ac79502-412a-4dcb-96ef-8eeb847350e4', 47, 1, 5000),
(137, 'ab763fe1-13b8-47b8-85ca-3d3818ac9c83', 4, 6, 120000),
(138, '7b8f009d-5ab8-46fc-8223-e78a81ebf636', 86, 1, 20000),
(139, '7b8f009d-5ab8-46fc-8223-e78a81ebf636', 96, 1, 20000),
(140, '7b8f009d-5ab8-46fc-8223-e78a81ebf636', 8, 1, 20000),
(141, '8dd66f97-bd51-42c0-844d-d2656702430f', 6, 1, 20000),
(142, '839c49d5-4816-41b7-b53d-9c0c8183f9de', 4, 3, 60000),
(143, '28c3596d-0acf-4576-8226-c38647158871', 9, 1, 13000),
(144, '28c3596d-0acf-4576-8226-c38647158871', 47, 1, 5000),
(145, '28c3596d-0acf-4576-8226-c38647158871', 4, 1, 20000),
(146, '28c3596d-0acf-4576-8226-c38647158871', 86, 1, 20000),
(147, '8e4f0504-7e0d-49ed-a8cf-998ceeeacf1f', 5, 1, 40000),
(148, '8e4f0504-7e0d-49ed-a8cf-998ceeeacf1f', 86, 1, 20000),
(149, '2daac834-0965-4cf9-9cc5-d84801299ae4', 4, 2, 40000),
(150, '2daac834-0965-4cf9-9cc5-d84801299ae4', 86, 2, 40000),
(151, '996282bc-8c14-4e14-bc40-9705ffc1a3ed', 5, 1, 40000),
(152, '8d02e90a-ff85-46ea-a661-3525aecba854', 47, 4, 20000),
(153, '8d02e90a-ff85-46ea-a661-3525aecba854', 86, 4, 80000),
(154, 'cd597e4c-02d9-4dca-b9c3-ba8bfbc1c824', 47, 1, 5000),
(155, 'cd597e4c-02d9-4dca-b9c3-ba8bfbc1c824', 4, 1, 20000),
(156, 'cd597e4c-02d9-4dca-b9c3-ba8bfbc1c824', 5, 1, 40000),
(157, '398ec070-b717-4cf5-86b5-15ada609c2b8', 5, 1, 40000),
(158, '398ec070-b717-4cf5-86b5-15ada609c2b8', 4, 1, 20000),
(159, 'f09c4ce2-e86a-4863-b20f-4fedb67d0754', 86, 1, 20000),
(160, 'f09c4ce2-e86a-4863-b20f-4fedb67d0754', 6, 1, 20000),
(161, '6384d285-6e43-422b-acc7-00ae41cf21a7', 47, 1, 5000),
(162, '6384d285-6e43-422b-acc7-00ae41cf21a7', 4, 1, 20000),
(163, '03e41650-bc4d-4643-881c-10baa95ab248', 4, 1, 20000),
(164, '03e41650-bc4d-4643-881c-10baa95ab248', 5, 1, 40000),
(165, 'a2801728-8e10-464a-b098-b79a633618cf', 5, 1, 40000),
(166, 'a2801728-8e10-464a-b098-b79a633618cf', 4, 1, 20000),
(167, '5f400ec8-8888-4019-94fc-ab72e8a1e732', 5, 1, 40000),
(168, '5f400ec8-8888-4019-94fc-ab72e8a1e732', 4, 1, 20000),
(169, 'ed8b9a32-900b-4484-8278-98f58a266958', 5, 1, 40000),
(170, 'ed8b9a32-900b-4484-8278-98f58a266958', 4, 1, 20000),
(171, '066e64a4-5ca3-4b24-8bcb-797efa4433c1', 5, 1, 40000),
(172, '066e64a4-5ca3-4b24-8bcb-797efa4433c1', 4, 1, 20000),
(173, '95dc7ac6-047b-46ab-88cf-ab4f7abd98b6', 5, 1, 40000),
(174, '95dc7ac6-047b-46ab-88cf-ab4f7abd98b6', 4, 1, 20000),
(175, 'c1171c23-19ce-4555-84d7-022f9a3d4809', 5, 1, 40000),
(176, 'c1171c23-19ce-4555-84d7-022f9a3d4809', 4, 1, 20000),
(177, 'c1171c23-19ce-4555-84d7-022f9a3d4809', 47, 1, 5000),
(178, 'faa3a69b-21d9-4e71-9549-9e5b7a179212', 5, 1, 40000),
(179, 'faa3a69b-21d9-4e71-9549-9e5b7a179212', 86, 1, 20000),
(180, '7d0c114b-a03b-4ed3-9b70-0ff9a06291f5', 5, 1, 40000),
(181, '7d0c114b-a03b-4ed3-9b70-0ff9a06291f5', 4, 1, 20000),
(182, 'adba4732-ca12-4d25-a627-89c7374c5854', 5, 1, 40000),
(183, 'adba4732-ca12-4d25-a627-89c7374c5854', 4, 1, 20000),
(184, 'ca76424b-0abc-4845-81cc-0f5db7b78123', 4, 1, 20000),
(185, 'ca76424b-0abc-4845-81cc-0f5db7b78123', 5, 1, 40000),
(186, '73441734-0dd6-4440-8967-d48919615eb3', 4, 1, 20000),
(187, '73441734-0dd6-4440-8967-d48919615eb3', 5, 1, 40000),
(188, '73441734-0dd6-4440-8967-d48919615eb3', 86, 1, 20000),
(189, 'ab2fe3e4-4b84-4891-813e-be08bafc58f8', 5, 1, 40000),
(190, 'ab2fe3e4-4b84-4891-813e-be08bafc58f8', 4, 1, 20000),
(191, '8bc91d7e-0aec-45cf-9955-802324c744d3', 5, 1, 40000),
(192, '8bc91d7e-0aec-45cf-9955-802324c744d3', 4, 1, 20000),
(193, '2fa6e799-eb77-4170-9706-4861077b85ab', 47, 1, 5000),
(194, '2fa6e799-eb77-4170-9706-4861077b85ab', 4, 1, 20000),
(195, '4935bcf5-8fe0-4a73-8769-a9a57e442bb4', 5, 1, 40000),
(196, '4935bcf5-8fe0-4a73-8769-a9a57e442bb4', 9, 1, 13000),
(197, '8f7dd66e-0339-4929-93a9-04adf6743602', 47, 3, 15000),
(198, '8f7dd66e-0339-4929-93a9-04adf6743602', 5, 3, 120000),
(199, 'da942a6c-9147-4e10-a260-dc4ba14a7851', 47, 3, 15000),
(200, 'da942a6c-9147-4e10-a260-dc4ba14a7851', 5, 3, 120000);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id_product` varchar(255) NOT NULL,
  `id_category` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_product`, `id_category`, `name`, `price`, `stock`, `description`, `image`) VALUES
('47bb4e10-673c-471c-8af0-eb65acee96c9', 2, 'Black Forest', 5000, 756, 'Black Forest Martini Cocktail. 50ml Creme de cacoa. 25ml Cherry brandy. 10 - 15ml Creme de cassis. For the Chocolate Cream Topping. 25ml Chocolate flavoured Irish Cream liquor. 100ml Whipping cream. For the Garnish. 10g Dark chocolate.', 'http://20.20.20.147:4040/upload/Black Forest.png'),
('4a8f6a50-d79d-40d5-b6eb-d67c25a8cc76', 2, 'Cofee Late', 20000, 184, 'Latte atau Caffè latte adalah espresso atau kopi yang dicampur dengan susu dan memiliki lapisan busa yang tipis di bagian atasnya. Perbandingan antara susu dengan kopi pada caffè latte', 'http://20.20.20.147:4040/upload/Cappusino.png'),
('5419fade-1c8c-48b2-8d74-0d1214dfc7ab', 2, 'Cofee Lateeee', 20000, 230, 'Latte atau Caffè latte adalah espresso atau kopi yang dicampur dengan susu dan memiliki lapisan busa yang tipis di bagian atasnya. Perbandingan antara susu dengan kopi pada caffè latte', 'http://54.175.159.200/upload/Cappusino.png'),
('5a848494-a0c9-47b2-b5f5-bf99854d2c43', 2, 'Espresso', 40000, 29860, 'Espresso adalah minuman yang dihasilkan dengan mengekstraksi biji kopi yang sudah digiling dengan menyemburkan air panas di bawah tekanan tinggi. Espresso berasal dari Bahasa Italia yang berarti express atau \"cepat\" karena dibuat untuk disajikan dengan segera kepada pelanggan', 'http://20.20.20.147:4040/upload/Espresso.png'),
('5e2e55ca-65e4-4f30-9f65-331e4661ca3d', 2, 'Cofee Late', 20000, 230, 'Latte atau Caffè latte adalah espresso atau kopi yang dicampur dengan susu dan memiliki lapisan busa yang tipis di bagian atasnya. Perbandingan antara susu dengan kopi pada caffè latte', 'http://20.20.20.147:4040/upload/Cappusino.png'),
('6afde38f-b7cc-4121-b275-5ea26b09895f', 2, 'Cofee Late', 20000, 226, 'Latte atau Caffè latte adalah espresso atau kopi yang dicampur dengan susu dan memiliki lapisan busa yang tipis di bagian atasnya. Perbandingan antara susu dengan kopi pada caffè latte', 'http://20.20.20.147:4040/upload/Cappusino.png'),
('86bcbb5e-f765-4636-a4be-cfdc2b8346c2', 2, 'Cofee Late', 20000, 216, 'Latte atau Caffè latte adalah espresso atau kopi yang dicampur dengan susu dan memiliki lapisan busa yang tipis di bagian atasnya. Perbandingan antara susu dengan kopi pada caffè latte', 'http://20.20.20.147:4040/upload/Cappusino.png'),
('8b2c9047-b609-4a7c-a101-641641082e83', 1, 'Salmon Teriyaki', 20000, 457, 'Fish & Seafood Preheat oven to 400°F. Toss mushrooms, garlic, olive and truffle oils, sea salt, and peppers together in the baking dish. Layer salmon on top of the mushrooms. Depending on the thickness of the salmon, bake for 10 to 20 minutes until tender.', 'http://20.20.20.147:4040/upload/Salmon Truffle Teriyaki.png'),
('96bffe43-82eb-4ec9-9445-2cc68e612362', 2, 'Cofee Late', 20000, 229, 'Latte atau Caffè latte adalah espresso atau kopi yang dicampur dengan susu dan memiliki lapisan busa yang tipis di bagian atasnya. Perbandingan antara susu dengan kopi pada caffè latte', 'http://20.20.20.147:4040/upload/Cappusino.png'),
('9d53550e-9eb3-4d64-8ad8-0cda7a8963e2', 1, 'Chicken Katsu', 13000, 497, 'Ayam katsu, juga dikenal sebagai ayam panko, atau tori katsu adalah hidangan ayam goreng Jepang yang dibuat dengan remah roti panko yang juga populer di Australia, Hawaii, London, California, dan daerah lain di dunia.', 'http://20.20.20.147:4040/upload/Chicken Katsu Dabu-dabu.png'),
('a9c2de73-aee7-4f7e-a695-dd332cd5faa2', 2, 'Cofee Late', 20000, 230, 'Latte atau Caffè latte adalah espresso atau kopi yang dicampur dengan susu dan memiliki lapisan busa yang tipis di bagian atasnya. Perbandingan antara susu dengan kopi pada caffè latte', 'http://20.20.20.147:4040/upload/Cappusino.png'),
('e80cb582-ceb2-4876-91b8-2ab7b5912c10', 2, 'Cofee Lateeee', 20000, 230, 'Latte atau Caffè latte adalah espresso atau kopi yang dicampur dengan susu dan memiliki lapisan busa yang tipis di bagian atasnya. Perbandingan antara susu dengan kopi pada caffè latte', 'http://20.20.20.147:4040/upload/Cappusino.png');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` varchar(20) NOT NULL,
  `password` text NOT NULL,
  `salt` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `name`, `email`, `status`, `password`, `salt`) VALUES
(1, 'Guntur', 'gangkasa888@gmail.com', 'admin', 'ea238f0056128945c8f25d2ea4de3e516d984d58257784eb2715ed7199ddbf61dcd3be48a39dcf0a5515e121555c54d37b5161866a61f88987287aafdaa35d76', 'cd3b733537cde5e60c'),
(2, 'Angkasa', 'gangkasa8@gmail.com', 'cashier', 'c1a572c644fb43ef12579e59b66fc58accb1c0a7ec332a01cbd6037f4e5173e659154264f05089facbe94e0134bd4e1433219569dc20204610dc0eaf14973756', 'a30fec98ebc6db6a66'),
(3, 'Putra', 'gangkasa@gmail.com', 'cashier', 'bf00d4cfe8b888c91a1f5d049424668ad8523878b531b9f823aa58fcfad9fe6e71f4319d0f8ef0948355b31518c81415cd0e2ca2086cbae7e2219cfb47686f67', '5b5e1dec6c7852f322'),
(4, 'gg', 'gangkasa@gmail.com', 'cashier', '713ff4ed7e854a3bdbce9ec27f26f4490c1a4453a7f3455e6909c0aaf6b5c68ebd2d82aff57f62c33b127a5bc1c76afb70cca8d93f38f2f86f440ccafee43d28', 'a323c08d2bc5d3218f'),
(17, 'Black Forest', 'gangkasa888@gmail.com', 'admin', '3cda1f5cd27b9491136d7d9a58badcf80a7a361c8cd3d28ebf3e85abf78809d79bd408a32641913c30f71956cfd4737d04e97d3091355ab85cb3a0ad8dc85888', '4ee74a2dc99658ecb7'),
(18, 'ss', 'gangkasa888@gmail.com', 'admin', '5f503263cac218b72407594ddfab7efdb63432e3f8e5370ff32db48ee0127cf9aaa7e94c19b8f91f3d9a54e353fb2d765fafc71300e542795c0507126faba560', '2062bec81d3967c87a'),
(19, 'sss', 'gangkasa888@gmail.com', 'admin', '8a8e601ee40a37ce386319ea545aeff822b3c55cc2b21fa3b10715b013ef4004737a5a66b8a1bed361d34bac18f6d1ceb42840e6406a7e24f5d32a95f2929587', '14ca2d7379ec43c091'),
(20, 'Black Forest', 'gangkasa888@gmail.com', 'admin', '8961652926379db1f5e1423ecc3680c7bf08ae62a46b5093091e47d26279a315c8fc84d8171b338d7aa292930e9ac13d538bc6c3e32cc108ce0fd180adb0154c', '67a8173676f1a1ce61'),
(21, 'km', 'h@mail.com', 'jn', '71dd79e56001918507d2b2327950a93e571a888f694e2d654405d3e491c017efdbd2126b42000e0f13369512c0aedcbd1a89fdc4a3e2109ada847a4d2fc69ca6', '8a51dddad9bc9509a3'),
(22, 'gg', 'angkasa@gmail.com', 'cashier', 'f125fd0403c378b51ee57409bdfef1691931274d24dcdb948913efd72ca410f767e01746a307253eb7fe2489485a71dabc6bb2d97757efcfe8f104fa9404c7eb', '5980ade78a5bb26fec');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cashier`
--
ALTER TABLE `cashier`
  ADD PRIMARY KEY (`id_cashier`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id_buyer`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id_order`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`),
  ADD KEY `id_category` (`id_category`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id_order` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `category` (`id_category`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
