export enum TYPE_CONVENIENCE {
  'EQUIPMENT'= 'EQUIPMENT',
  'CONVENIENCE'= 'CONVENIENCE',
}

export type QueryGetOrganization = {
  province: string | number
  capture: string | number
  product_name: string
  check_in: string
  check_out: string
}

export type Convenience = {
  id: number;
  name: string;
  code: string;
  type: TYPE_CONVENIENCE;
  description: string;
};

export type Assets = Convenience & {
  quantity: string
}

export type Resource = {
  id: number;
  uploaded_at: string;
  file: string;
};

export type Location = {
  full_address: string;
}

export type Evaluation = {
  point: number;
  count: number;
  rank_name: string;
  evaluation_overview: {
    category: string;
    display_name: string
    count: number;
    point: number;
    rank_name: string
  }[];
};

export type Organization = {
  id: number;
  name: string;
  sub_name: string;
  description: string;
  type: string;
  price: string;
  capacity: number;
  promotional_price: number | null;
  rate: number;
  promotions: any[]; // Adjust the type if you have more details about promotions
  conveniences: Convenience[];
  assets: Assets[];
  resource: Resource[];
  location: Location
  evaluation: Evaluation
};