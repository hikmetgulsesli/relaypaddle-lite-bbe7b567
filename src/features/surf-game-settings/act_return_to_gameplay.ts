import { actions } from '../relaypaddle-lite/relaypaddle-lite.store';

export function actReturnToGameplay() {
  actions.setScreen('gameplay');
}
