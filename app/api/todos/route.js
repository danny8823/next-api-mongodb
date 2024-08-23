import connectDB from "@/src/utils/dbConnect";
import Todo from "@/src/models/Todo";
import { NextResponse } from "next/server";

// ! CREATE TODO
export async function POST(request){ 
    // ? CONNECT TO DB
    connectDB();
    // ? CREATE THE TODO
    const todoData = await request.json()
    const todo = await Todo.create(todoData)
    return new NextResponse(JSON.stringify(todo))  
}
// ! FETCHING TODO'S
export async function GET(request){ 
    connectDB();
    const todos = await Todo.find()
    return new NextResponse(JSON.stringify(
        todos
    ))  
}

