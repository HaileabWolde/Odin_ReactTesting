import ClothesStore from "../src/components/ClothesStore";
import {describe, it, expect} from "vitest";
import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";



 

describe('ClothesStore', ()=>{
    it("should call the onclick function when it is called", async()=>{
       const user = userEvent.setup();

       render(<ClothesStore
        clothesapi={[{
        id:1,
        image: "./my-background.jpg"
       }]}/>)

       const button = screen.getByRole("button", {name: "Add to Cart"})

       await user.click(button)
       

       expect(screen.queryByText('Add to Cart')).not.toBeInTheDocument()
      
      expect(screen.getByText("0")).toBeInTheDocument()

    })
})