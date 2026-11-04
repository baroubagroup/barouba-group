@echo off
title Envoi vers GitHub et Vercel — BAROUBA GROUP...
color 0A
echo.
echo ===================================================
echo   SAUVEGARDE ET PUBLICATION SUR GITHUB (BAROUBA)
echo ===================================================
echo.
echo Enregistrement de vos modifications...

cd /d "%~dp0barouba-group"

set GIT_EXE="C:\Users\DELL\AppData\Local\GitHubDesktop\app-3.6.4\resources\app\git\cmd\git.exe"
if not exist %GIT_EXE% set GIT_EXE=git

%GIT_EXE% add .
%GIT_EXE% commit -m "Mise a jour depuis l'ordinateur"
echo.
echo Envoi en cours vers GitHub (Vercel se deploie automatiquement)...
%GIT_EXE% push origin main
echo.
echo ===================================================
echo                     TERMINE !
echo ===================================================
echo Vos modifications sont synchronisees sur GitHub :
echo https://github.com/baroubagroup/barouba-group
echo.
pause
