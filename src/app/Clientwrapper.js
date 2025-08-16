"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { DialogProvider } from '../components/DialogProvider';

export default function ClientWrapper({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <DialogProvider>
          {children}
        </DialogProvider>
      </motion.div>
    </AnimatePresence>
  );
}