import { create } from "zustand";


export const useImage= create((set)=>({
    imageUrl:undefined,
    setImageUrl:(url:string)=>set({imageUrl:url})

}));

export const useRoom = create((set) => ({
    room: "living room",
    setRoom: (room: string) => set({room}),
  }));