import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { NavLink } from "./nav-link";

describe("NavLink", () => {
  it("should highlight the nav link when the is the current page link", () => {
    const warpper = render(
      <>
        <NavLink to="/dashboard">Início</NavLink>
        <NavLink to="/orders">Pedidos</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={["/dashboard"]}>
              {children}
            </MemoryRouter>
          );
        },
      }
    );
    warpper.debug();

    expect(warpper.getByText("Pedidos").dataset.current).toEqual("false");
    expect(warpper.getByText("Início").dataset.current).toEqual("true");
  });
});
