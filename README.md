# Personal Portfolio Website

Welcome to my Personal Portfolio Website! This project showcases my skills, projects, and contact information using a modern web stack. Built with HTML, CSS, and React.js, the website provides a clean and structured presentation of my work and professional background.

## Project Structure

The project is organized into the following main folders:

- **Assets**: Contains all the images used throughout the website. This centralization makes it easy to manage and update visuals.
- **Data**: Stores all the data displayed on the website, such as personal detais, project details, and resume information. This separation allows for easy edits and updates.
- **Components**: Includes all the reusable React components, such as layouts, modals, and form fields. These components are designed to be modular and easily maintainable.
- **Pages**: Holds all the different pages of the website, such as About Me, Resume, Portfolio, and Contact Me.
- **Style**: Provides a boilerplate for the project's styling, ensuring a consistent look and feel across the site.

## Website Sections

The website is divided into four main sections:

1. **About Me**: An introduction to who I am, including a brief biography and an overview of my professional background.
2. **Resume**: A detailed view of my resume, including education, certifications and skills.
3. **Portfolio**: Showcases my projects with descriptions, images, and links to live demos.
4. **Contact Me**: Provides a way to get in touch with me through a contact form and other contact details.

## Component and Data Flow

The flow of components and data in the website follows this structure:

1. **Pages** --> **Components** --> **Data** --> **Assets**

   - **Pages**: Render specific routes and layouts by using the reusable **Components**.
   - **Components**: Utilize data from the **Data** folder to display content dynamically.
   - **Data**: Pulls information from the **Assets** folder when necessary (e.g., images).

## Key Features

- **Semantic HTML**: The website strictly follows semantic HTML practices, enhancing accessibility and SEO.
- **Responsive Design**: The layout adapts to various screen sizes and devices, ensuring a consistent user experience.
- **Modular Components**: Reusable components improve maintainability and code efficiency.

## Getting Started

To get started with this project:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal-portfolio-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd personal-portfolio-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

Your default browser should open with the website running on [http://localhost:5173](http://localhost:5173).

## Contact

If you have any questions or feedback, feel free to reach out to me through the contact form on the website or via email at [arsalnaeem1@gmail.com](mailto:arsalnaeem1@gmail.com).

Thank you for visiting my portfolio!