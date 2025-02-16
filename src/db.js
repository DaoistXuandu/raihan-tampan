// db.js
import postgres from 'postgres'

const connectionString = process.env.NEXT_PUBLIC_DATABASE;
const sql = postgres(connectionString);

export default sql