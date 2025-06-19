import { StyleSheet, Text, View, ScrollView,Image , TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';


const Profile = ({route, navigation}) => {

  const { profileData } = route.params || {}; // Data passed from CompleteProfileScreen

  if (!profileData) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>No profile data found</Text>
      </View>
    );
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#111' }} contentContainerStyle={styles.container}>

  <View style={styles.header}>

      {/* Top Header Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Profile</Text>
        <View style={{ width: 24 }} /> {/* Placeholder to center the title */}
      </View>


       



        <View style={styles.userInfo}>
          <Image source={require('../assets/Logo.png')} style={styles.userImage} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.greeting}>Hello Rider</Text>
            <Text style={styles.username}>{profileData.name}</Text>
          </View>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
      </View>

       <Text style={styles.sectionTitle}>Profile Details</Text>
      <Text style={styles.detailText}>Age: {profileData.age}</Text>
      <Text style={styles.detailText}>Address: {profileData.address}</Text>
      <Text style={styles.detailText}>Blood Group: {profileData.bloodGroup}</Text>
      <Text style={styles.detailText}>Bike: {profileData.bikeModel}</Text>
      <Text style={styles.detailText}>Experience: {profileData.experience} years</Text>
      <Text style={styles.detailText}>Phone: {profileData.phone}</Text>
      <Text style={styles.detailText}>Family Contact: {profileData.emergencyContact}</Text>
      <Text style={styles.detailText}>Gender: {profileData.gender}</Text>
      <Text style={styles.detailText}>Bio: {profileData.bio}</Text>

    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
   container: {
    padding: 20,
    paddingTop:60
  },
   topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  topBarTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  greeting: {
    color: '#aaa',
    fontSize: 14,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  detailText: {
    color: '#ccc',
    fontSize: 15,
    marginBottom: 8,
  },
  center: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
})