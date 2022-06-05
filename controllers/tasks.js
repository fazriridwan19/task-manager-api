const Task = require('../models/tasks');
const asyncWrapper = require('../middleware/async');
const { makeCustomError } = require('../errors/customError');

const getAllTask = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ status: 'Success', tasks });
})
const getTask = asyncWrapper(async (req, res, next) => {
    // const task = await Task.findOne({ _id: req.params.id });
    const task = await Task.findById(req.params.id);
    if (!task) {
        return next(makeCustomError(`No task with id ${req.params.id}`, 404));
    }
    res.status(200).json({ status: 'Success', task });

})
const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({
        status: 'Success',
        task    
    });
})
const updateTask = asyncWrapper(async (req, res, next) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!task) {
        return next(makeCustomError(`No task with id ${req.params.id}`, 404));
    }
    res.status(200).json({ status: 'Success', task });
})
const deleteTask = asyncWrapper(async (req, res, next) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
        return next(makeCustomError(`No task with id ${req.params.id}`, 404));
    }
    res.status(200).json({ status: 'Success', task: null });
})



module.exports = {
    getAllTask,
    getTask,
    createTask,
    updateTask,
    deleteTask
}