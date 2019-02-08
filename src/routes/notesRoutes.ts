import { Router } from "express";
import * as notesController from "./../controllers/notes";

const notesRoutes = Router();

/**
 * Get All Notes
 */
notesRoutes.get("/affluences/notes", notesController.getNotes);

/**
 * Get Single Notes
 */
notesRoutes.get("/affluences/notes/:id", notesController.getNote);

/**
 * Add Notes
 */
notesRoutes.post("/affluences/notes/add", notesController.addNotes);

/**
 * Update Notes
 */
notesRoutes.put("/affluences/notes/update/:id", notesController.updateNote);

/**
 * Delete Notes
 */
notesRoutes.delete("/affluences/notes/delete/:id", notesController.deleteNote);

export { notesRoutes };