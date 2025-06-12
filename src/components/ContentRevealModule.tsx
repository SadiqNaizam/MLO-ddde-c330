import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ContentRevealModuleProps {
  /** The title for the content module, displayed in the card header. */
  title: string;
  /** Determines if the content is in a locked or unlocked state. */
  isLocked: boolean;
  /** ReactNode to display when the content is locked. E.g., "Coming Soon" message, countdown timer. */
  lockedContent: React.ReactNode;
  /** ReactNode to display when the content is unlocked. This is the main content to be revealed. */
  unlockedContent: React.ReactNode;
  /** Optional additional class names for styling the Card component. */
  className?: string;
}

const ContentRevealModule: React.FC<ContentRevealModuleProps> = ({
  title,
  isLocked,
  lockedContent,
  unlockedContent,
  className,
}) => {
  console.log(`ContentRevealModule '${title}' loaded. Current state: ${isLocked ? 'Locked' : 'Unlocked'}`);

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const contentVariants = {
    lockedInitial: { opacity: 0, y: 10 },
    lockedAnimate: { opacity: 1, y: 0 },
    lockedExit: { opacity: 0, y: -10 },
    unlockedInitial: { opacity: 0, y: 20, scale: 0.98 },
    unlockedAnimate: { opacity: 1, y: 0, scale: 1 },
    unlockedExit: { opacity: 0, y: -20, scale: 0.98 },
  };

  const transitionSettings = {
    duration: 0.5,
    ease: 'easeInOut',
  };

  const shortTransitionSettings = {
    duration: 0.3,
    ease: 'easeInOut',
  };

  return (
    <Card className={cn("w-full overflow-hidden", className)}>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="min-h-[100px] relative"> {/* Ensure content area has some min height */}
        <AnimatePresence mode="wait">
          {isLocked ? (
            <motion.div
              key={`locked-${title}`} // Unique key including title for multiple instances
              variants={contentVariants}
              initial="lockedInitial"
              animate="lockedAnimate"
              exit="lockedExit"
              transition={shortTransitionSettings}
              className="w-full"
            >
              {lockedContent}
            </motion.div>
          ) : (
            <motion.div
              key={`unlocked-${title}`} // Unique key
              variants={contentVariants}
              initial="unlockedInitial"
              animate="unlockedAnimate"
              exit="unlockedExit"
              transition={transitionSettings}
              className="w-full"
            >
              {unlockedContent}
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default ContentRevealModule;