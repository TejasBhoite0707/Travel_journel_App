import React from 'react';
import {  Flex, Form, Modal } from 'antd';
import NewStoryForm from './AddNewStoryForm';
const NewStory = ({open,onClose}) => {
  const [form] = Form.useForm();
  const handlePost=()=>{
    form.submit();
    onClose();
  }
  return (
    <Flex vertical gap="middle" align="flex-start">
      {/* Responsive */}
      <Modal
        title={
            <div className='text-2xl'>
                Add New Memory
            </div>
        }
        centered
        open={open}
        onOk={handlePost}
        okText="Post"
        
        onCancel={onClose}
        width={{
          xs: '90%',
          sm: '80%',
          md: '80%',
          lg: '60%',
          xl: '50%',
          xxl: '40%',
        }}
        
       style={{ top: 20 }}
  bodyStyle={{ maxHeight: '70vh', overflowY: 'auto', paddingRight: 24 }}
      >
       <NewStoryForm form={form}/>
      </Modal>
    </Flex>
  );
};
export default NewStory;