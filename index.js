const express = require('express')
const app = express()
const productos = require('./router/productos.js')
const index = require('./router/index.js')
const db = require('./models/misproductos.js')

app.use(express.static('views'))
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(function(req,res,next){
	req.db = db
	next()
})


app.use('/',index)

app.use('/api',productos)




app.listen('8080',()=>{
	console.log('todo perfecto')
	// console.log(db)
})