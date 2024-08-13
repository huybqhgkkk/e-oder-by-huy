import { lazy, useEffect, useState } from "react";
import { BreadcrumbAdmin, OrderDataTable } from "@/components";
import { orderRows } from "../../../(order)/orders/page";
import { getSellerById } from "@/helpers";
import { useNavigate, useParams } from "react-router-dom";
const PersonDetailsCard = lazy(
  () => import("@/components/cards/PersonDetailsCard")
);

const CustomerDetails = () => {
  const navigate = useNavigate();
  const { customerId } = useParams();

  const [seller, setSeller] = useState();

  useEffect(() => {
    (async () => {
      const foundSeller = await getSellerById(Number(customerId));
      if (!foundSeller) {
        navigate("/not-found");
      } else {
        setSeller(foundSeller);
      }
    })();
  }, [customerId]);

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

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin
          title="Customers Details"
          link="/admin/customers"
          subtitle="Customers"
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            {seller && <PersonDetailsCard seller={seller} />}
          </div>
          <div className="lg:col-span-2">
            <OrderDataTable
              title="Customer Order history"
              columns={columns}
              rows={orderRows}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
