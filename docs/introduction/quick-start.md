---
sidebar_position: 2
title: Quick Start
description: Start from scratch with cwire
---
## Disclaimer
***
This guide is a general quick start guide. If you want to use cwire with specific tooling, please check out our 
implementation guids. This guide only shows an example implementation of cwire with
[NodeJS](https://nodejs.org/) and [Sequelize](https://sequelize.org/).
We are currently working on other SDKs, for more information please check out our
[Github profile](https://github.com/cwire-io).

## Requirements
***
Before you start you need to install NodeJS >=14.   
```
node -v
```

### Setup cwire account
Create a new account [here](https://login.cwire.io/signUp)     
Create and copy API Key from [here](https://cwa.cwire.io/admin/apiKeys)  


### Install dependencies
```bash
# Run following command in your cmd or terminal
mkdir cwire-example && cd cwire-example
npm init
npm install express sqlite3 sequelize faker @cwire/nodejs-sdk
```
### Create a server.mjs file
```js title="server.mjs"
import faker from 'faker';
import express from 'express';
import Sequelize from 'sequelize';
import { CWire, SequelizeDataModel } from '@cwire/nodejs-sdk';

// Setup Express + Sequelize Database connection
const app = express();
const sequelize = new Sequelize('sqlite::memory', { logging: false });
class User extends Sequelize.Model {}
User.init(
    {
        email: { type: Sequelize.DataTypes.STRING },
        lastName: { type: Sequelize.DataTypes.STRING },
        firstName: { type: Sequelize.DataTypes.STRING },
    },
    { sequelize },
);

async function main() {
    // Open cwire connection
    await CWire.init('<API KEY>', {
        // Parse sequelize model to cwire model
        models: SequelizeDataModel.parse([User]),
    });
    await sequelize.sync();

    // Create example data
    for (let index = 0; index < 20; index++) {
        await User.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
        });
    }

    // Start express server (Only as an example)
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.listen(7070, () => console.log('Started cwire example on port 7070...'));
}

main();
```

### Last steps:
After adding the server.mjs you can start the example server from your command line.
```shell
node server.mjs
```
After you starting the example server you can go to [cwire app](https://app.cwire.io) and create a new project with your
new example data.

## What's next?
Explore our other [Github Examples](https://github.com/cwire-io/nodejs-sdk/tree/master/examples).