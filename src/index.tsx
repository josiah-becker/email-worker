import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { Resend } from 'resend';
import { WelcomeEmail } from './emails/WelcomeEmail';

export type Env = {
	RESEND_API_KEY: string;
};

const app = new Hono<{ Bindings: Env }>();

app.use(
	'*',
	cors({
		origin: ['http://localhost:5173', 'https://email-worker.josiah-becker21.workers.dev', 'https://josiahcode.com'],
		allowMethods: ['GET', 'POST'],
		maxAge: 86400,
	}),
);

app.get('/', (c) => {
	return c.text('Hello World');
});

app.post('/send/email', async (c) => {
	const resend = new Resend(c.env.RESEND_API_KEY);

	const body = await c.req.json<{ firstName: string; lastName: string; email: string }>();

	const data = await resend.emails.send({
		from: 'Josiah Code <test@josiahcode.com>',
		to: ['josiah.becker21@gmail.com'],
		subject: 'Welcome to Josiah Code',
		react: <WelcomeEmail firstName={body.firstName} lastName={body.lastName} email={body.email} />,
	});

	return c.json(data);
});

export default app;
