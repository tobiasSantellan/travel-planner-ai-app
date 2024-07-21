import HotelCardItem from "./HotelCardItem";

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5 mb-3">Hotel Recommendation</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <HotelCardItem hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
