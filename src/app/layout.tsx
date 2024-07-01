import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mobiius",
  description: "Mobiius",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Two+Tone"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>
          <div className="bg-[#121212] text-white text-center min-h-screen overflow-x-hidden overflow-y-auto flex flex-col w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
