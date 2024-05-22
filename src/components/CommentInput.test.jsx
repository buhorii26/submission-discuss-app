/**
 * skenario testing
 *
 * - CommentInput component
 *   - renders TCommentInput component
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
import CommentInput from './CommentInput';

expect.extend(matchers);

describe('CommentInput component', () => {
  afterEach(() => {
    cleanup();
  });
  it('renders CommentInput component', () => {
    render(<CommentInput addComment={() => {}} />);
    expect(screen.getByPlaceholderText('Ketik disini')).toBeInTheDocument();
  });
  it('submit form with correct data', async () => {
    // Arrange
    const mockAddComment = vi.fn();
    render(<CommentInput addComment={mockAddComment} />);
    const commentInput = await screen.getByPlaceholderText('Ketik disini');
    const CommentInputButton = await screen.getByRole('button', { name: 'Kirim' });

    // Action
    await userEvent.type(commentInput, 'commenttest');
    await userEvent.click(CommentInputButton);

    // Assert
    expect(mockAddComment).toBeCalledWith('commenttest');
  });
});
