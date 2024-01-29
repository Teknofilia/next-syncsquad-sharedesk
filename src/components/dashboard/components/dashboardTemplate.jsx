"use client";
import React from "react";
import Link from "next/link";
import { Activity, Box, Receipt } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import Cookies from "js-cookie";
import { useState } from "react";

export const DashboardTemplate = ({ children }) => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	async function handleSubmitLogout() {
		setLoading(false);

		Cookies.remove("token");
		localStorage.removeItem("token");
		localStorage.removeItem("userId");

		let valToken = Cookies.get("token");

		if (valToken) {
			console.error("Error logout!");
			return;
		}
		setLoading(true);

		setTimeout(() => router.push("/"), 2000);
	}

	return (
		<main className="flex h-screen">
			<aside className="w-[230px] border-r-2 p-8 flex flex-col justify-between sticky bg-teal-50">
				<div className="">
					<h3 className="items-center text-center text-emerald-500">
						Sharedesk
					</h3>
					<Link
						className="menu flex items-center font-semibold p-2"
						href="/dashboard"
					>
						<Activity size={15} />
						<p className="ml-2">Dashboard</p>
					</Link>
					<Link
						className="menu flex items-center font-semibold p-2"
						href="/dashboard/products"
					>
						<Box size={15} />
						<p className="ml-2">Products</p>
					</Link>
					<Link
						className="menu flex items-center font-semibold p-2"
						href="/dashboard/orders"
					>
						<Receipt size={15} />
						<p className="ml-2">Orders</p>
					</Link>
				</div>
				<div className="menu">
					<Button
						onClick={handleSubmitLogout}
						color="danger"
						className="w-full"
						isLoading={loading}
						spinner={
							<svg
								className="animate-spin h-5 w-5 text-current"
								fill="none"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								/>
								<path
									className="opacity-75"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									fill="currentColor"
								/>
							</svg>
						}
					>
						Logout
					</Button>
				</div>
			</aside>
			<section className="w-[calc(100vw-230px)] p-8">
				<div className="max-w-5xl m-auto">{children}</div>
			</section>
		</main>
	);
};
