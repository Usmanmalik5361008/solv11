import { Spin } from "antd";
import { AnimatePresence, motion } from "framer-motion";

const SubLoader = ({ overlay = false, loading }) => {
  const className = overlay ? "sub-loader overlay" : "sub-loader";

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={className}
        >
          <Spin />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubLoader;
