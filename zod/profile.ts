import { z } from "zod";

export const updateImageSchema = z.instanceof(Blob).refine((blob) => blob.type.startsWith("image/"), {
    message: "File must be an image",
});
