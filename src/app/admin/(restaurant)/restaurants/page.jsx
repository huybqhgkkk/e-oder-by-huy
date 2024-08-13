import {
  BreadcrumbAdmin,
  ProductPagination,
  RestaurantListCard,
} from "@/components";
import { restaurantsData } from "@/assets/data";

const RestaurantList = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Restaurants List" subtitle="Restaurants" />
        <div className="mb-6 grid gap-6 md:grid-cols-2 2xl:grid-cols-4">
          {restaurantsData.map((restaurant) => (
            <RestaurantListCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
        <ProductPagination />
      </div>
    </div>
  );
};

export default RestaurantList;
