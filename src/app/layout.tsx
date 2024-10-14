'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AuthenticationProvider from "@/app/providers/AuthenticationProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient()

  return (
      <html lang="en">
        <body className={inter.className}>
          <AntdRegistry>
            <QueryClientProvider client={queryClient}>
              <AuthenticationProvider>
                {children}
              </AuthenticationProvider>
            </QueryClientProvider>
          </AntdRegistry>
        </body>
      </html>
  );
}
