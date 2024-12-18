"use client";
import { Button } from "@/components/atoms/button";
import { FormInput } from "@/components/molecules/form-elements/form-input";
import { TCollectionForm } from "@/types/collection";
import React from "react";
import { useForm } from "react-hook-form";

export const CollectionForm: React.FC = () => {
  const { control } = useForm<TCollectionForm>();
  return (
    <form className="flex flex-col gap-4 p-4">
      <div className="flex gap-4">
        <FormInput
          className="w-1/2"
          control={control}
          name="name"
          label="Collection name"
        />
        <FormInput
          className="w-1/2"
          control={control}
          name="description"
          label="Description"
        />
      </div>

      <div className="flex gap-4">
        <FormInput
          className="w-1/2"
          control={control}
          name="productIds"
          label="Products"
        />
        <FormInput
          className="w-1/2"
          control={control}
          name="blogIds"
          label="Blogs"
        />
      </div>

      <div className="flex justify-end gap-4">
        <Button type="submit" variant="outline-primary">
          Create
        </Button>
        <Button type="button" variant="outline-secondary">
          Cancel
        </Button>
      </div>
    </form>
  );
};
