import { z } from "zod";

export const addModalFormScheme = z.object({
    title: z
        .string()
        .nonempty("Campo obrigatório.")
        .min(2, "O nome precisa conter pelo menos 2 caracteres."),
    status: z
        .string()
        .nonempty("Campo obrigatório.")
        .min("O status precisa conter pelo menos 2 caracteres."),
})
