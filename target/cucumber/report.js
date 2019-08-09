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
});