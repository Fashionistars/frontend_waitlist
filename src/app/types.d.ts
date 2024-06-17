interface CardProps{
    image: string,
    title: string,
    vendor: string,
    rating: number,
    price: number
}

interface ErrorProps {
    errors: {
      business_name: string;
      email: string;
      phone_number: string;
      product_name: string;
      product_description: string;
      image_1: string;
    };
  }