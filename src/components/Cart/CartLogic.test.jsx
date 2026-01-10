import { describe, it, expect} from "vitest";
import "@testing-library/jest-dom";
import { renderHook, screen, act} from "@testing-library/react";
import useCartButton from "../../hooks/useCartButton";

describe("useCart", ()=>{

    it('display the cartItem as empty', ()=>{
        const {result}= renderHook(()=> useCartButton())

        expect(result.current.cartItems).toEqual([])
    })
})