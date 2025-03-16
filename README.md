# backend-case

This project is a simple Node.js application that manages user points. It provides endpoints to retrieve, add, and use points, as well as to get a list of all users and their points.

## Project Structure

```
backend-case
├── src
│   ├── app.js
│   ├── controllers
│   │   └── pointsController.js
│   ├── routes
│   │   └── pointsRoutes.js
│   └── models
│       └── pointsModel.js
├── package.json
├── .env
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/backend-case.git
   ```

2. Navigate to the project directory:
   ```
   cd backend-case
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   node src/app.js
   ```

2. The application will run on `http://localhost:3000`.

## Endpoints

- **GET /points**: Retrieves the current points of a user.
- **POST /points/use**: Deducts points from the user's total and returns the updated points.
- **POST /points/add**: Adds points to the user's total and returns the updated points.
- **GET /points/all**: Retrieves a list of all users and their points.

## Environment Variables

Make sure to create a `.env` file in the root directory with the necessary environment variables, such as database connection strings.

## License

This project is licensed under the MIT License.