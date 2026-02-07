export default async function(eleventyConfig) {
  // Copy your CSS
  eleventyConfig.addPassthroughCopy("src/css");
  // This tells 11ty: "Take everything INSIDE src/assets and put it in _site/assets"
eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};