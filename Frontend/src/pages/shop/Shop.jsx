import React from "react";
import MainWidth from "../../layout/MainWidth";
import Heading1 from "../../components/Headings/Heading1";
import CustomBreadcrumb from "../../components/CustomBreadcrumb";

// Shop page - A general page, where will be shown all the products. With some features like searching, sorting products, and filtering out with several options like color, category etc

const Shop = () => {
  const breadCrumbItems = [{ path: "/", label: "Home" }, { label: "Products" }];
  return (
    <div className="grow mt-14 mb-28">
      <MainWidth>
        <div className="flex flex-col">
          <div className="mb-20">
            <Heading1 text="Products" />
            <CustomBreadcrumb items={breadCrumbItems} />
          </div>
        </div>
      </MainWidth>
    </div>
  );
};

export default Shop;
