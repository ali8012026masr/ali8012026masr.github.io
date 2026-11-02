import { Injectable, signal, computed, effect } from '@angular/core';

export type ThemePreference = 'system' | 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio-theme-preference';

  // Raw user preference: 'system' | 'light' | 'dark'
  readonly preference = signal<ThemePreference>(this.getInitialPreference());

  // System OS preference detected via media query
  private readonly systemIsDark = signal<boolean>(this.detectSystemDark());

  // Computed actual active theme: 'light' | 'dark'
  readonly effectiveTheme = computed<'light' | 'dark'>(() => {
    const pref = this.preference();
    if (pref === 'light') return 'light';
    if (pref === 'dark') return 'dark';
    return this.systemIsDark() ? 'dark' : 'light';
  });

  constructor() {
    // Listen for OS scheme changes if window is available
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        this.systemIsDark.set(e.matches);
      });
    }

    // Effect to apply data-theme attribute on document root
    effect(() => {
      const active = this.effectiveTheme();
      const pref = this.preference();
      if (typeof document !== 'undefined') {
        if (pref === 'system') {
          document.documentElement.setAttribute('data-theme', active);
        } else {
          document.documentElement.setAttribute('data-theme', pref);
        }
      }
    });
  }

  setPreference(newPreference: ThemePreference): void {
    this.preference.set(newPreference);
    try {
      localStorage.setItem(this.STORAGE_KEY, newPreference);
    } catch {
      // Ignore localStorage exceptions in restricted sandbox
    }
  }

  cycleTheme(): void {
    const current = this.preference();
    if (current === 'system') {
      this.setPreference('dark');
    } else if (current === 'dark') {
      this.setPreference('light');
    } else {
      this.setPreference('system');
    }
  }

  private getInitialPreference(): ThemePreference {
    if (typeof window === 'undefined') return 'system';
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        return stored;
      }
    } catch {
      // Fallback to system on error
    }
    return 'system';
  }

  private detectSystemDark(): boolean {
    if (typeof window === 'undefined' || !window.matchMedia) return true;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
