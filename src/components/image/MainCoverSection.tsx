import { NextImage } from "../ui/NextImage";
import { MainCoverType } from "@/@types/types";

export const MainCover: React.FC<MainCoverType> = ({ altImage, ariaLabel, imageUrl, textCenter }) => {
  return (
    <div className="relative w-full h-full max-h-[15rem] overflow-hidden bg-center flex justify-center items-center">
      <NextImage
        imageUrl={imageUrl}
        altImage={altImage}
        ariaLabel={ariaLabel}
        className={"w-full h-full object-cover"}
        sizes={"100vw"}
      />
      <span className="h1-bold text-var-branco-100 absolute text-center w-full">{textCenter}</span>
    </div>
  );
};
