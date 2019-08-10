$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/transfersSearch.feature");
formatter.feature({
  "name": "BriteERP Transfers search feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "BriteERP url verification using search feature",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@transfersearch"
=======
      "name": "@discardScrap"
    },
    {
      "name": "@smoke"
>>>>>>> f8befb2d0c9225d7e99e977490e7ca6c570e918a
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Inventory page",
  "keyword": "Given "
});
formatter.match({
  "location": "TransfersSearch_Steps.user_goes_to_Transfers_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User goes to Transfers tab",
  "keyword": "When "
});
formatter.match({
  "location": "TransfersSearch_Steps.user_goes_to_Transfers_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types \"anything\" word in the search box",
  "keyword": "And "
});
formatter.match({
  "location": "TransfersSearch_Steps.user_types_word_in_the_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify the current url",
  "keyword": "Then "
});
formatter.match({
  "location": "TransfersSearch_Steps.user_verify_the_current_url()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/productCategories.feature");
formatter.feature({
  "name": "BriteERP Inventory Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create Product Categories as a manager",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@productCategories"
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
  "name": "Manager navigates to Products under Configuration and clicks",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductCategories_Steps.manager_navigates_to_Products_under_Configuration_and_clicks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks Products Categories",
  "keyword": "And "
});
formatter.match({
  "location": "ProductCategories_Steps.manager_clicks_Products_Categories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks Create button",
  "keyword": "And "
});
formatter.match({
  "location": "ProductCategories_Steps.manager_clicks_Create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager types \"Cars\" in Category Name field",
  "keyword": "And "
});
formatter.match({
  "location": "ProductCategories_Steps.manager_types_in_Category_Name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks Parent Category",
  "keyword": "And "
});
formatter.match({
  "location": "ProductCategories_Steps.manager_clicks_Parent_Category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager selects All",
  "keyword": "And "
});
formatter.match({
  "location": "ProductCategories_Steps.manager_selects_All()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "ProductCategories_Steps.manager_clicks_Save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager sees \"Cars\" as a product category name",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductCategories_Steps.manager_sees_as_a_product_category_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/productCreation.feature");
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@class\u003d\u0027btn btn-primary btn-sm o-kanban-button-new btn-default\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.19)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Azamats-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:831:e453:ab68:9808%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.4\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.19, chrome: {chromedriverVersion: 77.0.3865.10 (bc3579f611bbc..., userDataDir: /var/folders/2_/jf6fsrvs7gl...}, goog:chromeOptions: {debuggerAddress: localhost:52724}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f4da2b06c178a469c1fc647391759599\n*** Element info: {Using\u003dxpath, value\u003d//button[@class\u003d\u0027btn btn-primary btn-sm o-kanban-button-new btn-default\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat steps.DuplicateProduct.manager_clicks_on_Create_button(DuplicateProduct.java:21)\n\tat ✽.Manager clicks on Create button(src/test/resources/features/productCreation.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "Manager enters AAA Title in Product Name textbox",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_enters_AAA_Title_in_Product_Name_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager sets Product Type to Consumable",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_setsProduct_Type_to_Consumable()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager sets Category to All_Artistic",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_sets_Category_to_All_Artistic()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager enters Int Reference in Internal Reference textbox",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_enters_Int_Reference_in_Internal_Reference_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager enters #0093215 in Barcode textbox",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_enters_in_Barcode_textbox(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager sets Sales Price to 100",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_sets_Sales_Price_to(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager sets Cost to 75",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_sets_Cost_to(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager clicks on Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "DuplicateProduct.manager_clicks_on_Save_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager should see an error popup",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateProduct.manager_should_see_an_error_popup()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/warehouseManagement.feature");
formatter.feature({
  "name": "Warehouses verification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Manager should fail to delete selected warehouse",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@deleteWarehouse"
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
  "name": "Manager clicks on Warehouse Management dropdown",
  "keyword": "Given "
});
formatter.match({
  "location": "DeleteWarehouse_Steps.manager_clicks_on_Warehouse_Management_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on Warehouses",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteWarehouse_Steps.manager_clicks_on_Warehouses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager selects My Company, Chicago warehouse checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteWarehouse_Steps.manager_selects_My_Company_Chicago_warehouse_checkbox()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//tbody//input\"}\n  (Session info: chrome\u003d77.0.3865.19)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Azamats-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:831:e453:ab68:9808%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.4\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.19, chrome: {chromedriverVersion: 77.0.3865.10 (bc3579f611bbc..., userDataDir: /var/folders/2_/jf6fsrvs7gl...}, goog:chromeOptions: {debuggerAddress: localhost:52831}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 26849b46d6b490fe3392ae9b926ec489\n*** Element info: {Using\u003dxpath, value\u003d//tbody//input}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat steps.DeleteWarehouse_Steps.manager_selects_My_Company_Chicago_warehouse_checkbox(DeleteWarehouse_Steps.java:29)\n\tat ✽.Manager selects My Company, Chicago warehouse checkbox(src/test/resources/features/warehouseManagement.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "Manager clicks on Action dropdown that appears",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteWarehouse_Steps.manager_clicks_on_Action_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager selects Delete option",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteWarehouse_Steps.manager_selects_Delete_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager confirms deletion",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteWarehouse_Steps.manager_confirms_deletion()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager should see an Odoo Server Error window popup",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteWarehouse_Steps.manager_should_see_an_Odoo_Server_Error_window_popup()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
});