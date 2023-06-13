# ToDos

A todo app that lets you prioritze your busy life with priority, category, and deadline views and settings. Undo items, view how many you've completed per day. Available in both light and dark mode, ToDos respect your system settings and will automatically switch with your system between light and dark mode.

## Screenshots

![App Screenshot](./documentation/assets/LightMode.png)

![App Screenshot](./documentation/assets/DarkMode.png)

## Installation

Install my-project with npm

```bash
  git clone https://github.com/michael-duren/-weekend-sql-to-do-react.git
  cd weekend-sql-to-do-react
  npm i
```

## Run Locally

Clone the project

```bash
  git clone git@github.com:michael-duren/-weekend-sql-to-do-react.git
```

Go to the project directory

```bash
  cd weekend-sql-to-do-react
```

Install dependencies

```bash
  npm install
```

Setup Postgres

Update the `server/modules/pool.ts` file to the port and database name of your choice.
Copy `create.sql` contents and run them against your PG database to create a ToDos table, and starter content.

Start the server

```bash
  npm run server
  npm run client
```

## Tech Stack

**Client:** Typescript, React, TailwindCSS, Vite

**Server:** Typescript, Node, Express
