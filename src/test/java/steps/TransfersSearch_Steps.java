package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import utilities.Config;
import utilities.Driver;

import static org.junit.Assert.assertEquals;

public class TransfersSearch_Steps {
    @Given("User is on Inventory page")
    public void user_is_on_Inventory_page() throws InterruptedException {
        Driver.getDriver().get(Config.getProperty("url"));
        WebElement login = Driver.getDriver().findElement(By.id("login"));
        login.sendKeys(Config.getProperty("username"));
        WebElement password = Driver.getDriver().findElement(By.id("password"));
        password.sendKeys(Config.getProperty("password") + Keys.ENTER);
        Thread.sleep(2000);
        WebElement inventory = Driver.getDriver().findElement(By.linkText("Inventory"));
        inventory.click();
    }

    @When("User goes to Transfers tab")
    public void user_goes_to_Transfers_tab() throws InterruptedException {
        WebElement transferTab = Driver.getDriver().findElement(By.linkText("Transfers"));
        transferTab.click();
        Thread.sleep(3000);
    }

    @When("User types {string} word in the search box")
    public void user_types_word_in_the_search_box(String string) throws InterruptedException {
        WebElement searchBox = Driver.getDriver().findElement(By.xpath("/html/body/div[1]/div[2]/div[1]/div[1]/div/input"));
        Thread.sleep(3000);
        searchBox.sendKeys("anything" + Keys.ENTER);

    }


    @Then("User verify the current url")
    public void user_verify_the_current_url() {
        assertEquals("Failed", Driver.getDriver().getCurrentUrl() ,"http://54.148.96.210/web?#view_type=list&model=stock.picking&menu_id=368&action=490");


    }

}
