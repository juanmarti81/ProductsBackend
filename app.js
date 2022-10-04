const Contenedor = require("./productsClass")

const express = require("express")

let contenedor = new Contenedor()

const app = express()
const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
  console.log("Respuesta")
  
  res.status(200).send("Home")
})

app.get("/productos", async (req, res) => {
  const products = await contenedor.getAll()
  res.status(200).send(products)
})

app.get("/productoRandom", async (req, res) => {
  const products = await contenedor.getAll()
  const length = Object.keys(products).length
  const productIndexSelected = Math.floor(Math.random() * length)
  console.log("VALUE: ", productIndexSelected)
  console.log("PRODUCT: ", products[productIndexSelected])
  res.status(200).send(products[productIndexSelected])
})

const server = app.listen( PORT, () => console.log(`Server listening on PORT ${PORT}`));