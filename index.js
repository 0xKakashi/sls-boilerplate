/**
 * @module
 * -
 * @name index
 * @desc index controller configuration
 * @file ~/index.js
 */
module.exports.main = async event => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Serverless endpoint.',
        input: event,
      }),
    };
  } catch(e) { throw new Error(`[ERROR] ${e}`); }
};