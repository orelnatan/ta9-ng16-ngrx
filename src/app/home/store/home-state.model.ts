import { INote, Mode } from "../models";

export interface HomeState {
  notes: INote[] | null,
  note: INote | null,
  slider: boolean,
  mode: Mode,
}
