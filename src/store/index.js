import create from 'zustand';

const useStore = create((set) => ({
  timeframeType: 'weekly',
  setTimeframeType: (value) => set(() => ({ timeframeType: value })),
}));

export default useStore;
