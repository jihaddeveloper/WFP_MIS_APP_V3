//  Author: Mohammad Jihad Hossain
//  Create Date: 25/08/2021
//  Modify Date: 08/12/2021
//  Description: Library reading activities observation screen component

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
  TouchableOpacity,
} from "react-native";

import { Checkbox } from "react-native-paper";

import { Card } from "react-native-shadow-cards";

import DateTimePicker from "@react-native-community/datetimepicker";

export default class LibraryReadingActivitiesObservationScreen extends React.Component {
  state = {
    checked: false,
    option: "yes",

    choosenIndex: 0,

    date: new Date(),
    mode: "date",
    show: false,
  };

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

  render() {
    const { checked } = this.state;

    // For Datepicker
    const { show, date, mode } = this.state;
    // For Datepicker

    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 100,
            marginBottom: 50,
            alignContent: "center",
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          পড়ার ঘণ্টা কার্যক্রম পর্যবেক্ষণ ফরম
        </Text>

        <ScrollView style={{ flex: 1 }}>
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
                  <Button onPress={this.datepicker} title="Show date picker!" />
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
                    selectedValue={(this.state && this.state.option) || "yes"}
                    onValueChange={(value) => {
                      this.setState({ option: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"উখিয়া"} value={"Ukhiya"} />
                    <Picker.Item label={"কুতুবদিয়া"} value={"Kutubdia"} />
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
                    selectedValue={(this.state && this.state.option) || "yes"}
                    onValueChange={(value) => {
                      this.setState({ option: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"উখিয়া"} value={"Ukhiya"} />
                    <Picker.Item label={"কুতুবদিয়া"} value={"Kutubdia"} />
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
                    selectedValue={(this.state && this.state.option) || "yes"}
                    onValueChange={(value) => {
                      this.setState({ option: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"উখিয়া"} value={"Ukhiya"} />
                    <Picker.Item label={"কুতুবদিয়া"} value={"Kutubdia"} />
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
                    selectedValue={(this.state && this.state.option) || "yes"}
                    onValueChange={(value) => {
                      this.setState({ option: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"উখিয়া"} value={"Ukhiya"} />
                    <Picker.Item label={"কুতুবদিয়া"} value={"Kutubdia"} />
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
                    selectedValue={(this.state && this.state.option) || "yes"}
                    onValueChange={(value) => {
                      this.setState({ option: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"অ আ স্কুল"} value={"LF"} />
                    <Picker.Item label={"ক খ  স্কুল"} value={"LPO"} />
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
                      width: 200,
                    }}
                    selectedValue={(this.state && this.state.option) || "yes"}
                    onValueChange={(value) => {
                      this.setState({ option: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"মাসুদুল হাসান"} value={"LF"} />
                    <Picker.Item label={"মুশফিকুর রহমান "} value={"LPO"} />
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
                      width: 200,
                    }}
                    selectedValue={(this.state && this.state.option) || "yes"}
                    onValueChange={(value) => {
                      this.setState({ option: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"এলএফ"} value={"LF"} />
                    <Picker.Item label={"এলপিও "} value={"LPO"} />
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
                    selectedValue={(this.state && this.state.option) || "yes"}
                    onValueChange={(value) => {
                      this.setState({ option: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"মাসুদুল হাসান"} value={"LF"} />
                    <Picker.Item label={"মুশফিকুর রহমান "} value={"LPO"} />
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
                    selectedValue={(this.state && this.state.option) || "yes"}
                    onValueChange={(value) => {
                      this.setState({ option: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"মাসুদুল হাসান"} value={"LF"} />
                    <Picker.Item label={"মুশফিকুর রহমান "} value={"LPO"} />
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
                    শ্রেণি শিক্ষকের নাম:
                  </Text>
                  <TextInput
                    style={{
                      height: 30,
                      width: 200,
                      padding: 5,
                      borderWidth: 1,
                    }}
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
                    selectedValue={(this.state && this.state.option) || "yes"}
                    onValueChange={(value) => {
                      this.setState({ option: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"মহিলা"} value={"female"} />
                    <Picker.Item label={"পুরুষ"} value={"male"} />
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
                    সংশ্লিষ্ট বিষয়ে প্রশিক্ষণপ্রাপ্ত শিক্ষক পাঠ পরিচালনা করছেন
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Picker
                      style={{
                        height: 40,
                        width: 300,
                      }}
                      selectedValue={(this.state && this.state.option) || "yes"}
                      onValueChange={(value) => {
                        this.setState({ option: value });
                      }}
                      itemStyle={{ color: "white" }}
                    >
                      <Picker.Item label={"নির্বাচন করুন"} value={""} />
                      <Picker.Item label={"হ্যাঁ"} value={""} />
                      <Picker.Item label={"না"} value={"male"} />
                    </Picker>
                  </View>
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
                    শ্রেণী:
                  </Text>
                  <Picker
                    style={{
                      height: 40,
                      width: 100,
                    }}
                    selectedValue={(this.state && this.state.option) || "yes"}
                    onValueChange={(value) => {
                      this.setState({ option: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"১ম"} value={"1"} />
                    <Picker.Item label={"২য়"} value={"2"} />
                    <Picker.Item label={"৩য়"} value={"3"} />
                  </Picker>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    শাখা:
                  </Text>
                  <Picker
                    style={{
                      height: 40,
                      width: 150,
                    }}
                    selectedValue={(this.state && this.state.option) || "yes"}
                    onValueChange={(value) => {
                      this.setState({ option: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"ক"} value={"a"} />
                    <Picker.Item label={"খ"} value={"b"} />
                    <Picker.Item label={"গ"} value={"c"} />
                  </Picker>
                </View>
              </View>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        ক্লাস শুরুর সময়:
                      </Text>
                      {/* <Button
                        onPress={this.datepicker}
                        title="Show date picker!"
                      /> */}

                      <Button
                        onPress={this.timepicker}
                        title="Time picker"
                        style={{ width: 150 }}
                      />
                      {show && (
                        <DateTimePicker
                          value={date}
                          mode={mode}
                          is24Hour={true}
                          display="default"
                          onChange={this.setDate}
                        />
                      )}
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        ক্লাস শেষের সময়:
                      </Text>
                      {/* <Button
                        onPress={this.datepicker}
                        title="Show date picker!"
                      /> */}

                      <Button onPress={this.timepicker} title="Time picker" />
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
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    পাঠ নং/ পাঠের নাম:
                  </Text>
                  <TextInput
                    style={{
                      height: 30,
                      width: 200,
                      padding: 5,
                      borderWidth: 1,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    দিন:
                  </Text>
                  <Picker
                    style={{
                      height: 40,
                      width: 150,
                    }}
                    selectedValue={(this.state && this.state.option) || "yes"}
                    onValueChange={(value) => {
                      this.setState({ option: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"১ম"} value={"1"} />
                    <Picker.Item label={"২য়"} value={"2"} />
                    <Picker.Item label={"৩য় "} value={"3"} />
                    <Picker.Item label={"৪র্থ"} value={"4"} />
                    <Picker.Item label={"৫ম"} value={"5"} />
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
                    ভর্তিকৃত শিশুর সংখ্যা:
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                      <Text>মেয়ে:</Text>
                      <Text>ছেলে:</Text>
                      <Text>মোট:</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <TextInput
                        style={{
                          height: 30,
                          width: 100,
                          padding: 5,
                          borderWidth: 1,
                        }}
                      />
                      <TextInput
                        style={{
                          height: 30,
                          width: 100,
                          padding: 5,
                          borderWidth: 1,
                        }}
                      />
                      <TextInput
                        style={{
                          height: 30,
                          width: 100,
                          padding: 5,
                          borderWidth: 1,
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    উপস্থিত শিশুর সংখ্যা :
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                      <Text>মেয়ে:</Text>
                      <Text>ছেলে:</Text>
                      <Text>মোট:</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <TextInput
                        style={{
                          height: 30,
                          width: 100,
                          padding: 5,
                          borderWidth: 1,
                        }}
                      />
                      <TextInput
                        style={{
                          height: 30,
                          width: 100,
                          padding: 5,
                          borderWidth: 1,
                        }}
                      />
                      <TextInput
                        style={{
                          height: 30,
                          width: 100,
                          padding: 5,
                          borderWidth: 1,
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Card>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>নির্দেশনা </Text>

            <Card style={{ padding: 10, margin: 10 }}>
              <Text style={{ padding: 5 }}>
                ১। সংশ্লিষ্ট বিষয়ে প্রশিক্ষণপ্রাপ্ত শিক্ষক কর্তৃক পাঠ পরিচালিত
                হলেই কেবল সম্পূর্ণ পাঠ পর্যবেক্ষণ করুন ।
              </Text>
              <Text style={{ padding: 5 }}>
                ২। সম্পূর্ণ পাঠ পর্যবেক্ষণ করুন তবে প্রাইওরিটি এরিয়ার ভিত্তিতে
                ভালো দিক ও সহাওয়াতার ক্ষেত্রগুলা চিহ্নিত করুন ।
              </Text>
              <Text style={{ padding: 5 }}>
                ৩। পড়ার ঘণ্টা কার্যক্রম সংক্রান্ত 2-3 টি ভালো দিক উল্লেখ করুন।
              </Text>
              <Text style={{ padding: 5 }}>
                ৪। প্রাইওরিটি এরিয়ার ভিত্তিতে যে ১-২ টি ইনডিকেটরের উত্তর "না" বা
                আংশিক হয়েছে তার আলোকে সহায়তার জন্য অগ্রাধিকারভিত্তিক ইনডিকেটর
                উল্লেখ করুন ।
              </Text>
              <Text style={{ padding: 5 }}>
                ৫। শ্রেণীকক্ষ পড়ার ঘণ্টা কার্যক্রমে উন্নয়ন যোগ্য ১/২ টি ইনডিকেটর
                নিয়ে সংশ্লিষ্ট শিক্ষকের সাথে আলোচনা করুন।
              </Text>
              <Text style={{ padding: 5 }}>
                ৬। রুমটোরিড থেকে কোনো পদক্ষেপ গ্রহণের প্রয়োজন হলে উল্লেখ করুন ।
              </Text>
            </Card>
            <Card style={{ padding: 10, margin: 10 }}>
              <Text style={{ justifyContent: "flex-end" }}>
                ফলো-আপ করার জন্য গত পরিদর্শন থেকে প্রাপ্ত ১-২ টি বিষয় উল্লেখ
                করুন যেখানে উন্নতি প্রয়োজন ছিলঃ
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <View style={{ padding: 5 }}>
                    <Text>১.</Text>
                    <TextInput
                      style={{
                        height: 70,
                        width: 530,
                        padding: 5,
                        borderWidth: 1,
                      }}
                    />
                  </View>
                  <View style={{ padding: 5 }}>
                    <Text>২.</Text>
                    <TextInput
                      style={{
                        height: 70,
                        width: 530,
                        padding: 5,
                        borderWidth: 1,
                      }}
                    />
                  </View>
                  <View style={{ padding: 5 }}>
                    <Text>৩.</Text>
                    <TextInput
                      style={{
                        height: 70,
                        width: 530,
                        padding: 5,
                        borderWidth: 1,
                      }}
                    />
                  </View>
                </View>
              </View>
            </Card>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>পর্যবেক্ষণ</Text>

            <View
              style={{
                padding: 5,
                flexDirection: "row",
                alignSelf: "center",
                backgroundColor: "#ADD8E6",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#ADD8E6",
                  fontWeight: "bold",
                  alignContent: "center",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                সার্বিক
              </Text>
            </View>

            <View
              style={{
                padding: 5,
                flexDirection: "row",
                alignSelf: "center",
                backgroundColor: "#ADD8E6",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#ADD8E6",
                  fontWeight: "bold",
                  alignContent: "center",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                পড়ার আগে
              </Text>
            </View>

            <View
              style={{
                padding: 5,
                flexDirection: "row",
                alignSelf: "center",
                backgroundColor: "#ADD8E6",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#ADD8E6",
                  fontWeight: "bold",
                  alignContent: "center",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                পড়া চলাকালীন
              </Text>
            </View>

            <View
              style={{
                padding: 5,
                flexDirection: "row",
                alignSelf: "center",
                backgroundColor: "#ADD8E6",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#ADD8E6",
                  fontWeight: "bold",
                  alignContent: "center",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                পড়া শেষে
              </Text>
            </View>

            <View style={{ padding: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text
                    style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                  >
                    ক্রমিক নং
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text
                        style={{
                          backgroundColor: "#ADD8E6",
                          fontWeight: "bold",
                        }}
                      >
                        সরব পাঠ
                      </Text>
                      <Checkbox
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                          this.setState({ checked: !checked });
                        }}
                      />
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text
                        style={{
                          backgroundColor: "#ADD8E6",
                          fontWeight: "bold",
                        }}
                      >
                        অংশগ্রহণমূলক পাঠ
                      </Text>
                      <Checkbox
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                          this.setState({ checked: !checked });
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text
                        style={{
                          backgroundColor: "#ADD8E6",
                          fontWeight: "bold",
                        }}
                      >
                        স্বাধীনভাবে পড়া
                      </Text>
                      <Checkbox
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                          this.setState({ checked: !checked });
                        }}
                      />
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text
                        style={{
                          backgroundColor: "#ADD8E6",
                          fontWeight: "bold",
                        }}
                      >
                        জুটিতে পড়া
                      </Text>
                      <Checkbox
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                          this.setState({ checked: !checked });
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text
                    style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                  >
                    প্রাইওরিটি এরিয়া
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text
                    style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                  >
                    হ্যা
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text
                    style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                  >
                    না
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text
                    style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                  >
                    আংশিক
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text
                    style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                  >
                    মন্তব্য
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                >
                  ......................................................সার্বিক......................................................
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক সকল শিক্ষার্থীদের সাথে বন্ধুত্বপূর্ণ যোগাযোগ করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক সকল শিক্ষার্থীদের সাথে বন্ধুত্বপূর্ণ যোগাযোগ করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>১</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>হ্যা</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>না</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>২.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক পড়ার ঘণ্টা কার্যক্রমে ছেলে-মেয়ে, বিশেষ চাহিদা সম্পন্ন
                    ও পিছিয়ে পড়া শিক্ষার্থীদের অংশগ্রহণে উৎসাহিত করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক পড়ার ঘণ্টা কার্যক্রমে ছেলে-মেয়ে, বিশেষ চাহিদা সম্পন্ন
                    ও পিছিয়ে পড়া শিক্ষার্থীদের অংশগ্রহণে উৎসাহিত করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>১</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>হ্যা</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>না</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৩.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক পড়ার ঘণ্টা কার্যক্রম সম্পর্কে নির্দেশাবলী
                    পরিষ্কারভাবে দিয়েছেন এবং নির্দেশনা অনুযায়ী বর্ণিত ধাপগুলা
                    ধারাবাহিকভাবে অনুসরণ করে শ্রেণিপাঠ পরিচালনা করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক পড়ার ঘণ্টা কার্যক্রম সম্পর্কে নির্দেশাবলী
                    পরিষ্কারভাবে দিয়েছেন এবং নির্দেশনা অনুযায়ী বর্ণিত ধাপগুলা
                    ধারাবাহিকভাবে অনুসরণ করে শ্রেণিপাঠ পরিচালনা করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>১</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>হ্যা</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>না</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                >
                  ......................................................পড়ার
                  আগে......................................................
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৪.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক পাঠাগার থেকে একটা বই নিয়ে বইয়ের প্রচ্ছদ শিক্ষার্থীদের
                    দেখিয়েছেন এবং বইয়ের নাম ও লেখকের নাম বলেছেন{" "}
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>প্রযোজ্য নয়</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>২</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>হ্যা</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>না</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৫.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক বই থেকে দু-একটি শব্দ অর্থ সহ পরিষ্কারভাবে
                    শিক্ষার্থীদের শিখিয়েছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>প্রযোজ্য নয়</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>৩</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>হ্যা</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>না</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                >
                  ......................................................পড়া
                  চলাকালীন......................................................
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৬.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    গল্পের বই পড়ে শোনানোর পাশাপাশি শিক্ষক প্রযোজ্য ক্ষেত্রে
                    অভিব্যক্তি প্রকাশ ও অঙ্গভঙ্গি করেও দেখিয়েছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>প্রযোজ্য নয়</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>১</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>হ্যা</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>না</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৭.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শুধুমাত্র অংশ গ্রহণ মূলক পড়ার ক্ষেত্রে ঃ গল্পটি
                    শিক্ষার্থীদের পড়ার লেভেল অনুযায়ী উপযুক্ত ছিল ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>প্রযোজ্য নয়</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>১</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>হ্যা</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>না</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৮.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শুধুমাত্র অংশ গ্রহণ মূলক পড়ার জন্যঃ গল্পটি দ্বিতীয়বার পড়ার
                    ক্ষেত্রে, শিক্ষক শিক্ষার্থীরা একসাথে পড়েছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শুধুমাত্র জুটিতে পড়ার ক্ষেত্রে ঃ শিক্ষক নির্দেশনার মাধ্যমে
                    নিশ্চিত করেছেন যে, শিক্ষার্থীরা একে অপরের পাশে জোড়ায় জোড়ায়
                    বসেছে এবং উভয়ই পড়েছে ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>১</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>হ্যা</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>না</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৯.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    সকল ধরনের (ছেলে-মেয়ে, বিশেষ চাহিদা সম্পন্ন ও পিছিয়ে পড়া)
                    শিক্ষার্থীদের অংশগ্রহণ নিশ্চিত শিক্ষক গল্পটি পড়ার সময় এরপর
                    কি হতে/ঘটতে পারে ? এমন দু/তিনটি প্রশ্ন করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    সকল ধরনের (ছেলে-মেয়ে, বিশেষ চাহিদা সম্পন্ন ও পিছিয়ে পড়া)
                    শিক্ষার্থীদের অংশগ্রহণ নিশ্চিত করতে শিক্ষক একক বা জুটিতে পড়া
                    শুনেছেন এবং প্রয়োজনে প্রশ্ন করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>২</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>হ্যা</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>না</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                >
                  ......................................................পড়া
                  শেষে......................................................
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১০.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    সকল ধরনের (ছেলে-মেয়ে, বিশেষ চাহিদা সম্পন্ন ও পিছিয়ে পড়া)
                    শিক্ষার্থীদের বোধগম্যতা যাচাইয়ের জন্য শিক্ষক কখন, কোথায়, কি
                    এবং কে ইত্যাদি প্রশ্ন করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    সকল ধরনের (ছেলে-মেয়ে, বিশেষ চাহিদা সম্পন্ন ও পিছিয়ে পড়া)
                    শিক্ষার্থীদের বোধগম্যতা যাচাইয়ের জন্য শিক্ষক কখন, কোথায়, কি
                    এবং কে ইত্যাদি প্রশ্ন করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>৩</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>হ্যা</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>না</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১১.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    বই চেক আউট করার জন্য আহ্বান জানিয়েছে বা সুযোগ করে দিয়েছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    বই চেক আউট করার জন্য আহ্বান জানিয়েছে বা সুযোগ করে দিয়েছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>১</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>হ্যা</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>না</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>আলোচনা</Text>
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <Text style={{ backgroundColor: "#ADD8E6" }}>
                শ্রেণি শিক্ষকের সাথে আলোচনার জন্য গুরুত্বপূর্ণ কিছু বিষয়ঃ
              </Text>
              <View style={{ padding: 5 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      বিদ্যালয়ের পাঠাগারগুলো ভালো অবস্থায় আছে এমন এমন ২/৩ টি
                      ইনডিকেটর ( নম্বর ) উল্লেখ করুন ।
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5, borderWidth: 1 }}
                      placeholder="১."
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5, borderWidth: 1 }}
                      placeholder="২."
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5, borderWidth: 1 }}
                      placeholder="৩."
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      অগ্রাধিকারভিত্তিতে বিদ্যালয়ের পাঠাগারগুলো উন্নয়নের জন্য যে
                      ১/২ টি ইনডিকেটর (এরিয়ার নম্বর) চিহ্নিত করেছেন তা প্রধান
                      শিক্ষককে অবহিত করুন এবং তিনি পাঠাগারগুলো উন্নয়নে কি করতে
                      পারেন সেটি উল্লেখ করুন ।
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5, borderWidth: 1 }}
                      placeholder="১."
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5, borderWidth: 1 }}
                      placeholder="২."
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>কিভাবে করবেন ঃ</Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 80, padding: 5, borderWidth: 1 }}
                      placeholder="১."
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 80, padding: 5, borderWidth: 1 }}
                      placeholder="২."
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      যে কাজ গুলো করার জন্য প্রধান শিক্ষক একমত হয়েছেন সেটি/
                      সেগুলো উল্লেখ করুন ।
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 80, padding: 5, borderWidth: 1 }}
                      placeholder="১."
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 80, padding: 5, borderWidth: 1 }}
                      placeholder="২."
                    ></TextInput>
                  </View>
                </View>
              </View>
            </Card>
          </View>

          {/* <View style={{ padding: 10 }}>
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
          </View> */}
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
