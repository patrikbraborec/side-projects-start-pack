"use server";

import { EmailTemplate } from "@/components/custom/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (email: string) => {
  const { data, error } = await resend.emails.send({
    from: "Patrik Braborec <me@patrikbraborec.com>",
    to: email,
    subject: "Thank you for trying out the Side Project Starter Pack! 🙌",
    react: EmailTemplate({}),
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
