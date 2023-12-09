import { INote } from "@ta9/home/models";

export function filter(notes: INote[], keyword: string): INote[] {
  return keyword ? notes.filter((note: INote) => {
    return note.name.toLowerCase().includes(keyword.toLowerCase());
  }) : notes;
}