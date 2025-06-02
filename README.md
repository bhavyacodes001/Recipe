# Recipe Management API

A RESTful API for managing recipes built with Node.js, Express.js, and MongoDB.

## Features

- Create, Read, Update, and Delete (CRUD) operations for recipes
- MongoDB database integration using Mongoose
- RESTful API endpoints
- Error handling and validation
- API documentation with Postman

## Prerequisites

- Node.js (v12 or higher)
- MongoDB
- Postman (for API testing)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/recipe-app
   ```

## Running the Application

```bash
npm start
```

## API Endpoints

### Create Recipe
- **POST** `/api/recipes`
- Body:
  ```json
  {
    "title": "Recipe Title",
    "ingredients": ["ingredient1", "ingredient2"],
    "instructions": "Cooking instructions",
    "cookingTime": 30,
    "difficulty": "Medium"
  }
  ```

### Get All Recipes
- **GET** `/api/recipes`

### Get Recipe by ID
- **GET** `/api/recipes/:id`

### Update Recipe
- **PUT** `/api/recipes/:id`
- Body: Same as Create Recipe

### Delete Recipe
- **DELETE** `/api/recipes/:id`

## Postman Collection

Import the following Postman collection to test the API endpoints:
[Postman Collection Link]

## Error Handling

The API includes comprehensive error handling for:
- Invalid input data
- Not found resources
- Server errors
- Database connection issues

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 