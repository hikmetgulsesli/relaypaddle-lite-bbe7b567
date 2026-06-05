// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - RelayPaddle Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { FastForward, Gauge, Keyboard, Music, RefreshCw, Save, SlidersHorizontal, Sparkles, Volume2, X } from "lucide-react";


export type GameSettingsRelaypaddleLiteActionId = "close-settings-1" | "easy-2" | "normal-3" | "hard-4" | "reset-defaults-5" | "cancel-6" | "apply-and-return-7";

export interface GameSettingsRelaypaddleLiteProps {
  actions?: Partial<Record<GameSettingsRelaypaddleLiteActionId, () => void>>;

}

export function GameSettingsRelaypaddleLite({ actions }: GameSettingsRelaypaddleLiteProps) {
  return (
    <>
      {/* Faux Gameplay Background (Darkened) */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 pointer-events-none bg-no-repeat" data-alt="A dark, abstract digital landscape resembling a classic 80s arcade grid stretching into the distance. Bright, thin neon cyan and magenta lines form a perspective grid on a deep navy black background. The scene is illuminated by glowing digital artifacts and light trails, creating a sense of high-speed motion and retro-futuristic virtual reality. The overall aesthetic is highly technical, moody, and deeply saturated with vivid modern retro colors."></div>
      <div className="absolute inset-0 z-0 bg-surface/80 backdrop-blur-sm pointer-events-none"></div>
      {/* Main Settings Modal (Level 3 Elevation) */}
      <div className="z-10 w-full max-w-lg mx-margin-safe bg-surface-container-low/90 backdrop-blur-xl border border-secondary/30 rounded-xl modal-glow flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.8)] relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-outline-variant/30 relative">
      <h2 className="font-headline-md text-headline-md text-primary tracking-tight drop-shadow-[0_0_8px_rgba(0,219,231,0.5)]">GAME SETTINGS</h2>
      <button aria-label="Close Settings" className="text-on-surface-variant hover:text-secondary transition-colors" type="button" data-action-id="close-settings-1" onClick={actions?.["close-settings-1"]}>
      <X aria-hidden={true} focusable="false" />
      </button>
      {/* Decorative Accent Line */}
      <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-primary-container via-secondary to-transparent w-full opacity-50"></div>
      </div>
      {/* Scrollable Content Area */}
      <div className="p-6 space-y-8 overflow-y-auto max-h-[614px] custom-scrollbar">
      {/* Difficulty Section */}
      <section className="space-y-4">
      <div className="flex items-center justify-between">
      <h3 className="font-timer-md text-timer-md text-on-surface uppercase tracking-wider flex items-center gap-2">
      <Gauge className="text-primary text-xl" aria-hidden={true} focusable="false" />
                              Difficulty
                          </h3>
      <span className="font-label-caps text-label-caps text-secondary px-2 py-1 bg-secondary/10 rounded border border-secondary/20">NORMAL</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
      <button className="py-3 px-4 bg-surface border border-outline-variant text-on-surface-variant hover:border-primary/50 hover:text-primary transition-colors font-label-caps text-label-caps uppercase text-center focus:outline-none" type="button" data-action-id="easy-2" onClick={actions?.["easy-2"]}>
                              EASY
                          </button>
      <button className="py-3 px-4 bg-primary/10 border border-primary text-primary shadow-[0_0_10px_rgba(0,219,231,0.2)] font-label-caps text-label-caps uppercase text-center focus:outline-none relative overflow-hidden group" type="button" data-action-id="normal-3" onClick={actions?.["normal-3"]}>
                              NORMAL
                              <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
      </button>
      <button className="py-3 px-4 bg-surface border border-outline-variant text-on-surface-variant hover:border-secondary/50 hover:text-secondary transition-colors font-label-caps text-label-caps uppercase text-center focus:outline-none" type="button" data-action-id="hard-4" onClick={actions?.["hard-4"]}>
                              HARD
                          </button>
      </div>
      </section>
      {/* Speed Multiplier Section */}
      <section className="space-y-4">
      <div className="flex items-center justify-between">
      <h3 className="font-timer-md text-timer-md text-on-surface uppercase tracking-wider flex items-center gap-2">
      <FastForward className="text-primary text-xl" aria-hidden={true} focusable="false" />
                              Speed Multiplier
                          </h3>
      <span className="font-timer-md text-timer-md text-primary drop-shadow-[0_0_5px_rgba(0,219,231,0.5)]">1.5x</span>
      </div>
      <div className="pt-2 pb-4">
      <input className="w-full" max="3" min="1" step="0.1" type="range" defaultValue="1.5" />
      <div className="flex justify-between mt-2 font-label-caps text-label-caps text-outline">
      <span>1.0x</span>
      <span>2.0x</span>
      <span>3.0x</span>
      </div>
      </div>
      </section>
      {/* Audio & Visuals Toggles */}
      <section className="space-y-4">
      <h3 className="font-timer-md text-timer-md text-on-surface uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-outline-variant/30">
      <SlidersHorizontal className="text-primary text-xl" aria-hidden={true} focusable="false" />
                          Audio &amp; Visuals
                      </h3>
      <div className="space-y-3">
      <label className="flex items-center justify-between p-3 bg-surface border border-outline-variant/30 hover:border-outline-variant/80 transition-colors cursor-pointer group">
      <div className="flex items-center gap-3">
      <Music className="text-on-surface-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">Background Music</span>
      </div>
      <input defaultChecked={true} className="retro-checkbox" type="checkbox" />
      </label>
      <label className="flex items-center justify-between p-3 bg-surface border border-outline-variant/30 hover:border-outline-variant/80 transition-colors cursor-pointer group">
      <div className="flex items-center gap-3">
      <Volume2 className="text-on-surface-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">Sound Effects</span>
      </div>
      <input defaultChecked={true} className="retro-checkbox" type="checkbox" />
      </label>
      <label className="flex items-center justify-between p-3 bg-surface border border-outline-variant/30 hover:border-outline-variant/80 transition-colors cursor-pointer group">
      <div className="flex items-center gap-3">
      <Sparkles className="text-on-surface-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">Scanline CRT Effect</span>
      </div>
      <input className="retro-checkbox" type="checkbox" />
      </label>
      </div>
      </section>
      {/* Input Help Section (Glassmorphic Card) */}
      <section className="bg-surface-container/50 border border-outline-variant/20 p-4 rounded backdrop-blur-md relative overflow-hidden">
      <div className="absolute -right-4 -top-4 w-16 h-16 bg-secondary/10 rounded-full blur-xl pointer-events-none"></div>
      <h3 className="font-timer-md text-timer-md text-secondary uppercase tracking-wider mb-4 flex items-center gap-2">
      <Keyboard className="text-secondary text-xl" aria-hidden={true} focusable="false" />
                          Input Diagnostics
                      </h3>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
      {/* Keyboard Controls */}
      <div className="space-y-3">
      <h4 className="font-label-caps text-label-caps text-outline uppercase border-b border-outline-variant/30 pb-1 mb-2">KEYBOARD</h4>
      <div className="flex items-center justify-between text-sm">
      <span className="text-on-surface-variant">Move Paddle</span>
      <div className="flex gap-1">
      <kbd className="px-2 py-1 bg-surface border border-outline-variant rounded font-timer-md text-xs text-primary shadow-[0_2px_0_rgba(132,148,149,0.5)]">W</kbd>
      <kbd className="px-2 py-1 bg-surface border border-outline-variant rounded font-timer-md text-xs text-primary shadow-[0_2px_0_rgba(132,148,149,0.5)]">S</kbd>
      </div>
      </div>
      <div className="flex items-center justify-between text-sm">
      <span className="text-on-surface-variant">Serve / Action</span>
      <kbd className="px-4 py-1 bg-surface border border-outline-variant rounded font-timer-md text-xs text-primary shadow-[0_2px_0_rgba(132,148,149,0.5)]">SPACE</kbd>
      </div>
      <div className="flex items-center justify-between text-sm">
      <span className="text-on-surface-variant">Restart</span>
      <kbd className="px-2 py-1 bg-surface border border-outline-variant rounded font-timer-md text-xs text-primary shadow-[0_2px_0_rgba(132,148,149,0.5)]">R</kbd>
      </div>
      </div>
      {/* Mouse Controls */}
      <div className="space-y-3">
      <h4 className="font-label-caps text-label-caps text-outline uppercase border-b border-outline-variant/30 pb-1 mb-2">MOUSE</h4>
      <div className="flex items-center justify-between text-sm">
      <span className="text-on-surface-variant">Move Paddle</span>
      <span className="font-timer-md text-xs text-secondary bg-surface px-2 py-1 border border-outline-variant rounded shadow-[0_2px_0_rgba(132,148,149,0.5)]">Y-Axis Drag</span>
      </div>
      <div className="flex items-center justify-between text-sm">
      <span className="text-on-surface-variant">Serve / Action</span>
      <span className="font-timer-md text-xs text-secondary bg-surface px-2 py-1 border border-outline-variant rounded shadow-[0_2px_0_rgba(132,148,149,0.5)]">Left Click</span>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Footer Actions */}
      <div className="p-6 border-t border-outline-variant/30 bg-surface-container-lowest/50 flex items-center justify-between gap-4 mt-auto">
      <button className="font-label-caps text-label-caps uppercase text-error hover:text-error-container transition-colors flex items-center gap-2 group" type="button" data-action-id="reset-defaults-5" onClick={actions?.["reset-defaults-5"]}>
      <RefreshCw className="text-lg group-hover:rotate-180 transition-transform duration-300" aria-hidden={true} focusable="false" />
                      Reset Defaults
                  </button>
      <div className="flex gap-3">
      <button className="px-6 py-3 font-label-caps text-label-caps uppercase text-on-surface border border-outline-variant hover:bg-surface-variant transition-colors focus:outline-none" type="button" data-action-id="cancel-6" onClick={actions?.["cancel-6"]}>
                          Cancel
                      </button>
      <button className="px-6 py-3 font-label-caps text-label-caps uppercase bg-primary text-on-primary border-2 border-primary hover:bg-primary-fixed hover:shadow-[0_0_20px_rgba(0,219,231,0.6)] transition-colors focus:outline-none flex items-center gap-2 font-bold group" type="button" data-action-id="apply-and-return-7" onClick={actions?.["apply-and-return-7"]}>
      <Save className="text-lg group-hover:translate-x-1 transition-transform" aria-hidden={true} focusable="false" />
                          Apply &amp; Return
                      </button>
      </div>
      </div>
      </div>
    </>
  );
}
