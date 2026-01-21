@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.  The ASF licenses this file
@REM to you under the Apache License, Version 2.0 (the
@REM "License"); you may not use this file except in compliance
@REM with the License.  You may obtain a copy of the License at
@REM
@REM    https://www.apache.org/licenses/LICENSE-2.0
@REM
@REM Unless required by applicable law or agreed to in writing,
@REM software distributed under the License is distributed on an
@REM "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
@REM KIND, either express or implied.  See the License for the
@REM specific language governing permissions and limitations
@REM under the License.
@REM ----------------------------------------------------------------------------

@REM ----------------------------------------------------------------------------
@REM Maven wrapper script (Windows)
@REM ----------------------------------------------------------------------------

@echo off
set BASEDIR=%~dp0
set WRAPPER_JAR=%BASEDIR%\.mvn\wrapper\maven-wrapper.jar
set WRAPPER_PROPERTIES=%BASEDIR%\.mvn\wrapper\maven-wrapper.properties

if exist "%WRAPPER_PROPERTIES%" (
  for /f "tokens=1,2 delims==" %%A in (%WRAPPER_PROPERTIES%) do (
    if "%%A"=="wrapperUrl" set WRAPPER_URL=%%B
  )
)

if "%WRAPPER_URL%"=="" set WRAPPER_URL=https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.2.0/maven-wrapper-3.2.0.jar

if not exist "%WRAPPER_JAR%" (
  if exist "%SystemRoot%\System32\bitsadmin.exe" (
    bitsadmin /transfer mvnwrapper /download /priority foreground "%WRAPPER_URL%" "%WRAPPER_JAR%"
  ) else if exist "%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" (
    powershell -Command "(New-Object Net.WebClient).DownloadFile('%WRAPPER_URL%', '%WRAPPER_JAR%')"
  ) else (
    echo powershell または bitsadmin が必要です。
    exit /b 1
  )
)

if not defined JAVA_HOME (
  set JAVA_CMD=java
) else (
  set JAVA_CMD=%JAVA_HOME%\bin\java
)

"%JAVA_CMD%" -jar "%WRAPPER_JAR%" %*
