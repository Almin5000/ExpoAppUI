import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import Rides from '@/components/Rides';

const history = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <View style={tw`flex-1 gap-5 p-5`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-xl font-semibold`}>Popular car</Text>
        <View style={tw`flex-row justify-end items-center gap-1`}>
          <Text style={tw`text-lg text-blue-500 font-semibold`}>Ascending</Text>
          <Image source={require('../../assets/icons/arrow-down.png')} style={tw`h-6 w-6`} />
        </View>
      </View>

      {/* Search bar */}
      <View style={tw`bg-gray-100 rounded-full p-1 flex-row justify-start items-center`}>
        <Image source={require('../../assets/icons/search.png')} style={tw`h-5 w-5 mx-3`} />
        <TextInput
          placeholder='Search rides...'
          value={searchTerm}
          onChangeText={handleSearchChange}
          style={tw`text-gray-500 rounded-r-full flex-1 text-lg p-3`}
        />
      </View>

      {/* Scrollable rides */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Rides filter={searchTerm} />
      </ScrollView>
    </View>
  );
};

export default history;
