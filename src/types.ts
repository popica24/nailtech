import { ReactNode } from "react";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type CartItem = {
  id: number;
  quantity: number;
};

export type DropdownSection = {
  key: string;
  title: string;
  content: ReactNode;
};

export type DropdownSections = DropdownSection[];

export type ExpandedSections = {
  [key: string]: boolean;
};
