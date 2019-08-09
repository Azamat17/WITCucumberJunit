package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class WarehousesPage {

    @FindBy (xpath = "//tbody//input")
    public WebElement MyCompanyChicago_Checkbox;

    @FindBy (xpath = "//button[contains(text(),'Action')]")
    public WebElement ActionDropdown;

    @FindBy (xpath = "//a[contains(text(),'Delete')]")
    public WebElement Delete;

    @FindBy (xpath = "//span[contains(text(),'Ok')]")
    public WebElement ConfirmDeletion;

    @FindBy (xpath = "//span[contains(text(),'Ok')]")
    public WebElement Error_OK;

    @FindBy (xpath = "//div[@class= 'modal-header']")
    public WebElement ErrorPopup;

}
