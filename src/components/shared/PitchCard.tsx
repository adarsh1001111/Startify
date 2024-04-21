import { useUserContext } from "@/context/AuthContext";
// import { useGetPitchById } from "@/lib/react-query/queriesAndMutations";
import { formatDate } from "@/lib/utils";
import { Models } from "appwrite";
// import { Loader } from "lucide-react";
import { Link } from "react-router-dom";

// import { Client, Storage } from "appwrite";
// import { appwriteConfig } from "@/lib/appwrite/config";
/*
const client = new Client();

const storage = new Storage(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject(appwriteConfig.projectId); // Your project ID

const promise = storage.getFile(appwriteConfig.storageId, "[FILE_ID]");

promise.then(
  function (response) {
    console.log(response); // Success
  },
  function (error) {
    console.log(error); // Failure
  }
);
*/
type PitchCardProps = {
  pitch: Models.Document;
};
const PitchCard = ({ pitch }: PitchCardProps) => {
  const { user } = useUserContext();
  // const { id } = useParams();
  //const { isPending } = useGetPitchById(id || "");

  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${pitch.creator.$id}`}>
            <img
              src={
                pitch?.creator?.imageUrl ||
                "/public/assets/icons/profile-placeholder.svg"
              }
              alt="creator"
              className="rounded-full w-12 lg:h-12"
            />
          </Link>
          <div className="flex flex-col">
            <p>{pitch.creator.name}</p>
            <div className="flex-center gap-2 text-light-3">
              <p className="subtle-semibold lg:small-regular">
                {formatDate(pitch.$createdAt)}
              </p>
              -
              <p className="subtle-semibold lg:small-regular">
                {pitch.Location}
              </p>
            </div>
          </div>
        </div>
        <Link
          to={`/update-pitch/${pitch.$id}`}
          className={`${user.id !== pitch.creator.$id && "hidden"}`}
        >
          <img
            src="/public/assets/icons/edit.svg"
            alt="edit"
            width={20}
            height={20}
          />
        </Link>
      </div>
      <Link to={`/pitch/${pitch.$id}`}>
        <div className="small-medium lg:base-medium py-5">
          <p>{pitch.caption}</p>
          <ul>
            {pitch.type.map((type: string) => (
              <li key={type} className="text-light-3">
                #{type}
              </li>
            ))}
          </ul>
        </div>
        {
          <video
            height={10}
            width={10}
            autoPlay
            loop
            src="/public/assets/images/WhatsApp Video 2024-04-21 at 12.17.19 PM.mp4"
            className="post-card_img"
          />
        }
      </Link>
    </div>
  );
};

export default PitchCard;
