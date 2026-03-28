import { ParagraphWithImageProps } from "@/types";
import { StrapiImage } from "@/components/Strapi-image";
import ReactMarkdown from "react-markdown";

export function BlogParagraphWithImage({
  content,
  image,
  reversed,
  imageLandscape,
}: Readonly<ParagraphWithImageProps>) {
  return (
    <div className="max-w-5xl mx-auto mb-12">
      <div
        className={`flex flex-col gap-8 items-center
                    ${reversed ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        {/* Image */}
        <div
          className={`w-full shrink-0
                      ${
                        imageLandscape
                          ? "md:w-[45%] aspect-video"
                          : "md:w-[35%] aspect-3/4"
                      } relative rounded-2xl overflow-hidden
                      shadow-[0_8px_32px_rgba(53,50,62,0.1)]`}
        >
          <StrapiImage
            src={image.url}
            alt={image.alternativeText || "Article image"}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
          {/* Decorative corner accent */}
          <div
            className="absolute bottom-0 right-0 w-8 h-8
                          border-b-2 border-r-2 border-orange-500/40
                          rounded-br-2xl pointer-events-none"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div
            className="prose prose-neutral prose-lg max-w-none
                          prose-p:text-neutral-700 prose-p:leading-relaxed
                          prose-strong:text-neutral-800
                          prose-a:text-orange-500 prose-a:no-underline
                          hover:prose-a:text-orange-400
                          prose-blockquote:border-orange-500
                          prose-code:text-orange-600
                          prose-code:bg-orange-50
                          prose-code:px-1.5 prose-code:py-0.5
                          prose-code:rounded"
          >
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
