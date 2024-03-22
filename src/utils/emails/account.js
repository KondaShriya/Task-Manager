const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendWelcomeEmailMessage = async (email, name) => {
	try {
		await Gmail. send({
			to: email,
			from: 'kondashriya8@gmail.com',
			subject: 'Thank you for Joining the Platform!',
			text: `Welcome to the app, ${name}. Let me know how you get along with the App.`
		});
	} catch (error) {
		console.error(error);
	}
};

const sendCancelationEmailMessage = async (email, name) => {
	try {
		await Gmail. send({
			to: email,
			from: 'kondashriya8@gmail.com',
			subject: `Sorry to see you go!`,
			text: `Goodbye, ${name}. I hope to see you back soon.`
		});
	} catch (error) {
		console.error(error);
	}
};

module.exports = { sendWelcomeEmailMessage, sendCancelationEmailMessage };
