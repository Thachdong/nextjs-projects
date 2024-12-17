import { ContactPage } from "@/components/pages/contact";
import { getPageService } from "@/services/settingServices";
import { EPageName } from "@prisma/client";

export default async function Contact() {
    const settings = await getPageService<TContactPageSetting>(EPageName.CONTACT_PAGE)

    return <ContactPage settings={settings} />
}