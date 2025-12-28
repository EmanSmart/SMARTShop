import "./globals.css";
import ClientLayout from "./ClientLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ClientLayout>
          <Navbar />
          <main className="min-h-screen max-w-7xl mx-auto px-4 py-6">
            {children}
          </main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
