import cluster from 'cluster'
import os from 'os'

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import config from './config'
import * as models from './models'
import routes from './routes'
import mongoose from 'mongoose'
import data from './data'

const cpus = os.cpus().length;

mongoose.connect(`mongodb://${config.mongo.host}:27017/GetirBiTaksiHackathon`);

mongoose.connection.on('connected', () => {
    //mongoose.connection.db ? mongoose.connection.db.dropDatabase() : null;
    data.seed();
});

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    // Fork workers.
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
}
else {
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
}

cluster.on('exit', function (worker) {
    console.log('Worker %d died :(', worker.id);
    cluster.fork();
});