import { Button } from "../../button";
import { useState } from "react";
import { InputGroup } from "../../input/inputbox";

export default function UserProfile() {
  const [profile, setProfile] = useState<string>("");

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
      <div className=" p-5">
        <h1 className="text-center text-2xl font-medium text-dark">
          My Profile
        </h1>
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
            onClick={() =>
              document.getElementById("user_profile_image")?.click()
            }
          >
            Upload
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          <InputGroup label="Username" />
          <InputGroup label="Full Name" />
          <InputGroup label="Email Address" />
          <InputGroup label="Phone Number" />
        </div>
      </div>
      <div className="p-5 grid place-content-center">
        <Button type="button" variant="success">
          Save Change
        </Button>
      </div>
    </div>
  );
}
