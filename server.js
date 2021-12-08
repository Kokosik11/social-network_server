require('dotenv').config()
const express = require('express');
const chalk = require('chalk');
const app = express();
const responseTime = require('response-time')


require('./db')

const serverLog = (req, res, next) => {
    if(process.env.MODE !== 'production') {
        let method = req.method === "POST" ? chalk.blue(`[${req.method}]`) : chalk.green(`[${req.method}]`);
        let msg = chalk.gray(`[${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}]`) 
                + method
                + `: ${req.originalUrl} `;
        console.log(msg);
        
        // next();
    }
    next();
}

const UserRouter = require('./routes/user.router');

app.use('/api/user', serverLog, UserRouter);

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}/`);
})