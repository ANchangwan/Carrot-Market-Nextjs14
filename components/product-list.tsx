"use client";
import { InitialProducts } from "@/app/(tabs)/products/page";
import ListProduct from "./list-product";
import { useState } from "react";
import { getMoreProducts } from "@/app/(tabs)/products/actions";

interface ProductListProps {
  initialProducts: InitialProducts;
}

export default function ProductList({ initialProducts }: ProductListProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const onLoadMoreClick = async () => {
    setIsLoading(true);
    const newProducts = await getMoreProducts(1);
    setProducts((prev) => [...prev, ...newProducts]);
    setIsLoading(false);
  };
  return (
    <div className="flex flex-col p-5 gap-5">
      {products.map((product) => (
        <ListProduct key={product.id} {...product} />
      ))}
      <button
        onClick={onLoadMoreClick}
        disabled={isLoading}
        className="text-sm font-semibold bg-orange-500 rounded-md py-2 px-3 w-fit mx-auto
      hover:opacity-90 active:scale-95
      "
      >
        {isLoading ? "로딩 중..." : "더 보기"}
      </button>
    </div>
  );
}
