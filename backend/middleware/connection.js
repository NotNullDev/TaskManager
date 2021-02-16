const onNewConnection = (req, res, next) => {
    console.log(`New request was made!!!`);
    next();
}

module.exports = onNewConnection;