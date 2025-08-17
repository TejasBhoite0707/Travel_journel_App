import React, { useState, useEffect } from 'react';
import Timelinecard from './Timelinecard';
import { MdOutlineDateRange } from "react-icons/md";
import { motion } from 'framer-motion';
import moment from 'moment';
import { Modal, Form } from 'antd';
import NewStoryForm from './AddNewStoryForm';
import PreviewModelFn from './PreviewModel';
import axiosInstance from '../../utils/ApiService';
import toast, { Toaster } from 'react-hot-toast';

const TimelineComponent = ({ Filteredstories }) => {
  const [memories, setMemories] = useState([]);
  const [editingStory, setEditingStory] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [formKey, setFormKey] = useState(0);
  const [previewStory, setPreviewStory] = useState(null);
  const [isPreviewOpen, setPreviewOpen] = useState(false);

  // Fetch memories
  const fetchMemories = async () => {
    try {
      const response = await axiosInstance.get('/api/get-all-stories');
      setMemories(response.data.stories);
    } catch (err) {
      console.error(err);
      toast.error("Error fetching stories");
    }
  };

  useEffect(() => {
    if (Filteredstories) {
      setMemories(Filteredstories);
    } else {
      fetchMemories();
    }
  }, [Filteredstories]);

  const handleEditClick = (story) => {
    setEditingStory(story);
    setFormKey(prev => prev + 1);
    setIsEditModalOpen(true);
  };

  const handlePreviewClick = (story) => {
    setPreviewStory(story);
    setPreviewOpen(true);
  };

  const handleUpdateFavourite = async (storyId, newValue) => {
    try {
      await axiosInstance.put(`/api/update-is-favourite/${storyId}`, {
        isFavourite: newValue
      });
      setMemories(prev =>
        prev.map(m => (m._id === storyId ? { ...m, isFavourite: newValue } : m))
      );
    } catch (err) {
      console.error(err);
      toast.error("Error updating favourite");
    }
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-sky-300 via-pink-200 to-amber-200 rounded-2xl">
      <Toaster position="top-center" reverseOrder={false} />

      
      {/* Timeline cards */}
      <div className="relative max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {memories
          .sort((a, b) => new Date(b.visitedDate) - new Date(a.visitedDate))
          .map((memory, idx) => (
            <motion.div
              key={memory._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="mb-12"
            >
              {/* Date marker */}
              <div className="flex items-center mb-4">
  <div className="relative inline-block">
    <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-1 rounded-md shadow flex items-center">
      <MdOutlineDateRange className="text-white text-lg mr-2" />
      {memory.visitedDate ? moment(memory.visitedDate).format("Do MMM YYYY") : ""}
    </span>
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-8 border-transparent border-t-orange-400"></div>
  </div>
</div>


              {/* Timeline card */}
              <Timelinecard
                title={memory.title}
                story={memory.story}
                visitedLocations={memory.visitedLocation}
                imageUrl={memory.imageUrl}
                isFavourite={memory.isFavourite}
                onFavouriteToggle={(newValue) => handleUpdateFavourite(memory._id, newValue)}
                onEdit={() => handleEditClick(memory)}
                onPreview={() => handlePreviewClick(memory)}
              />
            </motion.div>
          ))}
      </div>

      {/* Edit Modal */}
      <Modal
        title="Edit Travel Story"
        open={isEditModalOpen}
        key={formKey}
        onCancel={() => setIsEditModalOpen(false)}
        onOk={() => form.submit()}
        okText="Update Story"
      >
        <NewStoryForm
          form={form}
          mode="edit"
          initialValues={editingStory}
          onSuccess={() => {
            setIsEditModalOpen(false);
            fetchMemories();
          }}
        />
      </Modal>

      {/* Preview Modal */}
      <PreviewModelFn
        open={isPreviewOpen}
        story={previewStory}
        onClose={() => setPreviewOpen(false)}
        onUpdateFavourite={handleUpdateFavourite}
      />
    </div>
  );
};

export default TimelineComponent;
