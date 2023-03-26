import { Writable } from 'stream';
import formidable from 'formidable';
import { NextResponse } from 'next/server';

const formidableConfig = {
  keepExtensions: true,
  maxFileSize: 10_000_000,
  maxFieldsSize: 10_000_000,
  maxFields: 2,
  allowEmptyFiles: false,
  multiples: false,
};

// promisify formidable
function formidablePromise(
  req,
  opts
) {
  return new Promise((accept, reject) => {
    const form = formidable(opts);

    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      return accept({ fields, files });
    });
  });
}

const fileConsumer = (acc) => {
  const writable = new Writable({
    write: (chunk, _enc, next) => {
      acc.push(chunk);
      next();
    },
  });
  return writable;
};

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

export async function POST(request) {
  try {
    const chunks = [];
    const { fields, files } = await formidablePromise(req, {
      ...formidableConfig,
      // consume this, otherwise formidable tries to save the file to disk
      fileWriteStreamHandler: () => fileConsumer(chunks),
    });
    // do something with the files
    const contents = Buffer.from(chunks); // or I think it is .concat(chunks)
    const ipfsHash = await pinFileToIPFS(contents)
    return NextResponse.json({ ipfsHash: ipfsHash });
  } catch (e) {
    // handle errors
    return NextResponse.json(e)
  }
}

// turn off bodyParser 
export const config = {
  api: {
    bodyParser: false,
  },
};
