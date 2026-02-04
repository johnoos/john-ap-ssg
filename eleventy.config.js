export default async function(eleventyConfig) {
  // Copy your CSS
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};