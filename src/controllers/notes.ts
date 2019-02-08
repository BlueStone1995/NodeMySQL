import { Request, Response, NextFunction } from "express";
import { default as Notes, NotesModel } from "./../model/Notes";

export let getNotes = async (req: Request, res: Response) => {

    const querie = "SELECT * from notes";
    const notes = await Notes(querie);

    console.log(notes);

    try {
        res.status(200).json({
            success: true,
            response: {
                notes: notes
            }
        });
    } catch (err) {
        res.status(401).json({
            success: false,
            error: err
        });
    }
};

export let getNote = (req: Request, res: Response) => {

    const querie = `SELECT * from notes AS n WHERE n.id = ${req.params.id}`;
    const notes = Notes(querie);

    try {
        res.status(200).json({
            success: true,
            response: {
                notes: notes
            }
        });
    } catch (err) {
        res.status(401).json({
            success: false,
            error: err
        });
    }
};

export let addNotes = (req: Request, res: Response) => {

    const querie = `INSERT INTO notes (title, description, date) VALUES (${req.body.title}, ${req.body.description}, ${req.body.date})`;

    const notes = Notes(querie);

    try {
        res.status(200).json({
            success: true,
            response: {
                notes: notes
            }
        });
    } catch (err) {
        res.status(401).json({
            success: false,
            error: err
        });
    }
};

export let updateNote = (req: Request, res: Response) => {

    const querie = `UPDATE notes SET title = ${req.body.title}, description = ${req.body.description}, description = ${req.body.date} WHERE notes.id =  ${req.params.id}`;

    const notes = Notes(querie);

    try {
        res.status(200).json({
            success: true,
            response: {
                notes: notes
            }
        });
    } catch (err) {
        res.status(401).json({
            success: false,
            error: err
        });
    }
};

export let deleteNote = (req: Request, res: Response) => {
    const querie = `DELETE FROM notes WHERE notes.id =  ${req.params.id}`;

    const notes = Notes(querie);

    try {
        res.status(200).json({
            success: true,
            response: {
                notes: notes
            }
        });
    } catch (err) {
        res.status(401).json({
            success: false,
            error: err
        });
    }
};
