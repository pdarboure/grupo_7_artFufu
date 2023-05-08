-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 07-05-2023 a las 18:56:08
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Art_Fufu4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `price` int(11) NOT NULL,
  `capacity` varchar(45) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `product_color_id` int(11) DEFAULT NULL,
  `product_sub_category_id` int(11) DEFAULT NULL,
  `product_categories_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `capacity`, `image`, `description`, `created_at`, `updated_at`, `deleted_at`, `product_color_id`, `product_sub_category_id`, `product_categories_id`) VALUES
(1, 'Johann', 2, NULL, 'product-1676127982445.jpg', 'No me quemes', '2023-03-31 21:35:26', '2023-03-31 21:35:26', NULL, 1, NULL, 1),
(3, 'Flor grande', 500, NULL, 'product-1681164682783.jpg', 'Flor de Fibrofacil para pintar y decorar', '2023-04-11 01:11:22', '2023-04-11 01:12:09', '2023-04-11 01:12:22', NULL, NULL, 1),
(4, 'Canasta de cerveza', 1900, NULL, 'product-1681319459095.jpg', 'Canasta de Fibrofacil. Apta para pintar', '2023-04-12 20:10:59', '2023-04-12 20:10:59', NULL, NULL, NULL, 1),
(5, 'Caja de Rocio', 500, NULL, 'product-1682202772440.jpg', 'Caja Para Rocio :)', '2023-04-23 01:32:52', '2023-04-23 01:35:40', '2023-04-23 01:51:26', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_categories`
--

CREATE TABLE `product_categories` (
  `id` int(11) NOT NULL,
  `category` varchar(120) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `product_categories`
--

INSERT INTO `product_categories` (`id`, `category`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'fibrofacil', '2023-03-31 22:32:38', '2023-03-31 22:32:38', NULL),
(2, 'pinturas', '2023-04-04 20:56:07', '2023-04-04 20:56:07', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_colors`
--

CREATE TABLE `product_colors` (
  `id` int(11) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `product_colors`
--

INSERT INTO `product_colors` (`id`, `color`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'azul', '2023-03-31 22:32:27', '2023-03-31 22:32:27', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_subcategory`
--

CREATE TABLE `product_subcategory` (
  `id` int(11) NOT NULL,
  `subcategory` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `user_category_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `lastname`, `email`, `password`, `image`, `user_category_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(2, 'Matias', 'Chaves', 'matiaschaves27@gmail.com', '$2b$10$NRICHLUZEOuzqAfng8XKd.tcZuqH9qchfXcQi1IzhmxA4cOjArmCO', 'user-1680808222372.jpg', 1, '2023-04-06 22:10:22', '2023-04-06 22:10:22', NULL),
(3, 'Agustin', 'Darboure', 'darbourepagustin@gmail.com', '$2b$10$VPNQU/FEV5fXkzHZ/eJkYeyChM.8FitbDqEM/yvulAjIr7uLz0kPO', 'user-1682554843944.pdf', 1, '2023-04-27 00:20:44', '2023-04-27 00:20:44', NULL),
(4, 'agustin', 'darboure', 'darboure@gmail.com', '$2b$10$OK3RYr2AtO0Jk.3QZpQxg.URdINXdU3kZjmvSxa2y/RbzP0D9uEXy', 'user-1683237178163.jpg', 1, '2023-05-04 21:52:58', '2023-05-04 21:52:58', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_category`
--

CREATE TABLE `user_category` (
  `id` int(11) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `user_category`
--

INSERT INTO `user_category` (`id`, `category`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'user', '2023-03-31 23:06:06', '2023-03-31 23:06:06', NULL),
(2, 'admin', '2023-03-31 23:06:20', '2023-03-31 23:06:20', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_colors_idx` (`product_color_id`),
  ADD KEY `productsubcategory_idx` (`product_sub_category_id`),
  ADD KEY `product_categories_idx` (`product_categories_id`);

--
-- Indices de la tabla `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product_colors`
--
ALTER TABLE `product_colors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product_subcategory`
--
ALTER TABLE `product_subcategory`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_idx` (`user_category_id`);

--
-- Indices de la tabla `user_category`
--
ALTER TABLE `user_category`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `product_colors`
--
ALTER TABLE `product_colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `product_subcategory`
--
ALTER TABLE `product_subcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `user_category`
--
ALTER TABLE `user_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `product_categories` FOREIGN KEY (`product_categories_id`) REFERENCES `product_categories` (`id`),
  ADD CONSTRAINT `product_colors` FOREIGN KEY (`product_color_id`) REFERENCES `product_colors` (`id`),
  ADD CONSTRAINT `product_subcategory` FOREIGN KEY (`product_sub_category_id`) REFERENCES `product_subcategory` (`id`);

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `category` FOREIGN KEY (`user_category_id`) REFERENCES `user_category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
