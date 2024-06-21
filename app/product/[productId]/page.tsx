import Container from "@/app/components/Container";
import { product } from "@/utils/product";
import ProductDetails from "./ProductDetails";

interface ProductProps {
  params: any;
  productId: string;
}

const Product: React.FC<ProductProps> = ({ params }) => {
  console.log("===>", params);
  product;

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
