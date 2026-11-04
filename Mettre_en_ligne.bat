@echo off
title Envoi vers GitHub et Vercel...
color 0A
echo.
echo ==========================================
echo   SAUVEGARDE ET PUBLICATION SUR GITHUB
echo ==========================================
echo.
echo Enregistrement de vos modifications...

set GIT_EXE="C:\Users\DELL\AppData\Local\GitHubDesktop\app-3.6.3\resources\app\git\cmd\git.exe"

%GIT_EXE% add .
%GIT_EXE% commit -m "Mise a jour depuis l'ordinateur"
echo.
echo Envoi en cours vers GitHub (Vercel va se deployer tout seul)...
%GIT_EXE% push origin main
echo.
echo ==========================================
echo                TERMINE !
echo ==========================================
echo Vos modifications sont en ligne. Vercel est en train de les deployer.
echo.
pause
