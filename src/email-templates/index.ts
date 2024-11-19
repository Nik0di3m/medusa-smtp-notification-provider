// Code: mailTemplate function that takes a template argument
// and returns the appropriate email template based on the template argument.

import { ProviderSendNotificationDTO } from "@medusajs/framework/types";
import { orderConfirmationTemplate } from "./order-confirmation";

export const mailTemplate = (options: ProviderSendNotificationDTO) => {
  if (options.template === "order-confirmation") {
    return orderConfirmationTemplate({
      name: options.data.name,
      lastName: options.data.lastName,
      order_id: options.data.order_id,
      items: options.data.items,
      total: options.data.total,
    });
  }
};
