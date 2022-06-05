module.exports = notFound = (req, res) => {
    return res.status(404).send('<h1>404</h1>')
}