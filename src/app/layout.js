import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import ThemeProviderComponent from "@/providers/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "IMDB Clone with NextsJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProviderComponent>
          <Header />
          {children}
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
