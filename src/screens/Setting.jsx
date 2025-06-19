import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Setting = ({ navigation }) => {

  const SettingItem = ({ icon, label, onPress }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.itemLeft}>
        <Ionicons name={icon} size={22} color="#39FF14" style={styles.icon} />
        <Text style={styles.itemText}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#fff" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
        <View style={{ width: 24 }} /> {/* Spacer to balance back icon */}
      </View>

      <Text style={styles.sectionTitle}>Account</Text>

      <SettingItem
        icon="person-circle-outline"
        label="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <SettingItem
        icon="key-outline"
        label="Change Password"
        onPress={() => navigation.navigate('ViewDetailsScreen')}
      />
      <SettingItem
        icon="notifications-outline"
        label="Notifications"
        onPress={() => console.log('Navigate to Notifications')}
      />

      {/* More Section */}
      <Text style={styles.sectionTitle}>More</Text>
      <SettingItem
        icon="star-outline"
        label="Rate & Review"
        onPress={() => console.log('Rate and Review')}
      />
      <SettingItem
        icon="help-circle-outline"
        label="Help"
        onPress={() => console.log('Help')}
      />
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  header: {
    marginTop: 16,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#222',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  itemText: {
    fontSize: 16,
    color: '#fff',
  },
});
