# E-Shopy Project Documentation

## Table of Contents

1. [Introduction](#introduction)
    - [Project Overview](#project-overview)
    - [Project Scope](#project-scope)


2. [Technologies Used](#technologies-used)
    - [Frontend](#frontend)
    - [Backend](#backend)

3. [User Interfaces](#user-interfaces)
    - [Home Page](#home-page)
    - [Product Details Page](#product-details-page)
    - [Search Filters](#search-filters)
    - [User Dashboard](#user-dashboard)
    - [Admin Dashboard](#admin-dashboard)
    - [Payment Processing](#payment-processing)

4. [Features and Functionality](#features-and-functionality)
    - [Searching](#searching)
    - [Cart Management](#cart-management)
    - [Payment Processing](#payment-processing)
    - [User Stories or Use Cases](#user-stories-or-use-cases)

## Introduction

### Project Overview
- The project involves developing a simple e-commerce website allowing users to browse products, add items to their cart, proceed to checkout, and complete purchases. Key functionalities include product listing with images and descriptions, a cart system to manage selected items, a checkout process for order confirmation and payment, and user account management for tracking order history and managing personal information. The website will incorporate intuitive navigation, responsive design for various devices, secure payment processing, and backend functionality for inventory management, order processing, and user authentication. Additionally, it may include features like product search, sorting and filtering options, and promotional banners to enhance user experience and drive sales. Overall, the goal is to create a seamless and user-friendly platform for online shopping, catering to the needs of both customers and administrators.

### Project Scope
The ESHOP project aims to create a user-friendly and feature-rich online warehouse where user can:

- Users can browse through a variety of products.
- Users can add products to their shopping cart.
- The shopping cart will display all selected items and their total price.
- The checkout process will involve entering shipping and payment information.
- Access personalized dashboards for managing their cart, history and purchases.
- Seamlessly complete transactions through secure payment processing.

## Technologies Used

### Frontend
The front end of the E-Shopy project is built using a variety of technologies, frameworks, and libraries to deliver a dynamic and responsive user interface. Below is a list of the key technologies used on the frontend:

- **React**: We have chosen React as the core frontend framework for its component-based architecture, virtual DOM, and excellent community support.

- **React Router**: React Router is used for client-side routing, enabling seamless navigation between different application parts.

- **Axios**: Axios is utilized for making HTTP requests to our backend server and external APIs, facilitating data retrieval and management.

- **React-Slick**:React-Slick is employed for creating a smooth and interactive user experience, particularly in the banner section showcasing recently and updated item.

- **AOS (Animate on Scroll)**: AOS is used for adding elegant and engaging animations to various elements on the website, enhancing visual appeal.

- **Stripe**: Stripe is integrated for secure and seamless payment processing, allowing users to confidently make purchases.

- **Firebase**: Firebase provides user authentication and hosting services, ensuring secure access to the platform and efficient deployment.
### Backend
The backend of the E-Shopy project is responsible for managing data, handling user requests, and ensuring the overall functionality of the platform. Here are the backend technologies and frameworks used:
Node.js: Node.js serves as the foundation of our backend, enabling server-side JavaScript execution for high performance and scalability.

- **Express.js**: Express.js is utilized as the backend framework to create robust RESTful APIs and manage routes, middleware, and HTTP requests.

- **MongoDB**: MongoDB is our database of choice for its flexibility and scalability. It stores book data, user information, and transaction history.

- **JWT (JSON Web Tokens)**: JWT is used for user authentication and authorization, providing a secure way to verify the identity of users and control access to specific routes and resources.

- **Stripe (Node.js SDK)**: The Stripe Node.js SDK is integrated on the backend to securely handle payment processing and interact with the Stripe payment gateway.

- **Firebase Authentication**: Firebase Authentication is utilized to manage user authentication, enhancing the security and user experience of the platform.
## User Interfaces

### Home Page

The home page of the E-Shopy platform serves as the gateway to an engaging and user-friendly reading experience. This section provides an overview of the home page's design and functionality.

#### Description

The home page is designed to offer a visually appealing and intuitive introduction to the ESHOP platform. It comprises several key components:

1. **Banner with React-Slick**: At the top of the page, a banner featuring an eye-catching React-Slick slider welcomes users to the platform. This animation adds a dynamic and engaging element to the user interface.

2. **Category Section**: The product category section of an e-commerce website is an essential component that organizes the available items into logical groupings based on their characteristics or intended use. It serves as a navigational aid, guiding users to relevant product offerings with ease. Each category is typically accompanied by visually appealing thumbnail images or icons representing the items it encompasses. By presenting products in a structured manner, users can quickly locate the types of items they are interested in, streamlining their browsing experience. Furthermore, the category section may include subcategories to offer more specific navigation paths, allowing users to refine their search further. Ultimately, the goal of the product category section is to enhance user engagement and facilitate seamless product discovery, leading to increased customer satisfaction and conversions.

3. **Services Section**: The home page also features a services section, which provides users with information about the services offered by ESHOP. This section serves to inform users about the platform's capabilities and offerings.

4. **Trending Product**: The "Trending Products" section on your homepage highlights popular items that are currently generating significant interest among customers. It serves as a dynamic showcase, enticing visitors with compelling visuals and encouraging exploration. By featuring trending products prominently, you create urgency and drive sales while providing valuable insights into consumer preferences. Regular updates keep the section fresh and engaging, making it a powerful tool for increasing user engagement and driving conversions.

5. **Partners**: The "Our Partner Companies" section on your homepage showcases trusted brands we collaborate with. By featuring recognizable names, we build credibility and reassure users of our reliability. This section serves as social proof, demonstrating our valued connections within the industry and fostering trust among visitors..


