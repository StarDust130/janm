"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import VideoModal from "@/components/ui/VideoModal";
import EligibilityModal from "@/components/eligibility/EligibilityModal";

export default function HeroSection() {
  const [eligibility, setEligibility] = useState(false);
  const [video, setVideo] = useState(false);

  return (
    <>
      <section className="min-h-[90vh] flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl font-extrabold">
            JANM <span className="text-orange-500">IN</span>
          </h1>

          <p className="mt-4 text-muted-foreground">
            India’s Welfare, Simplified
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <Button
              variant="bharatOrange"
              size="lg"
              onClick={() => setEligibility(true)}
            >
              Check Eligibility
            </Button>

            <Button
              variant="bharatGreen"
              size="lg"
              onClick={() => setVideo(true)}
            >
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </section>

      <EligibilityModal open={eligibility} onClose={() => setEligibility(false)} />
      <VideoModal open={video} onClose={() => setVideo(false)} videoId="dQw4w9WgXcQ" />
    </>
  );
}
