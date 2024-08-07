import { ImageWithTextsType } from "@/@types/types";
import Link from "next/link";
import { NextImage } from "../ui/NextImage";

export const ImageWithTexts: React.FC<ImageWithTextsType> = ({
  image,
  link,
  paragraph,
  title,
  maxWidth,
  linedUp,
  height,
}) => {
  return (
    <div
      className={`flex flex-col gap-4 ${maxWidth ?? "md:max-w-[20rem] max-w-[15rem] "} ${height ?? "h-full"}  shadow-lg select-none justify-between`}
    >
      <div className="flex flex-col  h-full gap-2">
        <div className={`max-w-full w-[28rem] h-[15rem] rounded-t-lg overflow-hidden relative select-none`}>
          <NextImage
            altImage={image.altImage}
            ariaLabel={image.ariaLabel}
            imageUrl={image.imageUrl}
            sizes={image.sizes}
            className={"w-full h-auto object-cover "}
            fill
            draggable
          />
        </div>

        <div className={`flex flex-col gap-2 px-4 pb-4 ${linedUp ? "h-fit" : "h-full justify-between"}`}>
          <div className="flex flex-col gap-2">
            <span className="title-card-medium">{title}</span>
            <span className={`paragraph-card ${!link && "mb-5"} ${linedUp && "md:h-[10.5rem]"}`}>{paragraph}</span>
          </div>
        </div>
      </div>
      {link && (
        <Link aria-label="Saiba mais" href={link} className="paragraph-card text-text-verde-medio underline px-4 pb-4">
          Saiba mais
        </Link>
      )}
    </div>
  );
};
