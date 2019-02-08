import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mysql from "mysql";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env" });

// Routes
import { notesRoutes } from "./routes/notesRoutes";

// Create Express server
const app = express();

// Connect to Mysql
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "notes_db"
});

con.connect((err) => {
    if (err) throw err;
    console.log("MySQL up !");
});

// Express configuration
app.set("port", process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Primary app routes.
app.use("/", notesRoutes);

// Error handlers
// Catch unauthorised errors
app.use((err: any, req: Request, res: Response) => {
    if (err.name === "UnauthorizedError") {
        res.status(401).json({
            success: false,
            error: err.name + " : " + err.message
        });
    }
});

export default app;