const express = require('express')
const rutas = express.Router()


rutas.get('/productos',async (req,res)=>{
	console.log(req.db)
	const data = await req.db.getAll()
	res.send(data)
})
rutas.get('/productos/:id',async (req,res)=>{
	const data = await req.db.getById(req.params.id)
	console.log(data)
	if(data.message){
		res.json({error:data.message})
	}else{
		res.json(data)
	}
})
rutas.post('/productos',async (req,res)=>{
	// console.log('entra')
	const {body:{title,price,thumbnail}} = req
	const precio = parseFloat(price)
	const data = await req.db.save({title,precio,thumbnail})
	res.send(req.body)
})
rutas.put('/productos/:id',async (req,res)=>{
	const {body:{title,price,thumbnail}} = req
	const data = await req.db.updateById({title,price,thumbnail,id:parseInt(req.params.id)})
	if(data.message){
		res.json({error:data.message})
	}else{
		res.send(data)
	}

	
})
rutas.delete('/productos/:id',async (req,res)=>{
	const data = await req.db.borrarById(parseInt(req.params.id))
	if(data.message){
		res.send(data.message)
	}else{
		res.send(data)
	}
})




module.exports = rutas