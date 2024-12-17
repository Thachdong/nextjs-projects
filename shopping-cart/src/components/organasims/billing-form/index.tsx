import React from "react";

type TBillingForm = {
  fullname: string;
  street: string;
  city: string;
  phone: string;
  email: string;
};

export const BillingForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="fullname">
          Full Name <span className="text-red-600">*</span>
        </label>
        <input
          className="p-2 border border-gray-200"
          type="text"
          name="fullname"
          autoFocus
          id="fullname"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="street">
        Street address <span className="text-red-600">*</span>
        </label>
        <input
          className="p-2 border border-gray-200"
          type="text"
          name="street"
          autoFocus
          id="street"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="city">
        Town / City <span className="text-red-600">*</span>
        </label>
        <input
          className="p-2 border border-gray-200"
          type="text"
          name="city"
          autoFocus
          id="city"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone">
        Phone <span className="text-red-600">*</span>
        </label>
        <input
          className="p-2 border border-gray-200"
          type="text"
          name="phone"
          autoFocus
          id="phone"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">
        Email address <span className="text-red-600">*</span>
        </label>
        <input
          className="p-2 border border-gray-200"
          type="text"
          name="email"
          autoFocus
          id="email"
        />
      </div>
    </form>
  );
};
