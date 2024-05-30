import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hola, Mundo :3/i);
  expect(linkElement).toBeInTheDocument();
});
