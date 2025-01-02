import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    recipient: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    file: { type: String }, // Store the file path
    networkStats: {
      dnsTime: { type: Number },
      connectTime: { type: Number },
      sslHandshakeTime: { type: Number },
      ttfb: { type: Number },
      networkType: { type: String },
      ipAddress: { type: String },
      latency :{type: Number},
      uploadTime: { type: Number }, // Added uploadTime
      sentAt: { type: Date, default: Date.now },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Email || mongoose.model("Email", emailSchema);
