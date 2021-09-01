const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    // res.send('Testing')
    // ALWAYS either return response or send it t next middlewear
    next()
}

module.exports = logger