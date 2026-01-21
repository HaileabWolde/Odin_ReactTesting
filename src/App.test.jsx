import App from "./App";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";



beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
describe("useCart", () => {
   beforeEach(() => {
    vi.clearAllMocks();           // cleans call history + implementations
  });

  it("fetches and displays clothes data", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => [
        { id: 1, image: "./my-background.jpg" },
      ],
    });
   
   
    
    render(<App />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalledTimes(1);
   
  });
});