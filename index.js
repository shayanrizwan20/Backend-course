// console.log("Backend course and backend development");

require('dotenv').config()
const express = require('express')
// import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('shayantwittercom')
})

app.get('/Login', (req, res) => {
    res.send('<h1>please login or Signup to continue</h1>')
})

app.get('/facebook', (req, res) => {
    res.send('shayan aur frontend and learning backend going forward to fullstack developer')
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
