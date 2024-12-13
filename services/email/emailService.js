import { userActivationUrlEmailTemplate } from "./emailTemplates";
import { emailTransporter } from "./transport.js";

export const userActivationUrlEmail = async (obj) => {
  // get the transporter

  // get the template

  const info = await emailTransporter.sendMail(
    userActivationUrlEmailTemplate(obj)
  );
};
