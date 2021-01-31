/**
 * This function will generate a random string
 * with a fixed length of 200, in order to provide
 * the client with a seed so it can fill the QR Code.
 */
export const generateSeed = (): string => {
  let result: string = '';

  const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const seedLength: number = 200;

  for (var i = 0; i < seedLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};
