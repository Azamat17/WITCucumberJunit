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
      "name": "@transfersearch"
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
});