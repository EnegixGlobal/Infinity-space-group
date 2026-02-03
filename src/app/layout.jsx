import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ConditionalFooter from "@/components/layout/ConditionalFooter";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata = {
  title: "Infinity Space Group",
  description: "Infinity Space Group - Architecture and Design Services",
  verification: {
    google: "TFm2HPD6vlLmT6oYgm63aHU3ir1irNKViEPqQAjlBAc",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ScrollToTop />
        <Navbar />
        <div style={{ marginTop: "2px" }}>{children}</div>
        <ConditionalFooter />
      </body>
    </html>
  );
}
