export const PHONE_DISPLAY = "9840363412";
export const PORTFOLIO_EMAIL = "dharshane21@gmail.com";
export const WHATSAPP_MESSAGE = "hey! i have seen you through portfolio!";
export const WHATSAPP_URL = `https://wa.me/91${PHONE_DISPLAY}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function buildPortfolioMailtoUrl(fields: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string {
  const subject = fields.subject.trim() || "Portfolio Contact";
  const body = [
    "Hi Dharshan,",
    "",
    `Name: ${fields.name.trim()}`,
    `From: ${fields.email.trim()}`,
    "",
    fields.message.trim(),
  ].join("\n");

  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${PORTFOLIO_EMAIL}?${params.toString()}`;
}

export function openPortfolioMailto(fields: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): void {
  const url = buildPortfolioMailtoUrl(fields);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
