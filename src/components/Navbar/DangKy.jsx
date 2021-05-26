import React from 'react';
import { Link } from 'react-router-dom';

function DangKy(){
    function changForm(){
        
    }
    return(
        <div>
            <div style={{padding: '12px 12px', width: '300px', border: 'solid 1px #e8e0e0', margin: '12px', borderRadius: '4px'}}>
                <h2 style={{textAlign: 'center'}}>Đăng ký thành viên Oka</h2>
                <div>
                    <div style={{display: 'flex'}}>
                        <p style={{marginRight: '60px'}}>Số điện thoại</p>
                        <Link to="">Dùng email?</Link>
                    </div>
                    <p>Thông tin của bạn hoàn toàn được bảo mật.</p>
                    <div style={{display: 'flex'}}>
                        <input type="text" placeholder="VD: 090276434" style={{marginRight: '10px', width:'200px', height: '38px', border: 'solid 1px #c6c4c4', borderRadius: '3px'}}/>
                        <input type="submit" style={{width: '100px', height:'38px', fontSize:'17px', backgroundColor:'orange', color: 'white', border: 'none', borderRadius: '5px'}} value="Tham gia"/>
                    </div>
                    <div style={{textAlign: 'center', margin: '10px 0', padding:'10px 0', backgroundColor:'#f4fbfe'}}>Bạn đã đăng ký? <Link to="">Đăng nhập</Link></div>
                </div>
            </div>
        </div>
    );
}

export default DangKy;