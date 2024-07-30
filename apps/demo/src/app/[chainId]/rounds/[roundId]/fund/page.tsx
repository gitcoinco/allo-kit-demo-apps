"use client";

import { FundRound } from "@allo/kit";

export default function CreateApplicationPage({
  params: { roundId, chainId },
}: {
  params: { roundId: string; chainId: string };
}) {
  return (
    <section>
      <FundRound id={roundId} chainId={Number(chainId)} />
    </section>
  );
}
