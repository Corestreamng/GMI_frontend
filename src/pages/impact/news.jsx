
import { motion } from "framer-motion";
import { page, fadeUp, stagger } from "../../animations/variants";
import newsImg from "../../assets/images/impact/news.jpg";
import Footer from "../../components/layout/Footer";

export default function GMINews() {
  const mediaChannels = [
    {
      category: "Broadcast Media",
      items: ["TV Features", "Radio Features", "GMI TV – YouTube", "Podcasts"],
    },
    {
      category: "Print & Digital Press",
      items: [
        "National Newspaper Features",
        "Press Release Publications",
        "Blog Articles",
        "Infographics",
      ],
    },
    {
      category: "Direct Outreach",
      items: ["Email Newsletters", "Video Library", "Photo Gallery"],
    },
  ];

  return (
    <>
      <motion.main
        variants={page}
        initial="initial"
        animate="animate"
        exit="exit"
        className="pt-28 pb-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold text-primary mb-8"
            >
              GMI in the News
            </motion.h1>

            <motion.img
              variants={fadeUp}
              src={newsImg}
              alt="GMI Media Engagement"
              className="rounded-xl shadow mb-10 h-72 w-full object-cover"
            />

            <motion.div
              variants={fadeUp}
              className="grid md:grid-cols-3 gap-8"
            >
              {mediaChannels.map((channel, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-xl font-semibold text-primary border-b border-primary/20 pb-2">
                    {channel.category}
                  </h2>

                  <ul className="space-y-2 text-gray-700">
                    {channel.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-12 text-gray-600 italic text-center"
            >
              We drive organizational visibility, branding, and storytelling
              through digital media, publications, and strategic stakeholder
              engagement.
            </motion.p>
          </motion.div>
        </div>
      </motion.main>

      <Footer />
    </>
  );
}
