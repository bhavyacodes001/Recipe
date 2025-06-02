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
3. Environment Setup:
   - Copy `.env.example` to `.env`
   - Update the values in `.env` with your configuration:
     ```
     PORT=3001
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

## Deployment

The API is deployed on Render.com and can be accessed at:
[Your Render URL will be here after deployment]

### Local Development
For local development, the API runs on `http://localhost:3001`

### Production
For production, use the deployed URL:
[Your Render URL will be here after deployment]

## Environment Variables

The following environment variables are required:

- `PORT`: The port number for the server (default: 3001)
- `MONGODB_URI`: MongoDB connection string

## Security Note

Never commit your `.env` file to version control. The `.env.example` file is provided as a template for required environment variables.

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