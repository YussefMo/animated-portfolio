'use client';

import SocialIcon from '@/components/social-icon';
import { Github, Linkedin, MessageSquare } from 'lucide-react';

function FooterSection() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-wrap justify-center gap-6">
          <SocialIcon
            icon={<Github />}
            href="https://github.com/YussefMo"
            label="GitHub"
          />
          <SocialIcon
            icon={<Linkedin />}
            href="https://www.linkedin.com/in/youssef-mohammed-ali-4608492a5/"
            label="LinkedIn"
          />
          <SocialIcon
            icon={<MessageSquare />}
            href="https://discord.com/users/sp_savage"
            label="Discord"
          />
        </div>
        <div className="text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Youssef Mohammed Ali. All rights
            reserved.
          </p>
          <ContactEmail />
        </div>
      </div>
    </footer>
  );
}

function ContactEmail() {
  return (
    <div className="mt-2">
      <a
        href="mailto:youssefmohammed12090@gmail.com"
        className="text-purple-400 hover:text-purple-300"
      >
        youssefmohammed12090@gmail.com
      </a>
    </div>
  );
}

export default FooterSection;
