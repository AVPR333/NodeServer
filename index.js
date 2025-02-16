const express = require('express')
const app = express()
const port = 8080

app.get('/', (_, res) => {
  res.send('Vanakam da Mapala! - Last Try! : Vidamuyarchi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})