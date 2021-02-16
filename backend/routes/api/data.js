const data = require("../../data");
const express = require("express");

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.json(data.data);
});

router.get('/groups', (req, res) => {
    res.json(data.groups);
});

router.get('/groups/:id', (req, res) => {
    res.json(data.groups[req.params.id]);
});

router.get("/groups/:id/tasks", (req, res, next) => {
    const group = data.groups.find(task => task.id === parseInt(req.params.id));
    res.json(group.tasks);
});

router.post('/groups', (req, res) => {
    const group = req.body;
    data.groups.push(group);
    res.send(group);
});

router.post('/groups/:id/tasks', (req, res) => {
    const group = data.groups[req.params.id];
    group.tasks.push(req.body);
    res.send(group);
});

router.delete('/groups', (req, res) => {
    data.groups = [];
    res.send(groups);
});

router.delete('/groups/:id/tasks', (req, res) => {
    data.groups[req.params.id].tasks = [];
    res.send(data.groups[req.params.id].tasks);
});

router.delete('/groups/:id/tasks/:taskId', (req, res) => {
    const newTasks = data.groups[req.params.id].tasks.filter(task => tasks.id != req.params.taskId);
    data.groups[req.params.id].tasks = [...newTasks];
    res.send(data.groups[req.params.id].tasks);
});


module.exports = router