import { INote } from "../models";

export interface HomeState {
  notes: INote[] | null,
  note: INote | null,
  slider: boolean,
  alert: string | null,
}
