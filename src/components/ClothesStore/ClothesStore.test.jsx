import App from "../../App";
import {describe, it, expect} from "vitest";
import '@testing-library/jest-dom'
import {render, screen, within} from "@testing-library/react"
import userEvent from "@testing-library/user-event";



 

describe('ClothesStore', () => {
  it('should change to quantity controls when Add to Cart is clicked on one item', async () => {
    const user = userEvent.setup();

    render(<App />);
 
    // Wait for the clothing items to load and appear
    const clotheCards = await screen.findAllByTestId('clothediv');

    // Now pick the first one
    const firstCard = clotheCards[0];

    // Get the button inside it
    const addButton = within(firstCard).getByRole('button', { name: 'Add to Cart' });

    // Click it
    await user.click(addButton);

    // Assert changes inside the same card
    expect(within(firstCard).queryByText('Add to Cart')).not.toBeInTheDocument();
    expect(within(firstCard).getByText('0')).toBeInTheDocument(); // or '1'
  });
});