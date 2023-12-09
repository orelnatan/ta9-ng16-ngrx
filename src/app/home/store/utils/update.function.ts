import { INote } from "@ta9/home/models";

export function update(notes: INote[], note: INote): INote[] {
  const index: number = notes.map(note => note.id).indexOf(note.id);
  notes[index] = note;

  return notes;
}