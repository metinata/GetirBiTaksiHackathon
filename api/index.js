import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import config from './config'
import * as models from './models'
import routes from './routes'
import mongoose from 'mongoose'
import data from './data'

const mongo = mongoose.connect('mongodb://localhost:27017/GetirBiTaksiHackathon', () => {
    mongoose.connection.db.dropDatabase();
    data.seed();
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // render the error page
    res.status(err.status || 500);
    res.json(err);
});

app.listen(config.expressPort, () => {
    console.log(`API is running on ${config.expressPort} port`);
});

export default app
