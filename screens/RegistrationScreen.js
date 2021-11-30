//  Author: Mohammad Jihad Hossain
//  Create Date: 07/08/2021
//  Modify Date: 30/11/2021
//  Description: Register component

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Linking,
} from "react-native";

export default class RegistrationScreen extends React.Component {
  state = {
    email: "",
    password: "",
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={{ flexShrink: 1 }}>
          <Text
            style={{
              color: "blue",
              fontWeight: "bold",
              fontSize: 20,
              padding: 25,
              alignContent: "center",
              textAlign: "center",
              alignSelf: "center",
              marginTop: 30,
              marginLeft: 100,
              marginRight: 100,
            }}
          >
            McGovern-Dole International Food for Education and Child Nutrition
            Program
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginBottom: 100,
          }}
        >
          <View style={{ flex: 1, marginLeft: 200 }}>
            <TouchableOpacity
              onPress={() => loadInBrowser("http://google.com")}
            >
              <Image
                style={styles.logoMain}
                source={require("../assets/rtr.png")}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, marginRight: 200 }}>
            <TouchableOpacity>
              <Image
                style={styles.logoMain}
                source={require("../assets/wfp.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Full Name"
            placeholderTextColor="#FFFFFF"
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Designation"
            placeholderTextColor="#FFFFFF"
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Employee ID"
            placeholderTextColor="#FFFFFF"
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#FFFFFF"
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#FFFFFF"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password..."
            placeholderTextColor="#FFFFFF"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => navigate("Login2")}>
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={(styles.forgot, { marginBottom: 30 })}>Login</Text>
        </TouchableOpacity>
        <View>
          <Text>&copy; All Rights Reserved, RoomtoRead Bangladesh</Text>
        </View>
      </View>
    );
  }
}

const loadInBrowser = (url) => {
  Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoMain: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "black",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});
