export function WelcomeEmail({ firstName, lastName, email }: EmailTemplateProps) {
	return (
		<div>
			<h1>
				Welcome {firstName} {lastName}!
			</h1>
			<p>Thank you for subscribing to Josiah Code!</p>
			<p>Email provided: {email}</p>
		</div>
	);
}

interface EmailTemplateProps {
	firstName: string;
	lastName: string;
	email: string;
}
