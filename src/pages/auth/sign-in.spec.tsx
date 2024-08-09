import { QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";

import { queryClient } from "@/lib/react-query";

import { SignIn } from "./sign-in";

describe("NavLink", () => {
  it("should set default email input value if  email is present on serach params", () => {
    const warpper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <HelmetProvider>
            <MemoryRouter
              initialEntries={["/sign-in?email=jhondoe@example.com"]}
            >
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </MemoryRouter>
          </HelmetProvider>
        );
      },
    });
    const emailInput = warpper.getByLabelText("Seu e-mail") as HTMLInputElement;

    console.log(emailInput.outerHTML);

    expect(emailInput.value).toEqual("jhondoe@example.com");
  });
});
