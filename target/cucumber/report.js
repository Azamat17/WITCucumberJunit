$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/cancelFileImport.feature");
formatter.feature({
  "name": "Cancel file import in Inventory",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify a user is able to cancel file import",
  "description": "  //Given User is on Brite ERP",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@briteErpAziza"
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
  "name": "User clicks on Inventory button",
  "keyword": "When "
});
formatter.match({
  "location": "BriteErpStepsAziza.user_clicks_on_Inventory_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Transfers button",
  "keyword": "Then "
});
formatter.match({
  "location": "BriteErpStepsAziza.user_clicks_on_Transfers_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Import button",
  "keyword": "And "
});
formatter.match({
  "location": "BriteErpStepsAziza.user_clicks_on_Import_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Cancel button",
  "keyword": "Then "
});
formatter.match({
  "location": "BriteErpStepsAziza.user_clicks_on_Cancel_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/discardScrapOrdersCreation.feature");
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
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on Action dropdown that appears",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteWarehouse_Steps.manager_clicks_on_Action_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager selects Delete option",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteWarehouse_Steps.manager_selects_Delete_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager confirms deletion",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteWarehouse_Steps.manager_confirms_deletion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager should see an Odoo Server Error window popup",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteWarehouse_Steps.manager_should_see_an_Odoo_Server_Error_window_popup()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});