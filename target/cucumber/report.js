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
  "status": "passed"
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
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});