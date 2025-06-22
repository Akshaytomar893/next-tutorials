import React from "react";

const ProductReview = async ({
  params,
}: {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
}) => {
  const { productId, reviewId } = await params;
  return (
    <div>
      <h1>Review for Product {productId}</h1>
      <h2>Review Id: {reviewId}</h2>
    </div>
  );
};

export default ProductReview;
