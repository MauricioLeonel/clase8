const express = require('express')
const rutas = express.Router()
	
rutas.get('/',(req,res)=>{
	res.sendFile('index.html')
})



module.exports = rutas