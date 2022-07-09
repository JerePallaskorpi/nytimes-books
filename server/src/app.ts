const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));

// Controllers
import * as booksController from './controllers/books';

// Api routes
app.get('/api/categories', booksController.categories);

export default app;
