import { Writable } from 'stream';

import formidable from 'formidable';
import { NextApiRequest, NextApiResponse, PageConfig } from 'next';
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
    return NextResponse.json({ status: "Success" });
  } catch (e) {
    // handle errors
    return NextResponse.error(e)
  }
}
