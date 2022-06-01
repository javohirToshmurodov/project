import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { loadProductsAll } from "../../redux/actions";

export default function Products() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadProductsAll());
  // });
  return (
    <div className="row mt-4">
      <h3 className="text-center mb-4">Продукты</h3>
      <div className="col-xl-10 offset-1 col-lg-10 col-md-9 col-sm-9 col-10">
        <ProductCard />
      </div>
    </div>
  );
}
