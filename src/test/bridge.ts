import { getAppState, actions } from '../features/relaypaddle-lite/relaypaddle-lite.store';

declare global {
  interface Window {
    app: {
      state: ReturnType<typeof getAppState>;
      actions: typeof actions;
    };
  }
}

export function installTestBridge() {
  window.app = {
    get state() {
      return getAppState();
    },
    actions,
  };
}
