import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import AlertButton from './AlertButton';
import Toolbar from './Toolbar';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Normal Test Cases

test('renders button with default text', () => {
  render(<AlertButton message="Test Message">Download File</AlertButton>);
  const buttonElement = screen.getByText(/Download File/i);
  expect(buttonElement).toBeInTheDocument();
});

test('button click triggers alert with correct message', () => {
  window.alert = jest.fn();
  render(<AlertButton message="Downloading!">Download File</AlertButton>);
  const buttonElement = screen.getByText(/Download File/i);
  fireEvent.click(buttonElement);
  expect(window.alert).toHaveBeenCalledWith('Downloading!');
});

test('renders multiple buttons in Toolbar', () => {
  render(<Toolbar />);
  const downloadButton = screen.getByText(/Download File/i);
  const shareButton = screen.getByText(/Share Document/i);
  expect(downloadButton).toBeInTheDocument();
  expect(shareButton).toBeInTheDocument();
});

// Edge Test Cases

test('button with empty message prop', () => {
  window.alert = jest.fn();
  render(<AlertButton message="">Empty Message</AlertButton>);
  const buttonElement = screen.getByText(/Empty Message/i);
  fireEvent.click(buttonElement);
  expect(window.alert).toHaveBeenCalledWith('');
});

test('button with null message prop', () => {
  window.alert = jest.fn();
  render(<AlertButton message={null}>Null Message</AlertButton>);
  const buttonElement = screen.getByText(/Null Message/i);
  fireEvent.click(buttonElement);
  expect(window.alert).toHaveBeenCalledWith(null);
});

test('button with large message string', () => {
  const longMessage = 'a'.repeat(10000);
  window.alert = jest.fn();
  render(<AlertButton message={longMessage}>Large Message</AlertButton>);
  const buttonElement = screen.getByText(/Large Message/i);
  fireEvent.click(buttonElement);
  expect(window.alert).toHaveBeenCalledWith(longMessage);
});
