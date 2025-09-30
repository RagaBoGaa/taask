import { useState, useEffect } from 'react';
import { Keyboard } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';

const shortcuts = [
  { keys: ['Alt', 'H'], description: 'Navigate to Home' },
  { keys: ['Alt', 'U'], description: 'Navigate to Users' },
  { keys: ['Alt', 'T'], description: 'Toggle Theme' },
  { keys: ['Alt', 'A'], description: 'Add New User (on Users page)' },
  { keys: ['Alt', 'D'], description: 'Delete Selected Users (on Users page)' },
  { keys: ['?'], description: 'Show Keyboard Shortcuts' },
];

export function KeyboardShortcutsHelp() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === '?' &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Button
        variant='default'
        size='icon'
        onClick={() => setOpen(true)}
        className='fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg md:bottom-10'
        aria-label='Show keyboard shortcuts'
      >
        <Keyboard className='h-5 w-5' />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='max-w-md'>
          <DialogHeader>
            <DialogTitle>Keyboard Shortcuts</DialogTitle>
            <DialogDescription>
              Use these keyboard shortcuts to navigate and interact with the app
            </DialogDescription>
          </DialogHeader>
          <div className='space-y-3'>
            {shortcuts.map((shortcut, index) => (
              <div key={index} className='flex items-center justify-between'>
                <span className='text-sm text-muted-foreground'>
                  {shortcut.description}
                </span>
                <div className='flex gap-1'>
                  {shortcut.keys.map((key, keyIndex) => (
                    <kbd
                      key={keyIndex}
                      className='rounded border border-border bg-muted px-2 py-1 text-xs font-mono'
                    >
                      {key}
                    </kbd>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
