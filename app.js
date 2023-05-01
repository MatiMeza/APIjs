
const express = require('express');
const passport = require('passport');
require('./auth')(passport);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
});

app.post('/login', (req, res) => {
  res.status(200).json(
    //comprobamos credenciales
    //si no son validas error
    //si son validas generamos un jwt y lo devolvemos
    {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.zX5MPQtbjoNAS7rpsx_hI7gqGIlXOQq758dIqyBVxxY'}
  )
});

app.post('/team/pokemons', () => {
    res.status(200).send('Hello World!')
});

app.get('/team', passport.authenticate('jwt', {session:false}),(req, res) => {
    res.status(200).send('Hello World!')
});

app.delete('/team/pokemons/:pokeid', () => {
    res.status(200).send('Hello World!')
});

app.put('/team', () => {
    res.status(200).send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


exports.app = app;
