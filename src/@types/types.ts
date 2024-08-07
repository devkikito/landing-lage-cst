import { ElementType } from "react";
import { IconType } from "react-icons";

type NextImageType = {
  imageUrl: string;
  imageDarkUrl?: string;
  altImage: string;
  extraClassName?: string;
  className?: string;
  ariaLabel: string;
  sizes: string;
  fill?: boolean;
  draggable?: boolean;
};

type IconProps = {
  Icon: IconType;
  url: string;
  size?: string;
  color?: string;
  alt: string;
};

type TitleDefaultType = {
  title: string;
  subtitle?: string;
  description?: string;
  extraClassName?: string;
  textColor?: string;
};

type ItemCarouselType = {
  image: NextImageType;
  texts: {
    title: string;
    description: string;
  };
};

type InnovationInMovieSectionType = {
  texts?: TitleDefaultType;
  images: ItemCarouselType[];
  link?: string;
  type?: string;
};

type IconTextCardType = {
  title: string;
  description: string;
  icon: IconType | ElementType;
};

type ImageWithTextsType = {
  image: NextImageType;
  title?: string;
  paragraph?: string;
  link?: string;
  maxWidth?: string;
  linedUp?: boolean;
  height?: string;
};

type MainCoverType = {
  imageUrl: string;
  altImage: string;
  ariaLabel: string;
  textCenter: string;
};

export type {
  NextImageType,
  IconProps,
  TitleDefaultType,
  InnovationInMovieSectionType,
  ItemCarouselType,
  IconTextCardType,
  ImageWithTextsType,
  MainCoverType,
};
