import { Request, Response, NextFunction } from "express";
import con from "./../model/Notes";

export let getNotes = (req: Request, res: Response) => {

    const querie = "SELECT * from notes";
    con.query(querie, (err, result) => {
        if (err) {
            res.status(401).json({
                success: false,
                error: err
            });
            return;
        }
        console.log(result);
        res.status(200).json({
            success: true,
            response: {
                notes: result
            }
        });
    });
};

export let getNote = (req: Request, res: Response) => {

    const querie = `SELECT * from notes AS n WHERE n.id = ${req.params.id}`;
    con.query(querie, (err, result) => {
        if (err) {
            res.status(401).json({
                success: false,
                error: err
            });
            return;
        }
        res.status(200).json({
            success: true,
            response: {
                notes: result
            }
        });
    });
};

export let addNotes = (req: Request, res: Response) => {

    const querie = `INSERT INTO notes (title, description, date) VALUES (${req.body.title}, ${req.body.description}, ${req.body.date})`;
    con.query(querie, (err, result) => {
        if (err) {
            res.status(401).json({
                success: false,
                error: err
            });
            return;
        }
        res.status(200).json({
            success: true,
            response: {
                notes: result
            }
        });
    });
};

export let updateNote = (req: Request, res: Response) => {

    const querie = `UPDATE notes SET title = ${req.body.title}, description = ${req.body.description}, description = ${req.body.date} WHERE notes.id =  ${req.params.id}`;

    con.query(querie, (err, result) => {
        if (err) {
            res.status(401).json({
                success: false,
                error: err
            });
            return;
        }
        res.status(200).json({
            success: true,
            response: {
                notes: result
            }
        });
    });
};

export let deleteNote = (req: Request, res: Response) => {

    const querie = `DELETE FROM notes WHERE notes.id =  ${req.params.id}`;
    con.query(querie, (err, result) => {
        if (err) {
            res.status(401).json({
                success: false,
                error: err
            });
            return;
        }

        res.status(200).json({
            success: true,
            response: {
                notes: result
            }
        });
    });
};
