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
    <div className="flex bg-white m-3 sm:m-5 h-12 sm:h-14 w-full rounded-md z-10 justify-between items-center px-4 sm:px-8 md:px-14">
  <Toaster position="top-center" reverseOrder={false} />

  {/* Left Logo Section */}
  <Link to="/dashboard">
    <div className="flex space-x-1 items-center">
      <VscBook className="text-2xl sm:text-3xl text-gray-400" />
      <span className="text-lg sm:text-xl md:text-2xl text-cyan-950 font-bold">
        MemoryVault
      </span>
    </div>
  </Link>

  {/* Right User Section */}
  <div className="flex space-x-2 items-center">
    <BiSolidUserRectangle
      className="text-xl sm:text-2xl cursor-pointer"
      onClick={showModal}
    />
    <Popconfirm
      title="Are you sure you want to logout?"
      onConfirm={confirmLogout}
      onCancel={CancelLogout}
      okText="Yes"
      cancelText="No"
    >
      <span className="text-sm sm:text-md text-red-500 hover:underline cursor-pointer">
        Logout
      </span>
    </Popconfirm>
  </div>

  {/* User Info Modal */}
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
        : null
    }
  >
    {!showPasswordForm ? (
      <>
        <p>
          <strong>Fullname: </strong>
          {userInfo?.fullname || "NA"}
        </p>
        <p>
          <strong>Email: </strong>
          {userInfo?.email || "NA"}
        </p>
        <p
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => setShowPasswordForm(true)}
        >
          Change Password
        </p>
      </>
    ) : (
      <Form layout="vertical" form={form} onFinish={handlePasswordChange}>
        <FormItem
          label="Old Password"
          name="oldPassword"
          rules={[{ required: true, message: "Please Enter the Old Password" }]}
        >
          <Input.Password />
        </FormItem>

        <FormItem
          label="New Password"
          name="newPassword"
          rules={[
            { required: true, message: "Please Enter the New Password" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <Input.Password />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            style={{ marginRight: 8 }}
          >
            Update Password
          </Button>
          <Button onClick={() => setShowPasswordForm(false)}>Cancel</Button>
        </FormItem>
      </Form>
    )}
  </Modal>
</div>

  )
}

export default Navbar
