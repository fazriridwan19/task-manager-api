class CustomErrorAPI extends Error {
    constructor(msg, status) {
        super(msg);
        this.statusCode = status;
    }
}

const makeCustomError = (msg, status) => {
    return new CustomErrorAPI(msg, status);
}

module.exports = { makeCustomError, CustomErrorAPI }