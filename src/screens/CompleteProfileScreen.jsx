import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
// import { Picker } from '@react-native-picker/picker';

const CompleteProfileScreen = ({navigation}) => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    address: '',
    bloodGroup: '',
    bikeModel: '',
    experience: '',
    phone: '',
    emergencyContact: '',
    gender: '',
    bio: '',
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log('Form Data:', form);
   
      navigation.replace('MainApp');
       navigation.navigate('Profile', { profileData: form });
  };
//   const handleSubmit = () => {
//   console.log('Form Data:', form);
//   navigation.navigate('Profile', { profileData: form });
// };





  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#111' }}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>Complete Your Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#aaa"
        onChangeText={value => handleChange('name', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        onChangeText={value => handleChange('age', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        placeholderTextColor="#aaa"
        onChangeText={value => handleChange('address', value)}
      />

      {/* <View style={styles.pickerWrapper}>
         <Picker
          selectedValue={form.bloodGroup}
          onValueChange={(value) => handleChange('bloodGroup', value)}
          style={styles.picker}
        >
          <Picker.Item label="Select Blood Group" value="" />
          <Picker.Item label="A+" value="A+" />
          <Picker.Item label="A-" value="A-" />
          <Picker.Item label="B+" value="B+" />
          <Picker.Item label="B-" value="B-" />
          <Picker.Item label="AB+" value="AB+" />
          <Picker.Item label="AB-" value="AB-" />
          <Picker.Item label="O+" value="O+" />
          <Picker.Item label="O-" value="O-" />
        </Picker> 
      </View> */}

      <TextInput
        style={styles.input}
        placeholder="Bike Name & Model"
        placeholderTextColor="#aaa"
        onChangeText={value => handleChange('bikeModel', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Riding Experience (in years)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        onChangeText={value => handleChange('experience', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
        onChangeText={value => handleChange('phone', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Family Contact Number"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
        onChangeText={value => handleChange('emergencyContact', value)}
      />

      {/* <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={form.gender}
          onValueChange={(value) => handleChange('gender', value)}
          style={styles.picker}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View> */}

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Short Bio"
        placeholderTextColor="#aaa"
        multiline
        numberOfLines={4}
        onChangeText={value => handleChange('bio', value)}
      />
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Save Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CompleteProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#111',
  },
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 14,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  pickerWrapper: {
    backgroundColor: '#222',
    borderRadius: 8,
    marginBottom: 14,
  },
  picker: {
    color: '#fff',
  },
  btn: {
    backgroundColor: '#ff3c00',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
