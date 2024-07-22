## Travel Planner AI App
## Overview
The Travel Planner AI App is designed to simplify and enhance your travel planning experience. Utilizing AI, Firebase, and ShadCN, the app offers personalized travel recommendations, including hotel suggestions, itineraries, and points of interest.

## Features
* AI-Powered Recommendations: Receive personalized travel suggestions based on your preferences and travel history.
* Hotel Information: Browse detailed hotel information and photos.
* Itinerary Planning: Create and manage your travel itinerary effortlessly.
* Points of Interest: Discover popular and hidden gems at your travel destination.
* Interactive Maps: View locations and get directions with integrated Google Maps.
* User-Friendly Interface: Enjoy a seamless and intuitive user experience with ShadCN components.
## Technologies Used
* Front-end: React, Tailwind CSS, Vite, ShadCN
* Backend: Firebase
* API Services: Google Places API, Google Maps API
## Getting Started
## Prerequisites
* Node.js and npm installed
* A Google Cloud account with Places API and Maps API enabled
* Firebase account and project set up

## Usage
* Home Page: Begin your travel planning by entering your destination.
* Recommendations: View AI-generated recommendations for hotels, activities, and places to visit.
* Map View: See all your planned locations on an interactive map.

## Installation
## 1. Clone the Repository:

<pre>git clone https://github.com/tobiasSantellan/travel-planner-ai-app.git</pre> 
<pre> cd travel-planner-ai-app</pre>

## 2. Install Dependencies:

<pre> npm install<pre>

## 3. Set Up Environment Variables:
* Create a .env file in the root directory and add your Google API key and Firebase configuration:
  <pre>
    VITE_GOOGLE_PLACE_API_KEY=your_google_api_key_here
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain_here
VITE_FIREBASE_DATABASE_URL=your_firebase_database_url_here
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_firebase_app_id_here

    </pre>

## 4. Start the Development Server:

<pre> npm run dev </pre>

## 5. Build for Production:

<pre> npm run build</pre>

## Firebase Configuration
## 1. Create a Firebase Project:

* Go to the Firebase Console.
* Create a new project and follow the setup steps.

## 2. Configure Firebase in Your Project:

* Copy your Firebase configuration details from the Firebase console and add them to your .env file.

## 3- Initialize Firebase in Your Code:

## Use the Firebase SDK to interact with your Firebase services. Ensure you have initialized Firebase in your application code.
<pre>
  import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
</pre>
