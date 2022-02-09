const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res)=> {

  var num1 = Number(req.body.num1)
  var num2 = Number(req.body.num2)
  total = num1 + num2



  res.send(`The result of you calculation is ${total}`)

})

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + "/bmicalculator.html")
})

app.post('/bmicalculator', (req, res)=> {

  var weight = Number(req.body.weight)
  var height = Number(req.body.height)
  total = weight / (height * height)



  res.send(`The result of you calculation is ${total}`)

})

app.listen(port, () => {
  console.log(`Local host 3000`)
})
