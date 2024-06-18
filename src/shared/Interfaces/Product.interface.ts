export interface IProductsResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IProduct[];
  support: ISupport;
}

export interface IProduct {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface ISupport {
  url: string;
  text: string;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}
