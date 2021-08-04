---
sidebar_position: 2
title: Quick Start
description: Start from scratch with CWire
---
## Disclaimer
***
This guide is a general quick start guide, if you want to use CWire with specific tooling please checkout our getting started guides for the SDK, Databases.
This guide shows an example implementation of CWire with [NodeJS](https://nodejs.org/) and [Sequelize](https://sequelize.org/).

## Setup
***
Before you start you need to install NodeJS >= 12.

#### Setup new Express Application with sequelize:
```bash
# Run following command in your cmd or terminal
mkdir cwire-example
npm init
npm install express sqlite3 sequelize 
```
#### Create a server.js file
```js title="server.js"
// Load express SDK
const express = require('express');

// Load Sequelize
const { DataTypes, Model, Sequelize } = require('sequelize');

// Create Express Application
const app = express();
// Add body parser
app.use(express.bodyParser())

// Create Sequalize instance
const sequelize = new Sequelize('sqlite::memory', { logging: false });

// Create "User" DTO Class
class User extends Model {}

// Initialize User Table
User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  { sequelize },
);

// Add user register route
app.post('/', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email
  });
  await newUser.save();
  res.json(newUser.toJson());
})

// Start Express Application
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

## Add CWire SDK

[NodeJS SDK](https://github.com/cwire-io/nodejs-sdk)
