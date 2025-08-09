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
	title: 'Аптечка спокойствия — Персональная домашняя аптечка для семьи с доставкой',
	description:
		'Умная аптечка под ключ для молодых родителей: подбор с учётом возраста и аллергий, напоминания о лекарствах, поддержка врача 24/7. Оформите заявку — будьте готовы к любым ситуациям дома.',
	icons: {
		icon: '/logo.png'
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
