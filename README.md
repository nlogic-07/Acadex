# ACADEX - Final Year Project Management System

A full-stack MERN-based platform designed to streamline the management of final-year academic projects between **students, teachers, and administrators**.

The system provides role-based dashboards for submitting project proposals, requesting supervisors, managing project progress, reviewing proposals, handling notifications, and managing users and project files through a centralized platform.

## Key Features

###  Student Dashboard

* Submit and manage final-year project proposals
* Request teachers as project supervisors
* Track supervisor request status
* View project progress and feedback
* Receive real-time notifications
* Upload and manage project-related files

###  Teacher Portal

* View and manage assigned students
* Accept or reject supervisor requests
* Review student project proposals
* Track project progress
* Provide feedback to assigned students
* Manage project-related files

###  Admin Control Panel

* Manage student and teacher accounts
* Perform CRUD operations on users
* Approve or reject project proposals
* Monitor projects and user activity
* Manage the centralized file management system
* Maintain overall system control through role-based authorization

## Technical Highlights

* **MERN Stack** — MongoDB, Express.js, React.js, Node.js
* **Authentication & Authorization** — Secure login with role-based access control
* **MongoDB Schema Design** — Relationships between users, projects, supervisors, requests, feedback, and files
* **MongoDB Indexing** — Optimized database queries for frequently accessed data
* **RESTful APIs** — Structured backend APIs for client-server communication
* **Real-Time Notifications** — Instant updates for project and supervisor-related events
* **Server-Side File Handling** — Secure upload, storage, and management of project files
* **Protected Routes** — Separate access permissions for students, teachers, and administrators
* **Centralized Error Handling & Validation** — Consistent API responses and input validation

## Project Workflow

**Student → Project Proposal → Admin Approval → Supervisor Request → Teacher Approval → Project Development → Progress & Feedback → Final Submission**

The system is designed to replace fragmented communication and manual project tracking with a centralized workflow for academic project management.
