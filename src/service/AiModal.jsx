import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_PLACE_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [{ text: "hello" }],
    },
    {
      role: "model",
      parts: [{ text: "Hello! How can I help you today? \n" }],
    },
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple for a Cheap budget, give me a hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, description and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket pricing, Time to travel eache of the location for 3 days each day plan with best time to visit in JSON format   ",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotels": [\n    {\n      "HotelName": "The D Las Vegas",\n      "HotelAddress": "301 Fremont Street, Las Vegas, NV 89101",\n      "Price": "$50-$100/night",\n      "HotelImageUrl": "https://www.theD.com/media/images/hotel-exterior.jpg",\n      "GeoCoordinates": "36.1699, -115.1423",\n      "Rating": "3.5 stars",\n      "Description": "A budget-friendly hotel located in the heart of Fremont Street, offering a vibrant atmosphere and close proximity to attractions."\n    },\n    {\n      "HotelName": "Golden Nugget Las Vegas",\n      "HotelAddress": "129 E Fremont Street, Las Vegas, NV 89101",\n      "Price": "$70-$150/night",\n      "HotelImageUrl": "https://www.goldennugget.com/las-vegas/media/images/hotel-exterior.jpg",\n      "GeoCoordinates": "36.1693, -115.1421",\n      "Rating": "4 stars",\n      "Description": "A historic hotel with a modern twist, featuring a unique shark tank and a lively casino."\n    },\n    {\n      "HotelName": "Circus Circus Hotel & Casino",\n      "HotelAddress": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "Price": "$40-$80/night",\n      "HotelImageUrl": "https://www.circuscircus.com/media/images/hotel-exterior.jpg",\n      "GeoCoordinates": "36.1020, -115.1702",\n      "Rating": "3 stars",\n      "Description": "A family-friendly hotel known for its circus-themed attractions and affordable prices."\n    },\n    {\n      "HotelName": "The Strat Hotel, Casino & SkyPod",\n      "HotelAddress": "2000 S Las Vegas Blvd, Las Vegas, NV 89104",\n      "Price": "$60-$120/night",\n      "HotelImageUrl": "https://www.thestrat.com/media/images/hotel-exterior.jpg",\n      "GeoCoordinates": "36.1062, -115.1715",\n      "Rating": "3.5 stars",\n      "Description": "A towering hotel with a unique observation deck offering panoramic views of Las Vegas."\n    }\n  ],\n  "itinerary": [\n    {\n      "Day": 1,\n      "DayPlan": [\n        {\n          "Time": "Morning (9:00 AM - 12:00 PM)",\n          "PlaceName": "Fremont Street Experience",\n          "PlaceDetails": "Walk the famous pedestrian mall, enjoy street performers, and marvel at the overhead canopy of lights.",\n          "PlaceImageUrl": "https://www.fremontstreetexperience.com/media/images/fremont-street-experience.jpg",\n          "GeoCoordinates": "36.1699, -115.1423",\n          "TicketPricing": "Free",\n          "TimeToTravel": "1-2 hours"\n        },\n        {\n          "Time": "Afternoon (1:00 PM - 4:00 PM)",\n          "PlaceName": "The Mob Museum",\n          "PlaceDetails": "Learn about the history of organized crime in Las Vegas and the United States.",\n          "PlaceImageUrl": "https://www.themobmuseum.org/media/images/mob-museum.jpg",\n          "GeoCoordinates": "36.1695, -115.1408",\n          "TicketPricing": "$25-$30",\n          "TimeToTravel": "2-3 hours"\n        },\n        {\n          "Time": "Evening (5:00 PM - 8:00 PM)",\n          "PlaceName": "Golden Nugget Casino",\n          "PlaceDetails": "Experience the excitement of casino gaming, enjoy live entertainment, and dine at one of the restaurants.",\n          "PlaceImageUrl": "https://www.goldennugget.com/las-vegas/media/images/casino.jpg",\n          "GeoCoordinates": "36.1693, -115.1421",\n          "TicketPricing": "Free",\n          "TimeToTravel": "1-2 hours"\n        }\n      ]\n    },\n    {\n      "Day": 2,\n      "DayPlan": [\n        {\n          "Time": "Morning (10:00 AM - 1:00 PM)",\n          "PlaceName": "Bellagio Conservatory & Botanical Garden",\n          "PlaceDetails": "Admire the stunning floral displays and seasonal themes.",\n          "PlaceImageUrl": "https://www.bellagio.com/media/images/conservatory.jpg",\n          "GeoCoordinates": "36.1117, -115.1726",\n          "TicketPricing": "Free",\n          "TimeToTravel": "1-2 hours"\n        },\n        {\n          "Time": "Afternoon (2:00 PM - 5:00 PM)",\n          "PlaceName": "Fountains of Bellagio",\n          "PlaceDetails": "Witness a spectacular water and music show synchronized to famous songs.",\n          "PlaceImageUrl": "https://www.bellagio.com/media/images/fountains.jpg",\n          "GeoCoordinates": "36.1117, -115.1726",\n          "TicketPricing": "Free",\n          "TimeToTravel": "1-2 hours"\n        },\n        {\n          "Time": "Evening (6:00 PM - 9:00 PM)",\n          "PlaceName": "The LINQ Promenade",\n          "PlaceDetails": "Explore this outdoor shopping and dining complex, ride the High Roller observation wheel, and enjoy the vibrant atmosphere.",\n          "PlaceImageUrl": "https://www.thelinq.com/media/images/promenade.jpg",\n          "GeoCoordinates": "36.1185, -115.1717",\n          "TicketPricing": "Free (High Roller tickets: $25-$35)",\n          "TimeToTravel": "2-3 hours"\n        }\n      ]\n    },\n    {\n      "Day": 3,\n      "DayPlan": [\n        {\n          "Time": "Morning (9:00 AM - 12:00 PM)",\n          "PlaceName": "Red Rock Canyon National Conservation Area",\n          "PlaceDetails": "Hike through scenic canyons, admire rock formations, and enjoy the desert landscape.",\n          "PlaceImageUrl": "https://www.nps.gov/redr/media/images/red-rock-canyon.jpg",\n          "GeoCoordinates": "36.2022, -115.3018",\n          "TicketPricing": "$15 per vehicle",\n          "TimeToTravel": "3-4 hours"\n        },\n        {\n          "Time": "Afternoon (1:00 PM - 4:00 PM)",\n          "PlaceName": "Neon Museum",\n          "PlaceDetails": "Explore a collection of vintage neon signs and learn about the history of Las Vegas.",\n          "PlaceImageUrl": "https://www.neonmuseum.org/media/images/neon-museum.jpg",\n          "GeoCoordinates": "36.1625, -115.1339",\n          "TicketPricing": "$20-$25",\n          "TimeToTravel": "1-2 hours"\n        },\n        {\n          "Time": "Evening (5:00 PM - 8:00 PM)",\n          "PlaceName": "Caesars Palace",\n          "PlaceDetails": "Enjoy a free show at the Forum Shops, explore the Roman-themed casino, and try your luck at the slot machines.",\n          "PlaceImageUrl": "https://www.caesars.com/media/images/caesars-palace.jpg",\n          "GeoCoordinates": "36.1126, -115.1705",\n          "TicketPricing": "Free",\n          "TimeToTravel": "1-2 hours"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Note:**\n\n* This itinerary is a suggestion and can be customized to fit your interests and budget.\n* Prices are approximate and subject to change. \n* It\'s best to book hotels and attractions in advance, especially if traveling during peak season.\n* Consider using public transportation or ride-sharing services to save money on parking and transportation costs. \n* Always check for current hours of operation and any restrictions before visiting any attraction.\n\nEnjoy your trip to Las Vegas!\n',
        },
      ],
    },
  ],
});
