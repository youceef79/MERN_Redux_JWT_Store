const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const Product = require('./models/productModel')
const Categorie = require('./models/categorieModel')
const Cart = require('./models/cartModel')
const cors = require("cors")

connectDB();

const app = express();


const whitelist = ["http://localhost:3000"]

const corsOptions = {

  origin: function (origin, callback) {

    if (!origin || whitelist.indexOf(origin) !== -1) {

      callback(null, true)

    } else {

      callback(new Error("Not allowed by CORS"))

    }

  },

  credentials: true,

}

app.use(cors(corsOptions))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./routes/productRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));


// Serve frontend

  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
   


app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
