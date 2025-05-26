E-Commerce Product Listing
This is a React-based e-commerce application that displays a list of products fetched from a dummy API.   
The application features a responsive product grid with a "Load More Products" button to append additional items.  
Built with Vite, TypeScript, Redux Toolkit, and styled with CSS Modules, it is designed for easy deployment and scalability.

# Table of Contents

#### Features
#### Project Structure
#### Build and Deployment
#### Contributing
#### Prerequisites
#### Installation
#### Usage
#### License

## Features

Displays a list of products with images, titles, categories, and prices.  
Supports a "Load More Products" button to append the next 10 products without replacing existing ones.  
Responsive design that adapts to different screen sizes (desktop, tablet, mobile).  
Integration with a dummy JSON API for product data.   
State management using Redux Toolkit and RTK Query for API calls.  



## Project Structure
e-commerce/  
├── dist/=====>                 # Build output directory  
├── node_modules/=====>         # Dependency files  
├── public/=====>               # Static assets  
├── src/=====>                  # Source files  
│   ├── assets/=====>           # Static assets (e.g., images, fonts)  
│   ├── components/=====>       # React components (e.g., ProductList)  
│   ├── icons/=====>            # Icon assets or components  
│   ├── services/=====>         # API services (e.g., productsApi)  
│   ├── types/=====>            # TypeScript type definitions  
│   ├── App.tsx=====>           # Main App component  
│   ├── index.tsx=====>         # Entry point  
│   ├── main.tsx=====>          # Root rendering  
│   └── vite-env.d.ts=====>     # TypeScript environment declarations  
├── .gitignore=====>            # Git ignore file  
├── .eslintrc.json=====>        # ESLint configuration   
├── index.html=====>            # HTML entry point     
├── netlify.toml=====>          # Netlify configuration  
├── package.json=====>          # Project metadata and scripts  
├── package-lock.json=====>     # Lock file for dependencies  
├── README.md=====>             # This file  
├── tsconfig.json=====>         # TypeScript configuration  
├── tsconfig.node.json=====>    # TypeScript configuration for Node  
├── vite.config.ts=====>        # Vite configuration  

## Build and Deployment

Local Build: Use npm run build to create a production build in the dist directory.  
Deployment: Deploy to Netlify by connecting your repository.   
Configure the build settings: Build Command: npm run build  
Publish Directory: dist  
Node Version: 18 (or match your local Node.js version)   
Deployed link: https://chic-granita-495fc6.netlify.app/   
    
Ensure all dependencies are installed and the tsconfig.json is correctly set up to avoid build failures (exit code 2).   

## Contributing

Fork the repository.  
Create a new branch: git checkout -b feature-branch.  
Make your changes and commit: git commit -m "Description of changes".  
Push to the branch: git push origin feature-branch.  
Open a pull request.  

## Prerequisites

Node.js (version 18 or later recommended)  
npm (version 6 or later)  
Git (for cloning the repository)  

## Installation

Clone the repository:git clone https://github.com/chereolisa/LST  
cd E-commerce  

Install the dependencies: npm install  

## Usage

Start the development server: npm run dev     
  
Open your browser and navigate to http://localhost:5173 (or the port specified in the console).  
  
To build the project for production: npm run build  
  
This generates a dist folder with the production-ready build.  
  
Preview the production build locally: npm run preview  
  
## Acknowledgements
Thanks to Genesys Learnable for the project design and guidelines.  
Icons by Font Awesome  
Product API by DummyJSON  
  
## License 
This project is for educational and evaluation purposes under the Learnable Program.  