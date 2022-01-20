//  Author: Mohammad Jihad Hossain
//  Create Date: 11/10/2021
//  Modify Date: 13/01/2022
//  Description: Monthly book checkout screen component

import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Picker,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

import { divisions, districts, upazillas, unions } from "bd-geojs";

import { Card } from "react-native-shadow-cards";

import DateTimePicker from "@react-native-community/datetimepicker";

export default class MonthlyBookCheckoutScreen extends React.Component {
  state = {
    checked: false,

    option: "yes",

    choosenIndex: 0,

    date: new Date(),
    mode: "date",
    show: false,

    // General data
    visitNo: "",
    pickerOffice: "",
    pickerProject: "",
    pickerDistrict: "",
    pickerUpazila: "",
    pickerSchool: "",
    pickerHeadTeacher: "",
    pickerGender: "",
    pickerVisitor: "",
    pickerDesignation: "",
    pickerVisitorOffice: "",
    pickerLF: "",
    pickerLPO: "",
    // General data

    //Book checkout data
    priPrimaryBoy: "",
    priPrimaryGirl: "",
    priPrimaryTotal: "",
    priPrimaryNoBoyBC: "",
    priPrimaryNoGirlBC: "",
    priPrimaryNoTotalBC: "",
    priPrimaryNoBookBoyBC: "",
    priPrimaryNoBookGirlBC: "",
    priPrimaryNoBookTotalBC: "",
    priPrimarySpBoy: "",
    priPrimarySpGirl: "",
    priPrimarySpTotal: "",
    priPrimaryNoSpBoyBC: "",
    priPrimaryNoSpGirlBC: "",
    priPrimaryNoSpTotalBC: "",
    priPrimaryNoBookSpBoyBC: "",
    priPrimaryNoBookSpGirlBC: "",
    priPrimaryNoBookSpTotalBC: "",
    classOneBoy: "",
    classOneGirl: 0,
    classOneTotal: 0,
    classOneNoBoyBC: 0,
    classOneNoGirlBC: 0,
    classOneNoTotalBC: 0,
    classOneNoBookBoyBC: 0,
    classOneNoBookGirlBC: 0,
    classOneNoBookTotalBC: 0,
    classOneSpBoy: 0,
    classOneSpGirl: 0,
    classOneSpTotal: 0,
    classOneNoSpBoyBC: 0,
    classOneNoSpGirlBC: 0,
    classOneNoSpTotalBC: 0,
    classOneNoBookSpBoyBC: 0,
    classOneNoBookSpGirlBC: 0,
    classOneNoBookSpTotalBC: 0,
    classTwoBoy: 0,
    classTwoGirl: 0,
    classTwoTotal: 0,
    classTwoNoBoyBC: 0,
    classTwoNoGirlBC: 0,
    classTwoNoTotalBC: 0,
    classTwoNoBookBoyBC: 0,
    classTwoNoBookGirlBC: 0,
    classTwoNoBookTotalBC: 0,
    classTwoSpBoy: 0,
    classTwoSpGirl: 0,
    classTwoSpTotal: 0,
    classTwoNoSpBoyBC: 0,
    classTwoNoSpGirlBC: 0,
    classTwoNoSpTotalBC: 0,
    classTwoNoBookSpBoyBC: 0,
    classTwoNoBookSpGirlBC: 0,
    classTwoNoBookSpTotalBC: 0,
    classThreeBoy: 0,
    classThreeGirl: 0,
    classThreeTotal: 0,
    classThreeNoBoyBC: 0,
    classThreeNoGirlBC: 0,
    classThreeNoTotalBC: 0,
    classThreeNoBookBoyBC: 0,
    classThreeNoBookGirlBC: 0,
    classThreeNoBookTotalBC: 0,
    classThreeSpBoy: 0,
    classThreeSpGirl: 0,
    classThreeSpTotal: 0,
    classThreeNoSpBoyBC: 0,
    classThreeNoSpGirlBC: 0,
    classThreeNoSpTotalBC: 0,
    classThreeNoBookSpBoyBC: 0,
    classThreeNoBookSpGirlBC: 0,
    classThreeNoBookSpTotalBC: 0,
    classFourBoy: 0,
    classFourGirl: 0,
    classFourTotal: 0,
    classFourNoBoyBC: 0,
    classFourNoGirlBC: 0,
    classFourNoTotalBC: 0,
    classFourNoBookBoyBC: 0,
    classFourNoBookGirlBC: 0,
    classFourNoBookTotalBC: 0,
    classFourSpBoy: 0,
    classFourSpGirl: 0,
    classFourSpTotal: 0,
    classFourNoSpBoyBC: 0,
    classFourNoSpGirlBC: 0,
    classFourNoSpTotalBC: 0,
    classFourNoBookSpBoyBC: 0,
    classFourNoBookSpGirlBC: 0,
    classFourNoBookSpTotalBC: 0,
    classFiveBoy: 0,
    classFiveGirl: 0,
    classFiveTotal: 0,
    classFiveNoBoyBC: 0,
    classFiveNoGirlBC: 0,
    classFiveNoTotalBC: 0,
    classFiveNoBookBoyBC: 0,
    classFiveNoBookGirlBC: 0,
    classFiveNoBookTotalBC: 0,
    classFiveSpBoy: 0,
    classFiveSpGirl: 0,
    classFiveSpTotal: 0,
    classFiveNoSpBoyBC: 0,
    classFiveNoSpGirlBC: 0,
    classFiveNoSpTotalBC: 0,
    classFiveNoBookSpBoyBC: 0,
    classFiveNoBookSpGirlBC: 0,
    classFiveNoBookSpTotalBC: 0,
    //Book checkout data
  };

