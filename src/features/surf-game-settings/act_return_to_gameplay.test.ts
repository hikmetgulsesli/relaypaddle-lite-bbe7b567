import { describe, it, expect, beforeEach } from 'vitest';
import { actReturnToGameplay } from './act_return_to_gameplay';
import { getAppState, actions } from '../relaypaddle-lite/relaypaddle-lite.store';

describe('actReturnToGameplay', () => {
  beforeEach(() => {
    actions.resetDefaults();
    actions.setScreen('settings');
    expect(getAppState().screen).toBe('settings');
  });

  it('returns screen to gameplay', () => {
    actReturnToGameplay();
    expect(getAppState().screen).toBe('gameplay');
  });
});
