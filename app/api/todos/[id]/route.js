import { NextResponse } from "next/server";
import connectDB from "@/src/utils/dbConnect";
import Todo from "@/src/models/Todo";

// ! GET SINGLE TODO
export async function GET(request,{params}){
    connectDB()
    const {id} = params
    const todo = await Todo.findById(id)
    return new NextResponse(JSON.stringify(todo))  
}

// ! DELETE TODO
export async function DELETE(request,{params}){ 
    connectDB()
    const {id} = params
    const todo = await Todo.findByIdAndDelete(id)
    return new NextResponse(JSON.stringify(todo))  
}


// ! UPDATE TODO
export async function PUT(request,{params}){
    connectDB()
    const {id} = params
    const data = await request.json()
    const todo = await Todo.findByIdAndUpdate(id,data, {new: true})
    return new NextResponse(JSON.stringify(todo))
}

