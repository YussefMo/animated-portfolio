import Image from 'next/image';

type ProjectModalContentProps = Omit<
  Project,
  'id' | 'category' | 'gitHubRepoName'
> & {
  extraSections?: ExtraSection[];
};

function ProjectModalContent({
  title,
  tags,
  image,
  description,
  liveDemo,
  repo,
  extraSections
}: ProjectModalContentProps) {
  return (
    <div className="space-y-4 py-5">
      <div className="relative aspect-video w-[100%]">
        <Image
          src={image}
          alt={title}
          fill
          className="mb-4 h-48 w-full rounded-lg object-contain"
        />
      </div>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-2 py-1 text-xs text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-300">{description}</p>
      <div className="mt-6 flex gap-4">
        <a
          href={liveDemo}
          target="_blank"
          className="rounded bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700"
        >
          Live Demo
        </a>
        <a
          href={repo}
          target="_blank"
          className="rounded border border-purple-600 px-4 py-2 text-purple-300 transition hover:bg-purple-700 hover:text-white"
        >
          View Code
        </a>
      </div>
      {extraSections && <div className="py-8"></div>} {/*spacing*/}
      {extraSections?.map((section, i) => (
        <div key={i} className="mt-8 rounded-md bg-gray-800 p-4">
          <h1 className="mb-3 text-center text-lg">
            Extras Related To The Project
          </h1>
          <div className="relative aspect-video w-[100%]">
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="mb-4 h-48 w-full rounded-lg object-contain"
            />
          </div>
          <h4 className="mb-2 text-lg font-semibold text-white">
            {section?.title}
          </h4>
          <div className="flex flex-wrap gap-2">
            {section?.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-2 py-1 text-xs text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-3 text-gray-400">{section?.description}</p>
          <div className="mt-6 flex gap-4">
            <a
              href={section?.liveDemo}
              target="_blank"
              className="rounded bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700"
            >
              Live Demo
            </a>
            <a
              href={section?.repo}
              target="_blank"
              className="rounded border border-purple-600 px-4 py-2 text-purple-300 transition hover:bg-purple-700 hover:text-white"
            >
              View Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectModalContent;
