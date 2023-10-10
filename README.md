# Office Orbits Employee Management System - Node.js Project

The **Office Orbits Employee Management System** is a Node.js project designed to streamline employee management within your organization. It provides a user-friendly and attractive web interface, built using EJS, HTML, and CSS, allowing authorized users to view and edit employee details. The project utilizes Node.js and Express.js to create a RESTful API, enabling CRUD (Create, Read, Update, Delete) operations on a MySQL database.

![ui1](https://github.com/mohit-thakur09/OfficeOrbit/assets/82665617/d154d925-5231-4d77-9347-8f757354147f)
![ui2](https://github.com/mohit-thakur09/OfficeOrbit/assets/82665617/c7bd725f-8e4b-41e5-9604-552227e30f20)
![ui3](https://github.com/mohit-thakur09/OfficeOrbit/assets/82665617/50df86b0-fcc6-4f88-a177-30c3b02be8e2)
![ui4](https://github.com/mohit-thakur09/OfficeOrbit/assets/82665617/1d867527-6ffe-43e4-bdc8-b0b89cc3de49)


## Features

- **User-Friendly UI**: Enjoy an appealing and user-friendly interface for efficient employee management.

- **Employee Details**: Access and view detailed information about employees in your organization.

- **Edit Employee Details**: Authorized users can edit employee details and keep the records up-to-date.

- **CRUD Operations**: Perform CRUD operations on the employee database, ensuring easy management.

## Getting Started

To run the Office Orbits Employee Management System, follow these steps:

1. Clone or download this repository to your local machine.

2. Navigate to the project directory.

3. Install the required Node.js packages using npm:

   ```bash
   npm install
   ```

4. Set up a MySQL database for employee data. Modify the `config.js` file to include your database credentials.

5. Create the necessary database tables using the provided SQL script (`database.sql`).

6. Start the Node.js server:

   ```bash
   npm start
   ```

7. Open a web browser and access the following URL:

   ```
   http://localhost:3000
   ```

8. Begin using the Employee Management System to view and edit employee details.

## Usage

1. **Employee List**:
   - Access the list of employees in your organization.
   - View detailed employee information.

2. **Edit Employee Details**:
   - Authorized users can edit employee details, ensuring accurate records.

3. **CRUD Operations**:
   - Perform CRUD operations to add, update, and delete employee records.

## Project Structure

- `server.js`: The main Node.js server file using Express.js.
- `routes/`: Contains route handlers for handling CRUD operations and rendering EJS views.
- `views/`: Includes EJS templates for rendering the web interface.
- `public/`: Stores static assets like CSS and images.

## Customization

Feel free to customize the project to suit your organization's needs:

- **UI Customization**: Modify the HTML, EJS, and CSS files in the `views` and `public` directories to change the appearance and user experience.

- **Database**: Adjust the database structure and queries in the code to match your specific employee data requirements.

## Contributing

Contributions to this project are welcome. You can contribute by opening issues, providing feedback, or submitting pull requests to enhance the Office Orbits Employee Management System.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Enjoy efficient employee management with the Office Orbits Employee Management System! 📊👥🚀
