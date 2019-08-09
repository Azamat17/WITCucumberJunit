$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/discardScrapOrdersCreation.feature");
formatter.feature({
  "name": "BriteERP Inventory Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Discard Scrap Orders Creation as a manager",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@discardScrap"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Manger navigates to Scrap and clicks",
  "keyword": "Given "
});
formatter.match({
  "location": "DiscardScrap_Steps.manger_navigates_to_Scrap_and_clicks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks Create button_",
  "keyword": "And "
});
formatter.match({
  "location": "DiscardScrap_Steps.manager_clicks_Create_button_()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks Discard button",
  "keyword": "And "
});
formatter.match({
  "location": "DiscardScrap_Steps.manager_clicks_Discard_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager sees \"Scrap Orders\" in main header",
  "keyword": "Then "
});
formatter.match({
  "location": "DiscardScrap_Steps.manager_sees_in_main_header(String)"
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
});