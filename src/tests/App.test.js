import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome to my website!/i);
  expect(welcomeMessage).toBeInTheDocument();
});
