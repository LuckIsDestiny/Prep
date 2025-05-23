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

---------------------------------------------------------------------------------------------------------------------
Spring CRUD-3
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
The government is building a centralized library management system which involves a micro-service, allowing people to issue books and return them at the right time.
 
Library management requires creating users and renewing user subscriptions via authenticated processes. Secure create-user and renew-user-subscription APIs with Spring Security. The API issue-book should be permitted for everyone. This micro-service should be built using the Spring Boot REST API framework and it should connect to the database using the JPA API and secure methods using Spring Security.
 
In this task, implement three APIs for which the details are given below:
 
  /api/v1/create-user [POST]: Simple user save method in an authenticated manner
  /api/v1/issue-book [POST]: Send issue, check if users subscribed(see subscribed field in User entity), otherwise throw SubscriptionExpiredException- permitAll
/api/v1/renew-user-subscription/{id} [GET]: Send userId, set user subscription to true in an authenticated manner.
 
Your task is to complete the files given below:
 
src/main/java/com/wecp/library/controller/LibraryController.java
src/main/java/com/wecp/library/security/WebSecurityConfigurer.java
src/main/java/com/wecp/library/repository/UserRepository.java
src/main/java/com/wecp/library/repository/IssueRepository.java
 
You can find blank jpa repositories here:
 
src/main/java/com/wecp/library/repository/UserRepository.java
src/main/java/com/wecp/library/repository/IssueRepository.java
 
Notes:
Implementation related specifics are added directly as javadocs in the workspace.
Ensure that the structure and datatypes of the APIs are followed as specified in the comments to ensure that the code is evaluated correctly.


---------------------------------------------------------------------------------------------------------------------
React - 2
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Develop a streamlined loan application form for a bank using ReactJS. The form should require applicants to provide essential details for the loan application and include routing based on the validation of these details.

Fields:

Full Name: Text field
Loan Amount: Number field
Purpose of Loan: Dropdown with options (House, Car, Personal, Education)
Tenure: Number field (in years)

Tasks:

Create a loan application form component with the specified fields.
Verify submission with all valid details filled in.
Ensure the loan amount entered is within specified minimum and maximum limits(1000 and 1000000).
Check that the tenure is within acceptable limits(1-30 years).
Ensure proper error messages are shown for both valid and invalid entries.
If validations pass, navigate to a welcome page using React Router.
If validations fail, navigate to an Error Page using React Router.

You need to complete the following files:

./src/ErrorPage.js
./src/LoanForm.js
./src/WelcomePage.js
// ErrorPage.js

import React from 'react';

const ErrorPage = () => {
    // Error message should be displayed in h1
};

export default ErrorPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
const LoanForm = () => {
  const navigate = useNavigate();
  const \[formData, setFormData] = useState({
    fullName: "",
    loanAmount: "",
    purpose: "House",
    tenure: "",
  });
  const \[errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, \[name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    // Validations rules: if valid than navigate to welcome page otherwies 
    // navigate to error page
    
  };

  return (
    <div>
    <h1 className="header">Bank Loan Form</h1>

    {/\* Create Loan Form HTML \*/}
    </div>
  );
};

export default LoanForm;
// WelcomePage.js

import React from 'react';

const WelcomePage = () => {
    // welcome message should be shown in h1
};

export default WelcomePage;    complete the code
