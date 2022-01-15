let express = require("express")
let ourApp = express()
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
res.send("Gracias por enviar una respuesta")
})

ourApp.get('/answer', function(req, res){
    res.send("¿Estas perdido? no hay nada")
})   

ourApp.listen(3000)