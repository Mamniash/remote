import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AntdProvider from "./AntdRegistry";
import { YandexMetrika } from './YandexMetrika'

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
        title: 'Вовлекатор',
        description:
                'Запускайте 4–6-недельные сценарии для повышения вовлечённости и роста NPS на 20%.',
        icons: {
                icon: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=64&q=80'
        }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang='ru'>
			<body className={poppins.className}>
				<YandexMetrika />
				<AntdProvider>{children}</AntdProvider>
			</body>
		</html>
  )
}
