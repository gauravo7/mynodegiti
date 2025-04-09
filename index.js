import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('This si Home Page for App Service')
})

app.get('/about', (req, res) => {
  res.send('<h2>Welome to About Page</h2>')
})

app.listen(8080,function(){
    console.log("My gIti Server is ruunning at 3K")
})