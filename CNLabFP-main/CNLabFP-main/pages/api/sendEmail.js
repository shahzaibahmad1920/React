import dbConnect from "../../lib/dbConnect";
import Email from "../../models/Email";

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { recipient, subject, message, networkStats, fileMetadata } = req.body;

    if (!recipient || !subject || !message || !networkStats) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Extract `uploadTime` and log it for verification
    const { uploadTime } = networkStats;
    console.log("Upload Time:", uploadTime);
    const e=Date.now();
    console.log(e)
    networkStats.latency= e-networkStats.latency
    console.log(networkStats.latency)
    // Connect to MongoDB
    await dbConnect();

    // Save email data
    const newEmail = new Email({
      recipient,
      subject,
      message,
      networkStats, // Save the full networkStats, including uploadTime
      fileMetadata, // Save file metadata if present
    });

    // Save the email to the database
    await newEmail.save();

    res.status(200).json({ message: "Email sent and stored successfully!" });
  } catch (error) {
    console.error("Error saving email:", error);
    res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
};
export default handler;
