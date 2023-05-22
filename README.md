# nodejs_rate_limiter

A demo application for api rate limiting using:
- NodeJs
- ExpressJs
- Redis
- PostgresSQL

## Running the application from Docker

You will need to have Docker installed on you machine.

Clone this repository:
```sh
git clone https://github.com/KKDoddy/nodejs_rate_limiter.git
```
In the project's directory, run the following command to start and run the app docker container:
```sh
docker compose up
```
Two seed users will be created in the database and the app will be listening on localhost, port 3000.

## Postman requests collection
Use [this link](https://api.postman.com/collections/9266054-ac2a4f9b-760f-4c40-b9b4-dd181ffec101?access_key=PMAT-01H12N1Q6V44MJS28BXYTTM0VK) and import a shared postman collection of available endpoints.

## Endpoints
- **login:** /api/auth/login
- **new email notification:** /api/notifications/sms/new
- **new sms notification:** /api/notifications/sms/new

## Pre-saved users' credentials for logging in:
  1) email: john@example.com, password: magogo
  2) email: jane@example.com, password: magogo





