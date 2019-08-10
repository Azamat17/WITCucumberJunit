package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.InventoryPage;
import pages.ProductsPage;

public class DuplicateProduct {

    InventoryPage inventoryPage = new InventoryPage();
    ProductsPage productsPage = new ProductsPage();

    @Given("Manager clicks on Products tab")
    public void manager_clicks_on_Products_tab() {
        inventoryPage.products.click();
    }

    @And("Manager clicks on Create button")
    public void manager_clicks_on_Create_button() {
        productsPage.Create.click();
    }

    @And("Manager enters AAA Title in Product Name textbox")
    public void manager_enters_AAA_Title_in_Product_Name_textbox() {
        productsPage.ProductName.sendKeys("AAA Title");
    }

    @And("Manager sets Product Type to Consumable")
    public void manager_setsProduct_Type_to_Consumable() {
        productsPage.ProductType.click();
        productsPage.Consumable.click();
    }

    @And("Manager sets Category to All_Artistic")
    public void manager_sets_Category_to_All_Artistic() {
        productsPage.Category.click();
        productsPage.All_Artistic.click();
    }

    @And("Manager enters Int Reference in Internal Reference textbox")
    public void manager_enters_Int_Reference_in_Internal_Reference_textbox() {
        productsPage.InternalReference.click();
        productsPage.InternalReference.sendKeys("Int Reference");
    }

    @And("Manager enters #0093215 in Barcode textbox")
    public void manager_enters_in_Barcode_textbox(Integer int1) {
        productsPage.Barcode.click();
        productsPage.Barcode.sendKeys("#0093215");
    }

    @Given("Manager sets Sales Price to 100")
    public void manager_sets_Sales_Price_to(Integer int1) {
        productsPage.SalesPrice.click();
        productsPage.SalesPrice.clear();
        productsPage.SalesPrice.sendKeys("100");
    }

    @And("Manager sets Cost to 75")
    public void manager_sets_Cost_to(Integer int1) {
        productsPage.Cost.click();
        productsPage.Cost.clear();
        productsPage.Cost.sendKeys("75");
    }

    @And("Manager clicks on Save Button")
    public void manager_clicks_on_Save_Button() {
        productsPage.Save.click();
    }

    @Then("Manager should see an error popup")
    public void manager_should_see_an_error_popup() {

    }

}
