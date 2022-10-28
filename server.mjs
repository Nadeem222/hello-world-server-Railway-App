import express from 'express'
import cors from 'cors';

const app = express()
const port = process.env.PORT || 3000

let todos = [];

app.use(express.json());
app.use(cors())
app.post('/todo' , (req , res)  => {
  
  todos.push(req.body.text)

  res.send({
    message:"your todo is saved",
    data:todos
  })

})

app.get('/todos', (req, res) => {


  res.send({
    message:"here's is your todo list",
    data: todos
  })
})

app.get('/water', (req, res) => {
    res.send('here is some water for you')
  })

app.post('/water', (req, res) => {
    res.send('some one offering a water')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})