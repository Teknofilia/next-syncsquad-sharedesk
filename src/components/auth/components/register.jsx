"use client";

import { Button, Input } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { useState } from "react";

export const Register = () => {
	const [loading, setLoading] = useState(false);

	async function handleRegister(event) {
		setLoading(true);

		event.preventDefault(); // Ga akan nge refresh
		const firstName = event.target.firstName.value;
		const lastName = event.target.lastName.value;
		const username = event.target.username.value;
		const email = event.target.email.value;
		const password = event.target.password.value;

		const res = await fetch("/api/users/register", {
			method: "POST",
			body: JSON.stringify({ firstName, lastName, username, email, password }),
		});
		const data = await res.json();
		console.log(data);
		setLoading(false);
	}

	return (
		<div className="w-[460px] space-y-8">
			<div>
				<h3>Register</h3>
				<p>Please create an account</p>
			</div>
			<form onSubmit={handleRegister}>
				<div className="space-y-2">
					<div className="grid grid-cols-2 gap-2">
						<Input name="firstName" placeholder="First Name" />
						<Input name="lastName" placeholder="Last Name" />
					</div>
					<Input name="username" placeholder="Username" />
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
						Register
					</Button>
					<h5 className="text-sm">
						Already have an account?{" "}
						<Link href="/login" className="text-primary">
							Login
						</Link>
					</h5>
				</div>
			</form>
		</div>
	);
};
