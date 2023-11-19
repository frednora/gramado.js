// Assuming you've already initialized the Gramado library
Gramado.initialize();

// Initialize Gramado styles
Gramado.stylesInitialize();

// Set global styles
Gramado.setStyle('body', {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#F2EFEF',
});

Gramado.setStyle('h1,h2,h3,h4,h5,h6', {
    margin: 0,
    padding: 0,
});

Gramado.setStyle('a', {
    color: '#0069d6',
});

Gramado.setStyle('a:hover', {
    color: '#0050a3',
});

// Set styles for small screens
Gramado.setStyle('.gramado-nav', {
    fontSize: '4.0vw',
    borderTop: '2px solid rgba(88, 88, 88, .3)',
    borderBottom: '2px solid rgba(129, 129, 129, .3)',
});

// Add more styles for small screens as needed

// Apply styles to the page
Gramado.applyStyles();
