import React, { useState } from "react";
import MainWidth from "../../layout/MainWidth";
import Heading1 from "../../components/Headings/Heading1";
import CustomBreadcrumb from "../../components/CustomBreadcrumb";
import Heading2 from "../../components/Headings/Heading2";
import Inputs from "../../components/Inputs";
import Textarea from "../../components/Textarea";
import Button from "./../../components/Button";

const Checkout = () => {
  const breadcrumbItems = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/your-cart", label: "Cart" },
    { label: "Checkout" },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    postCode: "",
    district: "",
    phone: "",
    email: "",
    notes: "",
    paymentMethod: "card",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = "Street address is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.postCode.trim()) {
      newErrors.postCode = "Post code is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      // Handle successful submission (redirect to payment, etc.)
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const orderSummary = {
    items: [{ name: "Product name x2", price: 389.9 }],
    delivery: 25,
    discount: -25,
    get subtotal() {
      return this.items.reduce((sum, item) => sum + item.price, 0);
    },
    get total() {
      return this.subtotal + this.delivery + this.discount;
    },
  };

  return (
    <div className="grow mt-14 mb-28">
      <MainWidth>
        <div>
          <div className="mb-[80px]">
            <Heading1 text="Checkout" className="mb-2" />
            <CustomBreadcrumb items={breadcrumbItems} />
          </div>
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-22">
              {/* Billing Details */}
              <div className="flex flex-col gap-6">
                <Heading2 text="Billing Details" />
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <Inputs
                      label="First Name"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="w-full md:w-[360px]"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      error={errors.firstName}
                      required
                    />
                    <Inputs
                      label="Last Name"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="w-full md:w-[360px]"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <Inputs
                      label="Street Address"
                      name="streetAddress"
                      type="text"
                      placeholder="House number & street name"
                      className="w-full md:w-[800px]"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      error={errors.streetAddress}
                      required
                    />
                    <Inputs
                      label="Town/City"
                      name="city"
                      type="text"
                      placeholder="City name"
                      className="w-full md:w-[800px]"
                      value={formData.city}
                      onChange={handleInputChange}
                      error={errors.city}
                      required
                    />
                    <Inputs
                      label="Post Code"
                      name="postCode"
                      type="text"
                      placeholder="1216"
                      className="w-full md:w-[800px]"
                      value={formData.postCode}
                      onChange={handleInputChange}
                      error={errors.postCode}
                      required
                    />
                    <Inputs
                      label="District"
                      name="district"
                      type="text"
                      placeholder="District name"
                      className="w-full md:w-[800px]"
                      value={formData.district}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <Inputs
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="017xxxxxxxx"
                      className="w-full md:w-[800px]"
                      value={formData.phone}
                      onChange={handleInputChange}
                      error={errors.phone}
                      required
                    />
                    <Inputs
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="example@gmail.com"
                      className="w-full md:w-[800px]"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={errors.email}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="flex flex-col gap-6">
                <Heading2 text="Additional Information" />
                <div>
                  <Textarea
                    label="Additional Notes (optional)"
                    name="notes"
                    placeholder="Any instructions, procedure etc"
                    className="w-full md:w-[800px]"
                    value={formData.notes}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="flex flex-col gap-6">
                <Heading2 text="Payment Method" />
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleInputChange}
                      className="accent-primary"
                    />
                    <span className="font-dmsans text-primary">
                      Credit/Debit Card
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={handleInputChange}
                      className="accent-primary"
                    />
                    <span className="font-dmsans text-primary">
                      Cash on Delivery
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mobile"
                      checked={formData.paymentMethod === "mobile"}
                      onChange={handleInputChange}
                      className="accent-primary"
                    />
                    <span className="font-dmsans text-primary">
                      Mobile Banking
                    </span>
                  </label>
                </div>
              </div>

              {/* Your Order */}
              <div className="flex flex-col gap-6">
                <Heading2 text="Your Order" />
                <div className="w-full md:w-[600px] mb-6">
                  <div className="w-full flex flex-row">
                    <div className="w-1/2 font-dmsans border border-gray-200 flex items-center py-2 px-4 text-lg font-semibold text-primary">
                      Product
                    </div>
                    <div className="w-1/2 font-dmsans border border-gray-200 font-base flex items-center py-2 px-4 text-lg text-gray-500">
                      Total
                    </div>
                  </div>
                  {orderSummary.items.map((item, index) => (
                    <div key={index} className="w-full flex flex-row">
                      <div className="w-1/2 font-dmsans border border-gray-200 flex items-center py-3 px-4 text-lg font-semibold text-primary">
                        {item.name}
                      </div>
                      <div className="w-1/2 font-dmsans border border-gray-200 font-base flex items-center py-3 px-4 text-lg text-gray-800">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                  ))}
                  <div className="w-full flex flex-row">
                    <div className="w-1/2 font-dmsans border border-gray-200 flex items-center py-3 px-4 text-lg font-semibold text-primary">
                      Delivery charge
                    </div>
                    <div className="w-1/2 font-dmsans border border-gray-200 font-base flex items-center py-3 px-4 text-lg text-gray-800">
                      ${orderSummary.delivery.toFixed(2)}
                    </div>
                  </div>
                  <div className="w-full flex flex-row">
                    <div className="w-1/2 font-dmsans border border-gray-200 flex items-center py-3 px-4 text-lg font-semibold text-primary">
                      Coupon discount
                    </div>
                    <div className="w-1/2 font-dmsans border border-gray-200 font-base flex items-center py-3 px-4 text-lg text-red-800">
                      - ${Math.abs(orderSummary.discount).toFixed(2)}
                    </div>
                  </div>
                  <div className="w-full flex flex-row">
                    <div className="w-1/2 font-dmsans border border-gray-200 flex items-center py-3 px-4 text-lg font-semibold text-primary">
                      Total
                    </div>
                    <div className="w-1/2 font-dmsans border border-gray-200 font-base flex items-center py-3 px-4 text-lg text-gray-800 font-bold">
                      ${orderSummary.total.toFixed(2)}
                    </div>
                  </div>
                </div>
                <Button
                  text={isLoading ? "Processing..." : "Proceed to Payment"}
                  className="w-full md:w-max px-7 py-3"
                  disabled={isLoading}
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </MainWidth>
    </div>
  );
};

export default Checkout;
