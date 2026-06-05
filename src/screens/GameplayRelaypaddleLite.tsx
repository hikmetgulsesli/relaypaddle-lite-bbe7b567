// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - RelayPaddle Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Gamepad2, Palette, Pause, Settings, Trophy } from "lucide-react";


export type GameplayRelaypaddleLiteActionId = "pause-1" | "settings-2" | "insert-coin-to-play-3" | "arcade-4" | "ranks-5" | "gear-6";

export interface GameplayRelaypaddleLiteProps {
  actions?: Partial<Record<GameplayRelaypaddleLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayRelaypaddleLite({ actions, runtime }: GameplayRelaypaddleLiteProps) {
  void runtime;
  return (
    <>
      {/* Top Navigation Overlay */}
      <nav className="absolute top-0 w-full z-50 flex justify-between items-center px-margin-safe py-hud-padding glass-hud border-b border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="font-display-mobile text-display-mobile font-black text-primary drop-shadow-[0_0_10px_#00dbe7] tracking-tighter uppercase">
                  RELAYPADDLE LITE
              </div>
      <div className="flex gap-4 items-center">
      <button className="text-on-surface-variant hover:text-primary transition-colors duration-200 hover:bg-primary/10 rounded-full p-2 flex items-center justify-center" type="button" aria-label="Pause" data-action-id="pause-1" onClick={actions?.["pause-1"]}>
      <Pause  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors duration-200 hover:bg-primary/10 rounded-full p-2 flex items-center justify-center" type="button" aria-label="Settings" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </nav>
      {/* Main Playfield */}
      <main className="flex-grow flex items-center justify-center p-margin-safe relative mt-[80px] md:mt-0 md:pt-24 z-10">
      <div className="relative w-full max-w-[1200px] h-[716px] md:h-[819px] bg-surface rounded-lg glow-border overflow-hidden">
      {/* Midline */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-outline-variant/30 transform -translate-x-1/2 border-dashed border-l-2"></div>
      {/* Paddles */}
      <div className="paddle left-4 top-1/3"></div>
      <div className="paddle right-4 bottom-1/3"></div>
      {/* Signal Orb */}
      <div className="orb"></div>
      {/* Start Game Overlay */}
      <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm flex flex-col items-center justify-center z-20" id="start-overlay">
      <button className="start-btn bg-surface-tint text-on-primary font-headline-md text-headline-md px-8 py-4 rounded-lg shadow-[0_0_10px_#00dbe7] transition-colors duration-200 uppercase tracking-widest border-2 border-primary-container" type="button" data-action-id="insert-coin-to-play-3" onClick={actions?.["insert-coin-to-play-3"]}>
                          Insert Coin to Play
                      </button>
      <div className="mt-8 text-on-surface-variant font-label-caps text-label-caps tracking-widest flex flex-col items-center gap-2">
      <p>[SPACE] = PAUSE</p>
      <p>[R] = RESTART</p>
      </div>
      </div>
      {/* Game Over Flash (Hidden by default) */}
      <div className="absolute inset-0 bg-error/20 hidden z-30 pointer-events-none" id="error-flash"></div>
      </div>
      {/* HUD Elements (Floating outside playfield on desktop, overlaid on mobile) */}
      <div className="absolute top-24 md:top-32 left-margin-safe glass-hud px-4 py-2 rounded-lg flex flex-col items-start shadow-lg">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-1">Live Score</span>
      <span className="font-score-xl text-score-xl text-primary drop-shadow-[0_0_8px_#00dbe7]">042,910</span>
      </div>
      <div className="absolute top-24 md:top-32 right-margin-safe glass-hud px-4 py-2 rounded-lg flex flex-col items-end shadow-lg">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-1">Level</span>
      <span className="font-timer-md text-timer-md text-secondary drop-shadow-[0_0_5px_#fface8]">04: NEON DRIFT</span>
      </div>
      <div className="absolute bottom-24 md:bottom-1/2 md:translate-y-1/2 right-margin-safe md:right-8 flex flex-col items-center gap-2">
      <span className="font-label-caps text-label-caps text-secondary uppercase pulse-magenta">x4 Combo</span>
      <div className="combo-meter">
      <div className="combo-fill shadow-[0_0_10px_#fface8]"></div>
      </div>
      </div>
      </main>
      {/* Bottom Navigation (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-surface-container-lowest/40 backdrop-blur-lg border-t border-outline-variant/20 rounded-t-xl shadow-[0_-4px_20px_rgba(255,172,232,0.15)]">
      <button className="flex flex-col items-center justify-center bg-secondary/20 text-secondary border-t-2 border-secondary px-4 py-2 h-full scale-90 transition-transform" type="button" data-action-id="arcade-4" onClick={actions?.["arcade-4"]}>
      <Gamepad2  style={{fontVariationSettings: "'FILL' 1"}} className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Arcade</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant/60 px-4 py-2 h-full hover:bg-white/5 transition-colors" type="button" data-action-id="ranks-5" onClick={actions?.["ranks-5"]}>
      <Trophy className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Ranks</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant/60 px-4 py-2 h-full hover:bg-white/5 transition-colors" type="button" data-action-id="gear-6" onClick={actions?.["gear-6"]}>
      <Palette className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Gear</span>
      </button>
      </nav>
      
    </>
  );
}
