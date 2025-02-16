import { NextRequest, NextResponse } from "next/server";
import sql from "../../../db";

export async function POST(request: NextRequest) {
    try {
        const { nama, link } = await request.json()

        const users = await sql`
        INSERT INTO linke (nama, link)
        VALUES (${nama}, ${link})
        RETURNING *;`;

        console.log(users);

        // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
        return NextResponse.json({
            message: "succes",
            state: true
        }, { status: 200 })
    }
    catch (err) {
        return NextResponse.json({
            message: "Err: " + err,
            data: null,
            state: false
        }, { status: 400 })
    }
}