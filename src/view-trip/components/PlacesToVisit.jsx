import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({ trip }) {
  // Always ensure itinerary is an array
  const itinerary = Array.isArray(trip?.tripData?.itinerary) ? trip.tripData.itinerary : []

  return (
    <div>
      <h2 className="font-bold text-xl">Places to Visit</h2>
      <div>
        {itinerary.length > 0 ? (
          itinerary.map((dayPlan, dayIndex) => {
            const plans = Array.isArray(dayPlan.plan) ? dayPlan.plan : []

            return (
              <div key={dayIndex} className="mt-5">
                <h2 className="font-bold text-lg">{dayPlan.day}</h2>
                <div className="grid md:grid-cols-2 gap-5">
                  {plans.map((place, placeIndex) => (
                    <div key={placeIndex} className="my-2">
                      <h2 className="font-medium text-sm text-orange-600">{place.time}</h2>
                      <PlaceCardItem place={place} />
                    </div>
                  ))}
                </div>
              </div>
            )
          })
        ) : (
          <p className="text-gray-500 mt-4">No itinerary data available.</p>
        )}
      </div>
    </div>
  )
}
   
export default PlacesToVisit
