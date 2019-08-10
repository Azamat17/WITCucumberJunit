Feature: BriteERP Transfers search feature
  @transfersearch @smoke
  Scenario:BriteERP title verification using search feature
    Given User is on Inventory page
    When User goes to Transfers tab
    And User types "anything" word in the search box
    Then  User verify the current title


