'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter } from 'react-icons/fi';

interface ButtonProps {
  filter: string;
  children: ReactNode;
  activeFilter: string;
  // eslint-disable-next-line no-unused-vars
  filterHandler: (filter: string) => void;
}

function Button({
  filter,
  children,
  activeFilter,
  filterHandler
}: ButtonProps) {
  const isActive = filter === activeFilter;

  return (
    <button
      onClick={() => filterHandler(filter)}
      className={`hover:bg-primary-700 cursor-pointer rounded-md px-5 py-2 hover:bg-purple-500 hover:text-white ${
        isActive ? 'bg-gradient-to-r from-purple-500 to-pink-500' : ''
      }`}
    >
      {children}
    </button>
  );
}

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const activeFilter = searchParams.get('category') ?? 'all';

  function filterHandler(filter: string) {
    const params = new URLSearchParams();
    params.set('category', filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
    setIsOpen(false);
  }

  return (
    <div className="relative">
      {/* large screens - regular filter */}
      <div className="hidden w-full flex-wrap justify-center gap-2 rounded-md border border-purple-500 p-2 lg:flex">
        <Button
          filter="all"
          activeFilter={activeFilter}
          filterHandler={filterHandler}
        >
          All projects
        </Button>
        <Button
          filter="vanilla"
          activeFilter={activeFilter}
          filterHandler={filterHandler}
        >
          Vanilla Projects
        </Button>
        <Button
          filter="react"
          activeFilter={activeFilter}
          filterHandler={filterHandler}
        >
          React Projects
        </Button>
        <Button
          filter="next"
          activeFilter={activeFilter}
          filterHandler={filterHandler}
        >
          next Projects
        </Button>
        <Button
          filter="full-system"
          activeFilter={activeFilter}
          filterHandler={filterHandler}
        >
          Full system Projects
        </Button>
      </div>

      {/* small screens - filter icon with dropdown */}
      <div className="w-full lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3 text-white transition-all hover:opacity-90"
          aria-label="Filter projects"
        >
          <FiFilter className="h-5 w-5" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-full right-0 z-50 mt-2 min-w-[200px] rounded-md border border-purple-500 bg-gray-900 p-3 shadow-lg"
            >
              <div className="flex flex-col gap-2">
                <Button
                  filter="all"
                  activeFilter={activeFilter}
                  filterHandler={filterHandler}
                >
                  All projects
                </Button>
                <Button
                  filter="vanilla"
                  activeFilter={activeFilter}
                  filterHandler={filterHandler}
                >
                  Vanilla Projects
                </Button>
                <Button
                  filter="react"
                  activeFilter={activeFilter}
                  filterHandler={filterHandler}
                >
                  React Projects
                </Button>
                <Button
                  filter="next"
                  activeFilter={activeFilter}
                  filterHandler={filterHandler}
                >
                  next Projects
                </Button>
                <Button
                  filter="full-system"
                  activeFilter={activeFilter}
                  filterHandler={filterHandler}
                >
                  Full system Projects
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Filter;
