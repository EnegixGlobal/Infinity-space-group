import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ConditionalFooter from "@/components/layout/ConditionalFooter";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Script from "next/script";

export const metadata = {
  title: "Infinity Space Group",
  description: "Infinity Space Group - Architecture and Design Services",

  // Google Search Console verification
  verification: {
    google: "TFm2HPD6vlLmT6oYgm63aHU3ir1irNKViEPqQAjlBAc",
  },

  // Facebook Domain Verification
  other: {
    "facebook-domain-verification": "q7wwvrbp1g0bwg4jfl5jnr9agwu5ax",
  },

  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '897791839776924');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Meta Pixel NoScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=897791839776924&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <ScrollToTop />
        <Navbar />
        <div style={{ marginTop: "2px" }}>{children}</div>
        <ConditionalFooter />
      </body>
    </html>
  );
}
