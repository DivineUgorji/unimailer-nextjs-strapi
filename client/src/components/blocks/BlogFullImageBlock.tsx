import { FullImageBlockProps } from "@/types";
import { StrapiImage } from "@/components/Strapi-image";

export function BlogFullImageBlock({ image }: Readonly<FullImageBlockProps>) {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div
        className="relative rounded-2xl overflow-hidden
                      shadow-[0_8px_40px_rgba(53,50,62,0.12)]"
      >
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "Article image"}
          width={1200}
          height={630}
          className="w-full h-auto object-cover"
        />

        <div
          className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2
                        border-orange-500/40 pointer-events-none"
        />
        <div
          className="absolute bottom-0 right-0 w-8 h-8 border-b-2
                        border-r-2 border-orange-500/40 pointer-events-none"
        />
      </div>
    </div>
  );
}
