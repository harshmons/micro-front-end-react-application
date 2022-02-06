
# React application with micro front end architecture

This is a demonstration project to show multiple micro application developed in different frameworks`(like React,Angular,Vue,Svelte)` can exist inside same application.Thanks to Webpack 5 module federation

## components

### App - 
Its a React application developed using create react app and acting as shell(Container) application which renders small micro application.

### Header -
Its a React application developed using create react app and acting as micro application which renders header of the application

### Left sidebar -
Its an Angular application developed using angular cli and acting as micro application which renders left sidebar of the application

### Right sidebar -
Its a Vue application developed using vue cli and acting as micro application which renders right sidebar of the application

### Footer -
Its a Svelte application developed using svelte webpack template and acting as micro application which renders footer of the application

### How to run the application

- Go to each folder(app,header,left-sidebar,right-sidebar,footer) and run `npm start`
- Open browser and type `http://localhost:3000`

<img width="1440" alt="Screenshot 2022-02-07 at 1 24 51 AM" src="https://user-images.githubusercontent.com/12604444/152698973-ded96d4a-1aa3-4764-8012-28bf5e50d4cc.png">
