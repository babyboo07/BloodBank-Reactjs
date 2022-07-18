import { Form } from "antd";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";

const AdminAdd = () => {
  return (
    <div>
      <div>
        <BreadcrumbCommon header={"Account"} title={"Add"} />
      </div>
      <div>
        <Form></Form>
      </div>
    </div>
  );
};

export default AdminAdd;
