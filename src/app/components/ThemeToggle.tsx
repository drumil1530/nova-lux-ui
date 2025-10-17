import { useEffect } from 'react';
import { Button } from '../../components';
import { useLocalStorage } from '../hooks/useLocalStorage';
import useToggle from '../hooks/useToggle';

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useLocalStorage('theme', 'light');
  const [theme, toggleTheme] = useToggle(
    currentTheme,
    currentTheme === 'light' ? 'dark' : 'light'
  );

  useEffect(() => {
    document.body.dataset.theme = theme;
    setCurrentTheme(theme);
  }, [theme, setCurrentTheme]);

  return (
    <Button variant="solid" color='zinc' onClick={toggleTheme} className="rounded-xl">
      Theme
    </Button>
  );
};

export default ThemeToggle;
