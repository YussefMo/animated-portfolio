import Markdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { cn } from '@/lib/utils';

/**
 * Markdown renderer for project case studies.
 *
 * Rendered on the server (no `'use client'`), so the markdown parser never
 * reaches the browser bundle. Raw HTML is intentionally not enabled, which
 * keeps untrusted content inert.
 */
const components: Components = {
  h1: ({ children }) => (
    <h2 className="mt-12 mb-4 border-b border-border-glass pb-3 font-headline-md text-text-primary">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 mb-4 border-b border-border-glass pb-3 font-headline-md text-text-primary">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-10 mb-3 font-display text-xl font-semibold text-text-primary">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-8 mb-2 font-display text-lg font-semibold text-text-primary">
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="mt-6 mb-2 font-label-caps text-primary">{children}</h5>
  ),
  h6: ({ children }) => (
    <h6 className="mt-6 mb-2 font-label-caps text-text-secondary">
      {children}
    </h6>
  ),
  p: ({ children }) => (
    <p className="my-4 font-body-md text-body-md leading-relaxed text-text-secondary">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-text-primary">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-text-primary">{children}</em>,
  del: ({ children }) => (
    <del className="text-text-secondary/70">{children}</del>
  ),
  a: ({ href, children }) => {
    const isExternal = Boolean(href && /^https?:\/\//i.test(href));

    return (
      <a
        href={href}
        className="text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
        {...(isExternal
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    );
  },
  ul: ({ children }) => (
    <ul className="my-4 list-disc space-y-2 pl-6 marker:text-primary-container">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 list-decimal space-y-2 pl-6 marker:font-code marker:text-primary-container">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="pl-1 font-body-md text-body-md leading-relaxed text-text-secondary [&>p]:my-0 [&>ul]:my-2 [&>ol]:my-2">
      {children}
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 rounded-r-md border-l-2 border-primary-container/60 bg-surface-glass py-1 pl-5 pr-4 italic [&>p]:text-text-primary/90">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-border-glass" />,
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-lg border border-border-glass bg-surface-container-lowest p-5 font-code text-[13px] leading-relaxed text-text-primary [&>code]:border-0 [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-[13px] [&>code]:text-inherit">
      {children}
    </pre>
  ),
  code: ({ children, className }) => (
    <code
      className={cn(
        'rounded border border-border-glass bg-surface-container-low px-1.5 py-0.5 font-code text-[0.9em] text-primary',
        className
      )}
    >
      {children}
    </code>
  ),
  img: ({ src, alt }) => (
    <img
      src={typeof src === 'string' ? src : undefined}
      alt={alt ?? ''}
      loading="lazy"
      className="my-6 h-auto w-full rounded-lg border border-border-glass"
    />
  ),
  table: ({ children }) => (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-border-glass">
      <table className="w-full border-collapse text-left font-body-md text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-surface-container-low">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="border-b border-border-glass px-4 py-3 font-label-caps text-text-primary">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-border-glass/50 px-4 py-3 align-top text-text-secondary">
      {children}
    </td>
  ),
  tr: ({ children }) => (
    <tr className="transition-colors hover:bg-surface-glass/40">{children}</tr>
  )
};

export default function ProjectMarkdown({
  content,
  className
}: {
  content: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0',
        className
      )}
    >
      <Markdown remarkPlugins={[remarkGfm, remarkBreaks]} components={components}>
        {content}
      </Markdown>
    </div>
  );
}
