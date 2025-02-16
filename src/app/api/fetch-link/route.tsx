import { NextRequest, NextResponse } from "next/server";
import sql from "../../../db";


export async function POST(request: NextRequest) {
    // Get the accessed path (e.g., "/thislink" => ["thislink"])
    const { nama } = await request.json();
    console.log(nama)

    const users = await sql
        `SELECT link 
    FROM linke
    WHERE nama = ${nama}`;


    return NextResponse.json({
        message: "Success",
        accessed_link: users[0].link,
    }, { status: 200 });
}
