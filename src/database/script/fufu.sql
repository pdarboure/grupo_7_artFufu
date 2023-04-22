CREATE TABLE `products` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `price` DECIMAL NOT NULL,
   `image` VARCHAR(255),
   `capacity` VARCHAR(255),
   `description` VARCHAR(255),
   `product_color_id` INT,
   `product_sub_category_id` INT,
   `product_categories_id` INT,
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP DEFAULT null,
   PRIMARY KEY (`id`)
);

CREATE TABLE `user` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255),
   `lastname` VARCHAR(255),
   `username` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255),
   `password` VARCHAR(255) NOT NULL,
   `user_category_id` INT,
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP DEFAULT null,
   PRIMARY KEY (`id`)
);

CREATE TABLE `product_categories` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `category` VARCHAR(255),
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP DEFAULT null,
   PRIMARY KEY (`id`)
);

CREATE TABLE `user_category` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `category` VARCHAR(255),
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP DEFAULT null,
   PRIMARY KEY (`id`)
);

CREATE TABLE `product_subcategory` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `subCategory` VARCHAR(255),
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP DEFAULT null,
   PRIMARY KEY (`id`)
);

CREATE TABLE `product_colors` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `color` VARCHAR(255),
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP DEFAULT null,
   PRIMARY KEY (`id`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_3f540d22-b362-4089-9725-7fb1c55659f1` FOREIGN KEY (`product_categories_id`) REFERENCES `product_categories`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_b76a87d0-fef1-45f3-a4ff-42e7995c4d3b` FOREIGN KEY (`product_sub_category_id`) REFERENCES `product_subcategory`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_b4d05190-86be-4485-8852-31191d908e6d` FOREIGN KEY (`product_color_id`) REFERENCES `product_colors`(`id`)  ;

ALTER TABLE `user` ADD CONSTRAINT `FK_24c63f8e-6568-47ab-a485-01dc97ebe2b9` FOREIGN KEY (`user_category_id`) REFERENCES `user_category`(`id`)  ;
