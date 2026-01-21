import ClothesStore from "./ClothesStore";
import {describe, it, expect, vi} from "vitest";
import '@testing-library/jest-dom'
import {render, screen, within} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { useOutletContext } from 'react-router'; // ← must import the real one

// ── Hoist the mock function so it's available inside the hoisted vi.mock ──
const { mockUseOutletContext } = vi.hoisted(() => ({
  mockUseOutletContext: vi.fn(),
}));

// At the top, after your imports
vi.mock('react-router', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,                           // ← keeps Link, useParams, etc.
    useOutletContext: mockUseOutletContext,
  };
});

describe('ClotheStore', ()=>{
  it('should change to quantity controls when Add to Cart is clicked on one item', async () => {
  const mockAddToCart = vi.fn();
  const mockIncrease = vi.fn();
  const mockDecrease = vi.fn();

  // Use the hoisted mock here
  vi.mocked(useOutletContext).mockReturnValue({
    clothesapi: [  // ← note: probably typo? should be clothesapi ?
      {
        id: 2,
        title: "clothes",
        quantity: 2,   // ← if this is initial data, maybe quantity: 0 or 1?
        price: 4,
        image: "https://example.com/clothes.jpg",
      }
    ],
    cartItems: [],
    addToCart: mockAddToCart,
    increaseQuanity: mockIncrease,     // ← typo: increaseQuantity ?
    decreaseQuanity: mockDecrease,     // ← typo: decreaseQuantity ?
  });

  const user = userEvent.setup();

  render(<ClothesStore />);

  const clotheDiv = await screen.findByTestId('clothediv');

  const addButton = within(clotheDiv).getByRole('button', { name: /Add to Cart/i });

  await user.click(addButton);

  // After click → assuming your component switches from "Add to Cart" to quantity controls
  expect(within(clotheDiv).queryByText(/Add to Cart/i)).not.toBeInTheDocument();
  expect(within(clotheDiv).getByText('1')).toBeInTheDocument(); // or check for + / - buttons
});
})

