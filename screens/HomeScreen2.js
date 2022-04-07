//  Author: Mohammad Jihad Hossain
//  Create Date: 17/08/2021
//  Modify Date: 08/12/2021
//  Description: Home screen component

import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  Linking,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Card } from "react-native-shadow-cards";

function HomeScreen({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      //Alert.alert("Refreshed");
    });
    return unsubscribe;
  }, [navigation]);
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
            marginTop: 20,
            marginLeft: 100,
            marginRight: 100,
          }}
        >
          McGovern-Dole International Food for Education and Child Nutrition
          Programme
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <View style={{ flex: 1, marginLeft: 200 }}>
          <TouchableOpacity onPress={() => loadInBrowser("http://google.com")}>
            <Image
              style={styles.logoMain}
              source={require("../assets/RTR11.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginRight: 200 }}>
          <TouchableOpacity>
            <Image
              style={styles.logoMain}
              source={require("../assets/WFP1.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>

      <Card style={{ padding: 10, margin: 10, flex: 1, marginBottom: 200 }}>
        <View style={{ flexDirection: "row", marginTop: 0 }}>
          <View style={{ flex: 1, padding: 2 }}>
            <View style={styles.buttonView}>
              <Button
                title="Book-checkout School"
                onPress={() => navigation.navigate("BookCheckoutSchool")}
              ></Button>
            </View>
          </View>
          <View style={{ flex: 1, padding: 2 }}>
            <View style={styles.buttonView}>
              <Button
                title="Book-checkout Community"
                onPress={() => navigation.navigate("BookCheckoutCommunity")}
              ></Button>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, padding: 2 }}>
            <View style={styles.buttonView}>
              <Button
                title="Library Management"
                onPress={() => navigation.navigate("LibraryManagement")}
              ></Button>
            </View>
          </View>
          <View style={{ flex: 1, padding: 2 }}>
            <View style={styles.buttonView}>
              <Button
                title="Library Reading"
                onPress={() => navigation.navigate("LibraryReading")}
              ></Button>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, padding: 2 }}>
            <View style={styles.buttonView}>
              <Button
                title="Bangla Class"
                onPress={() => navigation.navigate("BanglaClass")}
              ></Button>
            </View>
          </View>
          <View style={{ flex: 1, padding: 2 }}>
            <View style={styles.buttonView}>
              <Button
                title="Overall School"
                onPress={() => navigation.navigate("OverallSchool")}
              ></Button>
            </View>
          </View>
        </View>
      </Card>

      <View>
        <Text>&copy; All Rights Reserved, RoomtoRead Bangladesh</Text>
      </View>
    </View>
  );
}

const loadInBrowser = (url) => {
  Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoMain: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  buttonView: {
    width: "100%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
});

export default HomeScreen;
