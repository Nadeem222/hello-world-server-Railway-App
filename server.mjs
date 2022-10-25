const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/name', (req, res) => {
  res.send('Nadeem Hakeem')
})

app.get('/water', (req, res) => {
    res.send('here is some water for you')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})