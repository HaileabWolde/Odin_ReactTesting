import { describe, it, expect, vi} from "vitest";
import "@testing-library/jest-dom";
import { renderHook, act, render,screen} from "@testing-library/react";
import useCartButton from "../../hooks/useCartButton";
import CartComponent from "./Cart";


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
})

describe("CartComponent", () => {
  it('displays the cart items on the cart component', async () => {
    const onClick = vi.fn();
    
    const cartItems = [
      {
        id: 2,
        title: "clothes",
        quantity: 2,
        price: 4,
      }
    ];

    render(
      <CartComponent
        cartItems={cartItems}
        deleteFromCart={onClick}
      />
    );

    // await the async query
    const clotheDiv = await screen.findByTestId('eachdiv');

   
     expect(clotheDiv).toHaveTextContent('clothes');
  });

  it("acculmates and calulates the total price inside the cart", async()=>{
        const onClick = vi.fn();
    
         const cartItems = [
         {
        id: 2,
        title: "clothes",
        quantity: 2,
        price: 4,
      }, {
        id: 3,
        title: "shoes",
        quantity: 2,
        price: 4
      }
        ];
    render(
      <CartComponent
        cartItems={cartItems}
        deleteFromCart={onClick}
      />
    );
    expect(screen.getByText('$16')).toBeInTheDocument()
  })
});