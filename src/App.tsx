import { useState } from 'react';
import './App.css';
import { GroceryProvider } from './store/grocery-context';
import { Header } from './components/Header';
import { MainScreen } from './screens/MainScreen';
import { AddScreen } from './screens/AddScreen';

type Screen = 'main' | 'add';

function App() {
  const [screen, setScreen] = useState<Screen>('main');

  return (
    <GroceryProvider>
      <div className="app">
        <Header />
        {screen === 'main' && (
          <MainScreen onAdd={() => setScreen('add')} />
        )}
        {screen === 'add' && (
          <AddScreen onClose={() => setScreen('main')} />
        )}
      </div>
    </GroceryProvider>
  );
}

export default App;
