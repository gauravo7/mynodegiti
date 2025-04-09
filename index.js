import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World Test')
})

app.listen(3000,function(){
    console.log("My gIti Server is ruunning at 3K")
})