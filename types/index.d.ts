export interface bannerItemsType {
  id: string;
  content: string;
  linkText: string;
  image: StaticImageData;
  linkHref: string;
}

export interface URLParams {
  params: { id: string };
  searchParams?: { [key: string]: string };
}
