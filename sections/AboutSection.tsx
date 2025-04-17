import AboutMe from '@/components/about-me';

function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-black to-gray-900 py-20"
    >
      <div className="container mx-auto px-4">
        <AboutMe />
      </div>
    </section>
  );
}

export default AboutSection;
