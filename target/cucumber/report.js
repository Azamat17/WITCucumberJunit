$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/warehouseManagement.feature");
formatter.feature({
  "name": "Warehouses dropdown verification",
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
  "error_message": "java.lang.NullPointerException\r\n\tat steps.DeleteWarehouse_Steps.manager_selects_My_Company_Chicago_warehouse_checkbox(DeleteWarehouse_Steps.java:39)\r\n\tat ✽.Manager selects My Company, Chicago warehouse checkbox(src/test/resources/features/warehouseManagement.feature:8)\r\n",
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
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});