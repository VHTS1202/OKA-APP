import React, { Component, useState, setState } from "react";
import { Menu, Button } from "antd";
import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";
import Hamburger from "./hamburger";
import "./navbar-top.css";
import traveloka_logo from "../../Images/traveloka_logo.png";
import percent from "../../Images/percent.png";
import handshake from "../../Images/handshake.png";
import save from "../../Images/save.png";
import datcho from "../../Images/datcho.png";
import Demo from "./DangNhap";
import { NavLink, Link } from "react-router-dom";
import { FaPercent, FaHandshake, FaSave, FaReceipt } from "react-icons/fa";
import "../HomeLogin/ProfileUser/UserProfile.scss";
import { Dropdown } from "react-bootstrap";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {

    return (
      <div
        ref={ref}
        style={style}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled">
          <Demo />
          
        </ul>
      </div>
    );
  }
);


class NavbarMenu extends Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;

  

    return (
      <div className="bg-1">
        <Menu
          className="menu-1"
          onClick={this.onClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Hamburger />
          <NavLink to="/">
            <img className="logo" src={traveloka_logo} alt="traveloka" />
          </NavLink>

          <Menu.Item className="item-1" id="menu-items ">
            <FaPercent
              className="percent logo-items"
              src={percent}
              alt="percent"
            />
            Khuyến mãi
          </Menu.Item>
          <Menu.Item id="menu-items">
            <FaHandshake
              className="hand logo-items"
              src={handshake}
              alt="handshake"
            />
            Hợp tác với chúng tôi
          </Menu.Item>
          <Menu.Item id="menu-items">
            <FaSave className="save logo-items" src={save} alt="save" />
            Đã lưu
          </Menu.Item>
          <Menu.Item id="menu-items">
            <Link to="/DatChoCuaToi/TatCaSanPham">
              <FaReceipt
                className="seat logo-items"
                src={datcho}
                alt="datcho"
              />
              Đặt chỗ của tôi
            </Link>
          </Menu.Item>
          <Menu.Item>
            <div>
            <Dropdown>
              <Dropdown.Toggle
                as={CustomToggle}
                id="dropdown-custom-components"
              >
                Đăng Nhập
              </Dropdown.Toggle>

              <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  Orange
                </Dropdown.Item>
                <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button className="sign-in" type="primary">
              <NavLink to="/DangKy">
                Đăng <br /> Ký
              </NavLink>
            </Button>
            </div>
            
          </Menu.Item>
          
        </Menu>
      </div>
    );
  }
}

export default NavbarMenu;
