[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19702302&assignment_repo_type=AssignmentRepo)
# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Assignment Overview

You will:
1. Set up an Express.js server
2. Create RESTful API routes for a product resource
3. Implement custom middleware for logging, authentication, and validation
4. Add comprehensive error handling
5. Develop advanced features like filtering, pagination, and search

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   npm start
   ```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

## API Documentation

### Base URL

    http://localhost:3000/api/products

### Endpoints

#### 1. Get All Products
- **Endpoint:** `GET /api/products`
- **Description:** Retrieve a list of all products.
- **Response Example:**
    ```json
    [
      {
        "_id": "665f1c2e8e4b2a001e7e6a1a",
        "name": "Laptop",
        "description": "High-performance laptop with 16GB RAM",
        "price": 1200,
        "category": "electronics",
        "inStock": true
      },
      ...
    ]
    ```

#### 2. Get Product by ID
- **Endpoint:** `GET /api/products/:id`
- **Description:** Retrieve a single product by its ID.
- **Response Example:**
    ```json
    {
      "_id": "665f1c2e8e4b2a001e7e6a1a",
      "name": "Laptop",
      "description": "High-performance laptop with 16GB RAM",
      "price": 1200,
      "category": "electronics",
      "inStock": true
    }
    ```

#### 3. Create a New Product
- **Endpoint:** `POST /api/products`
- **Description:** Add a new product.
- **Request Body Example:**
    ```json
    {
      "name": "Coffee Maker",
      "description": "Programmable coffee maker with timer",
      "price": 50,
      "category": "kitchen",
      "inStock": false
    }
    ```
- **Response Example:**
    ```json
    {
      "_id": "665f1c2e8e4b2a001e7e6a1b",
      "name": "Coffee Maker",
      "description": "Programmable coffee maker with timer",
      "price": 50,
      "category": "kitchen",
      "inStock": false
    }
    ```

#### 4. Update a Product
- **Endpoint:** `PUT /api/products/:id`
- **Description:** Update an existing product by its ID.
- **Request Body Example:**
    ```json
    {
      "name": "Updated Laptop",
      "description": "Updated description",
      "price": 1300,
      "category": "electronics",
      "inStock": true
    }
    ```
- **Response Example:**
    ```json
    {
      "_id": "665f1c2e8e4b2a001e7e6a1a",
      "name": "Updated Laptop",
      "description": "Updated description",
      "price": 1300,
      "category": "electronics",
      "inStock": true
    }
    ```

#### 5. Delete a Product
- **Endpoint:** `DELETE /api/products/:id`
- **Description:** Delete a product by its ID.
- **Response Example:**
    ```json
    {
      "message": "Product deleted successfully"
    }
    ```

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all the required API endpoints
2. Implement the middleware and error handling
3. Document your API in the README.md
4. Include examples of requests and responses

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)