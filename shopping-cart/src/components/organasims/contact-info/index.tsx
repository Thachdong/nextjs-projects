import React from "react";

type TContactInfoProps = {
  address: string;
  email: string;
  phone: string;
};

export const ContactInfo: React.FC<TContactInfoProps> = ({
  address,
  email,
  phone,
}) => {
  return (
    <section className="flex flex-col gap-12 w-[30%]">
      <div>
        <h5 className="text-lg font-bold">Visit Us</h5>
        <p className="text-sm uppercase text-gray-400">
          { address } <br />
          Phone: <a href={`tel:${phone}`}>{phone}</a>
        </p>
      </div>

      <div>
        <h5 className="text-lg font-bold">Get In Touch</h5>
        <p className="text-sm text-gray-400">
          You can get in touch with us on this provided email.{" "}
        </p>
        <p className="text-sm text-gray-400">
          Email: <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </section>
  );
};
