import { Button } from "../../button";
import { InputGroup } from "../../input/inputbox";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import { editProfile, updateCurrentUser } from "../../../Slices/userSlice";
import { useState } from "react";
import { FormModal, OKModal } from "../../modal";
import { changePasswordAPI } from "../../../api/auth";

export default function MyProfile() {
  const [openChangePasswordModal, setOpenChangePasswordModal] =
    useState<boolean>(false);
  const [openOKModal, setOpenOKModal] = useState<boolean>(false);
  const [editPasswordForm, setEditPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const { fullName, phoneNumber, email, imageUrl } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch: AppDispatch = useDispatch();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onload = () => {
      dispatch(
        editProfile({
          imageUrl: reader.result as string,
          fullName,
          phoneNumber,
        })
      );
    };
    reader.readAsDataURL(file as Blob);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // update user data to server
    dispatch(
      updateCurrentUser({
        fullName,
        phoneNumber,
        imageUrl,
      })
    )
      .then(() => {
        console.log("User data updated successfully");
      })
      .catch((error) => {
        console.error("Failed to update user data:", error);
      });
  };

  const handleChangePasswordSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    // check if passwords match
    if (editPasswordForm.newPassword !== editPasswordForm.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // send change password to server
    changePasswordAPI({
      oldPassword: editPasswordForm.oldPassword,
      newPassword: editPasswordForm.newPassword,
    })
      .then(() => {
        setOpenChangePasswordModal(false);
        setEditPasswordForm({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        setOpenOKModal(true);
      })
      .catch((error) => {
        console.error("Failed to change password:", error);
      });
  };

  return (
    <div className="w-full">
      <div className="p-5 flex justify-between items-center border-b border-dark-300">
        <h1 className="text-lg font-medium text-dark">My Profile</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className=" p-5 grid grid-cols-2 gap-5">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-dark text-lg font-medium">Profile Picture</h1>
            <div className="h-48 w-48">
              <div className="border rounded-full border-dark-300 size-full">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="#"
                    className="rounded-full h-full w-full"
                  />
                ) : (
                  <img
                    src="https://via.placeholder.com/300"
                    alt="#"
                    className="rounded-full h-full w-full"
                  />
                )}
              </div>
              <input
                type="file"
                id="user_profile_image"
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
              />
            </div>
            <Button
              type="button"
              variant="primary"
              onClick={() =>
                document.getElementById("user_profile_image")?.click()
              }
            >
              Upload
            </Button>
          </div>
          <div className="flex flex-col gap-5">
            <InputGroup
              label="Full Name"
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              defaultValue={fullName}
              onChange={(e) => {
                dispatch(
                  editProfile({
                    fullName: e.target.value,
                    phoneNumber,
                    imageUrl,
                  })
                );
              }}
            />

            <InputGroup
              label="Phone Number"
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              autoComplete="phoneNumber"
              defaultValue={phoneNumber}
              onChange={(e) => {
                dispatch(
                  editProfile({
                    phoneNumber: e.target.value,
                    fullName,
                    imageUrl,
                  })
                );
              }}
            />
            <InputGroup
              label="Email Address"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              defaultValue={email}
              disabled
            />
            {/* Change password */}
            <Button
              type="button"
              variant="warning"
              onClick={() => setOpenChangePasswordModal(true)}
            >
              <span>Change Password</span>
            </Button>
          </div>
        </div>

        <div className="p-5 grid place-content-center">
          <Button type="submit" variant="success">
            Save Change
          </Button>
        </div>
      </form>
      {/* Alert save change modal */}
      {/* edit model */}
      <FormModal
        title="Change password"
        openModal={openChangePasswordModal}
        onCancel={() => {
          setOpenChangePasswordModal(false);
          setEditPasswordForm({
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          });
        }}
        onSubmit={(e) => handleChangePasswordSubmit(e)}
        onSubmitText="Submit"
      >
        <div className="mt-5 flex flex-col gap-5">
          <InputGroup
            label="Old password"
            id="oldPassword"
            name="oldPassword"
            type="password"
            defaultValue={editPasswordForm.oldPassword}
            onChange={(e) =>
              setEditPasswordForm({
                ...editPasswordForm,
                oldPassword: e.target.value,
              })
            }
          />
          <InputGroup
            label="New password"
            id="newPassword"
            name="newPassword"
            type="password"
            defaultValue={editPasswordForm.newPassword}
            onChange={(e) =>
              setEditPasswordForm({
                ...editPasswordForm,
                newPassword: e.target.value,
              })
            }
          />
          <InputGroup
            label="Confirm password"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            defaultValue={editPasswordForm.confirmPassword}
            onChange={(e) =>
              setEditPasswordForm({
                ...editPasswordForm,
                confirmPassword: e.target.value,
              })
            }
          />
        </div>
      </FormModal>
      {/* Alert OK modal */}
      <OKModal
        title="Alert"
        description="Change password successfully"
        openModal={openOKModal}
        onCancel={() => setOpenOKModal(false)}
        onSubmit={() => setOpenOKModal(false)}
        onSubmitText="OK"
      />
    </div>
  );
}
