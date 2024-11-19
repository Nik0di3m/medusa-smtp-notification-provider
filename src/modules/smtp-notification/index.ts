// Resolve SMTP notification provider service dependencies using the Medusa framework's dependency injection system.

import SmtpNotificationProviderService from "./service";
import { ModuleProvider, Modules } from "@medusajs/framework/utils";

export default ModuleProvider(Modules.NOTIFICATION, {
  services: [SmtpNotificationProviderService],
});
