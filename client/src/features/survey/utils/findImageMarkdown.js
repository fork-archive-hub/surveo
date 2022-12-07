export const findImageMarkdown = (text) => {
  const markdown = /!\[(.*?)\]\((.*?)\)/;
  const extensions = /(\.jpg|\.jpeg|\.png|\.gif|\.svg|\.webp)$/i;

  const matches = text.match(markdown);

  if (matches && matches[2].match(extensions)) {
    return {
      found: true,
      title: matches[1],
      url: matches[2],
    };
  }

  return {
    found: false,
  };
};
