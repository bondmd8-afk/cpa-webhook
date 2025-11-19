export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const secret = process.env.WEBHOOK_SECRET || "my-secret-token";
  if (req.headers['x-webhook-token'] !== secret) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const data = req.body;
  console.log("Webhook received:", data);

  res.status(200).json({ message: "Webhook received successfully" });
}
