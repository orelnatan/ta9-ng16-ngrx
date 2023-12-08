import { INote } from "../models";

export interface HomeState {
  notes: INote[],
  loading: boolean,
  alert?: string | null,
}
