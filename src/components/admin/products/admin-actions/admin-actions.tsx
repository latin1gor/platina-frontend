import CreateBrand from "@/components/admin/products/admin-actions/modals/create-brand.tsx";
import CreateType from "@/components/admin/products/admin-actions/modals/create-type.tsx";
import CreateDevice from "@/components/admin/products/admin-actions/modals/create-device.tsx";

const AdminActions = () => {
  return (
    <div
      className={"flex flex-col justify-between h-44 min-w-72 m-4 ml-0 mr-12"}
    >
      <CreateBrand />
      <CreateType />
      <CreateDevice />
    </div>
  );
};
export default AdminActions;
