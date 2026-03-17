import { tasks } from "../data/store.js";

export const createTask = (req, res) => {
  const { title, priority, assignedTo } = req.body;

  if (!title || !priority || !assignedTo) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    priority,
    status: "pending",
    assignedTo,
    assignedBy: req.userId,
    createdAt: new Date(),
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

export const getTasks = (req, res) => {
  res.json(tasks);
};

export const updateTask = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) return res.status(404).json({ message: "Not found" });

  if (task.assignedBy !== req.userId) {
    return res.status(403).json({ message: "Forbidden" });
  }

  const { title, priority } = req.body;

  if (title) task.title = title;
  if (priority) task.priority = priority;

  res.json(task);
};

export const updateStatus = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) return res.status(404).json({ message: "Not found" });

  if (task.assignedTo !== req.userId) {
    return res.status(403).json({ message: "Only assignee can update status" });
  }

  task.status = req.body.status;

  res.json(task);
};

export const unassignTask = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) return res.status(404).json({ message: "Not found" });

  if (task.assignedBy !== req.userId) {
    return res.status(403).json({ message: "Forbidden" });
  }

  task.assignedTo = null;

  res.json(task);
};

export const deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);

  if (index === -1) return res.status(404).json({ message: "Not found" });

  if (tasks[index].assignedBy !== req.userId) {
    return res.status(403).json({ message: "Forbidden" });
  }

  tasks.splice(index, 1);

  res.json({ message: "Deleted successfully" });
};