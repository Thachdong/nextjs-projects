/*
  Warnings:

  - Changed the type of `page` on the `PageSetting` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "EPageName" AS ENUM ('HOME_PAGE', 'CONTACT_PAGE', 'ABOUT_PAGE', 'COLLECTION_PAGE');

-- AlterTable
ALTER TABLE "PageSetting" DROP COLUMN "page",
ADD COLUMN     "page" "EPageName" NOT NULL;
