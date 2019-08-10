$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/productCreation.feature");
formatter.feature({
  "name": "General Info in product creation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Changing values in General Info when creating product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@productCreation"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on Products tab",
  "keyword": "Given "
});
formatter.match({
  "location": "DuplicateProduct.manager_clicks_on_Products_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on Create button",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_clicks_on_Create_button()"
});
formatter.result({
<<<<<<< HEAD
  "status": "passed"
=======
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@class\u003d\u0027btn btn-primary btn-sm o-kanban-button-new btn-default\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.19)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Azamats-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:831:e453:ab68:9808%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.4\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.19, chrome: {chromedriverVersion: 77.0.3865.10 (bc3579f611bbc..., userDataDir: /var/folders/2_/jf6fsrvs7gl...}, goog:chromeOptions: {debuggerAddress: localhost:52018}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 94916f3a2c157e04b282b1c033f9bb85\n*** Element info: {Using\u003dxpath, value\u003d//button[@class\u003d\u0027btn btn-primary btn-sm o-kanban-button-new btn-default\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat steps.DuplicateProduct.manager_clicks_on_Create_button(DuplicateProduct.java:21)\n\tat ✽.Manager clicks on Create button(src/test/resources/features/productCreation.feature:7)\n",
  "status": "failed"
>>>>>>> e04b10516638aff930d813126d9c4d4f1885dec7
});
formatter.step({
  "name": "Manager enters \"AAA Title\" in Product Name textbox",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_enters_in_Product_Name_textbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager sets Product Type to Consumable",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_setsProduct_Type_to_Consumable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager sets Category to All_Artistic",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_sets_Category_to_All_Artistic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager enters Int Reference in Internal Reference textbox",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_enters_Int_Reference_in_Internal_Reference_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager enters \"#0093215\" in Barcode textbox",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_enters_in_Barcode_textbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager sets Sales Price to \"100\"",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_sets_Sales_Price_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager sets Cost to \"75\"",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_sets_Cost_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_clicks_on_Save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager should see an error popup",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateProduct.manager_should_see_an_error_popup()"
});
formatter.result({
<<<<<<< HEAD
  "status": "passed"
});
=======
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
>>>>>>> e04b10516638aff930d813126d9c4d4f1885dec7
formatter.after({
  "status": "passed"
});
});