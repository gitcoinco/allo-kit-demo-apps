"use client";
import { ApplicationReviewTable, Button } from "@allo/kit";
import { BackButton, RoundDetailsWithHook as RoundDetails } from "@allo/kit";
import Link from "next/link";

export default function RoundPage({ params: { chainId = 0, roundId = "" } }) {
  return (
    <section className="space-y-8">
      <RoundDetails
        id={roundId}
        chainId={chainId}
        primaryAction={
          <Link href={`/admin/rounds/${chainId}/${roundId}/allocate`}>
            <Button>Allocate</Button>
          </Link>
        }
        backAction={
          <Link href={`/admin/rounds`}>
            <BackButton />
          </Link>
        }
      />

      <ApplicationReviewTable roundId={roundId} chainId={chainId} />
    </section>
  );
}
