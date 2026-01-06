import App from "../src/App";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("useCart", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
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

   const clothediv = await screen.findByTestId('clothediv'); // use findBy for async

   expect(clothediv).toHaveStyle('background-image: url(./my-background.jpg)')
   
  });
});