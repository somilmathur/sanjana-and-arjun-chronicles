import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import IconButton from '../global/buttons/IconButton';

type Props = {
  show: boolean;
  setShow: (arg:boolean)=>void;
  children: any;
  className?: String;
  bgBlur?: boolean;
  closeButton?: boolean;
  showCloseButton?: boolean;
  closeIconTop?: string;
  closeIconRight?: string;
};

const MotionDrawer = ({
  show,
  setShow,
  children,
  className,
  bgBlur = false,
  closeButton = true,
  showCloseButton = true,
  closeIconTop = 'top-4',
  closeIconRight = 'right-4',
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      document.body.style['overflow-y'] = 'hidden';
    }
    return () => {
      document.body.style['overflow-y'] = 'scroll';
    };
  }, [show]);

  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        duration: 0.2,
        delayChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        duration: 0.2,
        delay: 0.2,
      },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className={bgBlur ? 'bg-blur z-[1999]' : 'bg-overlay-dark z-[1999]'}
            onClick={() => {
              closeButton && setShow(false);
            }}
          />
          <motion.div
            ref={ref}
            initial={{ y: 900 }}
            animate={{ y: 0 }}
            exit={{ y: 900 }}
            transition={{ ease: 'easeInOut', duration: 0.4 }}
            className={`w-full bg-white rounded-t-2xl fixed mx-auto cursor-pointer left-0 right-0 z-[2000] shadow-sm bottom-0 ${className}`}
            drag="y"
            dragMomentum={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={0.8}
            onDragEnd={(event, info) => {
              if (info.offset.y > 300) {
                setShow(false);
              }
            }}
          >
            <motion.div
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ ease: 'easeOut', duration: 0.3, delay: 0.2 }}
              className="message-popup h-full relative"
            >
              {!showCloseButton && (
                <div
                  onClick={() => setShow(false)}
                  role="presentation"
                  className="bg-gray-900 flex items-center justify-center rounded-full w-24 h-7 absolute -top-3.5 left-0 right-0 mx-auto z-20"
                >
                  <IoIosArrowDown className="text-white text-lg" />
                </div>
              )}
              {showCloseButton && (
                <IconButton
                  icon={<HiX />}
                  size="xs"
                  className={`font-bold bg-gray-100 absolute ${closeIconTop} ${closeIconRight} z-[1000]`}
                  circle
                  onClick={() => setShow(false)}
                />
              )}
              <div className="h-full">{children}</div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MotionDrawer;
