const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gusdn:mongejsvk^^57@boilerplate.vl5hy.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongDB Connected...'))
.catch(err => console.log(err))
  


app.get('/', (req, res) => {
  res.send('Hello World! ~~~~ My Name is Hyeon Woo~')
})

app.listen(port, () => {  console.log(`Example app listening on port ${port}`)})