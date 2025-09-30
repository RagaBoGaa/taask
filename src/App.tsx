import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/app-context';
import { Navbar } from './components/navbar';
import { MobileNav } from './components/mobile-nav';
import { KeyboardShortcutsHelp } from './components/keyboard-shortcuts-help';
import HomePage from './pages/home';
import UsersPage from './pages/users';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className=' '>
          <Navbar />
          <main className='pb-16 md:pb-0 !bg-background !text-foreground'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/users' element={<UsersPage />} />
            </Routes>
          </main>
          <MobileNav />
          <KeyboardShortcutsHelp />
          <Toaster position='top-center' reverseOrder={false} />{' '}
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
