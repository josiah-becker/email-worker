export function WelcomeEmail({ firstName }: EmailTemplateProps) {
	return (
		<div>
			<h1>Welcome {firstName}!</h1>
			<p>Thank you for subscribing to Josiah Code!</p>
		</div>
	);
}

interface EmailTemplateProps {
	firstName: string;
}
