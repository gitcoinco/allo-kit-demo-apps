import { describe, test, expect } from "vitest";
import { render, screen } from "../../test-utils";
import { RoundDetailsWithHook } from "../details";
import { mockRound } from "../..";

describe("Round Details", async () => {
  test("render", async () => {
    render(<RoundDetailsWithHook id="id" chainId={10} />);
    const { name, eligibility } = mockRound.data.round.roundMetadata;

    expect(await screen.findByText(name)).toBeDefined();
    expect(await screen.findByText(eligibility.description)).toBeDefined();
    expect(await screen.findByText("optimism")).toBeDefined();

    screen.debug();
  });
});
