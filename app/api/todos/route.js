import { NextResponse } from "next/server";

// ! CREATE TODO
export async function POST(request){ 
    return new NextResponse(JSON.stringify({
        message: "CREATE posts"
    }))  
}
// ! FETCHING TODO'S
export async function GET(request){ 
    return new NextResponse(JSON.stringify({
        message: "FETCHING all posts "
    }))  
}

