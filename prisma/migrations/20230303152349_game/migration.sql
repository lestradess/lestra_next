-- CreateTable
CREATE TABLE `Personaje` (
    `id` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `avatar` INTEGER NOT NULL DEFAULT 0,
    `posicion` VARCHAR(191) NULL,
    `vida` INTEGER NOT NULL DEFAULT 20,
    `armaduraMadera` INTEGER NOT NULL DEFAULT 1,
    `armaduraMetal` INTEGER NOT NULL DEFAULT 1,
    `escudoMadera` INTEGER NOT NULL DEFAULT 1,
    `escudoMetal` INTEGER NOT NULL DEFAULT 1,
    `espadaMadera` INTEGER NOT NULL DEFAULT 1,
    `espadaMetal` INTEGER NOT NULL DEFAULT 1,
    `comida` INTEGER NOT NULL DEFAULT 5,
    `agua` INTEGER NOT NULL DEFAULT 5,
    `madera` INTEGER NOT NULL DEFAULT 0,
    `metal` INTEGER NOT NULL DEFAULT 0,
    `cuero` INTEGER NOT NULL DEFAULT 0,
    `carne` INTEGER NOT NULL DEFAULT 0,
    `piedra` INTEGER NOT NULL DEFAULT 0,
    `carta` VARCHAR(191) NULL,
    `carta1` VARCHAR(191) NULL,
    `carta2` VARCHAR(191) NULL,
    `carta3` VARCHAR(191) NULL,
    `carta4` VARCHAR(191) NULL,
    `carta5` VARCHAR(191) NULL,
    `carta6` VARCHAR(191) NULL,
    `carta7` VARCHAR(191) NULL,
    `carta8` VARCHAR(191) NULL,
    `carta9` VARCHAR(191) NULL,
    `picoPiedra` BOOLEAN NOT NULL DEFAULT false,
    `picoMetal` BOOLEAN NOT NULL DEFAULT false,
    `arcoMadera` BOOLEAN NOT NULL DEFAULT false,
    `arcoMetal` BOOLEAN NOT NULL DEFAULT false,
    `monedas` INTEGER NOT NULL DEFAULT 0,
    `usuarioId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `personaje` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enemigos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `posicion` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `posicionAnterior` VARCHAR(191) NOT NULL,
    `posicionRuna` VARCHAR(191) NULL,
    `nivel` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Animales` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `posicion` VARCHAR(191) NULL,
    `posicionAnterior` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Minas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `posicion` VARCHAR(191) NULL,
    `posicionAnterior` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Arboles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `posicion` VARCHAR(191) NULL,
    `posicionAnterior` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Personaje` ADD CONSTRAINT `Personaje_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
