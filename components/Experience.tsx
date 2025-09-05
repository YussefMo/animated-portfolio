import { motion } from "framer-motion"
import { Building2, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

const timelineData = [
  {
    id: 1,
    company: "Web Masters",
    role: "Front End Developer",
    period: "2025 - 2025",
    location: "Egypt",
    type: "Internship",
    logo: "/web-masters.jpg",
    skills: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    company: "Diagnosit",
    role: "Front End Engineer",
    period: "2025 - Present",
    location: "Turkey",
    type: "Full-time (Remote)",
    logo: "/diagnosit.jpg",
    skills: ["React", "Next.js", "Typescript", "React Native", "Expo", "Tailwind CSS", "FCM"],
  },
]

function Experience() {
  return (
    <div className="mb-20">
      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          The Road So Far
        </span>
        <span className="ml-2 text-white">🛤️</span>
      </h3>
      <div className="relative">
        {/* Vertical Line (only visible on larger screens) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

        {/* Timeline Items */}
        <div className="space-y-30">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
            >
              {/* Content */}
              <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                    <Image
                      src={item.logo || "/placeholder.svg"}
                      alt={item.company}
                      width={56}
                      height={56}
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <h4 className="text-lg text-purple-400">{item.company}</h4>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{item.period}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-2">
                      <Building2 className="w-4 h-4" />
                      <span className="text-sm">{item.type}</span>
                    </div>
                  </div>
                </div>
                {item.skills.length > 0 && (
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Timeline Point (hidden on mobile) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>

              {/* Timeline Connector (hidden on mobile) */}
              {index < timelineData.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
                  style={{ top: "100%", height: "100px" }}
                ></motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
