import { ComponentPropsWithoutRef, forwardRef, Ref } from "react";
import { motion } from "framer-motion";

const Gradient = forwardRef(function Gradient(
  { children, ...props }: ComponentPropsWithoutRef<typeof motion.div>,
  ref: Ref<HTMLDivElement> | undefined
) {
  return (
    <motion.div
      ref={ref}
      initial={{
        backgroundSize: "300%",
        backgroundImage: "linear-gradient(-45deg, #ed4d60, #dd2d5f)",
        backgroundPositionX: "50%",
        backgroundPositionY: "50%",
      }}
      animate={{
        backgroundImage: [
          "linear-gradient(0deg, #ed4d60, #dd2d5f)",
          "linear-gradient(90deg, #ed554d, #dd2db1)",
          "linear-gradient(180deg, #db4771, #dd2d7c)",
          "linear-gradient(270deg, #ec4949, #d83592)",
          "linear-gradient(360deg, #ed4d60, #dd2d5f)",
        ],
        backgroundSize: ["125%", "175%", "150%", "125%"],
        backgroundPositionX: ["50%", "25%", "50%", "75%", "50%"],
        backgroundPositionY: ["50%", "75%", "50%", "25%", "50%"],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
});

export default Gradient;
