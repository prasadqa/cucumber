package com.orangeHRM.Utills;

import java.io.FileInputStream;
import java.util.Properties;

public class Config {
	
	static Properties properties;
	
	public static String getProperty(String propName) throws Exception
	{
		properties = new Properties();
		FileInputStream profile = new FileInputStream("D:\\SeleniumSamples\\CucumberFRWOHRM\\cucumberFRW\\src\\main\\java\\com\\orangeHRM\\Utills\\Environment.properties");
		properties.load(profile);
		return properties.getProperty(propName); 
		
		
	}



}
