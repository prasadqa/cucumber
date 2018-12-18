$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "OHRM login feature",
  "description": "",
  "id": "ohrm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify login functionality",
  "description": "",
  "id": "ohrm-login-feature;verify-login-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user alredy on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter \"Admin\" and \"Admin\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user on admin home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.user_alredy_on_login_page()"
});
formatter.result({
  "duration": 10195233691,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.title_of_page_is_OrangeHRM()"
});
formatter.result({
  "duration": 30984633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    },
    {
      "val": "Admin",
      "offset": 24
    }
  ],
  "location": "LoginTest.user_enter_username_and_Passsword(String,String)"
});
formatter.result({
  "duration": 507830723,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2630742005,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.user_on_admin_home_page()"
});
formatter.result({
  "duration": 45845167,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.close_the_browser()"
});
formatter.result({
  "duration": 2076463835,
  "status": "passed"
});
formatter.uri("Navigations.feature");
formatter.feature({
  "line": 1,
  "name": "All the navigations",
  "description": "",
  "id": "all-the-navigations",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verufy all the navigation of the Orange HRM",
  "description": "",
  "id": "all-the-navigations;verufy-all-the-navigation-of-the-orange-hrm",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user should login with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on admin module",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user verify admin page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on PIM",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user verify PIM page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on Leave page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user verify Leave page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on Time page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user verify Time page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user click on Recruitment page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user verify Recruitment page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#Then user click on Performance page"
    },
    {
      "line": 18,
      "value": "#Then user verify Performance page"
    }
  ],
  "line": 19,
  "name": "user click on Directory page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user verify Directory page",
  "keyword": "Then "
});
formatter.match({
  "location": "Navigations.user_should_login_with_valid_credentials()"
});
formatter.result({
  "duration": 10221192600,
  "status": "passed"
});
formatter.match({
  "location": "Navigations.user_is_on_home_page()"
});
formatter.result({
  "duration": 43943586,
  "status": "passed"
});
formatter.match({
  "location": "Navigations.user_click_on_admin_module()"
});
formatter.result({
  "duration": 3673591018,
  "status": "passed"
});
formatter.match({
  "location": "Navigations.user_verify_admin_page()"
});
formatter.result({
  "duration": 36474395,
  "status": "passed"
});
formatter.match({
  "location": "Navigations.user_click_on_PIM()"
});
formatter.result({
  "duration": 1924010729,
  "status": "passed"
});
formatter.match({
  "location": "Navigations.user_verify_PIM_page()"
});
formatter.result({
  "duration": 35374836,
  "status": "passed"
});
formatter.match({
  "location": "Navigations.user_click_on_Leave_page()"
});
formatter.result({
  "duration": 2533793510,
  "status": "passed"
});
formatter.match({
  "location": "Navigations.user_verify_Leave_page()"
});
formatter.result({
  "duration": 50346740,
  "status": "passed"
});
formatter.match({
  "location": "Navigations.user_click_on_Time_page()"
});
formatter.result({
  "duration": 1539329538,
  "status": "passed"
});
formatter.match({
  "location": "Navigations.user_verify_Time_page()"
});
formatter.result({
  "duration": 54302825,
  "status": "passed"
});
formatter.match({
  "location": "Navigations.user_click_on_Recruitment_page()"
});
formatter.result({
  "duration": 1509892432,
  "status": "passed"
});
formatter.match({
  "location": "Navigations.user_verify_Recruitment_page()"
});
formatter.result({
  "duration": 32982623,
  "status": "passed"
});
formatter.match({
  "location": "Navigations.user_click_on_Directory_page()"
});
formatter.result({
  "duration": 20106125063,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.7 (efcef9a3ecda02b2132af215116a03852d08b9cb),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027OJAS00063\u0027, ip: \u0027192.168.2.59\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54325}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d72.0.3626.7 (efcef9a3ecda02b2132af215116a03852d08b9cb), userDataDir\u003dC:\\Users\\chprasad\\AppData\\Local\\Temp\\scoped_dir5000_25040}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003dignore, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d71.0.3578.98, browserConnectionEnabled\u003dfalse, proxy\u003dProxy(), nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 80957bf414cb676d42871416c8c2e425\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat StepDefination.Navigations.user_click_on_Directory_page(Navigations.java:142)\r\n\tat ✽.Then user click on Directory page(Navigations.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Navigations.user_verify_Directory_page()"
});
formatter.result({
  "status": "skipped"
});
});