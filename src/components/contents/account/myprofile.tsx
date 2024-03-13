import { Button } from "../../button";
import React, { useState } from "react";
import { InputGroup } from "../../input/inputbox";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import { editProfile } from "../../../Slices/userSlice";

export default function MyProfile() {
  const { userProfile } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const [profile, setProfile] = useState<string>(userProfile.imageURL);

  // test edit full_name
  const [editForm, setEditForm] = useState({
    full_name: userProfile.full_name,
    birth_date: userProfile.birth_date,
    phone: userProfile.phone,
    email: userProfile.email,
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfile(reader.result as string);
    };
    reader.readAsDataURL(file as Blob);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit data: ", userProfile);
    dispatch(
      editProfile({
        ...userProfile,
        full_name: editForm.full_name,
        birth_date: editForm.birth_date,
        phone: editForm.phone,
        email: editForm.email,
        imageURL: profile,
      })
    );
    alert("profile updated");
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.valueAsDate;
    if (newDate) {
      setEditForm({
        ...editForm,
        birth_date: newDate.toISOString().split("T")[0],
      });
    }
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
                {profile ? (
                  <img
                    src={profile}
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
              id="full_name"
              name="full_name"
              autoComplete="name"
              value={editForm.full_name}
              onChange={(e) => {
                setEditForm({ ...editForm, full_name: e.target.value });
              }}
            />
            <InputGroup
              label="Birth Date"
              id="birth_date"
              name="birth_date"
              autoComplete="birth_date"
              type="date"
              value={editForm.birth_date}
              onChange={handleDateChange}
            />
            {/* <DatePicker /> */}
            <InputGroup
              label="Phone Number"
              id="phone"
              name="phone"
              autoComplete="phone"
              value={editForm.phone}
              onChange={(e) => {
                setEditForm({ ...editForm, phone: e.target.value });
              }}
            />
            <InputGroup
              label="Email Address"
              id="email"
              name="email"
              autoComplete="email"
              value={editForm.email}
              onChange={(e) => {
                setEditForm({ ...editForm, email: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="p-5 grid place-content-center">
          <Button type="submit" variant="success">
            Save Change
          </Button>
        </div>
      </form>
    </div>
  );
}
