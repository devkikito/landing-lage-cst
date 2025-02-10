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

export type Product = {
  id: string;
  title: string;
  value: string;
  startDate: string;
  description: string;
  pixBoletoValue: string;
  creditCardValue: string;
  createdAt: string;
  updatedAt: string;
  link?: string;
};

export type UserProduct = {
  id: string;
  externalReference: string;
  productId: string;
  userId: string;
  status: string;
  paymentId: string;
  paymentType: string;
  merchantOrderId: string;
  preferenceId: string | null;
  siteId: string | null;
  merchantAccountId: string | null;
  createdAt: string;
  updatedAt: string;
  paymentLink: string;
  product: Product;
  successLink: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  fullName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  phoneNumber: string;
  commercialPhone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  contactEmail: string;
  registrationNumber: string;
  professionalCouncil: string;
  specialization: string;
  institution: string;
  graduationYear: number;
  areasOfPractice: string[];
  completedCourses: string[];
  certificates: string[];
  motivation: string;
  expectations: string;
  availability: string;
  updatedAt: string;
  formComplete: boolean;
  products: UserProduct[];
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
