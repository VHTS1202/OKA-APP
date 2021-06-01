import './LichSuGD.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function LichSuGD() {
    return (
        <div className="transaction">
            <div className="redirect">
                <p>Xem tất cả vé máy bay và phiếu thanh toán trong <a className="dcct" href="https://www.traveloka.com/vi-vn/user/mybooking">Đặt chỗ của tôi</a></p>
            </div>
            <div className="date">
                <button className="btn" type="button"> 30 ngày qua </button>{" "}
                <button className="btn" type="button"> Th04 2021 </button>{" "}
                <button className="btn" type="button"> Th05 2021 </button>{" "}
                <button className="btn" type="button"> Ngày tùy chọn </button>{" "}
                <DropdownButton title="Bộ lọc">
                    <form className="form">
                <a>Hiển thị những giao dịch này</a><br></br>
                <a className="title">Loại sản phẩm</a><br></br>
                <hr class="dashed"></hr>
                    <label class="checkbox-inline">
                        <input type="checkbox" value=""/>Vé máy bay
                    </label>
                    <label class="checkbox-inline" className="cb02">
                        <input type="checkbox" value=""/>Đưa đón sân bay
                    </label><br></br>
                    <label class="checkbox-inline">
                        <input type="checkbox" value=""/>Extra Baggage
                    </label>
                    <label class="checkbox-inline" className="cb02">
                        <input type="checkbox" value=""/>Combo tiết kiệm
                    </label><br></br>
                    <label class="checkbox-inline">
                        <input type="checkbox" value=""/>Khách sạn
                    </label>
                    <label class="checkbox-inline" className="cb02">
                        <input type="checkbox" value=""/>Xperience
                    </label><br></br>
                    <label class="checkbox-inline">
                        <input type="checkbox" value=""/>Cho thuê xe
                    </label>
                    <label class="checkbox-inline" className="cb02">
                        <input type="checkbox" value=""/>Bảo hiểm du lịch
                    </label><br></br>
                <a className="title">Phương thức thanh toán</a><br></br>
                <hr class="dashed"></hr>
                    <label class="checkbox-inline">
                        <input type="checkbox" value=""/>Thẻ tín dụng
                    </label>
                    <label class="checkbox-inline" className="cb02">
                        <input type="checkbox" value=""/>Tại cửa hàng
                    </label><br></br>
                    <label class="checkbox-inline">
                        <input type="checkbox" value=""/>Chuyển khoản ngân hàng
                    </label>
                    <label class="checkbox-inline" className="cb02">
                        <input type="checkbox" value=""/>Bưu điện
                    </label><br></br>
                    <label class="checkbox-inline">
                        <input type="checkbox" value=""/>Thẻ ATM nội địa
                    </label></form>
                </DropdownButton>
            <div className="trans">
                <p>Tất cả giao dịch sẽ được hiển thị tại đây.</p>
            </div>
        </div>
        </div>
    );
}

export default LichSuGD;