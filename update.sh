#!/usr/bin/env bash
set -e
set -x

# run this as follows to update all dependencies:
# docker run -it -v $(pwd):/c node:16 /c/update.sh

cd /c
npx --yes npm-check-updates -u
npm install -g npm@latest
npm install
npm audit fix
npm run all
