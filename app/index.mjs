
import  express  from "express";
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


//Server
const app = express();
app.set("port",4000);
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto",app.get("port"));

//Configuración
app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", (req,res)=> res.sendFile(__dirname + "/pages/princi/principal.html"))
app.get("/login", (req,res)=> res.sendFile(__dirname + "/pages/login.html"))
app.get("/register", (req,res)=> res.sendFile(__dirname + "/pages/register.html"))
app.get("/citas", (req,res)=> res.sendFile(__dirname + "/pages/admin/citas.html"))

