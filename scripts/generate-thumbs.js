const { pdf } = require("pdf-to-img");
const fs = require("fs").promises;
const path = require("path");

async function generateThumbnails() {
  const pdfDir = "./src/assets/pdfs/";
  const thumbDir = "./src/assets/img/previews/";

  // Ensure the thumbnail directory exists
  await fs.mkdir(thumbDir, { recursive: true });

  const files = await fs.readdir(pdfDir);
  const pdfs = files.filter(file => file.endsWith(".pdf"));

  for (const file of pdfs) {
    const doc = await pdf(path.join(pdfDir, file), { scale: 2 });
    const page1 = await doc.getPage(1); // Grab the first page
    const thumbName = file.replace(".pdf", "-thumb.png");
    
    await fs.writeFile(path.join(thumbDir, thumbName), page1);
    console.log(`Generated thumbnail for: ${file}`);
  }
}

generateThumbnails();