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