import { ParagraphBlockProps } from "@/types";
import ReactMarkdown from "react-markdown";

export function BlogParagraphBlock({ content }: Readonly<ParagraphBlockProps>) {
  return (
    <div className="max-w-3xl mx-auto mb-8">
      <div
        className="prose prose-neutral prose-lg max-w-none
                      prose-p:text-neutral-700 prose-p:leading-relaxed
                      prose-strong:text-neutral-800
                      prose-a:text-orange-500 prose-a:no-underline
                      hover:prose-a:text-orange-400
                      prose-blockquote:border-orange-500
                      prose-code:text-orange-600 prose-code:bg-orange-50
                      prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded"
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
