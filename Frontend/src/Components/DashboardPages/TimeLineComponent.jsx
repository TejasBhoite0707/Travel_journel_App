import React, { useEffect, useState } from 'react';
import { Empty, Form, Input, Modal, Spin, Timeline } from 'antd';
import Timelinecard from './Timelinecard';
import { MdOutlineDateRange } from "react-icons/md";
import axiosInstance from '../../utils/ApiService';
import toast, { Toaster } from 'react-hot-toast'
import moment from 'moment';
import FormItem from 'antd/es/form/FormItem';
import NewStoryForm from './AddNewStoryForm';
import PreviewModelFn from './PreviewModel';
const TimeLinecomponent = () => {
  const [memories, setMemories] = useState([]);
  const [loading, setloading] = useState(true);
  const [editingStory, setEditingStory] = useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [form] = Form.useForm();
  const [formKey, setFormKey] = useState(0)
  const[previewStory,setPreviewStory]=useState(null);
  const[ispreviewOpen,setPreviewOpen]=useState(false);

  const fetchMemories = async () => {

    try {
      const response = await axiosInstance.get('/api/get-all-stories');
      setMemories(response.data.stories);
      console.log(response.data);

    } catch (err) {
      console.error(err);
    }
    finally {
      setloading(false)
    }

  }
  useEffect(() => {
    fetchMemories();
  }, [])

  const UpdateIsFavourite = async (storyId, newValue) => {
    try {
      await axiosInstance.put(`/api/update-is-favourite/${storyId}`, {
        isFavourite: newValue
      });
      setMemories((prev) =>
        prev.map((m) =>
          m._id === storyId ? { ...m, isFavourite: newValue } : m
        )
      );

    } catch (err) {
      console.error(err);

    }
  }

  console.log(memories);


  if (loading) return <Spin tip="Loading travel stories..."></Spin>
  if (!memories.length) return <Empty description="No memories yet!" />;

  const handleEditClick = (storyData) => {
    setEditingStory(storyData);
    setFormKey(prev => prev + 1)
    setIsEditModalOpen(true)
  }
  const handleCancel = () => {

    setIsEditModalOpen(false);
  }


  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Timeline
        mode='left'
        items={[...memories]
          .sort((a, b) => new Date(b.visitedDate) - new Date(a.visitedDate)) // ✅ descending order
          .map((memory) => ({
            label: `${memory.visitedDate ? moment(memory.visitedDate).format("Do MMM YYYY") : ""}`,
            dot: <MdOutlineDateRange className='bg-transparent' />,
            children: (
              <Timelinecard
                title={memory.title}
                story={memory.story}
                visitedLocations={memory.visitedLocation}
                imageUrl={memory.imageUrl}
                isFavourite={memory.isFavourite}
                onFavouriteToggle={(newValue) =>
                  UpdateIsFavourite(memory._id, newValue)
                }
                onEdit={() => handleEditClick(memory)}
                onPreview={()=>{
                  setPreviewStory(memory)
                  setPreviewOpen(true)
                }}
              />
            ),
          }))}
      ></Timeline>
      <Modal
        title='Edit Travel Story'
        open={isEditModalOpen}
        key={formKey}
        onCancel={handleCancel}
        onOk={() => form.submit()}
        okText="Update Story"
      >
        <NewStoryForm
          form={form}
          mode='edit'
          initialValues={editingStory}
          onSuccess={() => {
            setIsEditModalOpen(false)
            fetchMemories()
          }

          }
        />

      </Modal>
      <PreviewModelFn
      open={ispreviewOpen}
      onClose={()=>setPreviewOpen(false)}
      story={previewStory}
      onUpdateFavourite={UpdateIsFavourite}
      />

      
    </>
  );
};

export default TimeLinecomponent;