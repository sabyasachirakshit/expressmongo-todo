/* Model Import Statement */
const TodoModel = require("./ToDoModel");

/* Create & Edit Function */
exports.saveTodo = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
        if (id) {
            const editTodo = await TodoModel.findByIdAndUpdate(id, { title, description });
            if (!editTodo) return res.notFound("Todo is not found");
            return res.success("Todo has been updated successfully", { todo: editTodo });
        }
        const todo = new TodoModel({ title, description });
        const saveTodo = await todo.save();
        return res.success("Todo has been created successfully", { todo: saveTodo });
    } catch (e) {
        console.log('e ==> ', e);
    }
};

exports.listTodo = async (req, res) => {
    try {
        const list = await TodoModel.find();
        return res.success(null, list);
    } catch (e) {
        res.unauthorized();
    }
}

exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteTodo = await TodoModel.findByIdAndDelete(id);
        if (!deleteTodo) return res.notFound("Todo is not found");
        res.success("Todo has been deleted successfully");
    } catch (e) {
        console.log('e ==> ', e);
        res.unauthorized();
    }
}