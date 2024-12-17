import React, { useCallback } from "react";

import "./index.scss";
import { SvgIcon } from "@/components/atoms/icon";

const pageLinks = {
  companyInfoLinks: [
    { link: "/", label: "About Us" },
    { link: "/", label: "Latest Posts" },
    { link: "/", label: "Contact Us" },
    { link: "/", label: "Shop" },
  ],
  helpLinks: [
    { link: "/", label: "Tracking" },
    { link: "/", label: "Order Status" },
    { link: "/", label: "Delivery" },
    { link: "/", label: "Shipping Info" },
    { link: "/", label: "FAQ" },
  ],
  userfullLinks: [
    { link: "/", label: "Special Offers" },
    { link: "/", label: "Gift Cards" },
    { link: "/", label: "Advetising" },
    { link: "/", label: "Terms of Use" },
  ],
};

export const UserFooter: React.FC = () => {
  const renderLink = useCallback(
    ({ link, label }: { link: string; label: string }) => (
      <li key={label}>
        <a href={link}>{label}</a>
      </li>
    ),
    []
  );
  return (
    <footer className="user-footer content-container">
      <section className="user-footer__links-list mb-12">
        <ul className="flex justify-between gap-4">
          <li>
            <p className="uppercase font-bold mb-4">Company info</p>
            <ul>{pageLinks.companyInfoLinks.map(renderLink)}</ul>
          </li>

          <li>
            <p className="uppercase font-bold mb-4">help links</p>
            <ul>{pageLinks.helpLinks.map(renderLink)}</ul>
          </li>

          <li>
            <p className="uppercase font-bold mb-4">useful links</p>
            <ul>{pageLinks.userfullLinks.map(renderLink)}</ul>
          </li>

          <li>
            <p className="uppercase font-bold mb-4">get in the know</p>

            <div className="flex items-center">
              <input type="email" name="userEmail" placeholder="Enter email" className="border-b-2 border-gray-400 p-2" />

              <button className="p-2">
                <SvgIcon name="caret-right" />
              </button>
            </div>
          </li>
        </ul>
      </section>

      <section className="flex justify-between gap-4 border-t-2 border-[#e8e8e8] py-4">
        <div>
          <p className="text-sm">© 2025 moni.fashion</p>
          <a className="text-sm" href="#">
            Privacy Policy Terms & Conditions
          </a>
        </div>

        <img
          className="h-[24px]"
          src="/assets/images/payments.png"
          width={272}
          alt="payment"
        />
      </section>
    </footer>
  );
};
