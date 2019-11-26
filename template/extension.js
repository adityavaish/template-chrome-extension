const style = document.createElement('link');
style.href = 'http://localhost:8080/style.css';
style.rel = 'stylesheet';
document.head.appendChild(style);

const script = document.createElement('script');
script.src = 'http://localhost:8080/bundle.js';
document.body.appendChild(script);