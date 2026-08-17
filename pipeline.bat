@echo off


echo ============================
echo Installing Dependencies...
echo ============================


call npm install


echo ============================
echo Installing Playwright Browsers
echo ============================


call npx playwright install


echo ============================
echo Running Playwright Tests...
echo ============================


call npx playwright test


echo ============================
echo Test Execution Completed
echo ============================


exit /b %errorlevel%
