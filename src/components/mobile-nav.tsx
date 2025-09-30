import { Link, useLocation } from 'react-router';
import { Home, Users } from 'lucide-react';
import { useApp } from '../contexts/app-context';
import { cn } from '../lib/utils';

export function MobileNav() {
  const location = useLocation();
  const { t } = useApp();

  return (
    <nav className='fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card md:hidden'>
      <div className='flex items-center justify-around'>
        <Link
          to='/'
          className={cn(
            'flex flex-col items-center gap-1 px-6 py-3 transition-colors',
            location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'
          )}
        >
          <Home className='h-5 w-5' />
          <span className='text-xs'>{t.home}</span>
        </Link>
        <Link
          to='/users'
          className={cn(
            'flex flex-col items-center gap-1 px-6 py-3 transition-colors',
            location.pathname === '/users'
              ? 'text-primary'
              : 'text-muted-foreground'
          )}
        >
          <Users className='h-5 w-5' />
          <span className='text-xs'>{t.users}</span>
        </Link>
      </div>
    </nav>
  );
}
