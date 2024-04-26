'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyButton } from '../copy-button';
import { File, Terminal } from 'lucide-react';

export default function Code({ children, className }: { children?: React.ReactNode, className?: string }) {
  
  // Extract the programming language from the className
  const match = /language-(\w+)/.exec(className || "");

  // Extract the metadata from the comment
  // const metadataMatch = String(children).match(/\/\/ metadata: (.+)/);
  // const metadata = metadataMatch 
  //   ? JSON.parse(metadataMatch[1])
  //   : null;

  // Remove the metadata from the code string
  const codeString = String(children).replace(/\/\/ metadata: (.+)/, "").trim();

  // Check if the code block is inline
  const isInlineCode = !/\n/.test(codeString); // Check if no line breaks

  // Extract the highlight line from the className
  // const highlightMatch = /highlight=([0-9]+)/.exec(className || "");
  // const highlightLine = highlightMatch?.[1];

  // Render a SyntaxHighlighter for code blocks
  if (!isInlineCode) {
    return (
      <div className="mt-6">
        <div className="flex flex-row items-center justify-between bg-primary text-primary-foreground mt-[0.5em] px-4 py-3 rounded-t-[0.3em]">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <div className="flex flex-row gap-1 items-center">
              <Terminal className="h-4 w-4" />
              <span>{match?.[1]}</span>
            </div>
            {/* {
              metadata?.filename 
              ? 
              <div className="flex flex-row gap-1 items-center">
                <File className="h-4 w-4" />
                <span>{metadata.filename}</span>
              </div>
              : 
              null
            } */}
          </div>
          <CopyButton text={codeString} />
        </div>
        <SyntaxHighlighter
          style={oneDark}
          language={match?.[1]}
          customStyle={{ borderTopLeftRadius: "0", borderTopRightRadius: "0", marginTop: "0" }}
          PreTag="div"
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  }

  // Render different styles for inline code and code blocks without a language
  if (isInlineCode) {
    return <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold border-2">{codeString}</code>;
  }
  
  // Default for code blocks without a language
  return (
    <SyntaxHighlighter
      style={oneDark}
      language="text"
      PreTag="div"
    >
      {codeString}
    </SyntaxHighlighter>
  );
  
}

