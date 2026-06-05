import { getAppState, actions } from '../relaypaddle-lite/relaypaddle-lite.store';

export interface PreferencesPayload {
  difficulty?: 'easy' | 'normal' | 'hard';
  speedMultiplier?: number;
  musicOn?: boolean;
  soundOn?: boolean;
  crtEffectOn?: boolean;
}

export function actSavePreferences(payload: PreferencesPayload) {
  const state = getAppState();

  if (payload.difficulty !== undefined) {
    actions.setDiff(payload.difficulty);
  }

  if (payload.musicOn !== undefined) {
    const current = state.musicOn;
    if (current !== payload.musicOn) {
      actions.toggleMusic();
    }
  }

  if (payload.soundOn !== undefined) {
    const current = state.soundOn;
    if (current !== payload.soundOn) {
      actions.toggleSound();
    }
  }

  if (payload.crtEffectOn !== undefined) {
    // CRT effect is not yet persisted in store; reserved for future expansion
  }

  return getAppState();
}
