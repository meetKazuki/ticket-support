# ticket-support
Support message interface that allows a user to send and receive messages to an admin


## Setup Instructions

### Prerequisites

Ensure you have the following installed on your local machine:

- [NodeJS](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresql.org/download/)

### Installing/Running locally

- Clone or fork repo🤷‍♂

  ```bash
    - git clone https://github.com/meetKazuki/ticket-support.git
    - cd ticket-support
    - npm install
  ```

- Create a PostgreSQL database by running the command below in `psql`

  ```bash
    createdb -h localhost -p 5432 -U postgres <database-for-dev>
  ```

- Create/configure `.env` environment with your credentials. A sample `.env.example` file has been provided to get you started. Make a duplicate of `.env.example` and rename to `.env`, then configure your credentials (ensure to provide the correct details).

- Run `npm run dev` to start the server and watch for changes


## HTTP Requests

All API requests are made by sending a secure HTTPS request using one of the following methods, depending on the action being taken:

- `POST` Create a resource
- `GET` Get a resource or list of resources
- `PATCH` Update a resource
- `DELETE` Delete a resource

For `POST` requests, the body of your request may include a JSON payload.

### HTTP Response Codes

Each response will be returned with one of the following HTTP status codes:

- `200` `OK` The request was successful
- `400` `Bad Request` There was a problem with the request (security, malformed)
- `404` `Not Found` An attempt was made to access a resource that does not exist in the API

### API ENDPOINTS

#### API Routes

| URI                                                     | HTTP Method | Description                               |
| ------------------------------------------------------- | ----------- | ----------------------------------------- |
| <code>/tickets</code>                                   | `GET`       | Fetch all tickets                         |
| <code>/talks/:ticketId                                  | `GET`       | Fetch a ticket by ID                      |
| <code>/tickets</code>                                   | `POST`      | Create a new ticket                       |
| <code>/ticketId/:ticketId/comment</code>                | `POST`      | Add comment to ticket                     |
| <code>/ticketId/:ticketId                               | `PATCH`     | Update a ticket status by its ID          |
