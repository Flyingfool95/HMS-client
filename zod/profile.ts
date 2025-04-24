import { z } from "zod";

export const updateImageSchema = z.instanceof(FormData).refine(
    (formData) => {
        const file = formData.get("image") as File | null;

        return file && file.type.startsWith("image/");
    },
    {
        message: "File must be an image",
    }
);
