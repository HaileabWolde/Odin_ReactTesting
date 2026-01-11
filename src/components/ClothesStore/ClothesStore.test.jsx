import App from "../../App";
import {describe, it, expect, vi, beforeEach, afterEach} from "vitest";
import '@testing-library/jest-dom'
import {render, screen, within} from "@testing-library/react"
import userEvent from "@testing-library/user-event";



beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
 

describe('ClothesStore', () => {
  it('should change to quantity controls when Add to Cart is clicked on one item', async () => {

     global.fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => [
        { id: 1, image: "./my-background.jpg" },
      ],
    });

    const user = userEvent.setup();

    render(<App />);
 
    // Wait for the clothing items to load and appear
     const clothediv = await screen.findByTestId('clothediv'); // use findBy for async
   

    // Get the button inside it
    const addButton = within(clothediv).getByRole('button', { name: 'Add to Cart' });

    // Click it
    await user.click(addButton);

    // Assert changes inside the same card
    expect(within(addButton).queryByText('Add to Cart')).not.toBeInTheDocument();
    expect(within(addButton).getByText('1')).toBeInTheDocument(); // or '1'
  });
});