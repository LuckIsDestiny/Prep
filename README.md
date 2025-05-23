--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Angular Question -1
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Online Learning Platform

In this task, you will develop an Angular application for an online learning platform that provides different features for students and instructors. 

Sub-tasks: 
Create Angular Components: 

-LoginComponent: Display a login form with fields for username and password. 

-StudentDashboardComponent: Display the dashboard for students, showing enrolled courses and other related features. 

-InstructorDashboardComponent: Display the dashboard for instructors, providing options to manage courses and view student enrollments. 
 
Implement Authentication Service: 

-Develop an AuthService to handle the authentication of users. This service should include methods to: 

-Authenticate users with the provided username and password. 

-Log out authenticated users. 

-Determine the role of the authenticated user (student or instructor). 

 
Implement Auth Guard: 

﻿-Create an Angular Auth Guard, AuthGuard, to protect the StudentDashboardComponent and InstructorDashboardComponent from unauthenticated access. 

Implement Role-based Authorization: 

-Implement role-based authorization to ensure that only users with the instructor role can access the InstructorDashboardComponent. 
 
Implement Routing: 

-Set up Angular routing to navigate between the LoginComponent, StudentDashboardComponent, and InstructorDashboardComponent. 

Requirements: 

-The AuthService should be correctly implemented with the specified methods. 

-The AuthGuard should be correctly implemented to protect the StudentDashboardComponent and InstructorDashboardComponent from unauthenticated access. 

-The InstructorDashboardComponent should only be accessible to users with the instructor role. 

-The Angular routing should be correctly implemented to navigate between the LoginComponent, 
StudentDashboardComponent, and InstructorDashboardComponent. 
 

Evaluation Criteria: 

-The AuthService is correctly implemented with the specified methods.

-The AuthGuard is correctly implemented to protect the StudentDashboardComponent and InstructorDashboardComponent from unauthenticated access. 

-The InstructorDashboardComponent is only accessible to users with the instructor role. 

-The Angular routing is correctly implemented to navigate between the LoginComponent, StudentDashboardComponent, and InstructorDashboardComponent.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
Angular Question-2
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
Build an Angular application to check voting eligibility

Tasks:

1. Voting Eligibility: Create a component that asks the user to enter their age in a text box. If the age entered is 18 or above, display the message "eligible to vote," otherwise display "not eligible to vote."


2. Employee List: Using the Employee class created in the previous task, create an



array of 3 Employee objects and display them in a table format using the ngFor

directive.

Requirements:

The application should prompt the user to enter their age and display the appropriate message based on the age entered.

The Employee array should be correctly displayed in a table format using the ngFor directive.

Test Cases:
 Run the application using the ng serve -o command and enter an age of 18 or above The browser opens with the application running. The message "eligible to vote" should be displayed.

--------------------------------------------------------------------------------------------------------------------------------------------------------------
React - patient
--------------------------------------------------------------------------------------------------------------------------------------------------------------
Digital Patient Registration System Development in ReactJS for a Clinic

Develop a patient registration form for a clinic using ReactJS. The form should be designed to capture the patient's name, date of birth, medical history, and current medications, and incorporate routing based on validation outcomes.

Fields:

Tasks:

Patient Name: Text field

Date of Birth: Date picker

Medical History: Textarea

Current Medications: Text field

1. Create a patient registration form component with the specified fields.

2. Include validation for each input.

3. Verify form submission with all valid inputs.

4. Verify form submission with empty mandatory fields.

5. Ensure that the date of birth is not a future date.

6. Ensure proper error messages are displayed for both valid and invalid data entries.

7. If validations pass, navigate to a welcome page using React Router.

8. If validations fail, navigate to an Error Page using React Router

---------------------------------------------------------------------------------------------------------------------
Spring Security-1
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Implement Spring Security to manage the access to your application


Problem Statement


Develop a Spring Boot application that configures Spring Security to manage the access to your application.



Tasks:


User Model and Repository: Create a User entity with fields:


1. id (type Long) : The unique id for the user.


2. username (type String) : The username for the user.


3. password (type String): The password for the user.


4. roles (type String): The user's role.



The role type should be set as a string as user can have role "USER" or "ADMIN".


Implement a UserRepository interface that extends JpaRepository to manage the CRUD operations for the User entity.


UserDetailsService Implementation:


Implement a service class named CustomUserDetailsService that implements UserDetailsService interface.


Override the loadUserByUsername method to load a user by its username.


Security Configuration:


Implement a configuration class named SecurityConfig that extends WebSecurityConfigurerAdapter.

Override the configure(HttpSecurity http) method to define the security rules.

Configure HTTP Basic authentication.

Configure in-memory authentication with at least two users (one with USER role and another with ADMIN role).

Controller Implementation:

Implement a controller named HomeController using the @RestController annotation.

Implement two endpoints:

GET /: This endpoint should be accessible to all authenticated users and return a "Welcome" message.

GET /admin: This endpoint should be accessible only to users with the ADMIN role and return a "Welcome Admin" message.

Test Cases:

Your implementation will be evaluated against the following criteria:

Basic Authentication: The application should prompt for a username and password when trying to access any endpoint.

User Access: A user with the USER role should be able to access the / endpoint but not the /admin endpoint.

Admin Access: A user with the ADMIN role should be able to access both the / and /admin endpoints.

You are not required to implement a front-end for this application. It is sufficient to create the back-end API and test it using a tool like Postman.