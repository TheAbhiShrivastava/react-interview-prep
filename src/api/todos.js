import { todos } from "../data/data";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const handler = async (req, res) => {
    const { term } = req.query;

    const filtered = todos.filter(todo => todo.text.toLowerCase().includes(term.toLowerCase()));
    await wait(1000);
    res.status(200).json({ todos: filtered });
}

export default handler;
