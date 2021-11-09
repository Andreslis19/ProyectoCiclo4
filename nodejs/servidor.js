//console.log("prueba");

const express = require('express');
const mongoose = require('mongoose');
const tareaSchema = require('./modelos/tarea');

const app = express();

const router = express.Router();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect('mongodb+srv://alejoherrera11:Ganador20.@clusterprogweb.x9bln.mongodb.net/Database_Tecnovent?retryWrites=true&w=majority');

router.get('/',(req,res)=>{
    res.send("INICIANDO");
});

router.get('/tarea', (req,res)=>{
    TareaSchema.find(function(err,datos){
        if(err){
            console.log("existe un error en la consulta de la base de datos");
        }else{
            res.send(datos);
        }
    })
});

router.post('/tarea', (req,res) => {
    let newtarea = new tareaSchema({
       idTarea : req.body.id,
       nombre : req.body.nombre
    });
    newtarea.save(function(err,datos){
        if(err){
            console.log(err);
        } 
        res.send("Tarea realizada exitosamente");
    });
});

app.use(router);

app.listen(3000,()=>{
    console.log("Funcionamiento");
})