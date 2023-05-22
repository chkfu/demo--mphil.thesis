// from package
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// from files
const HomeMapRouter = require('./routes/HomeMapRoutes');
const TimelineRouter = require('./routes/TimelineRoutes');
const LiteratureRouter = require('./routes/LiteratureRoutes');


// setup
const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));

// route
app.use('/api/v1/maps/home-map', HomeMapRouter);
app.use('/api/v1/timeline', TimelineRouter);
app.use('/api/v1/literatures', LiteratureRouter);


// export
module.exports = app;