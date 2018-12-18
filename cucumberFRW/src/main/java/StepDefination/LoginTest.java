package StepDefination;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.orangeHRM.Utills.Config;
import com.orangeHRM.base.BaseFuntions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;


public class LoginTest 
{

	WebDriver driver;
//	@Before
//	public void lunchBrowser() throws Exception
//	{
//		System.out.println("==========================called");
//		initialization();
//		
//	}
//	
//	@After
//	public void cloaseBrowser() throws Exception
//	{
//		tearDown("From Login Test");
//	}
	
	@Given("^user alredy on login page$")
	public void user_alredy_on_login_page()
	{
		WebDriverManager.chromedriver().setup();
		driver =  new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.get("http://orangehrm.qedgetech.com");
	}
	@When("^title of page is OrangeHRM$")
	public void title_of_page_is_OrangeHRM() 
	{
		String titleLogin = driver.getTitle();
		System.out.println(titleLogin);
		Assert.assertEquals("OrangeHRM", titleLogin);
	}

	
	@Then("^user enter \"(.*)\" and \"(.*)\"$")
	public void user_enter_username_and_Passsword(String userName,String password)
	{
		driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys(userName);
		driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys(password);
		
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button()
	{
		driver.findElement(By.xpath("//input[@id='btnLogin']")).click();
	}

	@Then("^user on admin home page$")
	public void user_on_admin_home_page()
	{
		boolean result = driver.findElement(By.xpath("//a[@id='welcome']")).isDisplayed();//
		Assert.assertTrue("user in admin home page", result);
	}
	@Then("^close the browser$")
	public void close_the_browser() 
	{
		driver.close();
	}

}
