export const generateForgotPasswordEmailTemplate = (resetPasswordUrl) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <title>Password Reset</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 8px;">
        <h2 style="color: #333;">Reset Your Password</h2>

        <p>
          We received a request to reset your password. Click the button below to create a new password.
        </p>

        <div style="text-align: center; margin: 30px 0;">
          <a
            href="${resetPasswordUrl}"
            style="
              background-color: #2563eb;
              color: white;
              text-decoration: none;
              padding: 12px 24px;
              border-radius: 5px;
              display: inline-block;
            "
          >
            Reset Password
          </a>
        </div>

        <p>
          If the button doesn't work, copy and paste the following link into your browser:
        </p>

        <p>
          <a href="${resetPasswordUrl}">
            ${resetPasswordUrl}
          </a>
        </p>

        <p>
          If you didn't request a password reset, you can safely ignore this email.
        </p>

        <p>Thanks,<br />Support Team</p>
      </div>
    </body>
    </html>
  `;
};
