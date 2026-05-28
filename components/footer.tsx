"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>&copy; 2026</span>
            <span className="font-semibold text-foreground">
              Mahardika Ardiansyah
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              @copyright
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
