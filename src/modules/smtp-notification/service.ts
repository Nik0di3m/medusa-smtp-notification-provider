import { AbstractNotificationProviderService } from "@medusajs/framework/utils";
import {
  Logger,
  ProviderSendNotificationDTO,
  ProviderSendNotificationResultsDTO,
} from "@medusajs/framework/types";
import nodemailer from "nodemailer";
import { mailTemplate } from "src/email-templates";

type InjectedDependencies = {
  logger: Logger;
};

type Options = {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
};

class SmtpNotificationProviderService extends AbstractNotificationProviderService {
  // Remember to add the static identifier property to the class
  static identifier = "smtp-notification";
  protected logger_: Logger;
  protected options_: Options;
  protected transporter: nodemailer.Transporter;

  constructor({ logger }: InjectedDependencies, options: Options) {
    super();

    this.logger_ = logger;
    this.options_ = options;

    // Always remember to create the transporter in the constructor
    this.transporter = nodemailer.createTransport({
      host: this.options_.host,
      port: this.options_.port,
      secure: this.options_.secure,
      auth: {
        user: this.options_.auth.user,
        pass: this.options_.auth.pass,
      },
    });
  }

  // We are overriding the send method from the AbstractNotificationProviderService class
  async send(
    notification: ProviderSendNotificationDTO
  ): Promise<ProviderSendNotificationResultsDTO> {
    this.logger_.info("Sending notification with SMTP provider");

    await this.transporter.sendMail({
      from: this.options_.auth.user,
      to: notification.to,
      subject: "Your order has been placed!",
      html: mailTemplate(notification),
    });

    // Always remember to return the notification id
    // TODO: Add a real notification id
    return {
      id: "notification-id",
    };
  }
}

export default SmtpNotificationProviderService;
