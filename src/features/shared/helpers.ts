import { ZodSchema } from "zod";

export async function useFetch(endpoint: string, method: string = "GET", credentials: boolean = false, data?: unknown) {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL + endpoint}`, {
        method: method.toUpperCase(),
        headers: {
            "Content-Type": "application/json",
        },
        credentials: credentials ? "include" : "same-origin",
        body: JSON.stringify(data),
    });

    const results = await response.json();

    if (!results.success) {
        throw new Error(results.errors);
    }

    return results;
}

export function validateInputData(schema: ZodSchema, data: unknown) {
    const result = schema.safeParse(data);

    if (!result.success) {
        throw new Error(result.error.issues.map((err) => err.message).join("\n"));
    }

    return result.data;
}
