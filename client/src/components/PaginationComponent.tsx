"use client";

import { FC } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  pageCount: number;
}

interface PaginationArrowProps {
  direction: "left" | "right";
  href: string;
  isDisabled: boolean;
}

const PaginationArrow: FC<PaginationArrowProps> = ({
  direction,
  href,
  isDisabled,
}) => {
  const router = useRouter();
  const isLeft = direction === "left";

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (!isDisabled) router.push(href, { scroll: false });
      }}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={`flex items-center justify-center w-9 h-9 rounded-lg border
                 font-mono text-xs transition-all duration-200
                 ${
                   isDisabled
                     ? "border-neutral-200 text-neutral-300 cursor-not-allowed bg-white/50"
                     : "border-neutral-200 text-neutral-600 bg-white hover:border-orange-500 hover:text-orange-500 hover:shadow-[0_4px_12px_rgba(238,96,52,0.15)] cursor-pointer"
                 }`}
    >
      {isLeft ? (
        <ChevronLeft className="w-4 h-4" strokeWidth={2} />
      ) : (
        <ChevronRight className="w-4 h-4" strokeWidth={2} />
      )}
    </button>
  );
};

export function PaginationComponent({ pageCount }: Readonly<PaginationProps>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Build page number array — show max 5 pages around current
  const getPageNumbers = () => {
    const delta = 2;
    const range: number[] = [];
    for (
      let i = Math.max(1, currentPage - delta);
      i <= Math.min(pageCount, currentPage + delta);
      i++
    ) {
      range.push(i);
    }
    return range;
  };

  const router = useRouter();
  const pageNumbers = getPageNumbers();

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className="flex items-center justify-center gap-2"
    >
      {/* Left arrow */}
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      {/* First page + ellipsis */}
      {pageNumbers[0] > 1 && (
        <>
          <button
            onClick={() => router.push(createPageURL(1), { scroll: false })}
            className="flex items-center justify-center w-9 h-9 rounded-lg
                       border border-neutral-200 bg-white text-neutral-600
                       font-mono text-xs hover:border-orange-500
                       hover:text-orange-500 transition-all duration-200"
          >
            1
          </button>
          {pageNumbers[0] > 2 && (
            <span className="font-mono text-xs text-neutral-400 px-1">...</span>
          )}
        </>
      )}

      {/* Page numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => router.push(createPageURL(page), { scroll: false })}
          aria-current={page === currentPage ? "page" : undefined}
          className={`flex items-center justify-center w-9 h-9 rounded-lg
                     border font-mono text-xs transition-all duration-200
                     ${
                       page === currentPage
                         ? "border-orange-500 bg-orange-500 text-white shadow-[0_4px_12px_rgba(238,96,52,0.3)]"
                         : "border-neutral-200 bg-white text-neutral-600 hover:border-orange-500 hover:text-orange-500"
                     }`}
        >
          {page}
        </button>
      ))}

      {/* Last page + ellipsis */}
      {pageNumbers[pageNumbers.length - 1] < pageCount && (
        <>
          {pageNumbers[pageNumbers.length - 1] < pageCount - 1 && (
            <span className="font-mono text-xs text-neutral-400 px-1">...</span>
          )}
          <button
            onClick={() =>
              router.push(createPageURL(pageCount), { scroll: false })
            }
            className="flex items-center justify-center w-9 h-9 rounded-lg
                       border border-neutral-200 bg-white text-neutral-600
                       font-mono text-xs hover:border-orange-500
                       hover:text-orange-500 transition-all duration-200"
          >
            {pageCount}
          </button>
        </>
      )}

      {/* Right arrow */}
      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= pageCount}
      />
    </nav>
  );
}
