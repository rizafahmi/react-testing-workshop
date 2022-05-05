import { render } from '@testing-library/react';
import BigButton from './BigButton.js';
import { ThemeProvider } from './ThemeProvider.js';

test('render <BigButton />', function () {
  render(
    <ThemeProvider>
      <BigButton />
    </ThemeProvider>
  );
});
