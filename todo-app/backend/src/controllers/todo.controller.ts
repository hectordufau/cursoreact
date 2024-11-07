import { Request, Response } from "express";
import prisma from "../config/client";

// Creating a todo
const createTodo = async (req: Request, res: Response) => {
    try {
        const todo = await prisma.todo.create({
            data: req.body,
        });

        res.status(201).json({
            status: true,
            message: "Todo Successfully Created",
            data: todo,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: false,
            message: 'server error:' + error
        });
    }
}

// Get all Todos
const getTodos = async (req: Request, res: Response) => {
    const { query } = req;
    const description = (typeof query.description === "string") ? query.description : "";
    const todo = await prisma.todo.findMany({
        where: {
            description: {
                startsWith: description
            }
        },
        orderBy: {
            createdAt: 'desc'
        },

    });

    res.status(201).json({
        status: true,
        message: "Todos Successfully fetched",
        data: todo,
    });
}

// Get a single todo
const getTodo = async (req: Request, res: Response) => {
    const { todoid } = req.params;
    const todo = await prisma.todo.findFirst({
        where: {
            id: todoid,
        },
    });

    res.status(201).json({
        status: true,
        message: "Todos Successfully fetched",
        data: todo,
    });
}

// deleting a todo
const deleteTodo = async (req: Request, res: Response) => {
    const { todoid } = req.params;

    try {
        const todo = await prisma.todo.findFirst({
            where: {
                id: todoid,
            },
        });

        if (!todo) {
            res.status(401).json({
                status: false,
                message: 'Todo not found',
            });
        }
        await prisma.todo.delete({
            where: {
                id: todoid,
            },
        }),
            res.status(201).json({
                status: true,
                message: 'Todo Successfully deleted',
            });
    } catch (error) {
        res.status(501).json({
            status: false,
            message: 'server error:' + error
        });
    }
}

// updating a single user
const updateTodo = async (req: Request, res: Response) => {
    try {
        const { todoid } = req.params;

        const todo = await prisma.todo.findFirst({
            where: {
                id: todoid,
            },
        });

        if (!todo) {
            res.status(401).json({
                status: false,
                message: 'Todo not found',
            });
        }

        //console.log(todo)
        //console.log(req.body)

        const updatedTodo = await prisma.todo.update({
            where: {
                id: todo?.id,
            },
            data: req.body,
        });

        res.status(201).json({
            status: true,
            message: 'Todo Successfully updated',
            data: updatedTodo,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: 'server error:' + error
        });
    }
}

const todoController = {
    createTodo,
    getTodos,
    getTodo,
    deleteTodo,
    updateTodo
}

export default todoController