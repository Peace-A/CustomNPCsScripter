pnpm run distlinux32
mv dist/*.AppImage dist/bin/
pnpm run distlinux64
mv dist/*.AppImage dist/bin/
pnpm run distwin32
mv dist/*.exe dist/bin/win32/
pnpm run distwin64
mv dist/*exe dist/bin/
