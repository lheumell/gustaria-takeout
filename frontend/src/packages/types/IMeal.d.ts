type TProduct = {
  id: number;
  attributes: {
    name: string;
    description: string;
    price: number;
    path: string;
    color: string;
    image: TImage;
    product_type: TProductType;
    allergens: ApiResponseAllergen;
  };
};

type TAllergens = {
  id: number;
  attributes: {
    name: string;
  };
};

type TProductType = {
  data: {
    id: number;
    attributes: {
      name: string;
    };
  };
};

interface ApiResponseProduct {
  data: TProduct[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface ApiResponseAllergen {
  data: TAllergens[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface TImage {
  data: [
    {
      id: number;
      attributes: {
        url: string;
      };
    }
  ];
}
