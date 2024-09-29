import Image from "next/image";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
  coverImage: string;
  publishedOn: string;
};

export function PostBody({ content, coverImage, publishedOn }: Props) {
  return (
    <div className="max-w-4xl container px-4">
      <div className="relative rounded-lg overflow-hidden">
        <Image
          src={coverImage}
          alt="Cover Image"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
      <div>
        {/* Add the publish date  */}
        <p className="text-gray-500 text-sm mt-4">Published on {publishedOn}</p>
      </div>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
