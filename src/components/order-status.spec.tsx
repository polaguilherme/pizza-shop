import { render } from "@testing-library/react";

import { OrderStatus } from "./order-status";

describe("Order Status", () => {
  it("should display the right text based on order status", () => {
    const wrapper = render(<OrderStatus status="pending" />);

    wrapper.debug();

    const status = wrapper.getByText("Pendente");
    const badgeElement = wrapper.getByTestId("badge-pending");

    expect(status).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-slate-400");
  });

  it("should display the right text based on order status", () => {
    const wrapper = render(<OrderStatus status="canceled" />);

    wrapper.debug();

    const status = wrapper.getByText("Cancelado");
    const badgeElement = wrapper.getByTestId("badge-canceled");

    expect(status).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-rose-500");
  });

  it("should display the right text based on order status", () => {
    const wrapper = render(<OrderStatus status="delivered" />);

    wrapper.debug();

    const status = wrapper.getByText("Entregue");
    const badgeElement = wrapper.getByTestId("badge-delivered");

    expect(status).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-green-500");
  });

  it("should display the right text based on order status", () => {
    const wrapper = render(<OrderStatus status="delivering" />);

    wrapper.debug();

    const status = wrapper.getByText("Em entrega");
    const badgeElement = wrapper.getByTestId("badge-delivering");

    expect(status).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });

  it("should display the right text based on order status", () => {
    const wrapper = render(<OrderStatus status="processing" />);

    wrapper.debug();

    const status = wrapper.getByText("Em preparo");
    const badgeElement = wrapper.getByTestId("badge-processing");

    expect(status).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });
});
