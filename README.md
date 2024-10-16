# Examen de Ingreso-inador

Welcome to the Examen de Ingreso-inador! This project is designed to provide an intuitive and pleasant user experience for students searching for entrance exams to the Faculty of Science and Technology (FCyT) at the Universidad Mayor de San Simón (UMSS). Built with Vite and React, this single-page application (SPA) offers quick load times and responsive design to cater to users on various devices, even those with limited resources.

## Features

- **Search and Filter Exams:** Users can search for entrance exams by year and period (early or mid-year) from 2012 to the present, excluding the virtual exams held during the COVID-19 pandemic.
- **Responsive Design:** The application adapts seamlessly to any screen size, ensuring a great experience whether on a desktop, tablet, or mobile device.
- **Split Pane View:** On larger screens (PC or horizontal view), exams are displayed in a split pane with questions on the left and step-by-step solutions on the right. On smaller screens (mobile or vertical view), questions appear at the top and solutions at the bottom.
- **Adjustable Split Pane:** Users can resize the split pane to focus on either questions or solutions as needed.
- **PDF Tools:** A toolbar allows users to download PDFs of both questions and solutions and to zoom in and out for better readability.

## Live Deployment

You can check out the live deployment of the project [here](https://examendeingresoinador.pages.dev).

## Data Collection

The data for the exams and their solutions were collected from the official [FCyT-UMSS](http://sagaa.fcyt.umss.edu.bo/) website using a custom Pseudocrawler. This tool indexed exams based on specific URL patterns. The Pseudocrawler project repository can be found [here](https://github.com/ProfessorByte/FCyT_UMSS_ExamsPseudocrawler).

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js
- npm or pnpm

### How to run the project

1. **Clone the repository and install dependencies:**

   ```bash
   git clone https://github.com/ProfessorByte/examendeingresoinador.git
   cd examendeingresoinador
   pnpm install
   ```

2. **Running the Application:**

   To start the development server, run:

   ```bash
   pnpm dev
   ```

   This will open the application in your default browser at http://localhost:5173.

3. **Building for Production**

   To create a production build, run:

   ```bash
   pnpm build
   ```

   The production-ready files will be in the `dist` folder.

Happy coding! If you have any questions, feel free to reach out.
