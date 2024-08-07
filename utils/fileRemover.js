import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileRemover = (filename) => {
    fs.unlink(path.join(__dirname, '../uploads', filename), function(err) {
        if (err && err.code === 'ENOENT') {
            // File doesn't exist
            console.log(`File ${filename} doesn't exist, won't remove it.`);
        } else if (err) {
            // Other errors
            console.log(`Error occurred while trying to remove file ${filename}`);
        } else {
            // Success
            console.log(`Removed ${filename}`);
        }
    });
};

export { fileRemover };
