import express from 'express'
const app = express()
const port = process.env.PORT || 3000

let todos = []

app.post('/todo' , (req , res)  => {
  console.log('main page')
  res.send('you ask for /water/pizza and /coffee')

  })

app.get('/name', (req, res) => {
  res.send('Nadeem Hakeem')
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