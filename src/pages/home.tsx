import { useNavigate } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useApp } from '../contexts/app-context';

export default function HomePage() {
  const navigate = useNavigate();
  const { t } = useApp();

  return (
    <div className='flex min-h-[calc(100dvh-5rem)] items-center justify-center px-4'>
      <div className='mx-auto max-w-3xl text-center'>
        <h1 className='text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance mb-6'>
          {t.welcome}
        </h1>
        <p className='text-lg text-muted-foreground sm:text-xl lg:text-2xl text-pretty mb-8 leading-relaxed'>
          {t.welcomeDescription}
        </p>
        <Button size='lg' className='group' onClick={() => navigate('/users')}>
          {t.getStarted}
          <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
        </Button>
      </div>
    </div>
  );
}
