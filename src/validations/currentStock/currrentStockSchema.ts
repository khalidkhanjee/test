import Joi from "joi";

export const currentStockSchema = {
  currentStock: Joi.object({
    sku: Joi.string().required(),
  }),
};
