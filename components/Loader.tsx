import { Ring } from 'ldrs/react';
import 'ldrs/react/Ring.css';

function Loader() {
  return (
    <div className="mx-auto flex h-[300px] w-full items-center justify-center md:w-[200%] lg:w-[300%]">
      <Ring
        size="40"
        stroke="5"
        bgOpacity="0"
        speed="2"
        color="oklch(62.7% 0.265 303.9)"
      />
    </div>
  );
}

export default Loader;
