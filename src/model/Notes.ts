import mysql from "mysql";

export type NotesModel = {
    title: string,
    description: string,
    date: Date
};

// Connect to Mysql
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "notes_db"
});

con.connect((err) => {
    if (err) throw err;
});

export default con;
