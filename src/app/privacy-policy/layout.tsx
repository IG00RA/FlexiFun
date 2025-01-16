export const metadata = {
  title: 'Flexi Fun | Zmluva s používateľom',
  description: 'Flexi Fun | Zmluva s používateľom',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
