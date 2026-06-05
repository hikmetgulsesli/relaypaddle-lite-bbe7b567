import { describe, it, expect, beforeEach } from 'vitest';
import { actSavePreferences } from './act_save_preferences';
import { getAppState, actions } from '../relaypaddle-lite/relaypaddle-lite.store';

describe('actSavePreferences', () => {
  beforeEach(() => {
    actions.resetDefaults();
  });

  it('sets difficulty to easy', () => {
    actSavePreferences({ difficulty: 'easy' });
    expect(getAppState().runtime.difficulty).toBe('easy');
  });

  it('sets difficulty to normal', () => {
    actSavePreferences({ difficulty: 'normal' });
    expect(getAppState().runtime.difficulty).toBe('normal');
  });

  it('sets difficulty to hard', () => {
    actSavePreferences({ difficulty: 'hard' });
    expect(getAppState().runtime.difficulty).toBe('hard');
  });

  it('toggles music off when payload.musicOn is false', () => {
    expect(getAppState().musicOn).toBe(true);
    actSavePreferences({ musicOn: false });
    expect(getAppState().musicOn).toBe(false);
  });

  it('toggles music on when payload.musicOn is true and current is false', () => {
    actions.toggleMusic();
    expect(getAppState().musicOn).toBe(false);
    actSavePreferences({ musicOn: true });
    expect(getAppState().musicOn).toBe(true);
  });

  it('toggles sound off when payload.soundOn is false', () => {
    expect(getAppState().soundOn).toBe(true);
    actSavePreferences({ soundOn: false });
    expect(getAppState().soundOn).toBe(false);
  });

  it('does not toggle music if current already matches payload', () => {
    expect(getAppState().musicOn).toBe(true);
    actSavePreferences({ musicOn: true });
    expect(getAppState().musicOn).toBe(true);
  });
});
