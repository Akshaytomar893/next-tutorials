import React from "react";

const Docs = async ({
  params,
}: {
  params: Promise<{
    slug: string[];
  }>;
}) => {
  const slug = (await params).slug;
  return (
    <div>
      <h1>Docs Homepage</h1>
      {slug.map((item) => (
        <h2>{item}</h2>
      ))}
    </div>
  );
};

export default Docs;
