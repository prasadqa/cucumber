Feature: OHRM login feature

Scenario: Verify login functionality 
 Given user alredy on login page
 When title of page is OrangeHRM
 Then user enter "Admin" and "Admin"
 Then user clicks on login button
 Then user on admin home page
 Then close the browser
 
# Scenario Outline: Verify login functionality 
# Given user alredy on login page
# When title of page is OrangeHRM
# Then user enter "<username>" and "<password>"
# Then user clicks on login button
# Then user on admin home page
# Then close the browser
# 
# 
# Examples:
# 
# | username | password |
# |Admin 	| Admin    |
# |prasad 	| Admin    |