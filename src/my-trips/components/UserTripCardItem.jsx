import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      console.log(resp.data.places[0].photos[3].name);

      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[4].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <Link to={"/view-trip/" + trip?.id}>
      <div className="hover:scale-105 transition-all hover:shadow-md">
        <img
          src={photoUrl}
          className="object-cover rounded-xl h-[150px] w-[250px]"
        />
        <h2 className="font-bold text-lg">
          {trip?.userSelection?.location?.label}
        </h2>
        <h2 className="font-bold text-sm text-orange-500">
          {trip?.userSelection?.noOfDays} Days Trip With{" "}
          {trip?.userSelection?.budget} Budget
        </h2>
      </div>
    </Link>
  );
}

export default UserTripCardItem;
