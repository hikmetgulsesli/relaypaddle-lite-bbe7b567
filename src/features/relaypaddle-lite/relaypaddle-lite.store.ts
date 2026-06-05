import { useSyncExternalStore } from 'react';
import {
  createRuntime,
  tickRuntime,
  movePlayer,
  setDifficulty,
  resetRuntime,
  type GameRuntimeState,
} from '../../game/game-runtime';

export type ScreenId = 'gameplay' | 'settings';

export interface AppState {
  screen: ScreenId;
  runtime: GameRuntimeState;
  highScore: number;
  soundOn: boolean;
  musicOn: boolean;
  vibrationOn: boolean;
  lastError: string | null;
}

const STORAGE_KEY = 'relaypaddle-lite-v1';

function loadPersisted(): Partial<AppState> | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') return parsed;
    return null;
  } catch {
    return null;
  }
}

function savePersisted(state: AppState) {
  try {
    const toSave = {
      highScore: state.highScore,
      soundOn: state.soundOn,
      musicOn: state.musicOn,
      vibrationOn: state.vibrationOn,
      difficulty: state.runtime.difficulty,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch {
    // ignore
  }
}

const persisted = loadPersisted();

let state: AppState = {
  screen: 'gameplay',
  runtime: createRuntime({ difficulty: persisted?.runtime?.difficulty ?? 'normal' }),
  highScore: persisted?.highScore ?? 0,
  soundOn: persisted?.soundOn ?? true,
  musicOn: persisted?.musicOn ?? true,
  vibrationOn: persisted?.vibrationOn ?? true,
  lastError: null,
};

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function setScreen(screen: ScreenId) {
  state = { ...state, screen };
  emit();
}

function tick() {
  state = { ...state, runtime: tickRuntime(state.runtime) };
  if (state.runtime.gameOver && state.runtime.score > state.highScore) {
    state = { ...state, highScore: state.runtime.score };
  }
  savePersisted(state);
  emit();
}

function startGame() {
  state = { ...state, runtime: createRuntime({ difficulty: state.runtime.difficulty, started: true }) };
  emit();
}

function pauseGame() {
  state = { ...state, runtime: { ...state.runtime, paused: !state.runtime.paused } };
  emit();
}

function moveLane(direction: -1 | 1) {
  state = { ...state, runtime: movePlayer(state.runtime, direction) };
  emit();
}

function setDiff(difficulty: 'easy' | 'normal' | 'hard') {
  state = { ...state, runtime: setDifficulty(state.runtime, difficulty) };
  savePersisted(state);
  emit();
}

function resetDefaults() {
  state = {
    ...state,
    runtime: createRuntime(),
    soundOn: true,
    musicOn: true,
    vibrationOn: true,
  };
  savePersisted(state);
  emit();
}

function resetGame() {
  state = { ...state, runtime: createRuntime({ difficulty: state.runtime.difficulty }) };
  emit();
}

function toggleSound() {
  state = { ...state, soundOn: !state.soundOn };
  savePersisted(state);
  emit();
}

function toggleMusic() {
  state = { ...state, musicOn: !state.musicOn };
  savePersisted(state);
  emit();
}

function toggleVibration() {
  state = { ...state, vibrationOn: !state.vibrationOn };
  savePersisted(state);
  emit();
}

export const actions = {
  setScreen,
  tick,
  startGame,
  pauseGame,
  moveLane,
  setDiff,
  resetDefaults,
  resetGame,
  toggleSound,
  toggleMusic,
  toggleVibration,
};

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return state;
}

export function useAppState(): AppState {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export function getAppState(): AppState {
  return state;
}
