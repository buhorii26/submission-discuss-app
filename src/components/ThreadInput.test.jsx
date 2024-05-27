/**
 * skenario testing
 *
 * - ThreadInput component
 *   - renders ThreadInput component
 *   - submit form with correct data
 */
import React from 'react';
import {
  render, screen, cleanup,
} from '@testing-library/react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import ThreadInput from './ThreadInput';

expect.extend(matchers);

// Mock the requestSubmit method
HTMLFormElement.prototype.requestSubmit = () => {};

describe('ThreadInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders ThreadInput component', () => {
    render(<ThreadInput addThread={() => {}} />);
    expect(screen.getByPlaceholderText('Judul')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Kategori')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Body')).toBeInTheDocument();
  });

  it('submit form with correct data', async () => {
    // Arrange
    const mockAddThread = vi.fn();
    render(<ThreadInput addThread={mockAddThread} />);
    const titleInput = await screen.getByPlaceholderText('Judul');
    const categoryInput = await screen.getByPlaceholderText('Kategori');
    const bodyInput = await screen.getByPlaceholderText('Body');
    const ThreadInputButton = await screen.getByRole('button', { name: 'Buat Thread' });

    // Action
    await userEvent.type(titleInput, 'titletest');
    await userEvent.type(categoryInput, 'categorytest');
    await userEvent.type(bodyInput, 'bodytest');
    await userEvent.click(ThreadInputButton);

    // Assert
    expect(mockAddThread).toBeCalledWith({
      title: 'titletest',
      category: 'categorytest',
      body: 'bodytest',
    });
  });
});
