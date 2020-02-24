module.exports = (req, res, next) => {
    res.header('Access-Control_Allow-Origin', '*')
    res.header('Access-Control_Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
    res.header('Access-Control-Allow-Headers','Origin,X-Request-With,Content-Type,Accept')
    next()
}