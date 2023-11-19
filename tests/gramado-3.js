// Symbol for private status variable
const __gramado_status = Symbol("gramado_status");

// Symbol for GramadoClass instance
const GramadoInstance = Symbol("GramadoInstance");

// Gramado class using a Symbol for private instance
class GramadoClass {
    constructor(s) {
        console.log("GramadoClass: constructor()");
        console.log(s);
        this.projects = [];
        this.personalInfo = {};
    }

    printString(s) {
        console.log(s);
    }

    // Add project to the portfolio
    addProject(project) {
        this.projects.push(project);
    }

    // Get the portfolio
    getPortfolio() {
        return this.projects;
    }

    // Set personal information
    setPersonalInfo(info) {
        this.personalInfo = info;
    }

    // Get personal information
    getPersonalInfo() {
        return this.personalInfo;
    }

    // Generate HTML content for the portfolio
    generateHTML() {
        let htmlContent = "<h1>My Portfolio</h1>";
        htmlContent += "<h2>Personal Information</h2>";
        htmlContent += "<ul>";

        // Display personal information
        for (const key in this.personalInfo) {
            htmlContent += `<li><strong>${key}:</strong> ${this.personalInfo[key]}</li>`;
        }

        htmlContent += "</ul>";

        // Display projects
        htmlContent += "<h2>Projects</h2>";
        htmlContent += "<ul>";
        this.projects.forEach((project) => {
            htmlContent += `<li><strong>${project.name}</strong>: ${project.description}</li>`;
        });
        htmlContent += "</ul>";

        return htmlContent;
    }
    //...
}

// Function to initialize Gramado
function gramadoInitialize() {
    let ReturnValue = 1234;
    console.log("gramadoInitialize: Initializing ...");

    // Creating the Gramado class instance
    Gramado[GramadoInstance] = new GramadoClass("Creating the Gramado object.");
    Gramado[GramadoInstance].printString("Testing Gramado.printString method ...");

    // Set the status using the Symbol
    Gramado[__gramado_status] = 1;

    // 1234
    return ReturnValue;
}

// Function to get Gramado status
function gramadoGetStatus() {
    return Gramado[__gramado_status];
}

// Function to reload the page
function gramadoReloadPage() {
    window.location.reload();
}

// Function to display a hello world message based on Gramado status
function gramadoHelloWorld() {
    console.log("Hello");
    if (Gramado[__gramado_status] === 1) {
        window.alert("Initialized");
    } else {
        window.alert("Not initialized");
    }
    return Gramado[__gramado_status];
}

// Function to add a project to the portfolio
function gramadoAddProject(name, description) {
    Gramado[GramadoInstance].addProject({ name, description });
}

// Function to set personal information
function gramadoSetPersonalInfo(info) {
    Gramado[GramadoInstance].setPersonalInfo(info);
}

// Function to get the portfolio
function gramadoGetPortfolio() {
    return Gramado[GramadoInstance].getPortfolio();
}

// Function to generate HTML content for the portfolio
function gramadoGenerateHTML() {
    return Gramado[GramadoInstance].generateHTML();
}

// Exporting the Gramado object
const Gramado = {};

// Exporting functions
Gramado.initialize = gramadoInitialize;
Gramado.getStatus = gramadoGetStatus;
Gramado.reloadPage = gramadoReloadPage;
Gramado.helloWorld = gramadoHelloWorld;
Gramado.addProject = gramadoAddProject;
Gramado.setPersonalInfo = gramadoSetPersonalInfo;
Gramado.getPortfolio = gramadoGetPortfolio;
Gramado.generateHTML = gramadoGenerateHTML;

// Learning: Arrow Functions
Gramado.arrowFunction0 = (x, y) => {
    console.log("arrowFunction0:");
    console.log(x);
    console.log(y);
};

Gramado.arrowFunction1 = (x) => {
    console.log("arrowFunction1:");
    console.log(x);
};

Gramado.arrowFunction2 = (x) => console.log(x);

Gramado.arrowFunction3 = (x) => console.log(x);

Gramado.arrowFunction4 = () => console.log("arrowFunction4:");
