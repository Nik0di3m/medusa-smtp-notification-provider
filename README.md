<p align="center">
  <a href="https://www.medusajs.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    </picture>
  </a>
</p>
<h1 align="center">
  Medusa
</h1>

<h4 align="center">
  <a href="https://docs.medusajs.com">Documentation</a> |
  <a href="https://www.medusajs.com">Website</a>
</h4>

<p align="center">
  Building blocks for digital commerce
</p>
<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
    <a href="https://www.producthunt.com/posts/medusa"><img src="https://img.shields.io/badge/Product%20Hunt-%231%20Product%20of%20the%20Day-%23DA552E" alt="Product Hunt"></a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
</p>

# SMTP Notification Provider for Medusa.js

This module is a custom notification provider for Medusa.js using `nodemailer`. It allows you to send emails via an SMTP server, making it easier to integrate email notifications into your Medusa projects.

## Features

- Send transactional emails through your SMTP server.
- Fully customizable and compatible with Medusa's notification system.
- Secure authentication using environment variables.

## Installation

1. Install the necessary dependency:

   ```bash
   npm install nodemailer
   ```

2. Copy the `smtp-notification` module into the `src` directory of your Medusa project.

3. Add the configuration to your `medusa-config.ts` file as shown below.

## Configuration

Update your `medusa-config.ts` to include the `smtp-notification` module:

```ts
modules: [
  {
    resolve: "@medusajs/medusa/notification",
    options: {
      providers: [
        {
          resolve: "./src/modules/smtp-notification",
          id: "smtp-notification",
          options: {
            channels: ["email"], // Specify the channel for notifications
            host: process.env.SMTP_HOST!, // SMTP server host
            port: parseInt(process.env.SMTP_PORT!), // SMTP server port
            secure: process.env.SMTP_SECURE === "true", // Use secure connection (true/false)
            auth: {
              user: process.env.SMTP_USER!, // SMTP user (email address or username)
              pass: process.env.SMTP_PASS!, // SMTP password
            },
          },
        },
      ],
    },
  },
];
```

## Environment Variables

Set up the following environment variables in your `.env` file:

```env
SMTP_HOST=<your_smtp_host>          # e.g., smtp.gmail.com
SMTP_PORT=<your_smtp_port>          # e.g., 587 (TLS) or 465 (SSL)
SMTP_SECURE=<true_or_false>         # true for SSL, false for TLS
SMTP_USER=<your_smtp_username>      # e.g., your_email@gmail.com
SMTP_PASS=<your_smtp_password>      # e.g., your email password or app password
```

## How to Use

1. Ensure the module is correctly integrated as described above.
2. Use the notification system in Medusa to trigger emails via the `smtp-notification` provider. For example:

   ```ts
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
   ```

3. Customize your email templates as needed to enhance the user experience.

## Troubleshooting

- **Connection Errors**: Ensure your SMTP host, port, and secure settings are correctly configured.
- **Authentication Errors**: Double-check your SMTP username and password. For Gmail users, ensure you've set up an [App Password](https://support.google.com/accounts/answer/185833?hl=en).
- **Environment Variables Not Loading**: Ensure you have a `.env` file and that it’s being loaded by your Medusa project.

## Contributing

If you encounter any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

## License

This module is open-source and licensed under the MIT license.
