


const express = require('express')
const app = express()
app.use(express.json())

const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      port : 5432,
      user : 'postgres',
      password : '88089592',
      database : 'urnaeletronica'
    }
});









// --------------------------- elegiveis ---------------------- //

async function lista (req, res) {
  const result = await knex.raw("select * from elegiveis ")
  res.json(result.rows)
}

async function criar (req, res) {
  const nome = req.body.nome
  const foto = req.body.foto
  const nome_vice = req.body.nome_vice
  const foto_vice = req.body.foto_vice
  await  knex('elegiveis').insert({
    nome,
    foto,
    nome_vice,
    foto_vice,
  })
  const result = await knex.raw("select * from elegiveis ")
  res.json(result.rows)
}

async function atualizar (req, res) {
  const id = req.body.id
  const nome = req.body.nome
  const foto = req.body.foto
  const nome_vice = req.body.nome_vice
  const foto_vice = req.body.foto_vice
  
 await knex('elegiveis')
  .where('id', '=', id)
  .update({
    nome,
    foto,
    nome_vice,
    foto_vice
  })


  const result = await knex.raw("select * from elegiveis ")
  res.json(result.rows)
}

async function deletar (req, res) {
  
  const id = req.body.id


  await knex('elegiveis')
  .where('id', id)
  .del()
 
 
 
 
 
 
  const result = await knex.raw("select * from elegiveis ")
  res.json(result.rows)
}

app.get('/listar_elegiveis',lista)
app.post('/criar_elegiveis',criar)
app.put('/atualizar_elegiveis',atualizar)
app.delete('/deletar_elegiveis',deletar)

// ------------------------------------------------------------ //








// --------------------------- votantes ---------------------- //

async function lista_votantes (req, res) {
  const result = await knex.raw("select * from votantes ")
  res.json(result.rows)
}

async function criar_votantes (req, res) {
  const id_titulo = req.body.id_titulo
  const nome_votantes = req.body.nome_votantes
  
  await  knex('votantes').insert({
    id_titulo,
    nome_votantes,
    
  })
  const result = await knex.raw("select * from votantes ")
  res.json(result.rows)
}

async function atualizar_votantes (req, res) {
  const id= req.body.id
  const id_titulo = req.body.id_titulo
  const nome_votantes = req.body.nome_votantes
 
  
 await knex('votantes')
  .where('id', '=', id)
  .update({
    id_titulo,
    nome_votantes

   
  })


  const result = await knex.raw("select * from votantes ")
  res.json(result.rows)
}

async function deletar_votantes (req, res) {
  
  const id = req.body.id


  await knex('votantes')
  .where('id', id)
  .del()
 
  const result = await knex.raw("select * from votantes ")
  res.json(result.rows)
}

app.get('/lista_votantes',lista_votantes)
app.post('/criar_votantes',criar_votantes)
app.put('/atualizar_votantes',atualizar_votantes)
app.delete('/deletar_votantes',deletar_votantes)

// ------------------------------------------------------------ //







// --------------------------- registro de votos  ---------------------- //

async function lista_votos (req, res) {
  const result = await knex.raw("select * from registro_de_votos ")
  res.json(result.rows)
}

async function criar_votos (req, res) {
  const id_elegivel = req.body.id_elegivel
  const id_votante = req.body.id_votante
  
  await  knex('registro_de_votos').insert({
    id_elegivel,
    id_votante
    
  })
  
  res.json("voto registrado")
}




app.get('/lista_votos',lista_votos)
app.post('/criar_votos',criar_votos)


// ------------------------------------------------------------ //










app.listen(3000)