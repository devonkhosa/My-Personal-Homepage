const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'pug');

app.use(express.static('public'));

//==route handlers==//
app.get('/', (req, res)=>{
res.render('index', {});
});
app.get('/blog', (req, res)=>{
res.render('blog', {});
});
app.get('/contact', (req, res)=>{
res.render('contact', {});
});
app.get('/portfolio', (req, res)=>{
res.render('portfolio', {});
});
app.get('/post-1', (req, res)=>{
res.render('posts/2020-03-12', {});
});

//========End========//

app.listen(port, () =>{
console.log(`Server running on port ${port}`);
});