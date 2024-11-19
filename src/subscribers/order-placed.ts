import { Modules } from "@medusajs/framework/utils";
import { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa";

// This is only an example of a subscriber that listens to the `order.placed` event and sends an email notification
// It is assumed that the `order.placed` event is emitted when a order placed by a customer
// The subscriber listens to the event and sends an email notification to the user who placed the order
// The email notification is sent using the notification module service
// The notification is custom provider that sends an email using SMTP

export default async function orderPlacedHandler({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  const notificationModuleService = container.resolve(Modules.NOTIFICATION);
  const orderModuleService = container.resolve(Modules.ORDER);
  const userModuleService = container.resolve(Modules.USER);

  const order = await orderModuleService.retrieveOrder(data.id);

  const user = await userModuleService.retrieveUser(order.customer_id);

  await notificationModuleService.createNotifications({
    to: order.email,
    channel: "email",
    template: "order-confirmation",
    data: {
      name: user.first_name,
      lastName: user.last_name,
      order_id: order.id,
      total: order.total,
      items: order.items,
    },
  });
  // TODO: Add admin notification for new order placed if needed
  // await notificationModuleService.createNotifications({
  //   to: "admin@mail.com",
  //   channel: "email",
  //   template: "new-order-notification",
  //   data: {
  //     name: user.first_name,
  //     lastName: user.last_name,
  //     order_id: order.id,
  //     total: order.total,
  //     items: order.items,
  //   },
  // });
}

// This subscriber listens to the `order.placed` event
// List of events: https://docs.medusajs.com/resources/events-reference
export const config: SubscriberConfig = {
  event: `order.placed`,
};
