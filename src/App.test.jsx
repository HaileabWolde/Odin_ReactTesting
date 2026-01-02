import App from "./App";
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
        { id: 1, title: "nike" },
        { id: 2, title: "jordan" },
      ],
    });

    render(<App />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    expect(await screen.findByText(/nike/i)).toBeInTheDocument();
    expect(await screen.findByText(/jordan/i)).toBeInTheDocument();
  });
});