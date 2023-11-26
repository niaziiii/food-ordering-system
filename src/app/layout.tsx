import { AppCustomContextProvider } from "./utils/context";
import { Toaster } from "react-hot-toast";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import AuthProvider from "@/app/api/auth/[...nextauth]/auth-provider";
import "@/app/globals.css";

export const metadata = {
  title: "Food Ordering System",
  description:
    "The food ordering system for client to order food and get deliver to home...",
  viewport: { width: "device-width", initialScale: 1 },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AuthProvider session={session}>
          <AppCustomContextProvider>
            {children}
            <Toaster />
          </AppCustomContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
