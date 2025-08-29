"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { Button } from "@/components/ui/button";
import { ResponsiveDialog } from "@/components/responsive-dialog";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return (
    <div>
      <ResponsiveDialog
        title="Responsive Test"
        description="Responsive description"
        open
        onOpenChange={() => {}}
      >
        <Button>
          Some Action
        </Button>
      </ResponsiveDialog>
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export const AgentsViewLoading = () => (
  <LoadingState title="Loading agents" description="Please wait..." />
);

export const AgentsViewError = () => (
  <ErrorState
    title="Something went wrong"
    description="Please try again later"
  />
);
