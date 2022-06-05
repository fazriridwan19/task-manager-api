const { CustomErrorAPI } = require("../errors/customError");

module.exports = errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomErrorAPI) {
        return res.status(err.statusCode).json({ message: err.message })
    }
    return res.status(500).json({ message: 'Something went wrong, try again later' });
}