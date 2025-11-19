# CPA Webhook Project

This is a simple webhook handler for CPA / SproutGigs tasks.

## Webhook URL
After deploying to Vercel, your webhook endpoint will be:

https://your-project.vercel.app/api/webhook

## Usage
1. Deploy this project to Vercel.
2. Provide the webhook URL in your CPA / SproutGigs dashboard.
3. (Optional) Set `WEBHOOK_SECRET` as an environment variable in Vercel for security.
4. Add your logic in `pages/api/webhook.js` to handle the incoming webhook data.

## Author
Your Name
