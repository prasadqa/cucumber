package com.orangeHRM.base;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.orangeHRM.Utills.Config;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseFuntions extends Config 
{
	public static WebDriver driver;
	
	public static void initialization() throws Exception
	{
		if(Config.getProperty("browser").equalsIgnoreCase("chrome"))
		{
			WebDriverManager.chromedriver().setup();
			driver =  new ChromeDriver();
			driver.manage().deleteAllCookies();
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(Integer.parseInt(Config.getProperty("implicitlywait")), TimeUnit.SECONDS);
			driver.manage().timeouts().pageLoadTimeout(Long.parseLong(Config.getProperty("pageloadtimeout")), TimeUnit.SECONDS);
			driver.get("http://primusbank.qedgetech.com/");
			//driver.get(Config.getProperty("url"));
			
			
		}
		else
			if(Config.getProperty("browser").equalsIgnoreCase("firefox"))
			{
				WebDriverManager.firefoxdriver().setup();
				driver = new FirefoxDriver();
				driver.manage().deleteAllCookies();
				driver.manage().window().maximize();
				driver.manage().timeouts().implicitlyWait(Integer.parseInt(Config.getProperty("implicitlywait")), TimeUnit.SECONDS);
				driver.manage().timeouts().pageLoadTimeout(Long.parseLong(Config.getProperty("pageloadtimeout")), TimeUnit.SECONDS);
				driver.get(Config.getProperty("url"));
			}
		
	}
	
	public static void tearDown(String from)
	{
		System.out.println("tearDown=========================="+from);
		System.out.println("driver=========================="+driver);
		driver.close();
	}
	
	
}
