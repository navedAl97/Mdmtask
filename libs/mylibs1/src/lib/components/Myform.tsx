import React from 'react'
import { Form, Button, Input} from 'antd';

function Myform() {
    const [form] = Form.useForm();


    const handleClear = () => {
        form.resetFields();
      };
    
      const formhandle = (values) => {
        const updatedList = [...formDataList, values];
        setFormDataList(updatedList);
        localStorage.setItem('myFormData', JSON.stringify(updatedList)); // Save to localStorage
        console.log('Submitted data of Users:', values);
      };
    
      const formstyle = {
        attributesForm: {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        input: {
          width: '400px',
          maxWidth: '100%',
        },
        form: {
          display: 'flex',
          justifyContent: 'end',
          flexDirection: 'column',
          padding: '30px',
          border: '1px solid rgb(211, 211, 211)',
          borderRadius: '10px',
        },
        buttonSpacing: {
          marginRight: '10px',
        },
      };
      

  return (
    <div>
        <div className="attributesForm" style={formstyle.attributesForm}>
        <Form form={form} style={formstyle.form} layout="vertical" onFinish={formhandle}>
          <Form.Item label="Chemical Class" name="chemicalClass">
            <Input style={formstyle.input} placeholder="placeholder" />
          </Form.Item>
          <Form.Item label="Therapeutic Class" name="therapeuticClass">
            <Input style={formstyle.input} placeholder="placeholder" />
          </Form.Item>
          <Form.Item label="Action Class" name="actionClass">
            <Input style={formstyle.input} placeholder="placeholder" />
          </Form.Item>
          <Form.Item label="HSN Code" name="hsnCode">
            <Input style={formstyle.input} placeholder="placeholder" />
          </Form.Item>
          <Form.Item label="Habit Forming" name="habitForming">
            <Input style={formstyle.input} placeholder="placeholder" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="button" onClick={handleClear} style={formstyle.buttonSpacing}>
              Clear
            </Button>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Myform
