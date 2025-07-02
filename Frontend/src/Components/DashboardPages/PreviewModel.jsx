import React, { useEffect, useState } from "react";
import { FaMapPin } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdNightlightRound, MdWbSunny } from "react-icons/md";
import { Modal } from "antd";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import moment from "moment";
import toast from "react-hot-toast";
import axiosInstance from "../../utils/ApiService";

const PreviewModal = ({ open, onClose, story, onUpdateFavourite }) => {
  const [dark, setDark] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (story) setData(story);
  }, [story]);

  const toggleFav = async () => {
    if (!data) return;
    const next = !data.isFavourite;
    try {
      await axiosInstance.put(`/api/update-is-favourite/${data._id}`, {
        isFavourite: next,
      });
      setData({ ...data, isFavourite: next });
      onUpdateFavourite?.(data._id, next);
    } catch {
      toast.error("Failed to update favourite");
    }
  };

  const theme = dark
    ? {
        bg: "bg-slate-900",
        text: "text-slate-100",
        sub: "text-slate-400",
        panel: "bg-slate-800",
        link: "text-blue-300",
        shadow: "shadow-blue-900/50",
      }
    : {
        bg: "bg-white",
        text: "text-slate-800",
        sub: "text-slate-500",
        panel: "bg-white",
        link: "text-blue-600",
        shadow: "shadow-slate-300",
      };

  if (!data) return null;

const handleImageDownload=async()=>{
    try {
        const response=await fetch(data.imageUrl);
        const blob=await response.blob();
        const url=window.URL.createObjectURL(blob);
        const a=document.createElement('a');
        a.href=url;
        a.download=`memory-${data.title}.jpg`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    } catch (err) {
        toast.error("Failed To Download Image")
    }
}

  return (
    <div className={dark ? "dark" : ""}>
      <Modal
        open={open}
        onCancel={onClose}
        footer={null}
        width="90vw"
        style={{ top: 10, padding: 0 }}
        bodyStyle={{ padding: 0, background: "transparent" }}
        className="preview-modal"
      >
        <div
          className={`relative ${theme.bg} ${theme.text} rounded-xl overflow-hidden shadow-xl ${theme.shadow}`}
        >
          {/* Theme Toggle */}
          <button
            className="absolute top-4 right-4 z-50 rounded-full p-2 backdrop-blur-md bg-white/40 dark:bg-slate-700/40 hover:scale-110 transition"
            onClick={() => setDark(!dark)}
            title="Toggle theme"
          >
            {dark ? <MdWbSunny className="text-yellow-400" /> : <MdNightlightRound />}
          </button>

          {/* Favourite Toggle */}
          <button
            className="absolute top-4 left-4 z-50 text-4xl text-red-500 drop-shadow-md hover:scale-110 transition"
            onClick={toggleFav}
            title="Toggle favourite"
          >
            {data.isFavourite ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>

          {/* Media */}
          {Array.isArray(data.imageUrls) && data.imageUrls.length > 0 ? (
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showThumbs={false}
              className="max-h-[60vh]"
            >
              {data.imageUrls.map((u, i) => (
                <img key={i} src={u} alt={`slide-${i}`} className="object-cover h-[60vh]" />
              ))}
            </Carousel>
          ) : (
            <img
              src={data.imageUrl}
              alt={data.title}
              className="w-full object-cover max-h-[60vh]"
            />
          )}

          {/* Content */}
          <div className={`p-6 md:p-10 ${theme.panel}`}>
            <h2 className="text-3xl font-extrabold mb-4">{data.title}</h2>

            <p className="whitespace-pre-wrap leading-relaxed mb-6">{data.story}</p>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <FaMapPin className="text-blue-500" />
              <span className="font-medium">
                {Array.isArray(data.visitedLocation)
                  ? data.visitedLocation.join(", ")
                  : data.visitedLocation}
              </span>
            </div>

            <p className={`${theme.sub}`}>{moment(data.visitedDate).format("Do MMMM YYYY")}</p>

            <div className="mt-8 flex flex-wrap gap-5">
              <a
                href={data.imageUrl}
                target="_blank"
                rel="noreferrer"
                className={`${theme.link} underline-offset-2 hover:underline`}
              >
                View Full Image
              </a>
              <a
                onClick={handleImageDownload}
                
                className={`${theme.link} underline-offset-2 hover:underline`}
              >
                Download
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(data.imageUrl);
                  toast.success("Copied!");
                }}
                className={`${theme.link} underline-offset-2 hover:underline`}
              >
                Copy Image Link
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PreviewModal;
