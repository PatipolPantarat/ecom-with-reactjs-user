import { Button } from "../../button";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { InputGroup } from "../../input/inputbox";
import { FormModal } from "../../modal";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import { addAddress, editAddress, delAddress } from "../../../Slices/userSlice";

export default function MyAddress() {
  const { userAddress } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [addForm, setAddForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    phone: "",
    address: "",
  });

  // const handleAdd = () => {
  // setOpenAddModal(true);
  // dispatch(
  //   addAddress({
  //     id: "" + (userAddress.length + 1),
  //     name: "testName0" + (userAddress.length + 1),
  //     phone: "00000" + (userAddress.length + 1),
  //     address: "testAddress0" + (userAddress.length + 1),
  //   })
  // );
  // };
  const handleEdit = (
    id: string,
    name: string,
    phone: string,
    address: string
  ) => {
    setEditForm({
      ...editForm,
      id,
      name,
      phone,
      address,
    });
    setOpenEditModal(true);
  };
  const handleDel = (id: string) => {
    dispatch(delAddress({ id }));
  };

  const handleAddSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addAddress(addForm));
    setOpenAddModal(false);
    setAddForm({
      name: "",
      phone: "",
      address: "",
    });
  };

  const handleEditSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(editAddress(editForm));
    setOpenEditModal(false);
  };
  return (
    <section className="w-full flex flex-col gap-2">
      <div className="flex justify-between items-center border-b border-dark-300">
        <h1 className="text-lg font-medium text-dark p-5">My Address</h1>
        <Button
          type="button"
          variant="primary"
          onClick={() => setOpenAddModal(true)}
        >
          <PlusIcon className="w-5 h-5" />
          Add
        </Button>
      </div>

      {userAddress.map((address) => (
        <div
          key={address.id}
          className=" p-5 flex justify-between gap-5 border-b border-dark-300 relative"
        >
          <div className="">
            <span className="font-medium">
              {address.name} |{" "}
              <span className="text-dark-500">{address.id}</span>
            </span>
            <p className="text-dark-400">{address.address}</p>
          </div>
          <div className="p-2 grid place-items-center me-5">
            <Button
              type="button"
              variant="warning"
              onClick={() =>
                handleEdit(
                  address.id,
                  address.name,
                  address.phone,
                  address.address
                )
              }
            >
              Edit
            </Button>
          </div>
          <button
            type="button"
            className="absolute top-0 right-0 text-dark-400 rounded-lg hover:text-danger duration-150"
            onClick={() => handleDel(address.id)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
      ))}
      {/* edit model */}
      <FormModal
        title="Edit your address"
        openModal={openEditModal}
        onCancel={() => setOpenEditModal(false)}
        onSubmit={(e) => handleEditSubmit(e)}
        onSubmitText="Edit"
      >
        <div className="mt-5 flex flex-col gap-5">
          <InputGroup
            label="Name"
            id="name"
            name="name"
            autoComplete="name"
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
          />
          <InputGroup
            label="Phone"
            id="phone"
            name="phone"
            autoComplete="phone"
            value={editForm.phone}
            onChange={(e) =>
              setEditForm({ ...editForm, phone: e.target.value })
            }
          />
          <InputGroup
            label="Address"
            id="address"
            name="address"
            autoComplete="address"
            value={editForm.address}
            onChange={(e) =>
              setEditForm({ ...editForm, address: e.target.value })
            }
          />
        </div>
      </FormModal>

      {/* Add Modal */}
      <FormModal
        title="Add your address"
        openModal={openAddModal}
        onCancel={() => setOpenAddModal(false)}
        onSubmit={(e) => handleAddSubmit(e)}
        onSubmitText="Add"
      >
        <div className="mt-5 flex flex-col gap-5">
          <InputGroup
            label="Name"
            id="name"
            name="name"
            autoComplete="name"
            value={addForm.name}
            onChange={(e) => setAddForm({ ...addForm, name: e.target.value })}
          />
          <InputGroup
            label="Phone"
            id="phone"
            name="phone"
            autoComplete="phone"
            value={addForm.phone}
            onChange={(e) => setAddForm({ ...addForm, phone: e.target.value })}
          />
          <InputGroup
            label="Address"
            id="address"
            name="address"
            autoComplete="address"
            value={addForm.address}
            onChange={(e) =>
              setAddForm({ ...addForm, address: e.target.value })
            }
          />
        </div>
      </FormModal>
    </section>
  );
}
