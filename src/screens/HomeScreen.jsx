import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const horizontalCards = [
    {
      id: '1',
      title: 'Ladakh Ride',
      desc: 'Ride through the Himalayas',
      image: require('../assets/ladhak.png'),
    },
    {
      id: '2',
      title: 'Goa Ride',
      desc: 'Enjoy beachside rides',
      image: require('../assets/goa.png'),
    },
    {
      id: '3',
      title: 'Rajasthan Ride',
      desc: 'Desert adventure awaits',
      image: require('../assets/rj.png'),
    },
    {
      id: '4',
      title: 'Kerala Ride',
      desc: 'Lush greenery and backwaters',
      image: require('../assets/kerla.png'),
    },
  ];

  const upcomingRides = [
    {
      id: '1',
      title: 'Mumbai to Pune',
      date: '22 June',
      image: require('../assets/biker.png'),
    },
    {
      id: '2',
      title: 'Delhi to Shimla',
      date: '30 June',
      image: require('../assets/biker.png'),
    },
    {
      id: '3',
      title: 'Chennai to Pondy',
      date: '5 July',
      image: require('../assets/biker.png'),
    },
    {
      id: '4',
      title: 'Bangalore to Coorg',
      date: '15 July',
      image: require('../assets/biker.png'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={require('../assets/Logo.png')}
            style={styles.userImage}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text style={styles.username}>Chan Shek</Text>
          </View>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#000" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Search Rides..." style={styles.searchInput} />
        <TouchableOpacity style={styles.filterBtn}>
          <Ionicons name="filter-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Horizontal Scroll Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 16 }}
      >
        {horizontalCards.map(item => (
          <View key={item.id} style={styles.rideCard}>
            <Image source={item.image} style={styles.rideImage} />
            <View style={styles.rideInfo}>
              <Text style={styles.rideTitle}>{item.title}</Text>
              <Text style={styles.rideDesc}>{item.desc}</Text>
              <TouchableOpacity style={styles.detailBtn}>
                <Text style={{ color: '#fff' }}>Show Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Upcoming Rides */}
      <Text style={styles.sectionTitle}>Upcoming Rides</Text>
      {upcomingRides.map(ride => (
        <View key={ride.id} style={styles.upcomingCard}>
          <Image source={ride.image} style={styles.upcomingImage} />
          <Text style={styles.upcomingTitle}>{ride.title}</Text>
          <Text style={styles.upcomingDate}>Date: {ride.date}</Text>
          <TouchableOpacity style={styles.viewMoreBtn}>
            <Text style={{ color: '#fff' }}>View More</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 16,
    paddingTop:44,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greeting: {
    fontSize: 14,
    color: '#555',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    flexDirection: 'row',
    marginTop: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
  },
  filterBtn: {
    backgroundColor: '#39FF14',
    padding: 8,
    borderRadius: 6,
  },
  rideCard: {
    width: 250,
    marginRight: 16,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  rideImage: {
    width: '100%',
    height: 140,
  },
  rideInfo: {
    padding: 10,
  },
  rideTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  rideDesc: {
    fontSize: 13,
    color: '#ccc',
    marginVertical: 4,
  },
  detailBtn: {
    backgroundColor: '#39FF14',
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 6,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
  },
  upcomingCard: {
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    overflow: 'hidden',
  },
  upcomingImage: {
    width: '100%',
    height: 160,
  },
  upcomingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginHorizontal: 10,
  },
  upcomingDate: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    marginHorizontal: 10,
  },
  viewMoreBtn: {
    backgroundColor: '#39FF14',
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
});