  //Geo values
  divisions = divisions;
  districts = districts;
  upazilas = upazillas;
  unions = unions;
  //Geo values

  // For Datepicker
  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === "ios" ? true : false,
      date,
    });
  };

  show = (mode) => {
    this.setState({
      show: true,
      mode,
    });
  };

  datepicker = () => {
    this.show("date");
  };

  timepicker = () => {
    this.show("time");
  };
  // For Datepicker

  // Register new book-checkout data
  saveLibraryObservation = async () => {
    const newBookCheckout = {
      date: this.state.date,
      office: this.state.pickerOffice,
      project: this.state.pickerProject,
      district: this.state.pickerDistrict,
      upazila: this.state.pickerUpazila,
      school: this.state.pickerSchool,
      headTeacher: this.state.pickerHeadTeacher,
      gender: this.state.pickerGender,
      visitor: this.state.pickerVisitor,
      visitorDesignation: this.state.pickerDesignation,
      visitorOffice: this.state.pickerVisitorOffice,
      lf: this.state.pickerLF,
      lpo: this.state.pickerLPO,

      priPrimaryBoy: this.state.priPrimaryBoy,
      priPrimaryGirl: this.state.priPrimaryGirl,
      priPrimaryTotal: this.state.priPrimaryTotal,
      priPrimaryNoBoyBC: this.state.priPrimaryNoBoyBC,
      priPrimaryNoGirlBC: this.state.priPrimaryNoGirlBC,
      priPrimaryNoTotalBC: this.state.priPrimaryNoTotalBC,
      priPrimaryNoBookBoyBC: this.state.priPrimaryNoBookBoyBC,
      priPrimaryNoBookGirlBC: this.state.priPrimaryNoBookGirlBC,
      priPrimaryNoBookTotalBC: this.state.priPrimaryNoBookTotalBC,
      priPrimarySpBoy: this.state.priPrimarySpBoy,
      priPrimarySpGirl: this.state.priPrimarySpGirl,
      priPrimarySpTotal: this.state.priPrimarySpTotal,
      priPrimaryNoSpBoyBC: this.state.priPrimaryNoSpBoyBC,
      priPrimaryNoSpGirlBC: this.state.priPrimaryNoSpGirlBC,
      priPrimaryNoSpTotalBC: this.state.priPrimaryNoSpTotalBC,
      priPrimaryNoBookSpBoyBC: this.state.priPrimaryNoBookSpBoyBC,
      priPrimaryNoBookSpGirlBC: this.state.priPrimaryNoBookSpGirlBC,
      priPrimaryNoBookSpTotalBC: this.state.priPrimaryNoBookSpTotalBC,
      classOneBoy: this.state.classOneBoy,
      classOneGirl: this.state.classOneGirl,
      classOneTotal: this.state.classOneTotal,
      classOneNoBoyBC: this.state.classOneNoBoyBC,
      classOneNoGirlBC: this.state.classOneNoGirlBC,
      classOneNoTotalBC: this.state.classOneNoTotalBC,
      classOneNoBookBoyBC: this.state.classOneNoBookBoyBC,
      classOneNoBookGirlBC: this.state.classOneNoBookGirlBC,
      classOneNoBookTotalBC: this.state.classOneNoBookTotalBC,
      classOneSpBoy: this.state.classOneSpBoy,
      classOneSpGirl: this.state.classOneSpGirl,
      classOneSpTotal: this.state.classOneSpTotal,
      classOneNoSpBoyBC: this.state.classOneNoSpBoyBC,
      classOneNoSpGirlBC: this.state.classOneNoSpGirlBC,
      classOneNoSpTotalBC: this.state.classOneNoSpTotalBC,
      classOneNoBookSpBoyBC: this.state.classOneNoBookSpBoyBC,
      classOneNoBookSpGirlBC: this.state.classOneNoBookSpGirlBC,
      classOneNoBookSpTotalBC: this.state.classOneNoBookSpTotalBC,
      classTwoBoy: this.state.classTwoBoy,
      classTwoGirl: this.state.classTwoGirl,
      classTwoTotal: this.state.classTwoTotal,
      classTwoNoBoyBC: this.state.classTwoNoBoyBC,
      classTwoNoGirlBC: this.state.classTwoNoGirlBC,
      classTwoNoTotalBC: this.state.classTwoNoTotalBC,
      classTwoNoBookBoyBC: this.state.classTwoNoBookBoyBC,
      classTwoNoBookGirlBC: this.state.classTwoNoBookGirlBC,
      classTwoNoBookTotalBC: this.state.classTwoNoBookTotalBC,
      classTwoSpBoy: this.state.classTwoSpBoy,
      classTwoSpGirl: this.state.classTwoSpGirl,
      classTwoSpTotal: this.state.classTwoSpTotal,
      classTwoNoSpBoyBC: this.state.classTwoNoSpBoyBC,
      classTwoNoSpGirlBC: this.state.classTwoNoSpGirlBC,
      classTwoNoSpTotalBC: this.state.classTwoNoSpTotalBC,
      classTwoNoBookSpBoyBC: this.state.classTwoNoBookSpBoyBC,
      classTwoNoBookSpGirlBC: this.state.classTwoNoBookSpGirlBC,
      classTwoNoBookSpTotalBC: this.state.classTwoNoBookSpTotalBC,
      classThreeBoy: this.state.classThreeBoy,
      classThreeGirl: this.state.classThreeGirl,
      classThreeTotal: this.state.classThreeTotal,
      classThreeNoBoyBC: this.state.classThreeNoBoyBC,
      classThreeNoGirlBC: this.state.classThreeNoGirlBC,
      classThreeNoTotalBC: this.state.classThreeNoTotalBC,
      classThreeNoBookBoyBC: this.state.classThreeNoBookBoyBC,
      classThreeNoBookGirlBC: this.state.classThreeNoBookGirlBC,
      classThreeNoBookTotalBC: this.state.classThreeNoBookTotalBC,
      classThreeSpBoy: this.state.classThreeSpBoy,
      classThreeSpGirl: this.state.classThreeSpGirl,
      classThreeSpTotal: this.state.classThreeSpTotal,
      classThreeNoSpBoyBC: this.state.classThreeNoSpBoyBC,
      classThreeNoSpGirlBC: this.state.classThreeNoSpGirlBC,
      classThreeNoSpTotalBC: this.state.classThreeNoSpTotalBC,
      classThreeNoBookSpBoyBC: this.state.classThreeNoBookSpBoyBC,
      classThreeNoBookSpGirlBC: this.state.classThreeNoBookSpGirlBC,
      classThreeNoBookSpTotalBC: this.state.classThreeNoBookSpTotalBC,
      classFourBoy: this.state.classFourBoy,
      classFourGirl: this.state.classFourGirl,
      classFourTotal: this.state.classFourTotal,
      classFourNoBoyBC: this.state.classFourNoBoyBC,
      classFourNoGirlBC: this.state.classFourNoGirlBC,
      classFourNoTotalBC: this.state.classFourNoTotalBC,
      classFourNoBookBoyBC: this.state.classFourNoBookBoyBC,
      classFourNoBookGirlBC: this.state.classFourNoBookGirlBC,
      classFourNoBookTotalBC: this.state.classFourNoBookTotalBC,
      classFourSpBoy: this.state.classFourSpBoy,
      classFourSpGirl: this.state.classFourSpGirl,
      classFourSpTotal: this.state.classFourSpTotal,
      classFourNoSpBoyBC: this.state.classFourNoSpBoyBC,
      classFourNoSpGirlBC: this.state.classFourNoSpGirlBC,
      classFourNoSpTotalBC: this.state.classFourNoSpTotalBC,
      classFourNoBookSpBoyBC: this.state.classFourNoBookSpBoyBC,
      classFourNoBookSpGirlBC: this.state.classFourNoBookSpGirlBC,
      classFourNoBookSpTotalBC: this.state.classFourNoBookSpTotalBC,
      classFiveBoy: this.state.classFiveBoy,
      classFiveGirl: this.state.classFiveGirl,
      classFiveTotal: this.state.classFiveTotal,
      classFiveNoBoyBC: this.state.classFiveNoBoyBC,
      classFiveNoGirlBC: this.state.classFiveNoGirlBC,
      classFiveNoTotalBC: this.state.classFiveNoTotalBC,
      classFiveNoBookBoyBC: this.state.classFiveNoBookBoyBC,
      classFiveNoBookGirlBC: this.state.classFiveNoBookGirlBC,
      classFiveNoBookTotalBC: this.state.classFiveNoBookTotalBC,
      classFiveSpBoy: this.state.classFiveSpBoy,
      classFiveSpGirl: this.state.classFiveSpGirl,
      classFiveSpTotal: this.state.classFiveSpTotal,
      classFiveNoSpBoyBC: this.state.classFiveNoSpBoyBC,
      classFiveNoSpGirlBC: this.state.classFiveNoSpGirlBC,
      classFiveNoSpTotalBC: this.state.classFiveNoSpTotalBC,
      classFiveNoBookSpBoyBC: this.state.classFiveNoBookSpBoyBC,
      classFiveNoBookSpGirlBC: this.state.classFiveNoBookSpGirlBC,
      classFiveNoBookSpTotalBC: this.state.classFiveNoBookSpTotalBC,
    };
    try {
      let response = await fetch(
        "http://10.9.0.93:8080/api/v1/book-checkouts",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBookCheckout),
        }
      );
      if (response.status >= 200 && response.status < 300) {
        alert("Book checkout data saved successfully!!!");
      }
    } catch (errors) {
      alert(errors);
    }
  };
  // Register new book-checkout data

  render() {
    const { checked } = this.state;

    // For Datepicker
    const { show, date, mode } = this.state;
    // For Datepicker

    return (
      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 50,
              marginBottom: 50,
              alignContent: "center",
              textAlign: "center",
              alignSelf: "center",
              marginLeft: 100,
              marginRight: 100,
            }}
          >
            বিদ্যালয়ের মাসিক বই চেক-আউট পর্যবেক্ষণ ফরম
          </Text>
        </View>

        <ScrollView>
          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>সাধারণ তথ্য:</Text>

            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    তারিখ:
                  </Text>
                  <Button onPress={this.datepicker} title="Select Date" />
                  {show && (
                    <DateTimePicker
                      value={date}
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={this.setDate}
                    />
                  )}
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    ফিল্ড অফিস:
                  </Text>
                  <Picker
                    style={{
                      height: 40,
                      width: 150,
                    }}
                    selectedValue={this.state && this.state.pickerOffice}
                    onValueChange={(value) => {
                      this.setState({ pickerOffice: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"Dhaka"} value={"Dhaka"} />
                    <Picker.Item label={"Coxsbazar"} value={"Coxsbazar"} />
                    <Picker.Item label={"Natore"} value={"Natore"} />
                    <Picker.Item label={"Moulvibazar"} value={"Moulvibazar"} />
                  </Picker>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    প্রোজেক্ট:
                  </Text>
                  <Picker
                    style={{
                      height: 40,
                      width: 150,
                    }}
                    selectedValue={this.state && this.state.pickerProject}
                    onValueChange={(value) => {
                      this.setState({ pickerProject: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"CORE"} value={"CORE"} />
                    <Picker.Item label={"WFP"} value={"WFP"} />
                    <Picker.Item label={"UN"} value={"UN"} />
                    <Picker.Item label={"UNICEF"} value={"UNICEF"} />
                    <Picker.Item label={"WB"} value={"WB"} />
                  </Picker>
                </View>
              </View>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    জেলা:
                  </Text>
                  <Picker
                    style={{
                      height: 40,
                      width: 150,
                    }}
                    selectedValue={this.state && this.state.pickerDistrict}
                    onValueChange={(value) => {
                      this.setState({ pickerDistrict: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item key={""} label={"নির্বাচন করুন"} value={""} />
                    {districts.map((item) => {
                      return (
                        <Picker.Item
                          key={item.id}
                          label={item.name}
                          value={item.name}
                        />
                      );
                    })}
                    {/* <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"উখিয়া"} value={"Ukhiya"} />
                    <Picker.Item label={"কুতুবদিয়া"} value={"Kutubdia"} /> */}
                  </Picker>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    উপজেলা:
                  </Text>
                  <Picker
                    style={{
                      height: 40,
                      width: 150,
                    }}
                    selectedValue={this.state && this.state.pickerUpazila}
                    onValueChange={(value) => {
                      this.setState({ pickerUpazila: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item
                      label={"Coxsbazar Sadar"}
                      value={"Coxsbazar Sadar"}
                    />

                    <Picker.Item label={"Ukhiya"} value={"Ukhiya"} />
                    <Picker.Item label={"Kutubdia"} value={"Kutubdia"} />
                    <Picker.Item label={"Chakaria"} value={"Chakaria"} />
                    <Picker.Item label={"Ramu"} value={"Ramu"} />
                    <Picker.Item label={"Teknaf"} value={"Teknaf"} />
                    <Picker.Item label={"Maheshkhali"} value={"Maheshkhali"} />
                    <Picker.Item label={"Eidgoan"} value={"Eidgoan"} />
                  </Picker>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    বিদ্যালয়ের নাম:
                  </Text>
                  <Picker
                    style={{
                      height: 40,
                      width: 150,
                    }}
                    selectedValue={this.state && this.state.pickerSchool}
                    onValueChange={(value) => {
                      this.setState({ pickerSchool: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item
                      label={"Jalal Uddin GPS"}
                      value={"Jalal Uddin GPS"}
                    />
                    <Picker.Item
                      label={"Kutubdia Model GPS"}
                      value={"Kutubdia Model GPS"}
                    />
                    <Picker.Item
                      label={"Monohor khali GPS"}
                      value={"Monohor khali GPS"}
                    />
                  </Picker>
                </View>
              </View>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    প্রধান শিক্ষকের নাম:
                  </Text>
                  <TextInput
                    style={{
                      height: 30,
                      width: 200,
                      padding: 5,
                      borderWidth: 1,
                    }}
                    placeholder=""
                    onChangeText={(text) =>
                      this.setState({ pickerHeadTeacher: text })
                    }
                    value={this.state.pickerHeadTeacher}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    লিঙ্গ:
                  </Text>
                  <Picker
                    style={{
                      height: 40,
                      width: 200,
                    }}
                    selectedValue={this.state && this.state.pickerGender}
                    onValueChange={(value) => {
                      this.setState({ pickerGender: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"Female"} value={"Female"} />
                    <Picker.Item label={"Male"} value={"Male"} />
                  </Picker>
                </View>
              </View>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      পরিদর্শক এর নাম:
                    </Text>
                    <Text
                      style={{ textAlign: "right", color: "red", fontSize: 16 }}
                    >
                      *
                    </Text>
                  </View>

                  <Picker
                    style={{
                      height: 40,
                      width: 150,
                    }}
                    selectedValue={this.state && this.state.pickerVisitor}
                    onValueChange={(value) => {
                      this.setState({ pickerVisitor: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item
                      label={"Rakhi Sarkar"}
                      value={"Rakhi Sarkar"}
                    />
                    <Picker.Item
                      label={"Badruzzaman Khan"}
                      value={"Badruzzaman Khan"}
                    />
                    <Picker.Item
                      label={"Zakir Hossain"}
                      value={"Zakir Hossain"}
                    />

                    <Picker.Item
                      label={"Masudul Hasan"}
                      value={"Masudul Hasan"}
                    />
                    <Picker.Item
                      label={"Mushfiqur Rahman"}
                      value={"Mushfiqur Rahman"}
                    />
                  </Picker>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      পদবী:
                    </Text>
                    <Text
                      style={{ textAlign: "right", color: "red", fontSize: 16 }}
                    >
                      *
                    </Text>
                  </View>

                  <Picker
                    style={{
                      height: 40,
                      width: 150,
                    }}
                    selectedValue={this.state && this.state.pickerDesignation}
                    onValueChange={(value) => {
                      this.setState({ pickerDesignation: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"CD"} value={"CD"} />
                    <Picker.Item label={"POD"} value={"POD"} />
                    <Picker.Item label={"Sr.M"} value={"Sr.M"} />
                    <Picker.Item label={"LF"} value={"LF"} />
                    <Picker.Item label={"LPO"} value={"LPO"} />
                    <Picker.Item label={"Officer"} value={"Officer"} />
                  </Picker>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    পরিদর্শক এর অফিস:
                  </Text>
                  <Picker
                    selectedValue={this.state && this.state.pickerVisitorOffice}
                    onValueChange={(value) => {
                      this.setState({ pickerVisitorOffice: value });
                    }}
                    itemStyle={{ color: "white" }}
                    style={{
                      height: 40,
                      width: 150,
                    }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"CO"} value={"CO"} />
                    <Picker.Item label={"Dhaka"} value={"Dhaka"} />
                    <Picker.Item label={"Coxsbazar"} value={"Coxsbazar"} />
                    <Picker.Item label={"Natore"} value={"Natore"} />
                  </Picker>
                </View>
              </View>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    দায়িত্ব প্রাপ্ত এলএফ এর নামঃ
                  </Text>
                  <Picker
                    style={{
                      height: 40,
                      width: 200,
                    }}
                    selectedValue={this.state && this.state.pickerLF}
                    onValueChange={(value) => {
                      this.setState({ pickerLF: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item
                      label={"Masudul Hasan"}
                      value={"Masudul Hasan"}
                    />
                    <Picker.Item
                      label={"Mushfiqur Rahman"}
                      value={"Mushfiqur Rahman"}
                    />
                  </Picker>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    দায়িত্ব প্রাপ্ত এলপিও এর নামঃ
                  </Text>
                  <Picker
                    style={{
                      height: 40,
                      width: 200,
                    }}
                    selectedValue={this.state && this.state.pickerLPO}
                    onValueChange={(value) => {
                      this.setState({ pickerLPO: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item
                      label={"Masudul Hasan"}
                      value={"Masudul Hasan"}
                    />
                    <Picker.Item
                      label={"Mushfiqur Rahman"}
                      value={"Mushfiqur Rahman"}
                    />
                  </Picker>
                </View>
              </View>
            </Card>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>নির্দেশনা </Text>
            <Card style={{ padding: 10, margin: 10 }}>
              <Text style={{ padding: 5, fontWeight: "bold", fontSize: 18 }}>
                পূর্ববর্তী মাসে বই চেক-আউট হয়েছে (নিচের টেবিল অনুযায়ী প্রতিটি
                বিদ্যালয় থেকে তথ্য সংগ্রহ করুন এবং এবং প্রতি মাসের তথ্য পরের
                মাসের ২৫ তারিখের মধ্যে বিদ্যালয়ের বই চেক-আউট সংক্রান্ত তথ্য
                একত্রিত করে এলপিও এবং আরএমঅ্যান্ডই এসোসিয়েটির কাছে প্রেরণ করুন)
                ।
              </Text>
            </Card>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>
              শ্রেণি অনুযায়ী সকল শিক্ষার্থীর বই চেক-আউট তথ্য
            </Text>

            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5 }}>
                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        margin: 10,
                        alignSelf: "center",
                        fontWeight: "bold",
                      }}
                    >
                      প্রাক-প্রাথমিক শ্রেণি
                    </Text>
                  </Card>
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          placeholder=""
                          value={this.state.priPrimaryBoy}
                          onChangeText={(text) =>
                            this.setState({
                              priPrimaryBoy: text,
                              priPrimaryTotal: toString(
                                parseInt(text) +
                                  parseInt(this.state.priPrimaryTotal)
                              ),
                            })
                          }
                        />
                        <Text>{this.state.priPrimaryBoy}</Text>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          placeholder=""
                          value={this.state.priPrimaryGirl}
                          onChangeText={(text) =>
                            this.setState({
                              priPrimaryGirl: text,
                              priPrimaryTotal: toString(
                                parseInt(text) +
                                  parseInt(this.state.priPrimaryTotal)
                              ),
                            })
                          }
                        />
                        <Text>{this.state.priPrimaryGirl}</Text>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          placeholder=""
                          value={this.state.priPrimaryTotal}
                          editable={false}
                          selectTextOnFocus={false}
                        />
                        <Text>{toString(this.state.priPrimaryTotal)}</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>
              </View>
            </Card>
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5 }}>
                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        margin: 10,
                        alignSelf: "center",
                        fontWeight: "bold",
                      }}
                    >
                      বিশেষ চাহিদা সম্পন্ন শিক্ষার্থীর বই চেক-আউট তথ্য
                      (প্রাক-প্রাথমিক শ্রেণি)
                    </Text>
                  </Card>
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>
              </View>
            </Card>
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5 }}>
                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        margin: 10,
                        alignSelf: "center",
                        fontWeight: "bold",
                      }}
                    >
                      প্রথম শ্রেণি
                    </Text>
                  </Card>
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>
              </View>
            </Card>
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5 }}>
                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        margin: 10,
                        alignSelf: "center",
                        fontWeight: "bold",
                      }}
                    >
                      বিশেষ চাহিদা সম্পন্ন শিক্ষার্থীর বই চেক-আউট তথ্য
                    </Text>
                  </Card>
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>
              </View>
            </Card>
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5 }}>
                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        margin: 10,
                        alignSelf: "center",
                        fontWeight: "bold",
                      }}
                    >
                      দ্বিতীয় শ্রেণি
                    </Text>
                  </Card>
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>
              </View>
            </Card>
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5 }}>
                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        margin: 10,
                        alignSelf: "center",
                        fontWeight: "bold",
                      }}
                    >
                      বিশেষ চাহিদা সম্পন্ন শিক্ষার্থীর বই চেক-আউট তথ্য
                    </Text>
                  </Card>
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>
              </View>
            </Card>
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5 }}>
                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        margin: 10,
                        alignSelf: "center",
                        fontWeight: "bold",
                      }}
                    >
                      তৃতীয় শ্রেণি
                    </Text>
                  </Card>
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>
              </View>
            </Card>
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5 }}>
                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        margin: 10,
                        alignSelf: "center",
                        fontWeight: "bold",
                      }}
                    >
                      বিশেষ চাহিদা সম্পন্ন শিক্ষার্থীর বই চেক-আউট তথ্য
                    </Text>
                  </Card>
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>
              </View>
            </Card>
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5 }}>
                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        margin: 10,
                        alignSelf: "center",
                        fontWeight: "bold",
                      }}
                    >
                      চতুর্থ শ্রেণি
                    </Text>
                  </Card>
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>
              </View>
            </Card>
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5 }}>
                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        margin: 10,
                        alignSelf: "center",
                        fontWeight: "bold",
                      }}
                    >
                      বিশেষ চাহিদা সম্পন্ন শিক্ষার্থীর বই চেক-আউট তথ্য
                    </Text>
                  </Card>
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>
              </View>
            </Card>
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5 }}>
                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        margin: 10,
                        alignSelf: "center",
                        fontWeight: "bold",
                      }}
                    >
                      পঞ্চম শ্রেণি
                    </Text>
                  </Card>
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>
              </View>
            </Card>
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5 }}>
                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        margin: 10,
                        alignSelf: "center",
                        fontWeight: "bold",
                      }}
                    >
                      বিশেষ চাহিদা সম্পন্ন শিক্ষার্থীর বই চেক-আউট তথ্য
                    </Text>
                  </Card>
                  <Card
                    style={{
                      padding: 10,
                      margin: 10,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>শিক্ষার্থীর সংখ্যা, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 100,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>
              </View>
            </Card>
          </View>
          <View style={{ padding: 10 }}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "60%",
                backgroundColor: "#fb5b5a",
                borderRadius: 25,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 40,
                marginLeft: 100,
                marginBottom: 20,
              }}
            >
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View>
          <Text style={{ alignItems: "center", justifyContent: "center" }}>
            &copy; All Rights Reserved, RoomtoRead Bangladesh
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    flex: 1,
  },
  logoMain: {
    height: 80,
    width: 80,
    resizeMode: "contain",
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  bigBlueText: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
  },
  bigRedText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 15,
  },
  pickerStyle: {
    height: 150,
    width: "80%",
    color: "#344953",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
});
