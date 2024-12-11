# Setting Up Express

Follow these steps to set up an Express application:

1. Install Node.js and npm - Download and install Node.js from [nodejs.org](https://nodejs.org/). Verify the installation by running `node -v` and `npm -v`.
2. Initialize a New Project - Create a new directory for your project, navigate into it, and initialize a new Node.js project with `mkdir my-express-app && cd my-express-app && npm init -y`.
3. Install Express - Install Express as a dependency with `npm install express`.
4. Create the Entry Point - Create a file named `app.js` and add the basic Express server code.
5. Run the Application - Start the server by running `node app.js` and navigate to `http://localhost:3000` in your browser.
6. Additional Configuration - Install `nodemon` for development with `npm install --save-dev nodemon`, update the `scripts` section in `package.json`, and run the application in development mode with `npm run dev`.


# setting up the sequelize 
1. Install Sequelize - Install Sequelize as a dependency with `npm install sequelize`.
2. Install Sequelize-cli - Install Sequelize-cli as a dependency with `npm install --save-dev sequelize-cli`.
3. Initialize Sequelize - Initialize Sequelize with `npx sequelize-cli init`.
4. Create a Model - Create a model with `npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`.
5. Run Migrations - Run the migrations with `npx sequelize-cli db:migrate`.
6. Create a Seed - Create a seed with `npx sequelize-cli seed:generate --name demo-user`.
7. Run Seeds - Run the seeds with `npx sequelize-cli db:seed:all`.

# Configuring Sequelize

After initializing Sequelize, you need to configure the `config.json` file located in the `config` directory. This file contains the database connection settings for different environments (development, test, production).

Here is an example configuration:

```json
{
    "development": {
        "username": "root",
        "password": null,
        "database": "database_development",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
```


