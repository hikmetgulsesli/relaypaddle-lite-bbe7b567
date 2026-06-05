import { getAppState, actions, type AppState } from './relaypaddle-lite.store';

export function getState(): AppState {
  return getAppState();
}

export const repoActions = actions;
