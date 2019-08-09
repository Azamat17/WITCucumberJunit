$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/amazon.feature");
formatter.feature({
  "name": "Amazon verification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Amazon title verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@amazon"
    }
  ]
});
formatter.step({
  "name": "User is on Amazon application",
  "keyword": "When "
});
formatter.match({
  "location": "Amazon_Steps.user_is_on_Amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Amazon in title",
  "keyword": "Then "
});
formatter.match({
  "location": "Amazon_Steps.user_should_see_Amazon_in_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User searches for something",
  "keyword": "And "
});
formatter.match({
  "location": "Amazon_Steps.user_searches_for_something()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Amazon_Steps.user_searches_for_something(Amazon_Steps.java:25)\n\tat ✽.User searches for something(src/test/resources/features/amazon.feature:7)\n",
  "status": "failed"
});
});