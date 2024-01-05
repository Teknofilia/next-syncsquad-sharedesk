import {atomWithStorage} from"jotai/utils";
import { atom } from "jotai";

export const cartAtom = atomWithStorage("cartAtom",[]);
export const cartAtomInMemory = atom([]);