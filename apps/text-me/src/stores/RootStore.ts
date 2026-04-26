import { makeAutoObservable } from 'mobx';

class RootStore {
  // Add your stores here
  // Example: userStore = new UserStore();

  constructor() {
    makeAutoObservable(this);
  }
}

export const rootStore = new RootStore();
