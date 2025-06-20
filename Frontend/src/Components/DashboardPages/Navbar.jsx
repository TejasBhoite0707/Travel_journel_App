import React from 'react'
import { VscBook } from "react-icons/vsc";
import { BiSolidUserRectangle } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Popconfirm, message, Form, Input, Button } from 'antd';
import axios from 'axios';
import axiosInstance from '../../utils/ApiService';
import FormItem from 'antd/es/form/FormItem';
import toast,{Toaster} from 'react-hot-toast'
const Navbar = ({ userInfo }) => {
  const navigate = useNavigate();
  const [isModalopen, setIsModalopen] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const showModal = () => {
    setIsModalopen(true)
  }

  const handleOk = () => {
    setIsModalopen(false)
  }

  const handleCancel = () => {
    setIsModalopen(false)
    setShowPasswordForm(false)
    form.resetFields();
  }

  const confirmLogout = () => {
    localStorage.clear();
    toast.success('Logged out successfully!');
    navigate('/login');
  }

  const CancelLogout = () => {
    toast.success("Logout Cancelled");
  }

  const handlePasswordChange = (values) => {
    try {
      setLoading(true);
      axiosInstance.put('/api/change-password', values)
      toast.success("Password changed successfully");
      form.resetFields();
      setShowPasswordForm(false);
    }
    catch (error) {
      toast.error(error.response?.data?.message || 'Failed to change password');
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className=' flex bg-white m-5 h-12 w-full  rounded-md z-10 justify-between items-center'>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <Link to='/dashboard'><div className='flex space-x-1 items-center ml-14'>
        <VscBook className='text-3xl text-gray-400' />
        <span className='text-xl text-cyan-950 font-bold'>MemoryVault</span>
      </div></Link>
      <div className='flex space-x-1 items-center mr-16'>
        <BiSolidUserRectangle className='text-2xl cursor-pointer' onClick={showModal} />
        <Popconfirm
          title='Are you sure you want to logout?'
          onConfirm={confirmLogout}
          onCancel={CancelLogout}
          okText="Yes"
          cancelText="No"
        >
          <span className='text-md text-red-500 hover:underline cursor-pointer'>Logout</span>
        </Popconfirm>

      </div>
      <Modal
        title="User Info"
        open={isModalopen}
        onOk={handleOk}
        onCancel={handleCancel}
  footer={
    !showPasswordForm
      ? [
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="ok" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]
      : null // hide footer when form is visible
  }
      >
        {!showPasswordForm ? (
          <>
          <p><strong>Fullname: </strong>{userInfo?.fullname || 'NA'}</p>
          <p><strong>Email: </strong>{userInfo?.email || 'NA'}</p>
          <p type='link' style={{cursor:'pointer',color:'blue'}} onClick={() => setShowPasswordForm(true)}>Change Password</p>
        </>
        ) : (
          <Form
            layout='vertical'
            form={form}
            onFinish={handlePasswordChange}
          >
            <FormItem
              label='Old Password'
              name='oldPassword'
              rules={[{ required: true, message: "Please Enter the Message" }]}
            >
              <Input.Password />
            </FormItem>

            <FormItem
              label='New Password'
              name='newPassword'
              rules={[{ required: true, message: "Please Enter the Message" }, { min: 6, message: "Password must be at least 6 characters" }]}
            >
              <Input.Password />
            </FormItem>
            <FormItem>
              <Button type='primary' htmlType='submit' loading={loading} style={{ marginRight: 8 }}>Update Password</Button>
              <Button onClick={() => setShowPasswordForm(false)}>Cancel</Button>
            </FormItem>
          </Form>
        )}



      </Modal>

    </div>
  )
}

export default Navbar
