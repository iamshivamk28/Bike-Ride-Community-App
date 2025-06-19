import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const images = [
  require('../assets/kerla.png'),
  require('../assets/kerla.png'),
  require('../assets/kerla.png'),
  require('../assets/kerla.png'),
];

const includes = [
  { icon: 'fast-food-outline', label: 'Meals' },
  { icon: 'bicycle-outline', label: 'Ride Captain' },
  { icon: 'water-outline', label: 'Swimming Pool' },
  { icon: 'bed-outline', label: '5 Star Hotel' },
  { icon: 'car-outline', label: 'Support Vehicle' },
  { icon: 'medkit-outline', label: 'First Aid' },
];

const ViewDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Details</Text>
        <View style={{ width: 24 }} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Ride Images */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {images.map((img, idx) => (
            <Image key={idx} source={img} style={styles.image} />
          ))}
        </ScrollView>
        <View style={styles.rideInfo}>
          <View style={styles.rideTitleRow}>
            <Text style={styles.rideTitle}>Ladakh Ride</Text>
            <View style={styles.rating}>
              <Ionicons name="star" color="#FFD700" size={16} />
              <Text style={styles.ratingText}>4.5</Text>
            </View>
          </View>
          <Text style={styles.detailText}>📍 Location: Leh to Manali</Text>
          <Text style={styles.detailText}>🛣️ Total KM: 1100 KM</Text>
          <Text style={styles.detailText}>
            📝 Bio: Experience the best ride through mountains and valleys.
          </Text>
          <Text style={styles.detailText}>📅 Date: 25 June - 4 July</Text>
          <Text style={styles.detailText}>💰 Price: ₹18,500</Text>
        </View>
        <Text style={styles.sectionTitle}>Includes</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {includes.map((item, index) => (
            <View key={index} style={styles.includeItem}>
              <Ionicons name={item.icon} size={30} color="#39FF14" />
              <Text style={styles.includeText}>{item.label}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      <TouchableOpacity style={styles.bookBtn} 
      showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.bookBtnText}>Book Ride</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewDetailsScreen;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    
  },
  topBar: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBarTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    
  },
  image: {
    width,
    height: 220,
    resizeMode: 'cover',
    borderRadius:13
  },
  rideInfo: {
    padding: 16,
  },
  rideTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rideTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#fff',
    marginLeft: 4,
  },
  detailText: {
    color: '#ccc',
    fontSize: 15,
    marginTop: 8,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 16,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  includeItem: {
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 20,
  },
  includeText: {
    color: '#fff',
    marginTop: 6,
    fontSize: 13,
  },
  bookBtn: {
    backgroundColor: '#39FF14',
    padding: 16,
    alignItems: 'center',
    marginBottom:33,
    marginHorizontal:15,
    borderRadius:13

    
  },
  bookBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
