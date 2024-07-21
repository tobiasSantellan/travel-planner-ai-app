import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.PlaceName,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      console.log(resp.data.places[0].photos[3].name);

      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + place?.PlaceName}
      target="_blank"
    >
      <div className="border rounded-xl mt-2 p-3 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src={photoUrl}
          className="w-[150px] h-[150px] rounded-xl object-cover"
        />
        <div>
          <h2 className="font-bold text-lg">{place.PlaceName}</h2>
          <p className="text-sm text-gray-500">{place.PlaceDetails}</p>
          <h2 className=""> ⌚ {place.TimeToTravel}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
