
# Add Fruit List

**Add Fruit List** is a web application where users can sign up, log in, and manage a list of their favorite fruits. The application is built with **React.js**, **Node.js**, **Express.js**, and uses **TailwindCSS** for styling.

---

## Features

- **User Authentication**: Users can sign up and log in securely.
- **Add Fruits**: Add your favorite fruits to the list.
- **Delete Fruits**: Remove fruits from your list easily.
- **Responsive Design**: The application is mobile-friendly.
- **Dynamic Fruit Management**: Real-time addition and deletion of fruits.

---

## Tech Stack

### Frontend:
- **React.js**: A JavaScript library for building user interfaces.
- **React Router**: For handling routing.
- **TailwindCSS**: Utility-first CSS framework for styling.

### Backend:
- **Node.js**: JavaScript runtime for the server.
- **Express.js**: Web framework for Node.js.

---

## Installation

### Prerequisites:
- [Node.js](https://nodejs.org/) installed on your system.
- A package manager like `npm` or `yarn`.

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Adhibhuvanasandhya/add-fruit-list.git
   cd add-fruit-list
   ```

2. Install dependencies for the frontend:
   ```bash
   cd client
   npm install
   ```

3. Install dependencies for the backend:
   ```bash
   cd server
   npm install
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

5. Start the frontend development server:
   ```bash
   cd ../client
   npm start
   ```

6. Open your browser and navigate to:
   ```
   https://mernfront-1-057c.onrender.com/
   ```

---

## API Endpoints

### Base URL: `http://localhost:5000`

1. **Signup**
   - **POST** `/signup`
   - Request Body: `{ "username": "string", "password": "string" }`

2. **Login**
   - **POST** `/login`
   - Request Body: `{ "username": "string", "password": "string" }`

3. **Add Fruit**
   - **POST** `/add-fruit`
   - Request Body: `{ "fruit": "string" }`

4. **Delete Fruit**
   - **DELETE** `/delete-fruit`
   - Request Body: `{ "fruit": "string" }`

5. **Get Fruits**
   - **GET** `/fruits`





## Responsive Design

- The application is fully responsive and optimized for both desktop and mobile views.
- Components adapt to various screen sizes for a seamless user experience.

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added a new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [React.js](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
