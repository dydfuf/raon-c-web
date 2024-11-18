import { NextResponse } from "next/server";

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const CF_TOKEN = process.env.CLOUDFLARE_API_KEY;

export async function POST(req: Request) {
  const uploadUrlRes = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v2/direct_upload`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CF_TOKEN}`,
      },
    }
  );
  const {
    result: { uploadURL },
  } = await uploadUrlRes.json();

  const file = await req.blob();
  const formData = new FormData();
  formData.append("file", file);

  const uploadImageRes = await fetch(uploadURL, {
    method: "POST",
    body: formData,
  });
  const {
    result: { variants },
  } = await uploadImageRes.json();
  const imageURL = variants[0];

  return NextResponse.json({ url: imageURL });
}
