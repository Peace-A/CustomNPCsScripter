npm run distlinux32
mv dist/*.AppImage dist/bin/
npm run distlinux64
mv dist/*.AppImage dist/bin/
npm run distwin32
mv dist/*.exe dist/bin/win32/
npm run distwin64
mv dist/*exe dist/bin/
