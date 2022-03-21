//  Author: Mohammad Jihad Hossain
//  Create Date: 11/10/2021
//  Modify Date: 20/03/2022
//  Description: Monthly book checkout screen component

import React from "react";
import axios from "axios";
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
  constructor(props) {
    super(props);
    this.state = {
      //Preloaded Data
      allProject: [],
      allSchool: [],
      allTeacher: [],
      allEmployee: [],
      allOffice: [],
      allDesignation: [],
      //Preloaded Data

      isLoading: true,

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
      pickerDistrictKey: "",
      pickerUpazilla: "",
      pickerUpazillaKey: "",
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
      priPrimaryBoy: 0,
      priPrimaryGirl: 0,
      priPrimaryTotal: 0,

      priPrimaryNoBoyBC: 0,
      priPrimaryNoGirlBC: 0,
      priPrimaryNoTotalBC: 0,

      priPrimaryNoBookBoyBC: 0,
      priPrimaryNoBookGirlBC: 0,
      priPrimaryNoBookTotalBC: 0,

      priPrimarySpBoy: 0,
      priPrimarySpGirl: 0,
      priPrimarySpTotal: 0,

      priPrimaryNoSpBoyBC: 0,
      priPrimaryNoSpGirlBC: 0,
      priPrimaryNoSpTotalBC: 0,

      priPrimaryNoBookSpBoyBC: 0,
      priPrimaryNoBookSpGirlBC: 0,
      priPrimaryNoBookSpTotalBC: 0,

      classOneBoy: 0,
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
  }

  //Geo values
  divisions = divisions;
  districts = districts;
  upazillas = upazillas;
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

  // Get All Project
  getAllProject = async () => {
    try {
      const response = await fetch("http://10.9.0.110:8080/api/v1/projects");
      const json = await response.json();
      this.setState({ allProject: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  // Get All Project

  // Get All Office
  getAllOffice = async () => {
    try {
      const response = await fetch("http://10.9.0.110:8080/api/v1/offices");
      const json = await response.json();
      this.setState({ allOffice: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  // Get All Office

  // Get All School
  getAllSchool = async () => {
    try {
      const response = await axios("http://10.9.0.219:8080/api/v1/schools", {
        method: "GET",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      this.setState({ allSchool: response.data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };
  // Get All School

  // Get All Teacher
  getAllTeacher = async () => {
    try {
      const response = await fetch("http://10.9.0.110:8080/api/v1/teachers");
      const json = await response.json();
      this.setState({ allTeacher: json, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };
  // Get All Teacher

  // Get All Employee
  getAllEmployee = async () => {
    try {
      const response = await axios("http://10.9.0.219:8080/api/v1/employees", {
        method: "GET",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      this.setState({ allEmployee: response.data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };
  // Get All Employee

  // Get All Designation
  getAllDesignation = async () => {
    try {
      const response = await fetch(
        "http://10.9.0.110:8080/api/v1/designations"
      );
      const json = await response.json();
      this.setState({ allDesignation: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  // Get All Designation

  // Register new book-checkout data
  saveBookCheckout = async () => {
    const newBookCheckout = {
      date: this.state.date,
      office: this.state.pickerOffice,
      project: this.state.pickerProject,
      district: this.state.pickerDistrict.name,
      upazila: this.state.pickerUpazila.name,
      school: this.state.pickerSchool.name,
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
        "http://10.9.0.219:8080/api/v1/book-checkouts",
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

  componentDidMount() {
    this.getAllSchool();
    this.getAllEmployee();
    // this.getAllProject();
    // this.getAllDesignation();
    // this.getAllOffice();
    // this.getAllTeacher();
    console.log("Component mounted");
  }

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
                    <Picker.Item label={"DFO"} value={"DFO"} />
                    <Picker.Item label={"CFO"} value={"CFO"} />
                    <Picker.Item label={"NFO"} value={"NFO"} />
                    <Picker.Item label={"SFO"} value={"SFO"} />
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
                    onValueChange={(item, key) => {
                      console.log(item, key);
                      this.setState({
                        pickerDistrict: item,
                        pickerDistrictKey: item.id,
                      });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item key={""} label={"নির্বাচন করুন"} value={""} />
                    {districts.map((item) => {
                      //console.log(item);
                      return (
                        <Picker.Item
                          key={item.id}
                          label={item.name}
                          value={item}
                        />
                      );
                    })}
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
                    selectedValue={this.state && this.state.pickerUpazilla}
                    onValueChange={(item, key) => {
                      this.setState({
                        pickerUpazilla: item,
                        pickerUpazillaKey: item.id,
                      });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item key={""} label={"নির্বাচন করুন"} value={""} />
                    {upazillas
                      .filter(
                        (item) =>
                          item.district_id == this.state.pickerDistrictKey
                      )
                      .map((item) => {
                        return (
                          <Picker.Item
                            key={item.id}
                            label={item.name}
                            value={item}
                          />
                        );
                      })}
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
                    {this.state.allSchool
                      .filter((item) => {
                        return item.upazilla == this.state.pickerUpazilla.name;
                      })
                      .map((item) => {
                        return (
                          <Picker.Item
                            key={item.id}
                            label={item.name}
                            value={item}
                          />
                        );
                      })}
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
                    {this.state.allEmployee.map((item) => {
                      return (
                        <Picker.Item
                          key={item.id}
                          label={item.name}
                          value={item.name}
                        />
                      );
                    })}
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
                    <Picker.Item label={"PM"} value={"PM"} />
                    <Picker.Item label={"Sr.M"} value={"Sr.M"} />
                    <Picker.Item label={"M"} value={"M"} />
                    <Picker.Item label={"Sr.O"} value={"Sr.O"} />
                    <Picker.Item label={"O"} value={"0"} />
                    <Picker.Item label={"Sr.A"} value={"Sr.A"} />
                    <Picker.Item label={"A"} value={"A"} />
                    <Picker.Item label={"LF"} value={"LF"} />
                    <Picker.Item label={"LPO"} value={"LPO"} />
                    <Picker.Item label={"RM&E"} value={"RM&E"} />
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
                    <Picker.Item label={"DFO"} value={"DFO"} />
                    <Picker.Item label={"CFO"} value={"CFO"} />
                    <Picker.Item label={"NFO"} value={"NFO"} />
                    <Picker.Item label={"SFO"} value={"SFO"} />
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
                    {this.state.allEmployee.map((item) => {
                      return (
                        <Picker.Item
                          key={item.id}
                          label={item.name}
                          value={item.name}
                        />
                      );
                    })}
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
                    {this.state.allEmployee.map((item) => {
                      return (
                        <Picker.Item
                          key={item.id}
                          label={item.name}
                          value={item.name}
                        />
                      );
                    })}
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
                          value={this.state.priPrimaryBoy + ""}
                          onChangeText={(text) => {
                            const value = Number(text);
                            if (isNaN(value)) return false;

                            this.setState({
                              priPrimaryBoy: value,
                              priPrimaryTotal:
                                value + this.state.priPrimaryGirl,
                            });
                          }}
                        />
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
                          value={this.state.priPrimaryGirl + ""}
                          onChangeText={(text) => {
                            const value = Number(text);
                            if (isNaN(value)) return false;

                            this.setState({
                              priPrimaryGirl: value,
                              priPrimaryTotal: value + this.state.priPrimaryBoy,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.priPrimaryTotal + ""}
                          editable={false}
                        />
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
                          keyboardType="numeric"
                          editable={true}
                          value={this.state.priPrimaryNoBoyBC + ""}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              priPrimaryNoBoyBC: value,
                              priPrimaryNoTotalBC:
                                value + this.state.priPrimaryNoGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          editable={true}
                          value={this.state.priPrimaryNoGirlBC + ""}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              priPrimaryNoGirlBC: value,
                              priPrimaryNoTotalBC:
                                value + this.state.priPrimaryNoBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.priPrimaryNoTotalBC + ""}
                          editable={false}
                          onChangeText={(text) =>
                            this.setState({
                              priPrimaryNoTotalBC: text,
                            })
                          }
                        />
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.priPrimaryNoBookBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              priPrimaryNoBookBoyBC: value,
                              priPrimaryNoBookTotalBC:
                                value + this.state.priPrimaryNoBookGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.priPrimaryNoBookGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              priPrimaryNoBookGirlBC: value,
                              priPrimaryNoBookTotalBC:
                                value + this.state.priPrimaryNoBookBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.priPrimaryNoBookTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              priPrimaryNoBookTotalBC: text,
                            });
                          }}
                        />
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
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.priPrimarySpBoy + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              priPrimarySpBoy: value,
                              priPrimarySpTotal:
                                value + this.state.priPrimarySpGirl,
                            });
                          }}
                        />
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
                          value={this.state.priPrimarySpGirl + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              priPrimarySpGirl: value,
                              priPrimarySpTotal:
                                value + this.state.priPrimarySpBoy,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.priPrimarySpTotal + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              priPrimarySpTotal: text,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.priPrimaryNoSpBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              priPrimaryNoSpBoyBC: value,
                              priPrimaryNoSpTotalBC:
                                value + this.state.priPrimaryNoSpGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.priPrimaryNoSpGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              priPrimaryNoSpGirlBC: value,
                              priPrimaryNoSpTotalBC:
                                value + this.state.priPrimaryNoSpBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.priPrimaryNoSpTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              priPrimaryNoSpTotalBC: text,
                            });
                          }}
                        />
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.priPrimaryNoBookSpBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              priPrimaryNoBookSpBoyBC: value,
                              priPrimaryNoBookSpTotalBC:
                                value + this.state.priPrimaryNoBookSpGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.priPrimaryNoBookSpGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              priPrimaryNoBookSpGirlBC: value,
                              priPrimaryNoBookSpTotalBC:
                                value + this.state.priPrimaryNoBookSpBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.priPrimaryNoBookSpTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              priPrimaryNoBookSpTotalBC: text,
                            });
                          }}
                        />
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
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classOneBoy + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classOneBoy: value,
                              classOneTotal: value + this.state.classOneGirl,
                            });
                          }}
                        />
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
                          value={this.state.classOneGirl + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classOneGirl: value,
                              classOneTotal: value + this.state.classOneBoy,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classOneTotal + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classOneTotal: text,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classOneNoBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classOneNoBoyBC: value,
                              classOneNoTotalBC:
                                value + this.state.classOneNoGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classOneNoGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classOneNoGirlBC: value,
                              classOneNoTotalBC:
                                value + this.state.classOneNoBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classOneNoTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classOneNoTotalBC: text,
                            });
                          }}
                        />
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classOneNoBookBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classOneNoBookBoyBC: value,
                              classOneNoBookTotalBC:
                                value + this.state.classOneNoBookGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classOneNoBookGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classOneNoBookGirlBC: value,
                              classOneNoBookTotalBC:
                                value + this.state.classOneNoBookBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classOneNoBookTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classOneNoBookTotalBC: text,
                            });
                          }}
                        />
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
                      বিশেষ চাহিদা সম্পন্ন শিক্ষার্থীর বই চেক-আউট তথ্য(প্রথম
                      শ্রেণি)
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
                            width: 105,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classOneSpBoy + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classOneSpBoy: value,
                              classOneSpTotal:
                                value + this.state.classOneSpGirl,
                            });
                          }}
                        />
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
                          value={this.state.classOneSpGirl + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classOneSpGirl: value,
                              classOneSpTotal: value + this.state.classOneSpBoy,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classOneSpTotal + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classOneSpTotal: text,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classOneNoSpBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classOneNoSpBoyBC: value,
                              classOneNoSpTotalBC:
                                value + this.state.classOneNoSpGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classOneNoSpGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classOneNoSpGirlBC: value,
                              classOneNoSpTotalBC:
                                value + this.state.classOneNoSpBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classOneNoSpTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classOneNoSpTotalBC: text,
                            });
                          }}
                        />
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classOneNoBookSpBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classOneNoBookSpBoyBC: value,
                              classOneNoBookSpTotalBC:
                                value + this.state.classOneNoBookSpGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classOneNoBookSpGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classOneNoBookSpGirlBC: value,
                              classOneNoBookSpTotalBC:
                                value + this.state.classOneNoBookSpBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classOneNoBookSpTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classOneNoBookSpTotalBC: text,
                            });
                          }}
                        />
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
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classTwoBoy + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classTwoBoy: value,
                              classTwoTotal: value + this.state.classTwoGirl,
                            });
                          }}
                        />
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
                          value={this.state.classTwoGirl + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classTwoGirl: value,
                              classTwoTotal: value + this.state.classTwoBoy,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classTwoTotal + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classTwoTotal: text,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classTwoNoBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classTwoNoBoyBC: value,
                              classTwoNoTotalBC:
                                value + this.state.classTwoNoGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classTwoNoGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classTwoNoGirlBC: value,
                              classTwoNoTotalBC:
                                value + this.state.classTwoNoBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classTwoNoTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classTwoNoTotalBC: text,
                            });
                          }}
                        />
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classTwoNoBookBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classTwoNoBookBoyBC: value,
                              classTwoNoBookTotalBC:
                                value + this.state.classTwoNoBookGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classTwoNoBookGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classTwoNoBookGirlBC: value,
                              classTwoNoBookTotalBC:
                                value + this.state.classTwoNoBookBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classTwoNoBookTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classTwoNoBookTotalBC: text,
                            });
                          }}
                        />
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
                      বিশেষ চাহিদা সম্পন্ন শিক্ষার্থীর বই চেক-আউট তথ্য(দ্বিতীয়
                      শ্রেণি)
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
                          value={this.state.classTwoSpBoy + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classTwoSpBoy: value,
                              classTwoSpTotal:
                                value + this.state.classTwoSpGirl,
                            });
                          }}
                        />
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
                          value={this.state.classTwoSpGirl + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classTwoSpGirl: value,
                              classTwoSpTotal: value + this.state.classTwoSpBoy,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classTwoSpTotal + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classTwoSpTotal: text,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classTwoNoSpBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classTwoNoSpBoyBC: value,
                              classTwoNoSpTotalBC:
                                value + this.state.classTwoNoSpGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classTwoNoSpGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classTwoNoSpGirlBC: value,
                              classTwoNoSpTotalBC:
                                value + this.state.classTwoNoSpBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classTwoNoSpTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classTwoNoSpTotalBC: text,
                            });
                          }}
                        />
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classTwoNoBookSpBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classTwoNoBookSpBoyBC: value,
                              classTwoNoBookSpTotalBC:
                                value + this.state.classTwoNoBookSpGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classTwoNoBookSpGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classTwoNoBookSpGirlBC: value,
                              classTwoNoBookSpTotalBC:
                                value + this.state.classTwoNoBookSpBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classTwoNoBookSpTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classTwoNoBookSpTotalBC: text,
                            });
                          }}
                        />
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
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classThreeBoy + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classThreeBoy: value,
                              classThreeTotal:
                                value + this.state.classThreeGirl,
                            });
                          }}
                        />
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
                          value={this.state.classThreeGirl + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classThreeGirl: value,
                              classThreeTotal: value + this.state.classThreeBoy,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classThreeTotal + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classThreeTotal: text,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classThreeNoBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classThreeNoBoyBC: value,
                              classThreeNoTotalBC:
                                value + this.state.classThreeNoGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classThreeNoGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classThreeNoGirlBC: value,
                              classThreeNoTotalBC:
                                value + this.state.classThreeNoBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classThreeNoTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classThreeNoTotalBC: text,
                            });
                          }}
                        />
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classThreeNoBookBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classThreeNoBookBoyBC: value,
                              classThreeNoBookTotalBC:
                                value + this.state.classThreeNoBookGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classThreeNoBookGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classThreeNoBookGirlBC: value,
                              classThreeNoBookTotalBC:
                                value + this.state.classThreeNoBookBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classThreeNoBookTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classThreeNoBookTotalBC: text,
                            });
                          }}
                        />
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
                      বিশেষ চাহিদা সম্পন্ন শিক্ষার্থীর বই চেক-আউট তথ্য(তৃতীয়
                      শ্রেণি)
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
                          value={this.state.classThreeSpBoy + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classThreeSpBoy: value,
                              classThreeSpTotal:
                                value + this.state.classThreeSpGirl,
                            });
                          }}
                        />
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
                          value={this.state.classThreeSpGirl + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classThreeSpGirl: value,
                              classThreeSpTotal:
                                value + this.state.classThreeSpBoy,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classThreeSpTotal + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classThreeSpTotal: text,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classThreeNoSpBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classThreeNoSpBoyBC: value,
                              classThreeNoSpTotalBC:
                                value + this.state.classThreeNoSpGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classThreeNoSpGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classThreeNoSpGirlBC: value,
                              classThreeNoSpTotalBC:
                                value + this.state.classThreeNoSpBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classThreeNoSpTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classThreeNoSpTotalBC: text,
                            });
                          }}
                        />
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classThreeNoBookSpBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classThreeNoBookSpBoyBC: value,
                              classThreeNoBookSpTotalBC:
                                value + this.state.classThreeNoBookSpGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classThreeNoBookSpGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classThreeNoBookSpGirlBC: value,
                              classThreeNoBookSpTotalBC:
                                value + this.state.classThreeNoBookSpBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classThreeNoBookSpTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classThreeNoBookSpTotalBC: text,
                            });
                          }}
                        />
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
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFourBoy + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFourBoy: value,
                              classFourTotal: value + this.state.classFourGirl,
                            });
                          }}
                        />
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
                          value={this.state.classFourGirl + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFourGirl: value,
                              classFourTotal: value + this.state.classFourBoy,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classFourTotal + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classFourTotal: text,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classFourNoBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFourNoBoyBC: value,
                              classFourNoTotalBC:
                                value + this.state.classFourNoGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFourNoGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFourNoGirlBC: value,
                              classFourNoTotalBC:
                                value + this.state.classFourNoBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFourNoTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classFourNoTotalBC: text,
                            });
                          }}
                        />
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFourNoBookBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFourNoBookBoyBC: value,
                              classFourNoBookTotalBC:
                                value + this.state.classFourNoBookGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFourNoBookGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFourNoBookGirlBC: value,
                              classFourNoBookTotalBC:
                                value + this.state.classFourNoBookBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFourNoBookTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classFourNoBookTotalBC: text,
                            });
                          }}
                        />
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
                      বিশেষ চাহিদা সম্পন্ন শিক্ষার্থীর বই চেক-আউট তথ্য(চতুর্থ
                      শ্রেণি)
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
                          value={this.state.classFourSpBoy + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFourSpBoy: value,
                              classFourSpTotal:
                                value + this.state.classFourSpGirl,
                            });
                          }}
                        />
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
                          value={this.state.classFourSpGirl + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFourSpGirl: value,
                              classFourSpTotal:
                                value + this.state.classFourSpBoy,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classFourSpTotal + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classFourSpTotal: text,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classFourNoSpBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFourNoSpBoyBC: value,
                              classFourNoSpTotalBC:
                                value + this.state.classFourNoSpGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFourNoSpGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFourNoSpGirlBC: value,
                              classFourNoSpTotalBC:
                                value + this.state.classFourNoSpBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFourNoSpTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classFourNoSpTotalBC: text,
                            });
                          }}
                        />
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFourNoBookSpBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFourNoBookSpBoyBC: value,
                              classFourNoBookSpTotalBC:
                                value + this.state.classFourNoBookSpGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFourNoBookSpGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFourNoBookSpGirlBC: value,
                              classFourNoBookSpTotalBC:
                                value + this.state.classFourNoBookSpBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFourNoBookSpTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classFourNoBookSpTotalBC: text,
                            });
                          }}
                        />
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
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFiveBoy + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFiveBoy: value,
                              classFiveTotal: value + this.state.classFiveGirl,
                            });
                          }}
                        />
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
                          value={this.state.classFiveGirl + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFiveGirl: value,
                              classFiveTotal: value + this.state.classFiveBoy,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classFiveTotal + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classFiveTotal: text,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classFiveNoBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFiveNoBoyBC: value,
                              classFiveNoTotalBC:
                                value + this.state.classFiveNoGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFiveNoGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFiveNoGirlBC: value,
                              classFiveNoTotalBC:
                                value + this.state.classFiveNoBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFiveNoTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classFiveNoTotalBC: text,
                            });
                          }}
                        />
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFiveNoBookBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFiveNoBookBoyBC: value,
                              classFiveNoBookTotalBC:
                                value + this.state.classFiveNoBookGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFiveNoBookGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFiveNoBookGirlBC: value,
                              classFiveNoBookTotalBC:
                                value + this.state.classFiveNoBookBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFiveNoBookTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classFiveNoBookTotalBC: text,
                            });
                          }}
                        />
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
                      বিশেষ চাহিদা সম্পন্ন শিক্ষার্থীর বই চেক-আউট তথ্য(পঞ্চম
                      শ্রেণি)
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
                          value={this.state.classFiveSpBoy + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFiveSpBoy: value,
                              classFiveSpTotal:
                                value + this.state.classFiveSpGirl,
                            });
                          }}
                        />
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
                          value={this.state.classFiveSpGirl + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFiveSpGirl: value,
                              classFiveSpTotal:
                                value + this.state.classFiveSpBoy,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classFiveSpTotal + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classFiveSpTotal: text,
                            });
                          }}
                        />
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
                          keyboardType="numeric"
                          value={this.state.classFiveNoSpBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFiveNoSpBoyBC: value,
                              classFiveNoSpTotalBC:
                                value + this.state.classFiveNoSpGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFiveNoSpGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFiveNoSpGirlBC: value,
                              classFiveNoSpTotalBC:
                                value + this.state.classFiveNoSpBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>কত জন শিক্ষার্থী বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFiveNoSpTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classFiveNoSpTotalBC: text,
                            });
                          }}
                        />
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালক: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFiveNoBookSpBoyBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFiveNoBookSpBoyBC: value,
                              classFiveNoBookSpTotalBC:
                                value + this.state.classFiveNoBookSpGirlBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, বালিকা: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFiveNoBookSpGirlBC + ""}
                          editable={true}
                          onChangeText={(text) => {
                            const value = Number(text);
                            this.setState({
                              classFiveNoBookSpGirlBC: value,
                              classFiveNoBookSpTotalBC:
                                value + this.state.classFiveNoBookSpBoyBC,
                            });
                          }}
                        />
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মোট বই চেক আউট করেছে, মোট: </Text>
                        <TextInput
                          style={{
                            height: 30,
                            width: 150,
                            padding: 5,
                            borderWidth: 1,
                          }}
                          keyboardType="numeric"
                          value={this.state.classFiveNoBookSpTotalBC + ""}
                          editable={false}
                          onChangeText={(text) => {
                            this.setState({
                              classFiveNoBookSpTotalBC: text,
                            });
                          }}
                        />
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
              onPress={this.saveBookCheckout.bind(this)}
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
