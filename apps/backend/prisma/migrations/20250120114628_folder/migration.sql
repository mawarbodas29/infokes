-- CreateTable
CREATE TABLE `folders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `fileType` VARCHAR(50) NULL,
    `fileUrl` VARCHAR(255) NULL,
    `size` DECIMAL(65, 30) NULL,
    `parentId` INTEGER NOT NULL DEFAULT 0,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `newFolders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `fileType` VARCHAR(50) NULL,
    `fileUrl` VARCHAR(255) NULL,
    `size` DECIMAL(65, 30) NULL,
    `parentId` INTEGER NULL,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `newFolders` ADD CONSTRAINT `newFolders_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `newFolders`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
