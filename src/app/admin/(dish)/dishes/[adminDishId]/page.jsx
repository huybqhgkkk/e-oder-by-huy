import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  BreadcrumbAdmin,
  DishDetailsSwiper,
  ProductDetailView,
} from "@/components";
import { getDishById } from "@/helpers";

const DishDetails = () => {
  const { adminDishId } = useParams();

  const navigate = useNavigate();

  const [dish, setDish] = useState();

  useEffect(() => {
    (async () => {
      const foundDish = await getDishById(Number(adminDishId));
      if (!foundDish) {
        navigate("/login");
      } else {
        setDish(foundDish);
      }
    })();
  }, [adminDishId]);

  return (
    dish && (
      <div className="w-full lg:ps-64">
        <div className="page-content space-y-6 p-6">
          <BreadcrumbAdmin
            title={dish.name}
            subtitle="Dishes"
            link="/admin/dishes"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-default-200 p-6">
              <DishDetailsSwiper images={dish.images} />
            </div>
            <div className="rounded-lg border border-default-200 p-6">
              <ProductDetailView dish={dish} />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DishDetails;
