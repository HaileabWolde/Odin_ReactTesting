import { describe, it, expect, vi, beforeEach} from "vitest";
import "@testing-library/jest-dom";
import { renderHook, act, render,screen} from "@testing-library/react";
import useCartButton from "../../hooks/useCartButton";
import CartComponent from "./Cart";
import { useOutletContext } from 'react-router'; // ← must import the real one

// ── Hoist the mock function so it's available inside the hoisted vi.mock ──
const { mockUseOutletContext } = vi.hoisted(() => ({
  mockUseOutletContext: vi.fn(),
}));

vi.mock('react-router', () => ({
  useOutletContext: mockUseOutletContext,
}));

describe("useCart", ()=>{

    it('display the cartItem as empty', ()=>{
        const {result}= renderHook(()=> useCartButton())

        expect(result.current.cartItems).toEqual([])
    })

    it('adds an item to the cart', ()=> {
        const {result} = renderHook(()=>useCartButton())
        const clothe = {id: 1, image: "./my-background.jpg"}
        act(()=>{
            result.current.addToCart(clothe)
        })
        expect(result.current.cartItems).toHaveLength(1)
    })
    it('increase the quanity of the item in the cart', ()=>{
        const {result} = renderHook(()=>useCartButton())

        const clothe = {id: 2, image: "./my-back.jpg"}

        act(()=>{
            result.current.addToCart(clothe)
        })

        act(()=> {
            result.current.increaseQuanity(clothe.id)
        })

        expect(result.current.cartItems[0].quantity).toBe(2)
    })

    it('should decrease the item when decrease button is clicked', ()=>{
        const {result} = renderHook(()=> useCartButton())

        const clothe = {id: 2, image: './my-back2.jpg'}

        act(()=> {
                result.current.addToCart(clothe)
        })
        expect(result.current.cartItems).toHaveLength(1)

        act(()=>{
            result.current.addToCart(clothe)
        })
        expect(result.current.cartItems[0].quantity).toBe(2)

        act(()=> {
            result.current.decreaseQuanity(clothe.id)
        })
        expect(result.current.cartItems[0].quantity).toBe(1)
    })
    
     it('should remove item completely when quantity reaches 0', ()=>{
        const {result} = renderHook(()=>useCartButton())

        const clothe = {id: 2, image: "./my-back.jpg"}

        act(()=>{
            result.current.addToCart(clothe)

        })

        expect(result.current.cartItems).toHaveLength(1)

        act(()=> {
            result.current.decreaseQuanity(clothe.id)
        })

       expect(result.current.cartItems).toHaveLength(0);
    })
     it('should remove the item completly', ()=>{
        const {result} = renderHook(()=>useCartButton())

        const clothe = {id: 2, image: "./my-back.jpg"}

        act(()=>{
            result.current.addToCart(clothe)
        })

        expect(result.current.cartItems).toHaveLength(1)
        act(()=> {
            result.current.deleteFromCart(clothe.id)
        })

        expect(result.current.cartItems).toHaveLength(0)
    })
    it('should clear the cartItems completyl from the cart', ()=>{
      const {result} = renderHook(()=> useCartButton())
        const clothe = {id: 2, image: "./my-back.jpg"}

        act(()=>{
            result.current.addToCart(clothe)
        })
        expect(result.current.cartItems).toHaveLength(1)

        act(()=> {
          result.current.clearCart()
        })
        expect(result.current.cartItems).toHaveLength(0)
    })
})

describe("CartComponent", () => {
  beforeEach(() => {
    vi.clearAllMocks();           // cleans call history + implementations
  });

  it('displays the cart items on the cart component', async () => {
    const mockDelete = vi.fn();
    const mockClear  = vi.fn();

    vi.mocked(useOutletContext).mockReturnValue({
      cartItems: [
        {
          id: 2,
          title: "clothes",
          quantity: 2,
          price: 4,
          image: "https://example.com/clothes.jpg", // ← add if CardComponent needs it
        }
      ],
      deleteFromCart: mockDelete,
      clearCart: mockClear,
    });

    render(<CartComponent />);

    // These should now pass
    expect(await screen.findByText("clothes")).toBeInTheDocument();
    expect(screen.getByText("2x")).toBeInTheDocument();     // quantity
  });

  it("accumulates and calculates the total price inside the cart", async () => {
    vi.mocked(useOutletContext).mockReturnValue({
      cartItems: [
        { id: 2, title: "clothes", quantity: 2, price: 4, image: "…" },
        { id: 3, title: "shoes",   quantity: 2, price: 4, image: "…" },
      ],
      deleteFromCart: vi.fn(),
      clearCart: vi.fn(),
    });

    render(<CartComponent />);

    expect(screen.getByText("$16")).toBeInTheDocument();
  });
});
  
