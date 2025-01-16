export const metadata = {
  title: 'Flexi Fun | Договір з користувачем',
  description: 'Flexi Fun | Договір з користувачем',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
