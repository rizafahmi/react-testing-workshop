import { useTheme } from './ThemeProvider.js';
import BigButton from './BigButton.js';
import './App.css';

function App() {
  const [theme, setTheme] = useTheme();

  return (
    <div className={`container ${theme}`}>
      <BigButton title="BIG BUTTON" />
      <button
        onClick={() =>
          theme === 'light' ? setTheme('dark') : setTheme('light')
        }
      >
        CHANGE MODE
      </button>
    </div>
  );
}

export default App;
