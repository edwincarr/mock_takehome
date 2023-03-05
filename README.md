# App Academy Mock Takehome Challenges

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone
   ```

2. Install NPM packages using install script from root folder
   ```sh
   npm run install
   ```

3. Create a PSQL user with CREATEDB PASSWORD
   ```js
   CREATE USER <user_name> WITH CREATEDB PASSWORD <'password'>;
   ```

4. Create a PSQL Database with the user in the last step as the owner
   ```js
   CREATE DATABASE <database_name> WITH OWNER <user>;
   ```
5. Create a .env file in the backend folder
   ```
   DATABASE_URL=postgresql://<user_name>:<password>@localhost/<database_name>
   PORT=5000
   ```
   NOTE: if you choose to use another port number do not forget to reflect that change inside the ./frontend_challenge/src/services/axios.js file

6. Migrate and seed models.
   ```sh
   npm run migrate
   npm run seed
   ```

7. From the backend directory start the API server
   ```sh
   npm start
   ```

8. Start the frontend in the frontend directory, this should open the project in your default browser. If not, navigate to http://localhost:3000
    ```sh
    npm start
    ```

9. Finished
