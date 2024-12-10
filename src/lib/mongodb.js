import mongoose from "mongoose";
import { NextResponse } from "next/server";

let isConnected = false;

export const dbConnect = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      connectTimeoutMS: 30000,
    });
    isConnected = true;
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Error connecting to the database",
    });
  }
};
