import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { Button, HelperText, useTheme, Avatar } from 'react-native-paper';

const Profile = () => {
  const { inputStyle, buttonStyle, containerStyle } = useTheme();
  const [isEditable, setIsEditable] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [birthDate, setBirthDate] = useState(null);

  const handleFirstNameChange = (value) => {
    setFirstName(value);
  };

  const handleLastNameChange = (value) => {
    setLastName(value);
  };

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleBirthDateChange = (value) => {
    setBirthDate(value);
  };

  const handlePress = () => {
    setIsEditable(!isEditable);
  };

  return (
    <View style={containerStyle}>
      <Avatar.Image size={100} />
      <TextInput
        label="First name"
        editable={isEditable}
        placeholder="First name"
        style={inputStyle}
        onChangeText={handleFirstNameChange}
        value={firstName}
      />
      <HelperText
        style={{ alignSelf: 'flex-start' }}
        padding="none"
        type="Error"
      >
        Test helper text
      </HelperText>
      <TextInput
        label="Last name"
        editable={isEditable}
        placeholder="Last name"
        style={inputStyle}
        onChangeText={handleLastNameChange}
        value={lastName}
      />
      <HelperText
        style={{ alignSelf: 'flex-start' }}
        padding="none"
        type="Error"
      >
        Test helper text
      </HelperText>
      <TextInput
        label="Username"
        editable={isEditable}
        placeholder="Username"
        style={inputStyle}
        onChangeText={handleUsernameChange}
        value={username}
      />
      <HelperText
        style={{ alignSelf: 'flex-start' }}
        padding="none"
        type="Error"
      >
        Test helper text
      </HelperText>
      <TextInput
        label="Email"
        editable={isEditable}
        placeholder="Email"
        style={inputStyle}
        onChangeText={handleEmailChange}
        value={email}
      />
      <HelperText
        style={{ alignSelf: 'flex-start' }}
        padding="none"
        type="Error"
      >
        Test helper text
      </HelperText>
      <TextInput
        label="Birth date"
        editable={isEditable}
        placeholder="Birth date"
        style={inputStyle}
        onChangeText={handleBirthDateChange}
        value={birthDate}
      />
      <HelperText
        style={{ alignSelf: 'flex-start' }}
        padding="none"
        type="Error"
      >
        Test helper text
      </HelperText>
      <Button dark mode="contained" style={buttonStyle} onPress={handlePress}>
        {(isEditable && 'Save') || 'Edit profile'}
      </Button>
    </View>
  );
};

export default Profile;