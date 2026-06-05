import { createRuntime } from '../game/game-runtime';
import type { AppState } from '../features/relaypaddle-lite/relaypaddle-lite.store';

export const defaultFixture: AppState = {
  screen: 'gameplay',
  runtime: createRuntime({ started: true, score: 120, energy: 80, lives: 2 }),
  highScore: 500,
  soundOn: true,
  musicOn: false,
  vibrationOn: true,
  lastError: null,
};

export const pausedFixture: AppState = {
  screen: 'gameplay',
  runtime: createRuntime({ started: true, paused: true, score: 300, energy: 45, lives: 1 }),
  highScore: 300,
  soundOn: false,
  musicOn: true,
  vibrationOn: false,
  lastError: null,
};

export const settingsFixture: AppState = {
  screen: 'settings',
  runtime: createRuntime({ difficulty: 'hard' }),
  highScore: 1000,
  soundOn: true,
  musicOn: true,
  vibrationOn: true,
  lastError: null,
};
