import { EmailTemplate } from "@/components/custom/email-template";
import { Resend } from "resend";

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: Request) => {
  const { email } = await req.json();

  const { data, error } = await resend.emails.send({
    from: "Patrik Braborec <me@patrikbraborec.com>",
    to: email,
    subject: "Thank you for trying out the Side Project Starter Pack! 🙌",
    react: EmailTemplate({}),
  });

  if (error) {
    return new Response(error.message, { status: 400 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
};
