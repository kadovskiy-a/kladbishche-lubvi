@echo off
chcp 65001 > nul
echo Отправка обновлений на GitHub...
git add .
git commit -m "Обновление через локальный скрипт"
git push -u origin main
echo Готово!
pause