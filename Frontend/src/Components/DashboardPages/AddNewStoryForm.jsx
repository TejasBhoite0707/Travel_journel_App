import React, { useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Space,
  Switch,
  TreeSelect,
  Upload,

} from 'antd';
import FormItem from 'antd/es/form/FormItem';
import axiosInstance from '../../utils/ApiService';
const NewStoryForm = ({form}) => {
   
    const normFile = e => {
        if (Array.isArray(e)) {
          return e;
        }
        return e === null || e === void 0 ? void 0 : e.fileList;
      };

      const onFinish=async(values)=>{
        try {
           const payload = {
        title: values.title,
        story: values.story,
        
        visitedLocation: values.visitedLocation,
        visitedDate: values.visitedDate?.format('YYYY-MM-DD'),
        isFavourite: values.isFavourite || false,
        imageUrl: values.image[0].response.imageUrl,
      };
      console.log(payload);
      
      const response=await axiosInstance.post('/api/travel-story-add',payload)
      console.log(response);
      message.success('Story added successfully!');
      form.resetFields();
        } catch (error) {
           console.error('Error submitting form:', error);
      
        }
      }
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form
    form={form}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onFinish={onFinish}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      
    >
      
      <Form.Item label="Title" name='title' rules={[{required:true}]}>
        <Input />
      </Form.Item>

      <Form.Item label="Story" name='story' rules={[{required:true}]}>
         <Input.TextArea rows={4}/>
      </Form.Item>

<Form.List name="visitedLocation" rules={[{required:true}]}>
       {(fields,{add,remove})=>(
        <Form.Item label='Visited Locations' required>
        <>
        {fields.map(({key,name,...restField})=>(
          <Space>
            <Form.Item
            {...restField}
            name={name}
            rules={[{required:true,message:"Enter A Location"}]}
            noStyle
            >
<Input placeholder='Enter the Place name' style={{width:'250px'}}/>
            </Form.Item>
            <MinusCircleOutlined onClick={()=>remove(name)}/>
          </Space>
        ))}
<Form.Item wrapperCol={{offset:6}}>
<Button type='dashed' onClick={()=>add()} block icon={<PlusOutlined/>} >
Add Place
</Button>
</Form.Item>
        </>
        </Form.Item>
       )}
      </Form.List>

<Form.Item label="Date Visited" name='visitedDate' rules={[{required:true}]}>
        <DatePicker />
      </Form.Item>

      <Form.Item label="Upload Image" name='image' valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload name='image'
          customRequest={async({file,onSuccess,onError})=>{
         const formData=new FormData();
         formData.append('image',file);
         try {
          const response=await axiosInstance.post('/api/image-upload',formData,{
            headers:{
              "Content-Type":'multipart/form-data'
            }
          })
          onSuccess(response.data,file)
         } catch (err) {
          console.error(err);
          onError(err)
         }
          }}
          
          listType="picture-card">
            <div
              style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
              type="button"
            >
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
      
     
      <Form.Item  valuePropName="checked" name='isFavourite' label='Favourite'>
        <Switch />
      </Form.Item>

      
    </Form>
  );
};
export default NewStoryForm;