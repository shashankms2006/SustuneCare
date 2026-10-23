@echo off
title Sustune Care - Dual Shield NRI Portal
echo ========================================================
echo       SUSTUNE CARE - NRI ASSET & ELDERCARE PORTAL
echo ========================================================
echo.

node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH.
    echo Please install Node.js from https://nodejs.org/ (v18 or higher recommended).
    pause
    exit /b 1
)

echo [1/2] Checking dependencies...
if not exist "node_modules\" (
    echo Installing dependencies... This may take a minute.
    call npm install
) else (
    echo Dependencies already installed.
)

echo.
echo [2/2] Starting Sustune Care local server...
echo The website will be available at http://localhost:5173
echo Press Ctrl+C in this window anytime to stop the server.
echo.

start http://localhost:5173
call npm run dev

pause
