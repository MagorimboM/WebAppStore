import { create } from 'zustand'

let initialValue: any

const useShareState = create((set: any) => ({
    sharedState: initialValue ,
    updateSharedState: (newState:any) => set({ sharedState: newState })
}))

export default useShareState; 