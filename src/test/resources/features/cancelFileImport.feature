Feature: Cancel file import in Inventory

  @briteErpAziza @smoke

  Scenario: Verify a user is able to cancel file import

  //Given User is on Brite ERP
    When User clicks on Inventory button
    Then User clicks on Transfers button
    And User clicks on Import button
    Then User clicks on Cancel button
