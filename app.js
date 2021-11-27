const express = require('express');
const app = express();
app.use(express.json());
const port = 5000;

const productRoute = require("./router/product");
const sellerRoute = require("./router/seller");
const companyRoute = require("./router/company");



app.get('/', (req, res) => res.send('Product Management APIs (EXPRESS)'));

app.use("/product1", productRoute);
app.use("/seller1", sellerRoute);
app.use("/company1", companyRoute);



app.listen(port, () => console.log(`Example app listening on port `+ port +`!`));