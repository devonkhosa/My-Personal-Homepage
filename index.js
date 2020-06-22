const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'pug');

app.use(express.static('public'));


//route handlers 
app.get('/', (req, res)=>{
res.render('index', {});
});

app.get('/blog.pug', (req, res)=>{
res.render('blog', {});
});

app.get('/contact.pug', (req, res)=>{
res.render('contact', {});
});



app.listen(port, () =>{
console.log(`Server running on port ${port}`);
});