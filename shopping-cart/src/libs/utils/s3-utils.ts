export const getS3Url = (pathname: string): string => {
  return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/${pathname}`;
};
