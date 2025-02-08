const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const port = process.env.PORT || 8000

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", proxy("https://authenticationservice-gq22.onrender.com/"));
app.use("/shop", proxy("https://multivendorplatform-shopping-service.onrender.com")); 
app.use("/products", proxy("https://orderservice-0zrx.onrender.com"));

app.listen(port, () => {
  console.log(`Gateway is Listening to Port ${port}`);
});
