const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: "AKIATXQFJ2W3QV56C2UJ",
  secretAccessKey: "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",
  region: "ap-northeast-2",
});

module.exports = s3;
