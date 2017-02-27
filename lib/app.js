const app = require('express')();
const morgan = require('morgan')('dev');

// CONSTANTS with routes
const errorHandler = require('./error-handler')();

// const assets = require('./routes/assets.routes');

// const userRouter = require('./routes/user.routes');
// const ensureAuth = require('./auth/ensure-auth')();
// const ensureRole = require('./auth/ensure-roles')();

app.use(morgan);

// app.use('/assets', ensureAuth, assets);

// app.use('/user', userRouter);

// do not add any app.* below this line ...
app.use(errorHandler);


module.exports = app;