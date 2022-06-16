import { MoreOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate, NavLink, Link, LinkProps } from "react-router-dom";
import { Input, Select } from "antd";

import "./style.scss";
type Props = {
  children?: JSX.Element | JSX.Element[];
};

const PrivateTemplate = (props: Props) => {
  const [isOpen, setisOpen] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  return (
    <div
      className={`overflow-hidden h-screen w-full max-h-screen md:p-1 flex relative admin-template`}
    >
      {/* Navbar */}
      <nav className="lg:hidden relative dashboard bg-transparent border-gray-200 sm:px-4 py-2.5 z-10 w-[200px] h-full">
        <div className=" left-nav w-full h-full flex flex-col items-center">
          <div className="logo flex justify-center items-center h-[100px] w-full ">
            <Link to="/" className="flex items-center h-1/3 w-1/3 object-cover">
              <img src="/images/Logo_insight.jpg" alt="" />
            </Link>
          </div>
          <ul className="flex flex-col items-center w-full h-full">
            <NavLink className="block w-full" to="/dashboard">
              <li className="px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary">
                <i className="fa fa-table mr-[8px]"></i>Trang Chủ
              </li>
            </NavLink>
            <NavLink className="block w-full" to="/devices-ticket">
              <li className="px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary">
                <i className="fa fa-desktop mr-[8px]"></i>Quản lý vé
              </li>
            </NavLink>
            <NavLink className="block w-full" to="/services-management">
              <li className="px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary flex gap-x-1">
                <div className="h-[20px] w-[20px]">
                  <img src="/images/svgs/icon-group.svg" alt="" />
                </div>
                Đổi soát vé
              </li>
            </NavLink>
            {/* <NavLink className="block w-full" to="/progression-management">
              <li className="px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary flex gap-x-1">
                <div className="h-[20px] w-[20px]">
                  <img src="/images/svgs/icon-layers.svg" alt="" />
                </div>
                Cấp số
              </li>
            </NavLink> */}
            {/* <NavLink className="block w-full" to="/reports-management">
              <li className="px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary flex gap-x-1">
                <div className="h-[20px] w-[20px]">
                  <img src="/images/svgs/icon-frame.svg" alt="" />
                </div>
                Báo cáo
              </li>
            </NavLink> */}
            <div className="block w-full relative">
              <li className="dropdown relative px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary flex">
                <div className="flex justify-center items-center">
                  <div className="h-[20px] w-[20px]">
                    <img src="/images/svgs/icon-setting.svg" alt="" />
                  </div>
                  Cài đặt
                  {/* <MoreOutlined /> */}
                </div>
                {/* <div className="dropdown-content">
                  <Link to="/ole-management" className="dropdown-item">
                    Quản lý vai trò
                  </Link>
                  <Link to="/user-management" className="dropdown-item">
                    Quản lý tài khoản
                  </Link>
                  <Link to="/user-log" className="dropdown-item">
                    Nhật ký người dùng
                  </Link>
                </div> */}
              </li>
            </div>
            {/* <button className="block text-left w-full mt-auto bg-primary bg-opacity-10 ">
              <li className="px-[17px] py-[10px] text-sm font-medium text-primary hover:text-white hover:bg-primary">
                <i className="fa fa-sign-out-alt mr-[8px] hover:text-white"></i>
                Đăng xuất
              </li>
            </button> */}
          </ul>
        </div>
      </nav>
      {/* Hamburger button */}
      <button
        type="button"
        data-dropdown-toggle="dropdown"
        className="lg:block hidden space-y-2 absolute top-7 left-7 z-9999"
        onClick={() => {
          setHamburger(!hamburger);
        }}
      >
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
      </button>
      {/* Nav for mobile */}
      <div
        className={`2xl:invisible lg:visible ${
          hamburger ? "block" : "hidden"
        } z-50`}
      >
        <div className="fixed w-52 z-50 bg-white left-nav h-full flex flex-col items-center">
          <div className="logo flex justify-center items-center h-[100px] w-full ">
            <Link to="/" className="flex items-center h-1/3 w-1/3 object-cover">
              <img src="/images/Logo_alta.png" alt="" />
            </Link>
          </div>
          <ul className="flex flex-col items-center w-full h-full">
            <NavLink className="block w-full" to="/dashboard">
              <li className="px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary">
                <i className="fa fa-table mr-[8px]"></i>Dashboard
              </li>
            </NavLink>
            <NavLink className="block w-full" to="/devices-management">
              <li className="px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary">
                <i className="fa fa-desktop mr-[8px]"></i>Thiết bị
              </li>
            </NavLink>
            <NavLink className="block w-full" to="/services-management">
              <li className="px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary flex gap-x-1">
                <div className="h-[20px] w-[20px]">
                  <img src="/images/svgs/icon-group.svg" alt="" />
                </div>
                Dịch vụ
              </li>
            </NavLink>
            <NavLink className="block w-full" to="/progression-management">
              <li className="px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary flex gap-x-1">
                <div className="h-[20px] w-[20px]">
                  <img src="/images/svgs/icon-layers.svg" alt="" />
                </div>
                Cấp số
              </li>
            </NavLink>
            <NavLink className="block w-full" to="/reports-management">
              <li className="px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary flex gap-x-1">
                <div className="h-[20px] w-[20px]">
                  <img src="/images/svgs/icon-frame.svg" alt="" />
                </div>
                Báo cáo
              </li>
            </NavLink>
            <div className="block w-full relative">
              <li className="dropdown relative px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary flex">
                <div className="flex justify-center items-center">
                  <div className="h-[20px] w-[20px]">
                    <img src="/images/svgs/icon-setting.svg" alt="" />
                  </div>
                  Cài đặt hệ thống
                  <MoreOutlined />
                </div>
                {/* <div className="dropdown-content">
                  <Link to="/ole-management" className="dropdown-item">
                    Quản lý vai trò
                  </Link>
                  <Link to="/user-management" className="dropdown-item">
                    Quản lý tài khoản
                  </Link>
                  <Link to="/user-log" className="dropdown-item">
                    Nhật ký người dùng
                  </Link>
                </div> */}
              </li>
            </div>
            {/* <button className="block text-left w-full bg-primary bg-opacity-10 ">
              <li className="px-[17px] py-[10px] text-sm font-medium text-primary hover:text-white hover:bg-primary">
                <i className="fa fa-sign-out-alt mr-[8px] hover:text-white"></i>
                Đăng xuất
              </li>
            </button> */}
          </ul>
        </div>
      </div>
      {/* Content redering */}

      <div className="md:p-5 lg:pt-10 main__content px-5 max-h-screen overflow-y-scroll w-full bg-primary-light-gray">
        {props.children}
      </div>
      <div className="user fixed top-[10px] left-[348px] flex items-center">
        <div className="cursor-pointer iconBox bg-yellow-500 bg-opacity-10 rounded-full h-9 w-9 flex justify-center items-center relative">
          <div className="item flex flex-col text-base">
            <Input.Search
              placeholder="Nhập từ khóa"
              onSearch={(value) => console.log(value)}
              className="w-[300px] h-11 text-primary-gray-400"
            />
          </div>
        </div>
      </div>
      <div className="user fixed top-[10px] right-[48px] flex items-center">
        <div
          // onClick={() => {
          //   setisOpen(!isOpen);
          // }}
          className="cursor-pointer iconBox bg-yellow-500 bg-opacity-10 rounded-full h-9 w-9 flex justify-center items-center relative"
        >
          <i className="fa fa-bell text-yellow-400"></i>
        </div>

        <div className="info flex items-center gap-x-2">
          <div className="imgBox h-10 w-10 ml-6 rounded-full">
            <Link to="/dashboard/profile">
              <img
                src="/images/khanhlong.jpg"
                className="rounded-full h-full w-full"
                alt="useraLT"
              />
            </Link>
          </div>
          <div className="flex flex-col items-start ">
            {/* <span className="text-xs">Xin chào</span> */}
            {/* <span className="text-sm font-bold">Nguyễn Khánh Long</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateTemplate;
