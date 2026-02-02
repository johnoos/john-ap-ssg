// eleventy.config.js
export default function(eleventyConfig) {
  return {
    dir: {
      input: "src",      // Source files
      includes: "_parts" // Now it looks in src/_parts/
    }
  };
};

eleventyConfig.addPassthroughCopy("src/assets/img"); // For your previews
eleventyConfig.addPassthroughCopy("src/assets/pdfs"); // For the actual files