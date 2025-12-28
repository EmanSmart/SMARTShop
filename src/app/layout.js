import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Smart Shop",
  description: "Home page",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
