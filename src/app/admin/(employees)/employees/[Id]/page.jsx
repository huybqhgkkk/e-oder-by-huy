import { lazy, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { orderRows } from "../../../(order)/orders/page";
import { BreadcrumbAdmin, OrderDataTable } from "@/components";
import { getSellerById } from "@/helpers";
const PersonDetailsCard = lazy(
  () => import("@/components/cards/PersonDetailsCard")
);

const columns = [
  {
    key: "date",
    name: "Date",
  },
  {
    key: "id",
    name: "Order ID",
  },
  {
    key: "dish_id",
    name: "Dish",
  },
  {
    key: "amount",
    name: "Amount",
  },
  {
    key: "status",
    name: "Status",
  },
];

const SellerDetails = () => {
  const { sellerId } = useParams();

  const [seller, setSeller] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const foundSeller = await getSellerById(Number(sellerId));
      if (!foundSeller) {
        navigate("/not-found");
      } else {
        setSeller(foundSeller);
      }
    })();
  }, [sellerId]);

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin
          title="Sellers Details"
          link="/admin/sellers"
          subtitle="Sellers"
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            {seller && <PersonDetailsCard seller={seller} />}
          </div>
          <div className="lg:col-span-2">
            <OrderDataTable
              title="Sales Order history"
              columns={columns}
              rows={orderRows}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
