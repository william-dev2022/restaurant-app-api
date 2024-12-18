import { UploadApiResponse, UploadApiErrorResponse } from "cloudinary";
import cloudinary from "./cloudinary";
import slugify from "slugify";

/**
 * Uploads a file to Cloudinary using a buffer.
 * @param fileBuffer - The file buffer to be uploaded.
 * @param fileName - The desired public ID for the file (optional).
 * @returns A Promise that resolves to the Cloudinary upload response.
 */
export const uploadToCloudinary = async (
  fileBuffer: Buffer,
  fileName: string
): Promise<UploadApiResponse> => {
  return new Promise<UploadApiResponse>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "restaurant-app-api/recipe",
        public_id: fileName,
      },
      (
        error: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined
      ) => {
        if (error) {
          return reject(error);
        }
        if (result) {
          resolve(result);
        }
      }
    );
    stream.end(fileBuffer); // Send the buffer to the Cloudinary stream
  });
};


export const generateUniqueFileName = (recipeName: string): string => {
    const slug = slugify(recipeName, { lower: true, strict: true });
    const uniqueSuffix = Date.now().toString(); // You can replace this with a UUID or random string if needed
    return `${slug}-${uniqueSuffix}`;
  };
