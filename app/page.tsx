"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { useState } from "react";

const matches = [
  {
    id: 1,
    team1: "Mumbai Indians",
    team2: "Chennai Super Kings",
    date: "April 15, 2025",
    time: "7:30 PM IST",
    venue: "Wankhede Stadium, Mumbai",
    price: 2500,
    availableSeats: 150,
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    team1: "Royal Challengers Bangalore",
    team2: "Kolkata Knight Riders",
    date: "April 18, 2025",
    time: "7:30 PM IST",
    venue: "M. Chinnaswamy Stadium, Bangalore",
    price: 2000,
    availableSeats: 200,
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    team1: "Delhi Capitals",
    team2: "Rajasthan Royals",
    date: "April 20, 2025",
    time: "3:30 PM IST",
    venue: "Arun Jaitley Stadium, Delhi",
    price: 1800,
    availableSeats: 175,
    image: "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function Home() {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            IPL 2025 Ticket Booking [[ UPDATED ]]
          </h1> 
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Book your tickets for the most exciting cricket matches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {matches.map((match) => (
            <Card key={match.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={match.image}
                  alt={`${match.team1} vs ${match.team2}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {match.team1} vs {match.team2}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Calendar className="w-5 h-5" />
                    <span>{match.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Clock className="w-5 h-5" />
                    <span>{match.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <MapPin className="w-5 h-5" />
                    <span>{match.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Users className="w-5 h-5" />
                    <span>{match.availableSeats} seats available</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      ₹{match.price}
                    </span>
                    <Button
                      onClick={() => setSelectedMatch(match.id)}
                      variant="default"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
