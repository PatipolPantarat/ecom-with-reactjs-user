import { Button } from "../../button";
import { useState } from "react";
import { InputGroup } from "../../input/inputbox";
import { useAuth } from "../../../context/AuthContext";

export default function MyProfile() {
  const { userData } = useAuth();
  const [profile, setProfile] = useState<string>(userData.userProfile.imageURL);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfile(reader.result as string);
    };
    reader.readAsDataURL(file as Blob);
  };

  return (
    <div className="w-full">
      <div className="p-5 flex justify-between items-center border-b border-dark-300">
        <h1 className="text-lg font-medium text-dark">My Profile</h1>
      </div>

      <div className=" p-5 grid grid-cols-2 gap-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-dark text-lg font-medium">Profile Picture</h1>
          <div className="h-48 w-48">
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
            disabled
            onClick={() =>
              document.getElementById("user_profile_image")?.click()
            }
          >
            Upload
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          <InputGroup
            label="Username"
            id="username"
            name="username"
            autoComplete="username"
            disabled
            value={userData.userProfile.username}
          />
          <InputGroup
            label="Full Name"
            id="fullname"
            name="fullname"
            autoComplete="name"
            disabled
            value={userData.userProfile.fullname}
          />
          <InputGroup
            label="Email Address"
            id="email"
            name="email"
            autoComplete="email"
            disabled
            value={userData.userProfile.email}
          />
          <InputGroup
            label="Phone Number"
            id="phone"
            name="phone"
            autoComplete="phone"
            disabled
            value={userData.userProfile.phone}
          />
        </div>
      </div>
      <div className="p-5 grid place-content-center">
        <Button type="button" variant="success" disabled>
          Save Change
        </Button>
      </div>
    </div>
  );
}
