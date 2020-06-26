#!/usr/bin/env sh
# couldnt figure out undocumented 'output template' mode for pkg so wrote this
# also need to include .node files until pkg supports including them in binary

NODE_ABI="node-64"
VERSION=$(node -pe "require('./package.json').version")

rm -rf dist

mkdir dist
mkdir builds/dweb-$VERSION-linux-x64
mkdir builds/dweb-$VERSION-macos-x64
mkdir builds/dweb-$VERSION-win-x64

mv builds/dweb-linux builds/dweb-$VERSION-linux-x64/dweb
mv builds/dweb-macos builds/dweb-$VERSION-macos-x64/dweb
mv builds/dweb-win.exe builds/dweb-$VERSION-win-x64/dweb.exe

cp node_modules/utp-native/prebuilds/linux-x64/$NODE_ABI.node builds/dweb-$VERSION-linux-x64/
cp node_modules/utp-native/prebuilds/darwin-x64/$NODE_ABI.node builds/dweb-$VERSION-macos-x64/
cp node_modules/utp-native/prebuilds/win32-x64/$NODE_ABI.node builds/dweb-$VERSION-win-x64/

cp LICENSE builds/dweb-$VERSION-linux-x64/
cp LICENSE builds/dweb-$VERSION-macos-x64/
cp LICENSE builds/dweb-$VERSION-win-x64/

cp README.md builds/dweb-$VERSION-linux-x64/README
cp README.md builds/dweb-$VERSION-macos-x64/README
cp README.md builds/dweb-$VERSION-win-x64/README

cd builds
../node_modules/.bin/cross-zip dweb-$VERSION-linux-x64 ../dist/dweb-$VERSION-linux-x64.zip
../node_modules/.bin/cross-zip dweb-$VERSION-macos-x64 ../dist/dweb-$VERSION-macos-x64.zip
../node_modules/.bin/cross-zip dweb-$VERSION-win-x64 ../dist/dweb-$VERSION-win-x64.zip

rm -rf builds

# now travis will upload the 3 zips in dist to the release