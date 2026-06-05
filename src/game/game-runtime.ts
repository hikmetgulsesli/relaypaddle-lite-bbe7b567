export interface GameRuntimeState {
  player: { lane: number; position: number };
  obstacles: Array<{ lane: number; position: number }>;
  shards: Array<{ lane: number; position: number }>;
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
  gameOver: boolean;
  difficulty: 'easy' | 'normal' | 'hard';
  started: boolean;
}

export const INITIAL_RUNTIME: GameRuntimeState = {
  player: { lane: 1, position: 0 },
  obstacles: [],
  shards: [],
  score: 0,
  energy: 100,
  lives: 3,
  paused: false,
  gameOver: false,
  difficulty: 'normal',
  started: false,
};

export function createRuntime(initial?: Partial<GameRuntimeState>): GameRuntimeState {
  return { ...INITIAL_RUNTIME, ...initial };
}

export function tickRuntime(state: GameRuntimeState): GameRuntimeState {
  if (!state.started || state.paused || state.gameOver) return state;

  const speed = state.difficulty === 'easy' ? 1 : state.difficulty === 'hard' ? 3 : 2;

  const obstacles = state.obstacles
    .map((o) => ({ ...o, position: o.position + speed }))
    .filter((o) => o.position < 100);

  const shards = state.shards
    .map((s) => ({ ...s, position: s.position + speed }))
    .filter((s) => s.position < 100);

  // Spawn obstacles/shards randomly
  const nextObstacles = [...obstacles];
  const nextShards = [...shards];
  if (Math.random() < 0.02) {
    nextObstacles.push({ lane: Math.floor(Math.random() * 3), position: -5 });
  }
  if (Math.random() < 0.015) {
    nextShards.push({ lane: Math.floor(Math.random() * 3), position: -5 });
  }

  // Simple collision detection with player
  let lives = state.lives;
  let energy = state.energy;
  let score = state.score;
  let gameOver: boolean = state.gameOver;

  for (const o of nextObstacles) {
    if (o.lane === state.player.lane && o.position >= 90 && o.position <= 100) {
      lives -= 1;
      energy = Math.max(0, energy - 20);
    }
  }

  for (const s of nextShards) {
    if (s.lane === state.player.lane && s.position >= 90 && s.position <= 100) {
      score += 10;
      energy = Math.min(100, energy + 5);
    }
  }

  if (lives <= 0) {
    gameOver = true;
    lives = 0;
  }

  return {
    ...state,
    obstacles: nextObstacles,
    shards: nextShards,
    score,
    energy,
    lives,
    gameOver,
  };
}

export function movePlayer(state: GameRuntimeState, direction: -1 | 1): GameRuntimeState {
  const lane = Math.max(0, Math.min(2, state.player.lane + direction));
  return { ...state, player: { ...state.player, lane } };
}

export function setDifficulty(
  state: GameRuntimeState,
  difficulty: 'easy' | 'normal' | 'hard',
): GameRuntimeState {
  return { ...state, difficulty };
}

export function resetRuntime(): GameRuntimeState {
  return createRuntime();
}
