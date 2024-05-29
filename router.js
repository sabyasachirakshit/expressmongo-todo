const router = require("express").Router();
const createToDoValidator=require("./createToDoValidator");
/* Controller Functions */
const {
    saveTodo,
    listTodo,
    deleteTodo
} = require("./ToDoController");

router.get("/list", listTodo);
router.post("/create", createToDoValidator, saveTodo);
router.put("/edit/:id", saveTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;