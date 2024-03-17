import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface TodoState {
  skillsTodo: { skill: string; id: string }[];
  addSkills: (skills: string) => void;
  clearSkills: () => void;
  filterSkills: (id: string) => void;
}

const useStore = create<TodoState>((set) => ({
  skillsTodo: [],

  addSkills: (skill: string) =>
    set((state) => ({
      skillsTodo: [
        ...state.skillsTodo,
        {
          id: uuidv4(),
          skill: skill,
        },
      ],
    })),

  filterSkills: (id: string) =>
    set((state) => ({
      skillsTodo: state.skillsTodo.filter((skill) => skill.id !== id),
    })),

  clearSkills: () => set({ skillsTodo: [] }),
}));


export default useStore;
