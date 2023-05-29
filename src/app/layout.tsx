import "./globals.css";

export const metadata = {
  title: "Hey, I'm Adrian",
  description: "A little portfolio of stuff I've worked on",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='0.1em' y='0.9em' font-size='90'>🤘</text></svg>"
        />
        <link rel="mask-icon" href="/favicon.svg" color="#010101" />
      </head>
      <body>{children}</body>
    </html>
  );
}
