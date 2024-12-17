import prismaClient from "@/database/db";
import { EPageName, PageSetting } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import { generateBaseServices } from "./baseServices";

export type TPageSetting = {
  [key: string]: JsonValue;
};

const { get } = generateBaseServices<PageSetting>(prismaClient.pageSetting);

export const getPageService = async <T>(page: EPageName): Promise<T> => {
  const settings = await get({ where: { page }});

  const formatSettings = settings.reduce(
    (prev, curr) => ({ ...prev, [curr.key]: curr.value }),
    {}
  ) as T;

  return formatSettings;
};
