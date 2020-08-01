This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and Node.js.
Project link [CookBook](https://bs-cookbook.herokuapp.com).

docker exec -ti cookbook-api bash -c 'npm i && npm start'

## Usage

- Clone the repository: `https://github.com/lyskoivan/cookbook.git`

## Usage With Docker

- Go into the repository: `cd cookbook`
- Build the docker compose: `docker-compose up -d --build`
- For run server: `docker exec -ti cookbook-api bash -c 'npm i && npm start'`
- For run view, open second terminal and run: `docker exec -ti view-cookbook bash -c 'npm i & npm start'`
- View in browser at: `http://localhost:3000`

## Usage Without Docker

- Go into the view repository: `cd cookbook/view`
- Install the application: `npm install`
- Create build: `npm run build` - For production
- Or run view: `npm start`
- Go into the server repository: `cd cookbook/server`
- Install the application: `npm install`
- Start the server: `npm start`
- Server view build in browser at: `http://localhost:8000`
- If view is running: `http://localhost:3000`
