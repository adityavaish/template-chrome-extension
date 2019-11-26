const style = document.createElement('link');
style.href = 'http://127.0.0.1:8080/style.css';
style.rel = 'stylesheet';
document.head.appendChild(style);

const script = document.createElement('script');
script.src = 'http://127.0.0.1:8080/bundle.js';
document.body.appendChild(script);