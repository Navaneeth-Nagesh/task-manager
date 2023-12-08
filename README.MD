# Task Manager Web App

This is a web-based task manager application that allows users to create, update, and delete tasks. The application consists of a frontend developed using HTML, CSS, and JavaScript, and a backend using Node.js for data storage.

## Features

- View a list of tasks
- Create new tasks
- Update existing tasks
- Delete tasks

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/Navaneeth-Nagesh/task-manager.git
   ```

2. Navigate to the project directory:

    ```bash
    cd task-manager-web-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Usage

1. Start the server:

    ```bash
    node server.js
    ```

This will start the server at http://localhost:3000.

2. Open your web browser and go to http://localhost:3000 to access the Task Manager application.
3. Use the application to manage your tasks.

### Frontend Structure

- The frontend files (HTML, CSS, and JavaScript) are located in the public directory.

### Backend Structure

- The backend logic using Node.js is in the server.js file.

### API Endpoints

GET `/tasks`: Get all tasks
POST `/tasks`: Create a new task
PUT `/tasks/:id`: Update a task
DELETE `/tasks/:id`: Delete a task
