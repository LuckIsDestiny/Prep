--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Angular Question
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
