import { describe, it, expect} from "vitest";
import "@testing-library/jest-dom";
import { renderHook,act} from "@testing-library/react";
import useCartButton from "../../hooks/useCartButton";

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

     it('decrease the quanity of the item in th cart', ()=>{
        const {result} = renderHook(()=>useCartButton())

        const clothe = {id: 2, image: "./my-back.jpg"}

        act(()=>{
            result.current.addToCart(clothe)
        })

        act(()=> {
            result.current.decreaseQuanity(clothe.id)
        })

        expect(result.current.cartItems[0].quantity).toBe(0)
    })
})