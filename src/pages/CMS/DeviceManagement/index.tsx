import React, { useEffect, useState } from "react";
import { DatePicker, Input } from "antd";
import { Table, Button, Modal, Tabs } from "antd";
import { CaretRightOutlined, FilterOutlined } from "@ant-design/icons";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
// import { CaretDownOutlined } from "@ant-design/icons";
import "./style.scss";
type Props = {};
const { TabPane } = Tabs;

const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    width: "12%",
  },
  {
    title: "Booking code",
    dataIndex: "bookingCode",
    width: "12%",
  },
  {
    title: "Số vé",
    dataIndex: "soVe",
    width: "10%",
  },
  {
    title: "Tình trạng sử dụng",
    dataIndex: "trangThai",
    width: "18%",
    render: (trangThai: any) =>
      trangThai ? (
        <span className="flex items-center gap-x-2">
          <span className="block h-2 w-2 bg-primary-green-500 rounded-full"></span>{" "}
          Hoạt động
        </span>
      ) : (
        <span className="flex items-center gap-x-2">
          <span className="block h-2 w-2 bg-primary-red rounded-full"></span>
          Ngưng hoạt động
        </span>
      ),
  },
  {
    title: "Ngày sử dụng",
    dataIndex: "dichVuSuDung",
  },
  {
    title: "Ngày xuất vé",
    dataIndex: "ngayXuatVe",
  },
  {
    title: "Cổng check - in",
    dataIndex: "checkIn",
  },
];

const DeviceManager = (props: Props) => {
  const [table, setTable] = useState({
    data: [],
    pagination: {
      current: 1,
      pageSize: 4,
    },
    loading: false,
  });
  const onChange = (key: string) => {
    console.log(key);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [value, setValue] = useState(1);

  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const onChangeCheck = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };
  const plainOptions = [
    "Tất cả",
    "Cổng 1",
    "Cổng 2",
    "Cổng 3",
    "Cổng 4",
    "Cổng 5",
  ];
  useEffect(() => {
    //Data demo
    const data = [];
    for (let index = 0; index < 50; index++) {
      let temp = {
        key: index,
        stt: `${index}`,
        bookingCode: `ALT${index}`,
        soVe: "192168110",
        trangThai: index % 2 === 0 ? true : false,
        ketNoi: index % 2 === 0 ? true : false,
        dichVuSuDung: "15/06/2022",
        ngayXuatVe: "12/06/2022",
        checkIn: "Cổng 1",
      };
      data.push(temp);
    }

    setTable({ ...table, data: data as any });
  }, []);

  const handlePanigationChange = (current: any) => {
    setTable({ ...table, pagination: { ...table.pagination, current } });
  };

  return (
    <div className="content  pl-[24px] pt-[29px] pr-[10px] mt-8 relative device lg:pr-1">
      {/* <div className="path text-primary-gray-light-400 font-bold text-xl leading-[30px] mb-11">
        Thiết bị &gt;{" "}
        <span className="text-primary-500 text-xl leading-[30px] font-bold">
          Danh sách v
        </span>
      </div> */}
      <h2 className="text-gray-primary-500 text-2xl font-bold mb-4">
        Danh sách vé
      </h2>

      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Gói Gia Đình" key="1"></TabPane>
        <TabPane tab="Gói sự kiện" key="2"></TabPane>
      </Tabs>
      <div className="controls flex justify-between lg:flex-col lg:gap-y-3 md:justify-center md:items-center">
        <div className="item flex flex-col text-base">
          {/* <span className="font-semibold mb-1 text-2xl text-primary-gray-500">
            Danh sách vé
          </span> */}
          <Input.Search
            placeholder="Nhập từ khóa"
            onSearch={(value) => console.log(value)}
            className="w-[300px] h-11 mt-8 text-primary-gray-400"
          />
        </div>
        <div className="flex gap-x-6  md:flex-col">
          <div className="item flex flex-col text-base">
            <Button
              className="mt-8  h-11 font-semibold text-primary-400 flex justify-center "
              onClick={showModal}
            >
              <FilterOutlined />
              Lọc vé
            </Button>
            <Modal
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
            >
              <span className="font-semibold mb-1 text-2xl text-primary-gray-500 mx-44 mt-24 text-center">
                Lọc vé
              </span>
              <div className="item flex flex-col text-sm xl:mt-2 mx-8 mt-4">
                <span className="font-semibold mb-4">Chọn thời gian</span>
                <div className="date-controls">
                  <DatePicker
                    // onChange={handleDateChange}
                    className="rounded-lg w-[150px] h-11 text-primary-gray-400"
                    format={"DD/MM/YYYY"}
                  />
                  <CaretRightOutlined className="" />
                  <DatePicker
                    // onChange={handleDateChange}
                    className="rounded-lg w-[150px] h-11 text-primary-gray-400"
                    format={"DD/MM/YYYY"}
                  />
                </div>
                <span className="font-semibold mt-4 mb-2">
                  Tình trạng sử dụng
                </span>
                <Radio.Group onChange={onChangeRadio} value={value}>
                  <Radio value={1}>Tất cả</Radio>
                  <Radio value={2}>Đã sử dụng</Radio>
                  <Radio value={3}>Chưa sử dụng</Radio>
                  <Radio value={4}>Hết hạn</Radio>
                </Radio.Group>
                <span className="font-semibold mt-4 mb-2">Cổng check - in</span>
                <Checkbox.Group
                  options={plainOptions}
                  defaultValue={["Apple"]}
                  onChange={onChangeCheck}
                />
              </div>
            </Modal>
          </div>
          <div className="item flex flex-col text-base">
            <Button className="mt-8  h-11 font-semibold text-primary-400 ">
              Xuất file (.cvs)
            </Button>
            {/* <Modal
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
            ></Modal> */}
          </div>
        </div>
      </div>

      <div className="relative xl:flex xl:flex-col">
        <Table
          className="mt-4"
          columns={columns}
          dataSource={table.data}
          pagination={{ ...table.pagination, onChange: handlePanigationChange }}
          loading={table.loading}
        />
      </div>
    </div>
  );
};

export default DeviceManager;
