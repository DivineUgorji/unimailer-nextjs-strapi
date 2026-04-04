import { Suspense } from "react";
import { PaginationComponent } from "@/components/PaginationComponent";

interface PaginationWrapperProps {
  pageCount: number;
}

export function PaginationWrapper({ pageCount }: PaginationWrapperProps) {
  return (
    <Suspense fallback={null}>
      <PaginationComponent pageCount={pageCount} />
    </Suspense>
  );
}
