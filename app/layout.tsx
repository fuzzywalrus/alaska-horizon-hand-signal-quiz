import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alaska Airlines Hand Signals Quiz",
  description: "Test your knowledge of aircraft marshalling hand signals for Alaska and Horizon Air operations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <header className="bg-white dark:bg-gray-800 shadow-sm">
            <div className="max-w-4xl mx-auto px-4 py-6">
              <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
                Alaska Airlines Hand Signals Quiz
              </h1>
              <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
                Master aircraft marshalling signals for Alaska and Horizon Air operations
              </p>
            </div>
          </header>
          
          <main className="py-8">
            {children}
          </main>
          
          <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
            <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-300">
              <p>Alaska Airlines & Horizon Air - Practice aircraft marshalling hand signals to ensure safe ground operations.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}