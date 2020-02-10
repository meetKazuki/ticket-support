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
