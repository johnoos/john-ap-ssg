export default function(eleventyConfig) {
  // 1. All configuration methods MUST be inside this function
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/pdfs");

  // 2. Return the configuration object at the end
  return {
    dir: {
      input: "src",
      includes: "_parts" // Located at src/_parts/
    }
  };
};