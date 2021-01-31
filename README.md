# QR-Code Generator

This is a simple backend to generate a QR Code, developped with NodeJS using Typescript.

The project features a seed generation system, providing the client with a unique string to generate a QR Code, and another endpoint to verify whether the QR Code is still valid.

By default, they have a duration of 1 minute.

### Setting up the project

First, clone the project:

```
git clone https://github.com/rodriigovieira/qrcode-generator
```

Then change to the project directory:

```
cd qrcode-generator
```

The project is using yarn to manage its dependencies. If you don't have yarn, you can install it with the command `npm -g install yarn`.

Install the project's dependencies:

```
yarn
```

Then, you have to configure your local MySQL instance according to what's specified in the `ormconfig.json` file.

By default, the database name is `qrcode`, so you just would have to create this database, and the tables would be automatically created for you.

After setting up your database, just run the project:

```
yarn start
```
