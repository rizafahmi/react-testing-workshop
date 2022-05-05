import { useTheme } from './ThemeProvider.js';

function BigButton() {
  const [theme] = useTheme();
  return <button className={theme}>BIG BUTTON</button>;
}

export default BigButton;
