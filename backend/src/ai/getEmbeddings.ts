
import crypto from "crypto";

// Lightweight deterministic embedding generator.
// This removes any dependency on external OpenAI services.
// It produces a fixed-length numeric vector based on a SHA-256 digest
// of the input text so that similar inputs produce different vectors
// but the function is fully local and deterministic.
export const generateEmbeddings = async (text: string): Promise<number[]> => {
    if (!text) return [];

    const hash = crypto.createHash("sha256").update(text).digest();

    // Create a vector of 64 floats in range [-1, 1] from the hash bytes.
    const vector: number[] = [];
    const desiredLength = 64;
    for (let i = 0; i < desiredLength; i++) {
        // Cycle through hash bytes if needed
        const byte = hash[i % hash.length];
        // Map byte (0-255) to -1..1
        vector.push((byte / 127.5) - 1);
    }

    return vector;
};