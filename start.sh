#!/usr/bin/env bash
echo "========================================================"
echo "      SUSTUNE CARE - NRI ASSET & ELDERCARE PORTAL"
echo "========================================================"
echo ""

if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js is not installed or not in PATH."
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

if [ ! -d "node_modules" ]; then
    echo "[1/2] Installing dependencies..."
    npm install
else
    echo "[1/2] Dependencies already installed."
fi

echo ""
echo "[2/2] Starting Sustune Care local server..."
echo "The website will be available at http://localhost:5173"
echo ""

npm run dev
