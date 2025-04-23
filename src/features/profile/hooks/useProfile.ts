import { useMutation } from "@tanstack/react-query";
import { useFetch, validateInputData } from "../../shared/helpers";
import { updateImageSchema } from "../../../../zod/profile";
import useNotificationStore from "../../notifications/store/useNotificationStore";

export default function useProfile() {
    const { addNotification } = useNotificationStore((state) => state);

    const updateImage = useMutation({
        mutationFn: async (image: Blob) => {
            const validatedInputData = validateInputData(updateImageSchema, { image });

            const results = await useFetch("/api/v1/auth/update-image", "POST", false, validatedInputData);

            return results;
        },
        onSuccess: (results) => {
            addNotification(results.message, "success");
        },
        onError: (error) => {
            console.log(error);
            addNotification(error.message, "error", 7000);
        },
    });

    return {
        updateImage,
    };
}
