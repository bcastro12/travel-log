# Travel Log

![Screenshot_2](https://user-images.githubusercontent.com/12499211/122182595-c9a2bd00-ce60-11eb-8c90-5fba332ad4e6.png)

A travel log where you can go anywhere you want on the map and create a registry of a place you visited. Made with Node.js and React. Uses MongoDB and Mongoose.

## Installation

First, clone the repository:

`git clone https://github.com/bcastro12/travel-log`

Then install dependencies in client and server folders:

```
cd client
npm install
```
```
cd server
npm install
```

Create a .env file in the `server` folder with your MongoDB URI: `MONGO_URI=mongodb://127.0.0.1:27017/travel-log`

Create a .env file in the `client` folder with your MapBox API Key: `REACT_APP_MAPBOX_API_TOKEN=YOUR_API_KEY`

Then start both `client` and `server`:

```
cd client
npm start
```
```
cd server
npm start
```
