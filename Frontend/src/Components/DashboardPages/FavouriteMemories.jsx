import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FavouriteMemoryCard from "./FavMemCard";
import axiosInstance from "../../utils/ApiService";
import { Empty, Spin } from "antd";

const FavouriteMemoriesTravel = () => {
  const [favouriteMemories, setFavouriteMemories] = useState([]);
  const [loading, setLoading] = useState(true);

  const FetchFavouriteMemories = async () => {
    try {
      const response = await axiosInstance.get("/api/get-all-stories");
      setFavouriteMemories(response.data.stories);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchFavouriteMemories();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 via-yellow-100 to-pink-100">
        <Spin tip="Loading travel stories..." size="large" />
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-yellow-100 to-pink-100 px-4 sm:px-6 py-12 sm:py-20 flex flex-col items-center relative">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 rounded-full blur-3xl z-[-1]"
      ></motion.div>

      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 text-center drop-shadow-sm px-2"
      >
        Favourite Memories
      </motion.h1>

      {/* Gradient Line */}
      <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 rounded-full mb-6 sm:mb-8"></div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 text-center max-w-md sm:max-w-2xl leading-relaxed px-2"
      >
        Treasured moments that carry{" "}
        <span className="font-semibold text-blue-600">stories</span>,{" "}
        <span className="font-semibold text-pink-500">smiles</span>,{" "}
        <span className="font-semibold text-red-500">love</span>, and golden{" "}
        <span className="font-semibold text-yellow-500">sunsets</span>.
      </motion.p>

      {/* Divider with Heart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex items-center justify-center mb-10 sm:mb-14"
      >
        <div className="h-[1.5px] w-12 sm:w-16 bg-gray-300"></div>
        <span className="mx-2 sm:mx-3 text-red-500 text-2xl sm:text-4xl">♥</span>
        <div className="h-[1.5px] w-12 sm:w-16 bg-gray-300"></div>
      </motion.div>

      {/* Grid or Empty State */}
      {!favouriteMemories.length ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/80 backdrop-blur-md p-6 sm:p-12 rounded-2xl shadow-xl text-center"
        >
          <Empty description="No memories yet! Start your journey" />
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full max-w-7xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[...favouriteMemories]
            .filter((memory) => memory.isFavourite)
            .sort((a, b) => new Date(b.visitedDate) - new Date(a.visitedDate))
            .map((memory, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.04,
                  boxShadow:
                    "0 10px 25px rgba(0,0,0,0.08), 0 6px 12px rgba(0,0,0,0.06)",
                }}
                className="transition-transform"
              >
                <FavouriteMemoryCard {...memory} />
              </motion.div>
            ))}
        </motion.div>
      )}
    </div>
  );
};

export default FavouriteMemoriesTravel;
