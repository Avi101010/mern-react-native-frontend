import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { colors, defaultStyle } from '../styles/Styles';
import Header from '../components/Header';
import { Avatar, Button } from 'react-native-paper';

const Home = () => {

  const categories = [
    {category: "Nice", _id: "sdhdksdh"},
    {category: "Men", _id: "sdhsfdksdh"},
    {category: "Women", _id: "sdfsfd"},
    {category: "Football", _id: "sfdsfsd"},
    {category: "Men2", _id: "dfgdfgd"},
    {category: "Women2", _id: "sdfbbsfd"},
    {category: "Football2", _id: "xxbx"},
  ];

  const [category, setCategory] = useState("");

  const categoryButtonHandler = (id) => {
    setCategory(id);
  }

  return (
    <View style={defaultStyle}>
      <SafeAreaView >
        <Header />
        <View style={{
          paddingTop: 70,
          flexDirection: "row",
          justifyContent: "space-between"
        }}>
          {/* Heading */}
          <View>
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
          </View>

          {/* Search bar */}
          <TouchableOpacity>
            <Avatar.Icon
              icon={"magnify"}
              color={'grey'}
              size={50}
              style={{ backgroundColor: colors.color2, elevation: 12 }}
            />
          </TouchableOpacity>
        </View>

        {/* Category */}
        <View
          style={{
            flexDirection: "row",
            height: 70,
          }}
        >
         <ScrollView
          horizontal 
          contentContainerStyle={{
            alignItems: ""
          }}
          showsHorizontalScrollIndicator={false}
          >
         {
            categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor: category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text style={{
                  fontSize: 12,
                  color: category === item._id ? colors.color2 : "grey",
                }}>
                  {item.category}
                </Text>
              </Button>
            ))
          }
         </ScrollView>
        </View>

          {/* Products */}
      </SafeAreaView>
    </View>
  );
};

export default Home