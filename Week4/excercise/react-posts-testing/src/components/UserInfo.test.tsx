/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import UserInfo from "./UserInfo";

/* eslint-enable */

describe("Display UserInfo", () => {
  it("should render the user's name", () => {
    render(
      <UserInfo
        user={{
          avatarUrl: "https://robohash.org/Fiona?size=60x60",
          name: "Fiona Worx",
        }}
      />
    );
    const name = screen.getByText(/Fion/);
    expect(name).toHaveTextContent("Fiona Worx");
  });

  it("should render the user's avatarImage", () => {
    render(
      <UserInfo
        user={{
          avatarUrl: "https://robohash.org/Fiona?size=60x60",
          name: "Fiona Worx",
        }}
      />
    );
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "Fiona Worx avatar");
  });
});
