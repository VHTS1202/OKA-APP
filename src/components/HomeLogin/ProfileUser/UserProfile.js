import React from 'react'
import './UserProfile.css'
import {AiOutlineBell} from 'react-icons/ai'


import { Drawer, Button } from 'antd';

class Button1 extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="site-drawer-render-in-current-wrapper">
        Render in this
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}


function UserProfile() {
    return (
        <div className='formuser'>
            <div className='noti'>
                <div className='kbY4M'>
                    <div className='nho'></div>
                    <AiOutlineBell />
                    <h4 className='text1'>Bạn muốn nhận thông báo đăng nhập mới và các hoạt động khác của tài khoản?</h4>
                    <div className='text2'>
                        <a href='#' className='label'>Cho phép gửi thông báo trên máy tính</a>
                    </div>

                </div>
            </div>
            <div style={{width: "300px"}}>
                <Button1 />
            </div>
        </div>
    )
}

export default UserProfile;
