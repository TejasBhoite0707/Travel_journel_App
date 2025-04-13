import React from 'react';
import {  Flex, Modal } from 'antd';
import NewStoryForm from './AddNewStoryForm';
const NewStory = ({open,onClose}) => {
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
        onOk={onClose}
        okText="Post"
        onCancel={onClose}
        width={{
          xs: '90%',
          sm: '80%',
          md: '70%',
          lg: '60%',
          xl: '50%',
          xxl: '40%',
        }}
      >
       <NewStoryForm/>
      </Modal>
    </Flex>
  );
};
export default NewStory;