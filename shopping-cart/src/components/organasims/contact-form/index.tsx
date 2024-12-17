import { Button } from "@/components/atoms/button";
import React from "react";

export const ContactForm: React.FC = () => {
  return (
    <section className="flex flex-col gap-4 w-[70%]">
      <h4 className="font-bold text-xl">We would love to hear from you.</h4>

      <p className="text-sm text-gray-400">
        If you have any query or any type of suggestion, you can contact us
        here. We would love to hear from you.
      </p>

      <form>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="flex flex-col gap-1 w-1/2">
              <label htmlFor="guestName">Name</label>
              <input className="p-2 border border-gray-300" type="text" name="guestName" id="guestName" />
            </div>

            <div className="flex flex-col gap-1 w-1/2">
              <label htmlFor="guestEmail">Email</label>
              <input className="p-2 border border-gray-300" type="text" name="guestEmail" id="guestEmail" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="guestMessage">Message</label>
            <textarea className="p-2 border border-gray-300" name="guestMesssage" id="guestMesssage" rows={5} ></textarea>
          </div>

          <Button variant="primary" className="w-44 font-normal">send message</Button>
        </div>
      </form>
    </section>
  );
};
