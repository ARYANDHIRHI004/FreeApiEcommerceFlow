import {create} from "zustand";

export const useAction = create((set) => ({
    hidden: "hidden",

    showHidden: () => set({hidden: null}),
    hideHidden: () => set({hidden: "hidden"}),
}))