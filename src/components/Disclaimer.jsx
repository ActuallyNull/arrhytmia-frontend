import React from "react";
import { motion } from "framer-motion";

/**
 * Disclaimer component (fixed, non-dismissible)
 * Props:
 *  - title: string
 *  - children: ReactNode (body text)
 *
 * Behaviour: permanently displayed at the top of the page, centred, and
 * fills almost the full width. No close button is provided.
 */
export default function Disclaimer({
  title = "DISCLAIMER",
  children = "This tool is in no way medically vetted, do not use it as expert judgement. If you feel concerned about your cardiovascular health, consult your doctor as soon as possible.",
}) {
  return (
    <div className="mt-4 w-full flex justify-center">
      <motion.div
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        role="status"
        aria-live="polite"
        className="w-[calc(100%-2rem)] max-w-screen-xl mx-auto rounded-2xl shadow-sm bg-red-600/10 backdrop-blur-sm border border-red-200/40 p-4 flex items-start gap-4"
      >
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-red-700">{title}</h3>
          <div className="mt-1 text-sm text-red-900/80">{children}</div>
        </div>
      </motion.div>
    </div>
  );
}
