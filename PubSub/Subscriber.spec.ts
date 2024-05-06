import { vi } from "vitest";
import { subscription } from ".";

describe("subscribe.ts", () => {
  const baseStore = {
    name: "Thiago",
    surname: "Mikis",
  };

  it("deve testar a implementação da assinatura", () => {
    const state = subscription(baseStore);
    const sub = vi.fn();

    expect(state.getState()).toEqual(baseStore);

    state.subscribe(sub);

    state.setState({ name: "Mikis" });

    expect(sub).toHaveBeenCalledTimes(1);
    expect(state.getState()).toEqual({ ...baseStore, name: "baz" });
  });
});