import { easeOut } from "motion";
import { motion } from "motion/react";
import team1 from "../../assets/banner/team-1.jpg";
import team2 from "../../assets/banner/team-2.jpg";
export default function Banner() {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [100, 50, 100] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={team1}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-blue-400 shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={team2}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-blue-400 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#ecfe33", "#33ffe3", "#ff6133"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            For you
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
