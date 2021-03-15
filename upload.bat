@echo off
cd tgz
set files=*.tgz
set url=http://192.168.0.151:8081/repository/npm/
setlocal enabledelayedexpansion
for %%f in (%files%) do (
set name=%%f
call npm publish -registry=%url% !name!
)
pause