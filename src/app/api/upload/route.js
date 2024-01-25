import * as admin from 'firebase-admin';
import { v4 as uuidv4 } from 'uuid';

export default async function POST(req, res) {
  const data = await req.formData();

  if (data.get('file')) {
    const file = data.get('file');

    // Initialize Firebase Admin SDK with appropriate credentials
    const serviceAccount = require('serviceAccountKey.json'); // Replace with your own service account key
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: "albertos-ordering.appspot.com", // Replace with your Firebase Storage bucket name
    });

    const bucket = admin.storage().bucket();
    
    const ext = file.name.split('.').slice(-1)[0];
    const newFileName = uuidv4() + '.' + ext;

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    const fileUploadOptions = {
      destination: newFileName,
      public: true,
      metadata: {
        contentType: file.type,
      },
    };

    // Upload the file to Firebase Storage
    await bucket.upload(fileBuffer, fileUploadOptions);

    const link = `https://storage.googleapis.com/${bucket.name}/${newFileName}`;
    return res.status(200).json({ link });
  }

  return res.status(200).json(true);
}
