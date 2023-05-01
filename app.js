
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})
app.post('/team/pokemons', () => {
    res.status(200).send('Hello World!')
})

app.get('/team', (req, res) => {
    res.status(200).send('Hello World!')
})

app.delete('/team/pokemons/:pokeid', () => {
    res.status(200).send('Hello World!')
})

app.put('/team', () => {
    res.status(200).send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


exports.app = app;
