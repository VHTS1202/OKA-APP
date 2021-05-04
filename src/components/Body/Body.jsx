import React from 'react';
import './Body.css';
import 'antd/dist/antd.css';
import {Tabs} from 'antd';
const {TabPane} = Tabs;

function Body(){
    return(
        <div>
            {/*  */}
            <div className="tvoka">
                <h2 className="txt1">Chỉ dành riêng cho thành viên Oka</h2>
                
                <div className="div1">
                    <a href="#">Đăng nhập</a> hoặc <a href="#">đăng ký</a> để khám phá thêm nhiều ưu đãi đặc biệt
                </div>

                <div>
                    <a href="#" className="a1">
                        <div>
                            <img className="img1" src="https://ik.imagekit.io/tvlk/image/imageResource/2017/09/25/1506337373515-af609f47175de76990927fa1b716955e.svg?tr=q-75" alt="ThongBaoGiaVe"/>
                            <span className="span1">Thông báo giá vé</span>
                        </div>                                           
                    </a>
                    <a href="#" className="a1">
                        <div>
                            <img className="img1" src ="https://ik.imagekit.io/tvlk/image/imageResource/2018/12/13/1544686625813-8ab151967e81e28cc2eb3288980fe2c0.svg?tr=q-75" alt="DanhSachDaLuu"/>
                            <span className="span1">Danh sách đã lưu</span>
                        </div>
                    </a>
                    <a href="#" className="a1">
                        <div>
                            <img className="img1" src="https://ik.imagekit.io/tvlk/image/imageResource/2017/09/25/1506337376527-d35060d4ef861c829d6902ff7ac4b664.svg?tr=q-75" alt="EasyReschedule" />
                            <span className="span1">Easy Reschedule</span>
                        </div>
                    </a>    
                    <a href="#" className="a1">
                        <div>
                            <img className="img1" src="https://ik.imagekit.io/tvlk/image/imageResource/2017/09/25/1506337380633-78091cf18a1b1d8cc6f125991f7d9c17.svg?tr=q-75" alt="PassengerQuickPick" />
                            <span className="span1">Passenger Quick Pick</span>
                        </div>
                    </a>
                    <a href="#" className="a1">
                        <div>
                            <img className="img1" src="https://ik.imagekit.io/tvlk/image/imageResource/2021/03/24/1616581719449-ece21d09dd11dec15508b68022d3b4ac.svg?tr=q-75" alt="DiemChaoMung" />
                            <span className="span1">1000 điểm chào mừng</span>
                        </div>
                    </a>
                </div>
            </div>

            {/*  */}
            <div className="div2">
                <div className="divText">
                    <h2 className="txt2">Thêm không gian cho gia đình và bạn bè</h2>
                    <span className="span4">Rất nhiều lựa chọn hấp dẫn các căn hộ và biệt thự trên Oka</span>
                </div>
                <div className="divImg" data-elevation="1">
                    <a href="#" className="a2">
                        <div className="img2">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/07/01/1561969742861-54d523759500f217d6b7a094c3db0e43.jpeg?tr=q-75,w-298" alt="Biệt thự"/>
                        </div>
                        <div>
                            <span className="span2">Biệt thự</span>
                        </div>
                        <div>
                            <span className="span3">17,000+ Biệt thự</span>
                        </div>
                    </a>
                    <a href="#" className="a2">
                        <div className="img2">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/07/01/1561969736953-639cf0e0bacf7b1f0fbf05121ea147ac.jpeg?tr=q-75,w-298" alt="Căn hộ" />
                        </div>
                        <div>
                            <span className="span2">Căn hộ</span>
                        </div>
                        <div>
                            <span className="span3">25,000+ Căn hộ</span>
                        </div>
                    </a>
                </div>
            </div>

            {/*  */}
            <div className="div3">
                <div className="div3_1">
                    <div>
                        <h2>Khuyến mãi được yêu thích</h2>
                    </div>
                    <div>
                        {/* <Tabs defaultActiveKey="1">
                            <TabPane tab="Tab 1" key="1">
                                Tab 1
                            </TabPane>
                            <TabPane tab="Tab 2" key="2">
                                Tab 2
                            </TabPane>
                            <TabPane tab="Tab 3" key="3">
                                Tab 3
                            </TabPane>
                        </Tabs> */}
                    </div>
                </div>
                <div className="div3_2">
                    <a className="a5"  href="#">Xem thêm khuyến mãi &gt;</a>
                </div>
            </div>

            {/*  */}
            <div className="div4">
                <h2 className="txt3">Oka đã dược nhắc đến trên</h2>
                <div className="div4_1">
                    <a className="a3" rel="noreferrer" target="_blank" href="https://vecom.vn/traveloka-lam-chu-chuyen-di-cua-ban-voi-ung-dung-dat-phong-khach-san-ve-may-bay-2-trong-1">
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/09/22/1506075511476-549788d3f233d9fd4f82e56aadaa0699.jpeg?tr=q-75,w-115" alt="VECOM"/>
                    </a>
                    <a className="a3" rel="noreferrer" target="_blank" href="https://cafef.vn/startup-traveloka-dem-cong-nghe-lam-loi-the-canh-tranh-toi-viet-nam-2016082312233614.chn">
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/09/22/1506075524458-863bf8978027623596b07905b77c3038.jpeg?tr=q-75,w-115" alt="CAFEF" />
                    </a>
                    <a className="a3" rel="noreferrer" target="_blank" href="https://thanhnien.vn/tai-chinh-kinh-doanh/mot-trang-web-tim-kiem-da-tro-thanh-start-up-ota-thanh-cong-nhu-the-nao-746233.html">
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/09/22/1506075529727-26e887499b15d490d6d8b7fe59254960.png?tr=q-75,w-115" alt="THANHNIEN" />
                    </a>
                    <a className="a3" rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=kyuh1Ljnj6I">
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/19/1513667223219-208b4bee6762dda1687818bbfce0c833.png?tr=q-75,w-115" alt="VTV3" />
                    </a>
                    <a className="a3" rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=kyuh1Ljnj6I">
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/19/1513667252903-2eee8ba567cfce19f977d58698e00f63.png?tr=q-75,w-115" alt="HTV9" />
                    </a>
                    <a className="a3" rel="noreferrer" target="_blank" href="https://startup.vnexpress.net/tin-tuc/y-tuong-moi/ung-dung-dat-phong-thu-hut-7-trieu-nguoi-cua-3-ky-su-cong-nghe-3471218.html">
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/09/22/1506075535089-95cb6f321f857a1f7a19feb443689a35.jpeg?tr=q-75,w-115" alt="VNEXPRESS" />
                    </a>
                </div>
            </div>

            {/*  Sửa href */}
            <div className="div5">
                <div className="div5_1">
                    <h2 className="txt4">Xem những bài blog mới nhất của Oka</h2>
                    <div className="div5_11">
                        <div className="div5_111">
                        <a className="a4" style={{backgroundImage: "url(https://ik.imagekit.io/tvlk/image/imageResource/2020/08/13/1597303658545-2a956f5d1953595076b2c652de1d751d.png?tr=q-75)"}} rel="noopener noreferrer nofollow" target="_blank" href="https://www.traveloka.com/vi-vn/explore/tips/du-lich-dung-cach-giam-cau-nga-voi/59242">
                                <div className="div5_1111"></div>
                                <h4 className="txt5"> </h4>
                            </a>
                        </div>
                        <div className="div5_111">
                            <a className="a4" style={{backgroundImage: "url(https://ik.imagekit.io/tvlk/image/imageResource/2020/09/03/1599126674035-fd7772c9cebbc3539b81de39648019d8.jpeg?tr=q-75)"}} rel="noopener noreferrer nofollow" target="_blank" href="https://www.traveloka.com/vi-vn/explore/activities/du-lich-trai-nghiem-tai-nha/59243">
                                <div className="div5_1111"></div>
                                <h4 className="txt5">@HomeXperience tận nhà, vui chơi thiệt đã!</h4>
                            </a>
                        </div>
                        <div className="div5_111">
                            <a className="a4" style={{backgroundImage: "url(https://ik.imagekit.io/tvlk/image/imageResource/2020/09/03/1599127462617-584e001adab3b7c709364e8e91eb6b24.jpeg?tr=q-75)"}} rel="noopener noreferrer nofollow" target="_blank" href="https://blog.traveloka.com/vn/nhung-dia-diem-vui-choi-cuoi-tuan-o-sai-gon/">
                                <div className="div5_1111"></div>
                                <h4 className="txt5">Địa điểm vui chơi cuối tuần ở Sài Gòn</h4>
                            </a>
                        </div>
                        <div  className="div5_111">
                            <a className="a4" style={{backgroundImage: "url(https://ik.imagekit.io/tvlk/image/imageResource/2019/05/10/1557465829245-851606936135dcb830deca605057c1d4.jpeg?tr=q-75)"}} rel="noopener noreferrer nofollow" target="_blank" href="https://blog.traveloka.com/vn/cap-nhat-dia-diem-du-lich-moi-da-lat/">
                                <div className="div5_1111"></div>
                                <h4 className="txt5">Cập nhật ngay 6 địa điểm mới cho hội ghiền Đà Lạt</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;