let express = require("express")
let ourApp = express()

ourApp.use(express.urlencoded({extended:false}));

ourApp.get('/', function(req, res){
res.send(`
<form action="/answer" method="POST">
<h1>¿Cual es el color del cielo cuando no hay nuven?</h1>
<input name="skyColor" autocomplete="off">
<button>Enviar Respuesta</button>
</form>

`)
})

ourApp.post('/answer', function(req, res){
if(req.body.skyColor.toUpperCase() == "AZUL") {
res.send(`
<h2>Felicitaciones, la respuesta es corecta.</h2>
<a href="/">Volver a la pagina principal</a>
`)
}else{
    res.send(`
    <h2>No es la respuesta corecta</h2>
    <a href="/">Volver a la pagina principal</a>
    `)
}
})

ourApp.get('/answer', function(req, res){
    res.send("¿Estas perdido? no hay nada")
})   

ourApp.listen(3000)