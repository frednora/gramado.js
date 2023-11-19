// Symbol for private styles
const __gramado_styles = Symbol("gramado_styles");

// GramadoStyles class using a Symbol for private styles
class GramadoStyles {
    constructor() {
        this[__gramado_styles] = {};
    }

    // Function to set a style
    setStyle(selector, styles) {
        if (!this[__gramado_styles][selector]) {
            this[__gramado_styles][selector] = {};
        }

        Object.assign(this[__gramado_styles][selector], styles);
    }

    // Function to apply styles to the page
    applyStyles() {
        const styleElement = document.createElement("style");
        document.head.appendChild(styleElement);

        const styleSheet = styleElement.sheet;

        for (const selector in this[__gramado_styles]) {
            let styleString = `${selector} {`;

            for (const property in this[__gramado_styles][selector]) {
                const value = this[__gramado_styles][selector][property];
                styleString += `${property}: ${value};`;
            }

            styleString += "}";
            styleSheet.insertRule(styleString, styleSheet.cssRules.length);
        }
    }
}

// Initialize Gramado styles
const GramadoStyles = new GramadoStyles();

// Set global styles
GramadoStyles.setStyle('body', {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#F2EFEF',
});

GramadoStyles.setStyle('h1,h2,h3,h4,h5,h6', {
    margin: 0,
    padding: 0,
});

GramadoStyles.setStyle('a', {
    color: '#0069d6',
});

GramadoStyles.setStyle('a:hover', {
    color: '#0050a3',
});

// Set styles for small screens
GramadoStyles.setStyle('.gramado-nav', {
    fontSize: '4.0vw',
    borderTop: '2px solid rgba(88, 88, 88, .3)',
    borderBottom: '2px solid rgba(129, 129, 129, .3)',
});

// Add more styles for small screens as needed

// Apply styles to the page
GramadoStyles.applyStyles();
