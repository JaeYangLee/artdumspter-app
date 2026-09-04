const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  ListBucketsCommand,
  CreateBucketCommand,
  HeadObjectCommand,
  ListObjectsV2Command,
} = require("@aws-sdk/client-s3");

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const dotenv = require("dotenv");

dotenv.config();

const endpoint = process.env.S3_ENDPOINT;
const region = process.env.S3_REGION || "us-east-1";
const accessKey = process.env.S3_ACCESS_KEY;
const secretKey = process.env.S3_SECRET_KEY;
const forcePathStyle = process.env.S3_FORCE_PATH_STYLE === "true";
const signatureVersion = process.env.S3_SIGNATURE_VERSION || "v4";
const defaultBucket = process.env.S3_BUCKET;

if (!endpoint || !accessKey || !secretKey) {
  throw new Error(
    "Missing required S3 environment variables: S3_ENDPOINT, S3_ACCESS_KEY, S3_SECRET_KEY",
  );
}

const s3Client = new S3Client({
  endpoint,
  region,
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
  },
  forcePathStyle,
  signatureVersion,
});

const getBucket = (bucket) => bucket || defaultBucket;

/**
 * List all buckets
 */
async function listBuckets() {
  const command = new ListBucketsCommand({});
  return s3Client.send(command);
}

/**
 * Create a new bucket
 * @param {string} bucket - Bucket name
 * @param {string} [regionOverride] - optional region
 */
async function createBucket(bucket, regionOverride) {
  const command = new CreateBucketCommand({
    Bucket: bucket,
    CreateBucketConfiguration: regionOverride
      ? { LocationConstraint: regionOverride }
      : undefined,
  });

  return s3Client.send(command);
}

/**
 * Upload a file
 * @param {string} key - Object key
 * @param {Buffer|Readable|string} body - File content
 * @param {string} [bucket] - optional bucket
 * @param {Object} [metadata] - optional metadata
 * @param {string} [contentType] - optional MIME type
 */
async function uploadFile(key, body, bucket, metadata = {}, contentType) {
  const Bucket = getBucket(bucket);

  const command = new PutObjectCommand({
    Bucket,
    Key: key,
    Body: body,
    Metadata: metadata,
    ContentType: contentType,
  });

  return s3Client.send(command);
}

/**
 * Download a file
 */
async function getFile(key, bucket) {
  const Bucket = getBucket(bucket);

  const command = new GetObjectCommand({
    Bucket,
    Key: key,
  });

  return s3Client.send(command);
}

/**
 * Delete a file
 */
async function deleteFile(key, bucket) {
  const Bucket = getBucket(bucket);

  const command = new DeleteObjectCommand({
    Bucket,
    Key: key,
  });

  return s3Client.send(command);
}

/**
 * Generate a presigned URL for GET
 */
async function getPresignedGetUrl(key, expiresIn = 3600, bucket) {
  const Bucket = getBucket(bucket);

  const command = new GetObjectCommand({
    Bucket,
    Key: key,
  });

  return getSignedUrl(s3Client, command, {
    expiresIn,
  });
}

/**
 * Generate a presigned URL for PUT
 */
async function getPresignedPutUrl(key, expiresIn = 3600, bucket) {
  const Bucket = getBucket(bucket);

  const command = new PutObjectCommand({
    Bucket,
    Key: key,
  });

  return getSignedUrl(s3Client, command, {
    expiresIn,
  });
}

/**
 * Check if an object exists
 */
async function objectExists(key, bucket) {
  try {
    const Bucket = getBucket(bucket);

    const command = new HeadObjectCommand({
      Bucket,
      Key: key,
    });

    await s3Client.send(command);

    return true;
  } catch (err) {
    if (err.name === "NotFound") {
      return false;
    }

    throw err;
  }
}

/**
 * List objects in a bucket
 */
async function listObjects(bucket, prefix, maxKeys = 1000, continuationToken) {
  const Bucket = getBucket(bucket);

  const command = new ListObjectsV2Command({
    Bucket,
    Prefix: prefix,
    MaxKeys: maxKeys,
    ContinuationToken: continuationToken,
  });

  return s3Client.send(command);
}

/**
 * List ALL objects in a bucket, auto-paginating
 */
async function listAllObjects(bucket, prefix) {
  const Bucket = getBucket(bucket);

  let objects = [];
  let continuationToken;

  do {
    const response = await listObjects(Bucket, prefix, 1000, continuationToken);

    objects = objects.concat(response.Contents || []);

    continuationToken = response.IsTruncated
      ? response.NextContinuationToken
      : undefined;
  } while (continuationToken);

  return objects;
}

/**
 * Export everything
 */
module.exports = {
  s3Client,
  listBuckets,
  createBucket,
  uploadFile,
  getFile,
  deleteFile,
  getPresignedGetUrl,
  getPresignedPutUrl,
  objectExists,
  listObjects,
  listAllObjects,
};
