import { Link, useLocation } from 'react-router';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useApp } from '../contexts/app-context';
import { languages } from '../lib/i18n';
import { cn } from '../lib/utils';
import {
  useNavigationShortcuts,
  useKeyboardShortcuts,
} from '../hooks/use-keyboard-shortcuts';

export function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme, language, setLanguage, t } = useApp();

  useKeyboardShortcuts([
    {
      key: 't',
      altKey: true,
      action: toggleTheme,
      description: 'Toggle Theme',
    },
  ]);

  useNavigationShortcuts();

  return (
    <nav className='border-b border-border bg-card'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center gap-8'>
            <Link to='/' className='text-xl font-semibold text-foreground'>
              {t.appName}
            </Link>
            <div className='hidden md:flex items-center gap-1'>
              <Link to='/'>
                <Button
                  variant={location.pathname === '/' ? 'secondary' : 'ghost'}
                  className={cn(
                    'transition-colors',
                    location.pathname === '/' &&
                      'bg-secondary text-secondary-foreground'
                  )}
                >
                  {t.home}
                </Button>
              </Link>
              <Link to='/users'>
                <Button
                  variant={
                    location.pathname === '/users' ? 'secondary' : 'ghost'
                  }
                  className={cn(
                    'transition-colors',
                    location.pathname === '/users' &&
                      'bg-secondary text-secondary-foreground'
                  )}
                >
                  {t.users}
                </Button>
              </Link>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className='w-[140px]'>
                <SelectValue placeholder='Select language'>
                  {languages.find((lang) => lang.code === language)?.flag}{' '}
                  {languages.find((lang) => lang.code === language)?.name}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <span className='mr-2'>{lang.flag}</span>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant='ghost' size='icon' onClick={toggleTheme}>
              {theme === 'light' ? (
                <Moon className='h-5 w-5' />
              ) : (
                <Sun className='h-5 w-5' />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
