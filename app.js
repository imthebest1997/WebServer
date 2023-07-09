import dotenv from 'dotenv';
import express from 'express';
import { fileURLToPath } from 'url';
import hbs from "hbs";
import path from 'path';

//Configuracion de dotenv
dotenv.config();

// Uso de filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Instanciar el servidor de Express
const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        nombre: "Cheems",
        titulo: "Curso de Node"
    });
});


app.get('/generic', (req, res) => {
//    res.sendFile('generic.html',{root: 'public'});
    res.render('generic', {
        nombre: "Cheems",
        titulo: "Curso de Node"
    });
});

app.get('/elements', (req, res) => {
//    res.sendFile('elements.html',{root: 'public'});
    res.render('elements', {
        nombre: "Cheems",
        titulo: "Curso de Node"
    });
})

app.get('*', (req, res) => {
    res.sendFile('404.html',{root: 'public'});
})
  
// Iniciar app del servidor y escuchar
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});