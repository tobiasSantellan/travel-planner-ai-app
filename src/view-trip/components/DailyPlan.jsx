import PlaceCardItem from "./PlaceCardItem";

function DailyPlan({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-lg">Places to visit</h2>

      <div>
        {trip?.tripData?.itinerary?.map((item, index) => (
          <div>
            <h2 className="font-medium text-lg">Day {item.Day}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.DayPlan.map((place, index) => (
                <div>
                  <h2 className="font-bold text-sm text-orange-600">
                    {place.Time}
                  </h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyPlan;
