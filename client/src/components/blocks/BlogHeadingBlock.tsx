import { HeadingBlockProps } from "@/types";

export function BlogHeadingBlock({
  heading,
  linkId,
}: Readonly<HeadingBlockProps>) {
  return (
    <div id={linkId} className="max-w-3xl mx-auto scroll-mt-24 mb-4 mt-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-7 h-px bg-orange-500" />
      </div>
      <h2 className="text-neutral-800 m-0">{heading}</h2>
    </div>
  );
}
