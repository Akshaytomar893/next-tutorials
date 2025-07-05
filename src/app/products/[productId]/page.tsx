import { Metadata } from "next";
import React from "react";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const productId = (await params).productId;

  return {
    title: `Product ${productId}`,
  };
};
type Props = {
  params: Promise<{ productId: string }>;
};
const ProductDetails = async ({ params }: Props) => {
  const productId = (await params).productId;
  return (
    <div>
      <h1>Prduct Details:</h1>
      <h2>Product Id : {productId}</h2>
    </div>
  );
};

export default ProductDetails;
