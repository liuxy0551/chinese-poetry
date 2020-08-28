/*
 Navicat Premium Data Transfer

 Source Server         : docker-mysql
 Source Server Type    : MySQL
 Source Server Version : 50647
 Source Host           : 30.40.40.155:3306
 Source Schema         : chinese-poetry

 Target Server Type    : MySQL
 Target Server Version : 50647
 File Encoding         : 65001

 Date: 28/08/2020 17:19:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for caocaoshijis
-- ----------------------------
DROP TABLE IF EXISTS `caocaoshijis`;
CREATE TABLE `caocaoshijis` (
  `id` varchar(64) NOT NULL,
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `paragraphs` text COMMENT '内容',
  `isDelete` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='曹操诗集';

SET FOREIGN_KEY_CHECKS = 1;
