import React from 'react';
import {Link} from 'react-router-dom';
import './UserProfile.scss';
import NavbarMenu from '../../Navbar/navbar-top';
import NavbarMenu2 from '../../Navbar/navbar-bot';
import Footer from '../../footer/footer';
import {UserOutlined} from '@ant-design/icons';
import {EditTwoTone} from '@ant-design/icons';
import {SettingOutlined} from '@ant-design/icons';
import {PhoneOutlined} from '@ant-design/icons';
import {PlusCircleOutlined} from '@ant-design/icons';
import {MailOutlined} from '@ant-design/icons';
import NavbarLogin from '../navbarLogin';

function TrangKhachHang(){
    // Form Edit Name
    function turnOnFormEditName(){
        document.getElementById("edit_name").style.display = "block";     
    }
    function turnOffFormEditName(){
        document.getElementById("edit_name").style.display = "none";          
    }

    // Form Edit Pass
    function turnOnFormEditPass(){
        document.getElementById("edit_pass").style.display = "block";     
    }
    function turnOffFormEditPass(){
        document.getElementById("edit_pass").style.display = "none";          
    }

    // Form Confirm Pass
    function showFormConfirmPass(){
        document.getElementById("confirm_pass").style.display = "block";    
        document.getElementById("add_number_phone").style.display = "none";      
        document.getElementById("add_email").style.display = "none";        
    }
    function hideFormConfirmPass(){
        document.getElementById("confirm_pass").style.display = "none";          
    }

    // Form Add Number Phone
    function showFormAddNumberPhone(){
        document.getElementById("add_number_phone").style.display = "block";          
    }
    function hideFormAddNumberPhone(){
        document.getElementById("add_number_phone").style.display = "none";          
    }

    // Form Add Email
    function showFormAddEmail(){
        document.getElementById("add_email").style.display = "block";          
    }
    function hideFormAddEmail(){
        document.getElementById("add_email").style.display = "none";          
    }
    return(    
        <div className="Page_TCN"  id="page_tcn">
        {/* -- HEADER-- */}
            <div>
                <NavbarLogin />
                <NavbarMenu2 />
            </div>

            {/* -- BODY -- */}
            <div className="Body_TCN">
                {/* LEFT */}
                <div className="Body_TCN_Left">
                    <div>
                        <div className="Body_TCN_Left_Top">
                            {/* Thông tin cá nhấn */}
                        </div>

                        <div className="Body_TCN_Left_Middle">                    
                            <Link>
                                <div><img alt="iconDiemThuong" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_product_duotone_points_24px-065ef870fb5ec16205d863d2342aad24.svg"/></div>
                                <div className="txt_item">Điểm thưởng của tôi</div>
                            </Link>
                            
                            <Link>
                                <div><img alt="iconThe" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_payment_credit_card_24px-9fe4abe64401132265e82b23a523c51b.svg" /></div>
                                <div className="txt_item">Thẻ của tôi</div>
                            </Link>                  
                        </div>

                        <div className="Body_TCN_Left_Bottom">
                            <Link>
                                <div><img alt="iconDatCho" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_user_booking_24px-e122f4f56ce1573ccc85faa381a35fc3.svg" /></div>
                                <div className="txt_item">Đặt chỗ của tôi</div>
                            </Link>
                            <Link>
                                <div><img alt="iconDSGiaoDich" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_user_receipt_24px-242b9943eb1487d4887473a1626ca259.svg"/></div>
                                <div className="txt_item">Danh sách giao dịch</div>
                            </Link>
                            <Link>
                                <div><img alt="iconThongBaoVMB" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_system_alert_24px-afa9b406235e09b9982331c2b37634d4.svg" /></div>
                                <div className="txt_item">Thông báo vé máy bay</div>
                            </Link>
                            <Link>
                                <div><img alt="iconPassengerQuickPick" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_system_guest_passenger_24px-9679b65101281540f5224349d0ba4c7c.svg" /></div>
                                <div className="txt_item">Passenger Quick Pick</div>
                            </Link>
                            <Link>
                                <div><img alt="iconKhuyenMai" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_contact_mail_24px-ef50e195abdec0217f078209109f59b8.svg" /></div>
                                <div className="txt_item">Khuyến mãi</div>
                            </Link>                   
                        </div>

                        <div>
                            <Link>
                                <div><img alt="iconTaiKhoan" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_system_setting_24px-afcd92242e7f7285e0ed341397803f03.svg" /></div>
                                <div className="txt_item">Tài khoản</div>
                            </Link>
                            <Link>
                                <div><img alt="iconDangXuat" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_user_sign_out_log_out_24px-7ec14b5d488e14032a5dc261f41b8da5.svg" /></div>
                                <div className="txt_item">Đăng xuất</div>
                            </Link>
                        </div>
                    </div>
                </div>


                {/* RIGHT */}
                <div className="Body_TCN_Right">
                    {/* BOX_NAME */}
                    <div className="box_name">
                        <div className="box_name_title">
                            <div className="box_name_title_icon"><UserOutlined /></div>
                            <div id="_userFullName">HO TAM NHU</div>
                            <div>
                                <button id="editName" onClick={turnOnFormEditName}><EditTwoTone />&nbsp;Cập nhật hồ sơ</button>
                                <button id="editPass" onClick={turnOnFormEditPass}>Thay đổi mật khẩu</button>
                            </div>
                        </div>
                        {/* EDIT NAME */}
                        <div className="box_name_editName" id="edit_name" style={{display: 'none'}}>
                            <hr />
                            <div>Họ và tên</div>
                            <input type="text" id="txtInfo"/>
                            <div className="box_name_editName_lbnote">Như trên CMND/Hộ chiếu (không dấu)</div>
                            <div className="box_name_editName_btn">
                                <input type="button" value="Hủy" id="cancelEditName" onClick={turnOffFormEditName}/>
                                <input type="submit" value="Lưu" id="saveEditName" onClick={showFormConfirmPass}/>
                            </div>
                        </div>                        
                        {/* EDIT PASSWORD */}
                        <div className="box_name_editPass" id="edit_pass" style={{display: 'none'}}>
                            <hr />
                            <div>Mật khẩu cũ</div>
                            <input type="password" id="txtOldPass"/>
                            <div>Mật khẩu mới</div>
                            <input type="password" id="txtNewPass"/>
                            <div>Xác nhận mật khẩu mới</div>
                            <input type="password" id="txtConfirmNewPass"/>
                            <div className="box_name_editPass_lbnote">Vui lòng nhập một mật khẩu bạn chưa từng sử dụng ở bất kỳ trang web nào</div>
                            <div className="box_name_editPass_btn">
                                <input type="button" value="Hủy" id="cancelEditPass" onClick={turnOffFormEditPass}/>
                                <input type="submit" value="Lưu" id="saveEditPass" />
                            </div>
                        </div>
                    </div>

                    {/* BOX_ENABLE */}
                    <div className="box_enable">
                        <div className="box_enable_title">
                            <div className="box_enable_title_icon"><SettingOutlined /></div>
                            <div>Kích hoạt mã xác thực khi đăng nhập</div>
                        </div>
                        <hr />
                        <div className="box_enable_bottom">
                            <input type="checkbox" id="checkBoxEnable"/>
                            <label>Gửi mã xác thực mỗi khi tôi đăng nhập trên thiết bị mới</label>
                        </div>
                    </div>

                    {/* BOX_PHONE */}
                    <div className="box_phone">
                        <div className="box_phone_title">
                            <div className="box_phone_title_icon"><PhoneOutlined /></div>
                            <div>Điện thoại</div>
                            <div>
                                <button id="addNumberPhone" onClick={showFormAddNumberPhone}><PlusCircleOutlined />&nbsp;Điện thoại</button>
                            </div>
                        </div>
                        <p>Số di động để nhận tin báo liên quan đến tài khoản.</p>                      
                    </div>

                    {/* BOX_EMAIL */}
                    <div className="box_email">
                        <div className="box_email_title">
                            <div className="box_email_title_icon"><MailOutlined /></div>
                            <div>Email</div>
                            <div>
                                <button id="addNumberPhone" onClick={showFormAddEmail}><PlusCircleOutlined />&nbsp;Email</button>
                            </div>
                        </div>
                        <p>Địa chỉ email để nhận tin báo liên quan đến tài khoản.</p>
                    </div>
                </div> 
            </div> 

            {/*FORM XÁC NHẬN MẬT KHẨU */}
            <div className="formConfirm" id="confirm_pass">
                <div className="formConfirm_content"  >
                    <h2>Xác nhận tài khoản của bạn</h2>
                    <p>Bạn phải nhập lại mật khẩu để cập nhật truy cập</p>
                    <div className="formConfirm_content_txtPass">
                        <input type="password" id="txtConfirmPass"/>
                    </div>
                    <div className="formConfirm_content_btnSubmit">
                        <input type="submit" value="Đồng ý" id="btnSubmit"/>
                    </div>
                    <div>
                        <input type="button" value="Hủy" id="btnCancel" onClick={hideFormConfirmPass}/>
                    </div>            
                </div> 
            </div>

            {/* FORM NHẬP SỐ ĐIỆN THOẠI */}
            <div className="formAddNumberPhone" id="add_number_phone">
                <div className="formAddNumberPhone_content">
                    <h2 className="formAddNumberPhone_content_titleNP">Thêm tài khoản đăng nhập</h2>
                    <p className="formAddNumberPhone_content_lbNP">Điện thoại</p>
                    <div>
                        <input type="number" id="txtNumberPhone"/>
                    </div>
                    <div>
                        <input type="button" value="Hủy" id="cancelAddNumberPhone" onClick={hideFormAddNumberPhone}/>
                        <input type="submit" value="Lưu" id="saveNumberPhone" onClick={showFormConfirmPass}/>
                    </div>
                </div>
            </div>
            {/* FORM NHẬP EMAIL */}
            <div className="formAddEmail" id="add_email">
                <div className="formAddEmail_content">
                    <h2 className="formAddEmail_content_titleEmail">Thêm tài khoản đăng nhập</h2>
                    <p className="formAddEmail_content_lbEmail">Điện thoại</p>
                    <div>
                        <input type="text" id="txtEmail"/>
                    </div>
                    <div>
                        <input type="button" value="Hủy" id="cancelAddEmail" onClick={hideFormAddEmail}/>
                        <input type="submit" value="Lưu" id="saveEmail" onClick={showFormConfirmPass}/>
                    </div>
                </div>
            </div>

            {/* -- FOOTER -- */}
            <div>
                <Footer />
            </div>
        </div> 
    );
}

export default TrangKhachHang;