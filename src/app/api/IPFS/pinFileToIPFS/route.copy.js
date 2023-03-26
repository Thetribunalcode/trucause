import axios from "axios";
import formidable from "formidable-serverless";
import fs from "fs";
import { NextResponse } from 'next/server';
// file imports
import pinataConfig from "../../../../../pinata.config";
// multer
import nextConnect from 'next-connect';
import multer from 'multer';
// multer config
const storage = multer.memoryStorage(); // Memory Storage option pass along as stream
const upload = multer({ storage: storage });

// function to pin to IPFS using pinata, returns hashes
const pinFileToIPFS = async (fileObj) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  //making axios POST request to Pinata
  try {
    const resFile = await axios.post(url, fileObj, {
      headers: {
        'pinata_api_key': pinataConfig.API_KEY,
        'pinata_secret_api_key': pinataConfig.API_SECRET,
        'Content-Type': "multipart/form-data"
      }
    });
    const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
    return (ImgHash);
  }
  catch (err) {
    return (err);
  }
};

// config to turn off bodyParser
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

// handle POST request
const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `There was an error! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
// define multer options
apiRoute.use(upload.single('file'));
// set the POST handler
apiRoute.post((req) => {
  console.log(req.file);
  res.status(200).json({ data: 'Success' });
  // return NextResponse.json({ status: "Sucess" });
});

export default apiRoute;
// export async function POST(request) {
//   // form coming from client with file
//   const form = new formidable.IncomingForm();
//   form.parse(request, async function(err, fields, files) {
//     if (err) {
//       return NextResponse.error(err);
//     }
//     console.log(`certificates/${files.file.originalFilename}`)
//     return NextResponse.json("res");
//   });
//   // pass the file to the method
//   // const res = pinFileToIPFS(file)
  // return NextResponse.json("resout");
// }
