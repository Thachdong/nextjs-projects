import { PageBanner } from "@/components/molecules/page-banner";
import { ContactForm } from "@/components/organasims/contact-form";
import { ContactInfo } from "@/components/organasims/contact-info";
import React from "react";

type TContactPageProps = {
  settings: TContactPageSetting;
};

export const ContactPage: React.FC<TContactPageProps> = ({ settings }) => {
  return (
    <main>
      <PageBanner
        title="contact us"
        bannerUrl={settings.banner.content}
      />

      <section className="content-container flex gap-8 py-16">
        <ContactForm />

        <ContactInfo
          address={settings.address.content}
          email={settings.email.content}
          phone={settings.phone.content}
        />
      </section>
    </main>
  );
};
