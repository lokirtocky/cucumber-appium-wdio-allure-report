const allure = require('allure-commandline');

exports.config = {
    runner: 'local',
    port: 4723,
    specs: ['./features/**/*.feature'],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'nightwatch-android-11',
        'appium:platformVersion': '11',
        'appium:app': './apps/app-debug.apk',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.saucelabs.mydemoapp.android',
        'appium:appActivity': 'com.saucelabs.mydemoapp.android.view.activities.SplashActivity',
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 40000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 0,
    services: [
        ['appium', {
            args: {
                address: '127.0.0.1',
                port: 4723,
            },
            logPath: './',
            startTimeout: 30000,
        }],
        'visual'
    ],
    framework: 'cucumber',
    reporters: [['allure', { outputDir: 'allure-results' }], 'cucumberjs-json'],
    cucumberOpts: {
        require: ['./features/step-definitions/steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report');
        const generation = allure(['generate', 'allure-results', '--clean']);
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000
            );
            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout);
                if (exitCode !== 0) {
                    return reject(reportError);
                }
                console.log('Allure report successfully generated');
                resolve();
            });
        });
    },
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        if (error) {
            await browser.takeScreenshot();
        }
    }
};