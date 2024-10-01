import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

type Ride = {
  id: string;
  startLocation: string;
  endLocation: string;
  dateTime: string;
  driver: string;
  seats: number;
  paymentStatus: 'Paid' | 'Unpaid';
};

type RidesProps = {
  filter: string;
};

const allRides: Ride[] = [
  {
    id: '1',
    startLocation: '5000 Odense Marksvej',
    endLocation: '5230 Odense Munkebjergvej',
    dateTime: 'Sep 13 2024, 11:25 AM',
    driver: 'James',
    seats: 4,
    paymentStatus: 'Unpaid',
  },
  {
    id: '2',
    startLocation: '5000 Odense Marksvej',
    endLocation: '5400 Assens',
    dateTime: 'Sep 12 2024, 10:18 AM',
    driver: 'Casper',
    seats: 6,
    paymentStatus: 'Paid',
  },
];

const Rides = ({ filter }: RidesProps) => {
  const filteredRides = allRides.filter(
    ride =>
      ride.startLocation.toLowerCase().includes(filter.toLowerCase()) ||
      ride.endLocation.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <View style={tw`gap-5`}>
      {filteredRides.length === 0 ? (
        <Text style={tw`text-center text-gray-500`}>No rides found</Text>
      ) : (
        filteredRides.map(ride => (
          <View key={ride.id} style={tw`bg-gray-100 p-2 rounded-lg gap-5`}>
            <View style={tw`flex-row justify-between items-center`}>
              <Image source={require('../assets/icons/map.png')} style={tw`mx-1 h-50 w-50`} />
              <View style={tw`gap-4`}>
                <View style={tw`flex-row justify-between items-center gap-5 flex-1`}>
                  <Image source={require('../assets/icons/to.png')} style={tw`h-6 w-6`} />
                  <Text style={tw`text-lg`}>{ride.startLocation}</Text>
                </View>
                <View style={tw`flex-row justify-between items-center gap-5 flex-1`}>
                  <Image source={require('../assets/icons/point.png')} style={tw`h-6 w-6`} />
                  <Text style={tw`text-lg`}>{ride.endLocation}</Text>
                </View>
              </View>
            </View>

            <View style={tw`flex-col bg-white p-2 rounded-lg gap-5`}>
              <View style={tw`flex-row justify-between items-center py-1 border-b border-gray-200`}>
                <Text style={tw`font-semibold text-lg text-gray-500`}>Date & Time</Text>
                <Text style={tw`font-semibold text-lg`}>{ride.dateTime}</Text>
              </View>

              <View style={tw`flex-row justify-between items-center py-1 border-b border-gray-200`}>
                <Text style={tw`font-semibold text-lg text-gray-500`}>Driver</Text>
                <Text style={tw`font-semibold text-lg`}>{ride.driver}</Text>
              </View>

              <View style={tw`flex-row justify-between items-center py-1 border-b border-gray-200`}>
                <Text style={tw`font-semibold text-lg text-gray-500`}>Car Seats</Text>
                <Text style={tw`font-semibold text-lg`}>{ride.seats}</Text>
              </View>

              <View style={tw`flex-row justify-between items-center py-1 border-b border-gray-200`}>
                <Text style={tw`font-semibold text-lg text-gray-500`}>Payment Status</Text>
                <Text style={tw`font-semibold text-lg ${ride.paymentStatus === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
                  {ride.paymentStatus}
                </Text>
              </View>
            </View>
          </View>
        ))
      )}
    </View>
  );
};

export default Rides;
