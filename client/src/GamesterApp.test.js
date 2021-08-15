import { render, screen } from '@testing-library/react';
import GamesterApp from './components/GamesterApp';

test('renders learn react link', () => {
  render(<GamesterApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
