import React from 'react'
import 'antd/dist/antd.css';
import { Typography, Checkbox, DatePicker, Space, Button , Select, Radio } from 'antd';
import moment from 'moment';

// import {MdAirlineSeatReclineExtra} from 'react-icons/md';
import { SearchOutlined } from '@ant-design/icons';
import Layout from 'antd/lib/layout/layout';
import './Muavemaybay.scss'
import {MdAirlineSeatReclineNormal} from 'react-icons/md'
import {FaPlaneDeparture, FaPlaneArrival} from 'react-icons/fa'


const { Option } = Select;

function onChange1(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

function handleChange(value) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';



const { Text } = Typography;

const Muavebay1 = () => {
    const [disabled, setDisabled] = React.useState(true);
    const toggle = () => {
        setDisabled(!disabled);
      };
    function onChange2(e) {
        console.log(`checked = ${e.target.checked}`);
      }

    const [value, setValue] = React.useState(1);
  
    const onChange = e => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
  
    return (
      <div >
        <div className='formvebay'>
      <Radio.Group className='radio' onChange={onChange} value={value}>
        <Radio value={1}>Một chiều/ Khứ Hồi</Radio>
        <Radio value={2}>Nhiều Thành Phố</Radio>
        
      </Radio.Group>
      <br />
      <div className='label1'>
          <div className='label2'>
          <Text strong>Điểm Khởi Hành</Text>
          <Text style={ {marginLeft : '60px'} } strong>Điểm Đến</Text>
          </div>
          <div>
            <Select     addonBefore = {<FaPlaneArrival />}
                        
                        showSearch
                        style={{ width: 150 }}
                        placeholder="Điểm Khởi Hành"
                        optionFilterProp="children"
                        onChange={onChange1}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }>
                        <Option value="HAN">Hà Nội</Option>
                        <Option value="SGN">Hồ chí Minh</Option>
                        <Option value="DAD">Đà Nẵng</Option>
            </Select>
            <Select
                        showSearch
                        style={{ width: 150 }}
                        placeholder="Điểm Đến"
                        optionFilterProp="children"
                        onChange={onChange1}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }>
                        <Option value="HAN">Hà Nội</Option>
                        <Option value="SGN">Hồ chí Minh</Option>
                        <Option value="DAD">Đà Nẵng</Option>
        
            </Select>
          </div>


      </div>
        <div>
            <Text strong style={{marginTop: "10px"}}>
                Ngày đi
            </Text><br />
        <Space direction="vertical" size={12}>
            <DatePicker defaultValue={moment('2021/04/01', dateFormat)} format={dateFormat} />
   
                        
         </Space>
        </div>
        <div>
        <Checkbox onClick={toggle} onChange={onChange2}>Khứ Hồi</Checkbox> <br />
        <RangePicker
        defaultValue={[moment('2021-04-06', dateFormat), moment('2021-04-09', dateFormat)]}
        disabled={disabled}/> <br />
      
        <Text strong>Hạng Ghế</Text> <br />
        <Select
          icon={<MdAirlineSeatReclineNormal/>}
          labelInValue
          defaultValue={{ value: 'Phothong' }}
          style={{ width: 250 }}
          onChange={handleChange}
        >
          <Option value="Phothong">Phổ Thông</Option>
          <Option value="Phongthongdacbiet">Phổ Thông Đặc Biệt</Option>
          <Option value="ThuongGia">Thương Gia</Option>
          <Option value="HangNhat">Hạng Nhất</Option>
        </Select> <br />
        
        </div>
        <div className='search'>
          <Button style={{ backgroundColor: 'white', marginTop: '30px', width:'350px' }} type="dashed" icon={<SearchOutlined />}>
          Search
          </Button>
        </div>
        
        </div>
        </div>
    );
  };
 
export default Muavebay1;
