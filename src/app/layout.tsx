import "./globals.css";

export const metadata = {
  title: "Your Digital Architect - Hazem Elkhalil",
  description:
    "Empowering your online presence with bespoke web solutions. Get ready to elevate your brand!",
  keywords: [
    "freelance",
    "web development",
    "Next.js",
    "digital solutions",
    "branding",
  ],

  author: "Hazem Elkhalil",
  image: "/media/GraphQ/graphQ.png",
  url: "https://hazemelkhalil.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
