# cucumber-appium-wdio-allure-report

Pre-Conditions to run the wdio test

Install the following:
[1.Android Studio
2.Node js
3.Appium Inspector
4.Appium server]()

create the emulator and change the the device name in (wdio.conf.js) file as per the emulator name in android studio

open the project directory and open the terminal and install the
1.npm install

To run the the test suite use the following command
`wdio wdio.conf.js`
to generate the report use the following command
`allure serve allure-results`
