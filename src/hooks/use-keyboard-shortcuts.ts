import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export interface KeyboardShortcut {
  key: string;
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  action: () => void;
  description: string;
}

export function useKeyboardShortcuts(shortcuts: KeyboardShortcut[] = []) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const shortcut = shortcuts.find(
        (s) =>
          s.key.toLowerCase() === e.key.toLowerCase() &&
          !!s.ctrlKey === e.ctrlKey &&
          !!s.altKey === e.altKey &&
          !!s.shiftKey === e.shiftKey
      );

      if (shortcut) {
        e.preventDefault();
        shortcut.action();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
}

export function useNavigationShortcuts() {
  const navigate = useNavigate();

  useKeyboardShortcuts([
    {
      key: 'h',
      altKey: true,
      action: () => navigate('/'),
      description: 'Go to Home',
    },
    {
      key: 'u',
      altKey: true,
      action: () => navigate('/users'),
      description: 'Go to Users',
    },
  ]);
}
