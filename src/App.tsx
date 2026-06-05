import { useEffect, useRef } from 'react';
import {
  useAppState,
  actions,
} from './features/relaypaddle-lite/relaypaddle-lite.store';
import { actSavePreferences } from './features/surf-game-settings/act_save_preferences';
import { actReturnToGameplay } from './features/surf-game-settings/act_return_to_gameplay';
import {
  GameplayRelaypaddleLite,
  GameSettingsRelaypaddleLite,
} from './screens';
import { installTestBridge } from './test/bridge';

export default function App() {
  const state = useAppState();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    installTestBridge();
  }, []);

  useEffect(() => {
    if (state.runtime.started && !state.runtime.paused && !state.runtime.gameOver) {
      intervalRef.current = setInterval(() => {
        actions.tick();
      }, 100);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [state.runtime.started, state.runtime.paused, state.runtime.gameOver]);

  const gameplayActions = {
    'pause-1': actions.pauseGame,
    'settings-2': () => actions.setScreen('settings'),
    'insert-coin-to-play-3': actions.startGame,
    'arcade-4': () => {},
    'ranks-5': () => {},
    'gear-6': () => {},
  };

  const settingsActions = {
    'close-settings-1': actReturnToGameplay,
    'easy-2': () => actSavePreferences({ difficulty: 'easy' }),
    'normal-3': () => actSavePreferences({ difficulty: 'normal' }),
    'hard-4': () => actSavePreferences({ difficulty: 'hard' }),
    'reset-defaults-5': actions.resetDefaults,
    'cancel-6': actReturnToGameplay,
    'apply-and-return-7': actReturnToGameplay,
  };

  return (
    <div
      data-setfarm-root="game"
      data-testid="setfarm-app-root"
      className="relative h-screen w-full overflow-hidden bg-surface text-on-surface"
    >
      {state.screen === 'gameplay' && (
        <GameplayRelaypaddleLite
          actions={gameplayActions}
          runtime={{
            player: state.runtime.player,
            obstacles: state.runtime.obstacles,
            shards: state.runtime.shards,
            score: state.runtime.score,
            energy: state.runtime.energy,
            lives: state.runtime.lives,
            paused: state.runtime.paused,
          }}
        />
      )}
      {state.screen === 'settings' && (
        <GameSettingsRelaypaddleLite actions={settingsActions} />
      )}
    </div>
  );
}
