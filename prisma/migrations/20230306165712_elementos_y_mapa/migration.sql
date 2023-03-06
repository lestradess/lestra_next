/*
  Warnings:

  - You are about to drop the column `posicion` on the `Animales` table. All the data in the column will be lost.
  - You are about to drop the column `posicion` on the `Arboles` table. All the data in the column will be lost.
  - You are about to drop the column `posicion` on the `Enemigos` table. All the data in the column will be lost.
  - You are about to drop the column `posicionRuna` on the `Enemigos` table. All the data in the column will be lost.
  - You are about to drop the column `posicion` on the `Minas` table. All the data in the column will be lost.
  - You are about to drop the column `posicion` on the `Personaje` table. All the data in the column will be lost.
  - Added the required column `mapaId` to the `Animales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mapaId` to the `Arboles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mapaId` to the `Enemigos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mapaId` to the `Minas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mapaId` to the `Personaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `runaId` to the `Personaje` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Animales` DROP COLUMN `posicion`,
    ADD COLUMN `mapaId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Arboles` DROP COLUMN `posicion`,
    ADD COLUMN `mapaId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Enemigos` DROP COLUMN `posicion`,
    DROP COLUMN `posicionRuna`,
    ADD COLUMN `mapaId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Minas` DROP COLUMN `posicion`,
    ADD COLUMN `mapaId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Personaje` DROP COLUMN `posicion`,
    ADD COLUMN `mapaId` INTEGER NOT NULL,
    ADD COLUMN `runaId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `RunasPersonajes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mapaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RunasEnemigos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mapaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mapa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `casilla` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Mapa_casilla_key`(`casilla`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Personaje` ADD CONSTRAINT `Personaje_mapaId_fkey` FOREIGN KEY (`mapaId`) REFERENCES `Mapa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Personaje` ADD CONSTRAINT `Personaje_runaId_fkey` FOREIGN KEY (`runaId`) REFERENCES `RunasPersonajes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RunasPersonajes` ADD CONSTRAINT `RunasPersonajes_mapaId_fkey` FOREIGN KEY (`mapaId`) REFERENCES `Mapa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enemigos` ADD CONSTRAINT `Enemigos_mapaId_fkey` FOREIGN KEY (`mapaId`) REFERENCES `Mapa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Animales` ADD CONSTRAINT `Animales_mapaId_fkey` FOREIGN KEY (`mapaId`) REFERENCES `Mapa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Minas` ADD CONSTRAINT `Minas_mapaId_fkey` FOREIGN KEY (`mapaId`) REFERENCES `Mapa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Arboles` ADD CONSTRAINT `Arboles_mapaId_fkey` FOREIGN KEY (`mapaId`) REFERENCES `Mapa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RunasEnemigos` ADD CONSTRAINT `RunasEnemigos_mapaId_fkey` FOREIGN KEY (`mapaId`) REFERENCES `Mapa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
