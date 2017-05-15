import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
var path = require('path');

import routes from './routes';

mongoose.connect('mongodb://localhost:27017/lelle', () => {
    console.log('Connected to mongodb...');
});

const app = express();

// View
//app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/views'));

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);
 
app.get('/', (req, res) => {
	res.render('signupForm');
});

export default app;