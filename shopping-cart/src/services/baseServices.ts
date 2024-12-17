import { MAX_PAGE_SIZE } from "@/libs/utils/pagination";
import { PrismaClient } from "@prisma/client/extension";

type TSelectFieldObject = {
  [key: string]: boolean;
};

type TFilterFieldObject = {
  [key: string]: any;
};

type TQuery = {
  include?: TSelectFieldObject;
  where?: TFilterFieldObject;
  take?: number;
  skip?: number;
  orderBy?: {
    [key: string]: "desc" | "asc";
  };
};

export const generateBaseServices = <T>(source: PrismaClient) => {
  const get = async ({
    include = {},
    where = {},
    take = MAX_PAGE_SIZE,
    skip = 0,
    orderBy = {},
  }: TQuery): Promise<T[]> => {
    return await source.findMany({
      include,
      where,
      take,
      skip,
      orderBy,
    });
  };

  const getById = async (
    id: string,
    include?: TSelectFieldObject
  ): Promise<T | undefined> => {
    return await source.findFirst({
      where: {
        id,
      },
      include,
    });
  };

  const create = async (data: T): Promise<void> => {
    await source.create({
      data,
    });
  };

  const update = async (data: Partial<T>, id: string): Promise<void> => {
    await source.update({
      where: {
        id,
      },
      data,
    });
  };

  const deleteById = async (id: string): Promise<void> => {
    await source.delete({
      where: {
        id,
      },
    });
  };

  return {
    get,
    getById,
    create,
    update,
    deleteById,
  };
};
