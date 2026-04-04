import { Suspense } from "react";
import { Search } from "@/components/Search";

export function SearchWrapper() {
  return (
    <Suspense fallback={null}>
      <Search />
    </Suspense>
  );
}
