@echo off
For /F "tokens=1* delims==" %%A IN (path.properties) DO (
    IF "%%A"=="root_path" set root_path=%%B
)
PATH=%root_path%\tools\nodejs;%root_path%\tools\npm;%root_path%\tools\nodejs\node_modules\.bin;%root_path%\tools\Git\bin
call npm install
call bower install
echo Development dependacies installed successfully!
pause