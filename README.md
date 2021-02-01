# QR-Code Generator

This is a simple backend to generate a QR Code, developed using NodeJS and Typescript.

The project features a seed generation system, providing the client with a unique string to generate a QR Code, and another endpoint to verify whether the QR Code is still valid or not.

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

By default, the database name is `qrcode`, so you just have to create this database, and the tables will be automatically created for you.

After setting up the database, just run the project:

```
yarn start
```

### Using the project

The project has 2 main endpoints:

#### GET /seed

This will generate a random string with an expiration date. This string will be used to feed the QR Code's data on the client.

Example of response:

```
{
  "seed": "xZrAAy4ctoauOL7dfsaaTO04mJlkPe3yfhcPcUNeVDc5Br6NapwFr7aRyGAWWBU6HQntFnaUN2dYHlHTtKxFKcgbH2A38TNBL7FRTI9oRKBMXD52x1zfZiKSrvyo3Qn7SZHh51Zmbq30jYVcWBKmxG7jW6qb5H9B3lbCIjCapR1FgRw3fmFaS8XszuZSWYExmCBhCyVF",
  "expires_at": "2021-02-01T05:11:28.845Z",
  "id": 141
}
```

#### GET /seed/:seed

This endpoint takes the seed and checks whether it's valid or not. QRCodes are valid for 1 minute after they are created.

Example of response:

```
{
  "isValid": false,
  "expires_at": "2021-02-01T05:11:29.000Z",
  "seed": "xZrAAy4ctoauOL7dfsaaTO04mJlkPe3yfhcPcUNeVDc5Br6NapwFr7aRyGAWWBU6HQntFnaUN2dYHlHTtKxFKcgbH2A38TNBL7FRTI9oRKBMXD52x1zfZiKSrvyo3Qn7SZHh51Zmbq30jYVcWBKmxG7jW6qb5H9B3lbCIjCapR1FgRw3fmFaS8XszuZSWYExmCBhCyVF"
}
```
