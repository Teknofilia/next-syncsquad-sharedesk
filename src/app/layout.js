import { DM_Sans as FontSans } from "next/font/google";
import { Provider } from "@/components/provider";

import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

const fontSans = FontSans({ subsets: ["latin"] });

export const metadata = {
	title: "Sharedesk",
	description: "Batch 3",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={fontSans.className}>
				<Toaster
					toastOptions={{
						style: {
							background: "51 65 85",
							color: "#fff",
						},
					}}
				/>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
