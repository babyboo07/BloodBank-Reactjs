import {Table, Button } from "antd";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons'
import { ExclamationCircleOutlined } from '@ant-design/icons';

const col = [
  {
    title: "Stt",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "FullName",
    dataIndex: "fullName",
    key: "id",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "id",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "id",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "id",
  },
  {
    title: "DOB",
    dataIndex: "dob",
    key: "id",
    render: (val) => {
      return <span>{val.toLocaleString("en-US")}</span>;
    },
  },
  {
    title: "Role",
    dataIndex: "roleName",
    key: "id",
  },
  {
    title: "Action",
    render: (val) => {
      return (
        <>
          <Link className="btn mr-3" to={"/account/edit/" + val.id}>
            <FontAwesomeIcon icon={faPen} color="#ffc107" />
          </Link>
          <Button
            className="btn mr-1"
          >
            <FontAwesomeIcon icon={faTrashCan} color="#dc3545" />
          </Button>
        </>
      );
    },
  },
];

const AdminList = () => {
  return (
    <div>
      <div>
        <BreadcrumbCommon header={"Account"} title={"List"} />
      </div>
      <div className=" d-flex justify-content-end ">
        <Link to={"/account/add"}>
          <Button className="btn-success">Thêm Người Dùng</Button>
        </Link>
      </div>
      <div className="pt-3">
        <Table columns={col} rowKey={"id"}  />
      </div>
    </div>
  );
};
export default AdminList;
