import { INote } from "@ta9/home/models";

export function add(notes: INote[], note: INote) {
  const id: number = Math.max(...notes.map(note => note.id)) + 10;
  note.id = id;

  return [...[note], ...notes];
}