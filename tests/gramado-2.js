// Symbol for private status variable
const __gramado_status = Symbol("gramado_status");

// Symbol for GramadoClass instance
const GramadoInstance = Symbol("GramadoInstance");

// Gramado class using a Symbol for private instance
class GramadoClass {
    constructor(s) {
        console.log("GramadoClass: constructor()");
        console.log(s);
    }

    printString(s) {
        console.log(s);
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

// Exporting the Gramado object
const Gramado = {};

// Exporting functions
Gramado.initialize = gramadoInitialize;
Gramado.getStatus = gramadoGetStatus;
Gramado.reloadPage = gramadoReloadPage;
Gramado.helloWorld = gramadoHelloWorld;

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
