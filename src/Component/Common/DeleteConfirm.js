import { ExclamationCircleOutlined } from "@ant-design/icons";
import { message, Modal } from "antd";

const { confirm } = Modal;

const DeleteConfirm = ({ id }) => {
  return confirm({
    title: "Do you Want to delete these items " + id + "?",
    icon: <ExclamationCircleOutlined />,
    content: "Some descriptions",
    onOk() {
      message.success({
        content: "Xóa thành công!",
        className: "custom-class",
        style: {
          marginTop: "6vh",
        },
      });
    },
    onCancel() {
      message.error({
        content: "Không thể xóa!",
        className: "custom-class",
        style: {
          marginTop: "6vh",
        },
      });
    },
  });
};

export default DeleteConfirm;
