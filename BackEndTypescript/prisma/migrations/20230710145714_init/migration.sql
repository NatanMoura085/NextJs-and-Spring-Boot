/*
  Warnings:

  - Added the required column `lastName` to the `Register` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Register` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Register" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "creationdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateEdition" DATETIME
);
INSERT INTO "new_Register" ("email", "id", "name", "password") SELECT "email", "id", "name", "password" FROM "Register";
DROP TABLE "Register";
ALTER TABLE "new_Register" RENAME TO "Register";
CREATE UNIQUE INDEX "Register_email_key" ON "Register"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
