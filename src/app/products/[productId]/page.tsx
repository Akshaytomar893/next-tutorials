import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;
  return (
    <div>
      <h1>Prduct Details:</h1>
      <h2>Product Id : {productId}</h2>
    </div>
  );
};

export default ProductDetails;
