export function preprocessMDX(content: string) {
  const processedContent = content.replace(
    /```(\w+)(?:\s+([^=]+)="([^"]+)")?.*?\n/g,
    (match, language, key, value) => {
      if (key && value) {
        return ` \`\`\`${language}\n// metadata: { "${key}": "${value}" }\n`;
      } else {
        return ` \`\`\`${language}\n`;
      }
    }
  );
  return processedContent;
};

// function preprocessMDX(content: string) {
//   const processedContent = content.replace(
//     /```(\w+).*?\n/g,
//     (metadata) => {
//       // Convert the metadata string to a JSON-like string
//       const splitMetadata = metadata.split(' ')
//       const processedMetadata = `${splitMetadata[0]}\n// metadata: { "${splitMetadata[1].split('=')[0]}": ${splitMetadata[1].split('=')[1].trim()} }\n`
//       return processedMetadata;
//     }
//   );
//   return processedContent
// };