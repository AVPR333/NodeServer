const express = require('express')
const app = express()
const port = 3000

app.get('/', (_, res) => {
  res.send('Vanakam da Mapala!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})