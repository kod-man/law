export interface bannerItemsType {
  id: number;
  content: string;
  linkText: string;
  image: StaticImageData;
  linkHref: string;
}

export interface URLParams {
  params: { id: string };
  searchParams?: { [key: string]: string };
}
