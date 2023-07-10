/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "user";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Register" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Register_email_key" ON "Register"("email");
