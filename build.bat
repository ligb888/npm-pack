@echo off
set build=%~dp0tgz
if not exist "%build%" md "%build%"
cd %build%
setlocal enabledelayedexpansion
for /f "tokens=*" %%i in (../list.txt) do (
    set name=%%i
    call npm pack !name!
)
pause
