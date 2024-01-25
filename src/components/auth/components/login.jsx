"use client";

import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export const Login = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	async function handleLogin(event) {
		setLoading(true);
		event.preventDefault(); // prevent auto refresh

		const email = event.target.email.value;
		const password = event.target.password.value;

		const res = await fetch("/api/users/login", {
			method: "POST",
			body: JSON.stringify({ email, password }),
		});
		const { message, errorMessage } = await res.json();

		if (errorMessage) {
			console.log(errorMessage);
			return;
		}

		console.log(message);
		setLoading(false);

		router.push("/dashboard");
	}

	return (
		<div className="w-[360px] space-y-8">
			<div>
				<h3 className="font-semibold text-xl">Login</h3>
				<p className="font-light text-zinc-500 pt-2">Welcome back, grab the best deal of your working space here</p>
			</div>
			<form onSubmit={handleLogin}>
				<div className="space-y-3">
					<Input name="email" placeholder="Email" />
					<Input name="password" placeholder="Password" type="password" />
					<Button
						type="submit"
						color="primary"
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
						Login
					</Button>
					<h5 className="p-1 text-sm font-light">
						Don't have an account?{" "}
						<Link href="/register" className="text-primary font-semibold">
							Register
						</Link>
					</h5>
				</div>
			</form>
		</div>
	);
};
