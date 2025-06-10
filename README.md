# Grainger Demo

This is a full-stack web application built for coding demonstration. It features a React frontend using Next.js and a Java Spring Boot backend, with a PostgreSQL database for persistence. The entire environment is containerized and orchestrated using Docker and Docker Compose.

## Features

-   **Product Listing**: View a list of all products from the database.
-   **Product Creation**: Add a new product to the list via a simple form.

## API Endpoints

- Get all products `GET /api/products`
- Create a product `POST /api/products`

## Technology Stack

### Frontend
-   **Framework**: Next.js (with React)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS

### Backend
-   **Framework**: Spring Boot 3
-   **Language**: Java 21
-   **Build Tool**: Gradle
-   **Database**: PostgreSQL
-   **Utilities**: Lombok (for reducing boilerplate code)

## Runing the applications

Follow these steps to get the application up and running:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/lakzeee/springboot-react-fullstack-demo.git
    ```

2.  **Build and run the application:**
    Use Docker Compose to build the images and start the containers.
    ```bash
    docker-compose up --build
    ```
    
3.  **Access the application:**
    Once the containers are running, you can access the different parts of the application:
    -   **Frontend**: [http://localhost:3000](http://localhost:3000)
    -   **Backend API**: [http://localhost:8080](http://localhost:8080)


## Runing the dev server

### Start PostgreSQL

- For development, you can start only the PostgreSQL database using Docker Compose:
    ```bash
    docker-compose up -d postgres
    ```

### Backend

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Run the Spring Boot application using the Gradle wrapper:
    ```bash
    ./gradlew bootRun
    ```
    The backend will be running on [http://localhost:8080](http://localhost:8080).

### Frontend

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install the dependencies using `pnpm`:
    ```bash
    pnpm install
    ```
3.  Run the development server:
    ```bash
    pnpm dev
    ```
    The frontend will be running on [http://localhost:3000](http://localhost:3000).