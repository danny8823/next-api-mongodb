import { NextResponse } from "next/server";

// ! GET SINGLE TODO
export async function GET(request){ 
    return new NextResponse(JSON.stringify({
        message: "FETCHING single posts "
    }))  
}

// ! DELETE TODO
export async function DELETE(request){ 
    return new NextResponse(JSON.stringify({
        message: "DELETE single post"
    }))  
}

// ! UPDATE TODO
export async function PUT(request){ 
    return new NextResponse(JSON.stringify({
        message: "UPDATING single post "
    }))  
}

