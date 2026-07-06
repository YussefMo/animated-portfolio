'use client';

import GlassPanel from './GlassPanel';

interface SkillModuleProps {
  name: string;
  icon: string;
  code: string;
}

export default function SkillModule({ name, icon, code }: SkillModuleProps) {
  return (
    <GlassPanel className="group relative overflow-hidden p-6 transition-colors duration-300 hover:border-primary-container/30">
      <div className="absolute right-2 top-2 font-code text-[10px] text-text-secondary opacity-50">
        {code}
      </div>
      <span className="material-symbols-outlined mb-4 block text-4xl text-primary transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <div className="font-label-caps text-label-caps text-text-primary">{name}</div>
    </GlassPanel>
  );
}
