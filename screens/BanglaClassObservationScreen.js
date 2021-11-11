//  Author: Mohammad Jihad Hossain
//  Create Date: 17/08/2021
//  Modify Date: 09/11/2021
//  Description: Bangla class observation component

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
} from "react-native";
import { Card } from "react-native-shadow-cards";

import DateTimePicker from "@react-native-community/datetimepicker";

export default class BanglaClassObservationScreen extends React.Component {
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
            বাংলা ক্লাস পর্যবেক্ষণ ফরম
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
                    উপজেলা:
                  </Text>
                  <Picker
                    style={{
                      height: 40,
                      width: 120,
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
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
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
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
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
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
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
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
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
                ১। সংশ্লিষ্ট বিষয়ে প্রশিক্ষণপ্রাপ্ত শিক্ষক কত্রিক পাঠ পরিচালিত
                হলেই কেবল সম্পূর্ণ পাঠ পর্যবেক্ষণ করুন ।
              </Text>
              <Text style={{ padding: 5 }}>
                ২। সম্পূর্ণ পাঠ পর্যবেক্ষণ করুন তবে অগ্রাধিকার এরিয়ার ভিত্তিতে
                ভালো দিক ও সহায়তার ক্ষেত্রগুলা চিহ্নিত করুন ।
              </Text>
              <Text style={{ padding: 5 }}>
                ৩। বাংলা পাঠ উপস্থাপন সংক্রান্ত 2-3 টি ভালো দিক উল্লেখ করুন।
              </Text>
              <Text style={{ padding: 5 }}>
                ৪। অগ্রাধিকার এরিয়ার ভিত্তিতে উপর ভিত্তিতে যে ১-২ টি ইনডিকেটরের
                উত্তর "না বা আংশিক" হয়েছে তার আলোকে সহায়তার জন্য
                অগ্রাধিকারভিত্তিক ইনডিকেটর উল্লেখ করুন
              </Text>
              <Text style={{ padding: 5 }}>
                ৫। বাংলা পাঠ উন্নতির জন্য শিক্ষকের সাথে 2-3 সূচক আলোচনা করুন।
              </Text>
              <Text style={{ padding: 5 }}>
                ৬। রুমটোরিড থেকে কোনো পদক্ষেপ গ্রহণের প্রয়োজন হলে উল্লেখ করুন ।
              </Text>
            </Card>
            <Card style={{ padding: 10, margin: 10 }}>
              <Text style={{ justifyContent: "flex-end" }}>
                ফলো-আপ করার জন্য গত পরিদর্শন থেকে প্রাপ্ত ১-২ টি বিষয় উল্লেখ
                করুন যেখানে উন্নতি প্রয়োজন ছিল:
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
            <Text style={styles.bigRedText}>ইনডিকেটর</Text>

            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5, flexDirection: "row" }}>
                <Text
                  style={{
                    backgroundColor: "green",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  পাঠ চলাকালীন (পাঠ উপস্থাপনের শুরু থেকে দেখতে হবে এবং সার্বিক
                  অংশের সূচকগুলা শেষে দেখতে হবে ।)
                </Text>
              </View>
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
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text>
                      ১. শিক্ষক ধ্বনি সচেতনাতার কাজে ব্যবহৃত সকল বর্ণ ও শব্দের
                      ধ্বনি সঠিকভাবে উচ্চারণ করেছেন এবং শিক্ষাত্রিদের চর্চা করার
                      সুযোগ দিয়েছেন ।
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ২
                    </Text>
                  </Card>
                  <Card
                    style={{
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>পর্যবেক্ষণ: </Text>
                        <Picker
                          style={{
                            height: 40,
                            width: 150,
                          }}
                          onValueChange={(value) => {
                            this.setState({ option: value });
                          }}
                          selectedValue={
                            (this.state && this.state.option) || "yes"
                          }
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                          <Picker.Item label={"না"} value={"no"} />
                          <Picker.Item label={"আংশিক"} value={"partial"} />
                        </Picker>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মন্তব্য: </Text>
                        <TextInput
                          style={{
                            height: 50,
                            width: 250,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>

                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <Text>
                      ২. শিক্ষক সঠিকভাবে বর্ণ পড়া বা বর্ণ ও শব্দাংশ মিলিয়ে শব্দ
                      পড়া শিখিয়েছেন এবং শিখাত্রিদের চর্চা করার সুযোগ দিয়েছেন ।
                      (প্রযোজ্য ক্ষেত্রে)
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ১
                    </Text>
                  </Card>
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>পর্যবেক্ষণ: </Text>
                        <Picker
                          style={{
                            height: 40,
                            width: 150,
                          }}
                          selectedValue={
                            (this.state && this.state.option) || "yes"
                          }
                          onValueChange={(value) => {
                            this.setState({ option: value });
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"Yes"} value={"yes"} />
                          <Picker.Item label={"No"} value={"no"} />
                          <Picker.Item label={"Partial"} value={"partial"} />
                        </Picker>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মন্তব্য: </Text>
                        <TextInput
                          style={{
                            height: 50,
                            width: 250,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>

                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <Text>
                      ৩. শিক্ষক শব্দ ভাণ্ডারের শব্দগুলো অর্থসহ শিখিয়েছেন এবং
                      শিক্ষার্থীদের শব্দগুলো ব্যবহার করে নতুন বাক্য গঠনের সুযোগ
                      দিয়েছেন । (প্রযোজ্য ক্ষেত্রে)
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ৩
                    </Text>
                  </Card>
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>পর্যবেক্ষণ: </Text>
                        <Picker
                          style={{
                            height: 40,
                            width: 150,
                          }}
                          selectedValue={
                            (this.state && this.state.option) || "yes"
                          }
                          onValueChange={(value) => {
                            this.setState({ option: value });
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"Yes"} value={"yes"} />
                          <Picker.Item label={"No"} value={"no"} />
                          <Picker.Item label={"Partial"} value={"partial"} />
                        </Picker>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মন্তব্য: </Text>
                        <TextInput
                          style={{
                            height: 50,
                            width: 250,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>

                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <Text>
                      ৪. শিক্ষক শিক্ষার্থীদের সাবলিল পঠন (সঠিক গতি , শুদ্ধ
                      উচ্চারণ ও অভিব্যাক্তি বজায় রেখে পড়া) উপস্থাপন করে
                      দেখিয়েছেন এবং শিক্ষার্থীদের শব্দ ভাণ্ডারের শব্দগুলো অর্থসহ
                      শিখিয়েছেন এবং শিক্ষাথ্রিদের শব্দগুলো ব্যবহার করে নতুন
                      বাক্য গঠনের সুযোগ দিয়েছেন । (প্রযোজ্য ক্ষেত্রে)
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ২
                    </Text>
                  </Card>
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>পর্যবেক্ষণ: </Text>
                        <Picker
                          style={{
                            height: 40,
                            width: 100,
                          }}
                          selectedValue={
                            (this.state && this.state.option) || "yes"
                          }
                          onValueChange={(value) => {
                            this.setState({ option: value });
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"Yes"} value={"yes"} />
                          <Picker.Item label={"No"} value={"no"} />
                          <Picker.Item label={"Partial"} value={"partial"} />
                        </Picker>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মন্তব্য: </Text>
                        <TextInput
                          style={{
                            height: 50,
                            width: 250,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>

                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <Text>
                      ৫. সঠিক উত্তরের জন্য শিক্ষক শিক্ষার্থীদের সহায়ক প্রশ্ন
                      করেছেন বা উত্তর খোঁজার কৌশল শিখিয়েছেন । (প্রযোজ্য
                      ক্ষেত্রে)
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ৩
                    </Text>
                  </Card>
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>পর্যবেক্ষণ: </Text>
                        <Picker
                          style={{
                            height: 40,
                            width: 100,
                          }}
                          selectedValue={
                            (this.state && this.state.option) || "yes"
                          }
                          onValueChange={(value) => {
                            this.setState({ option: value });
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"Yes"} value={"yes"} />
                          <Picker.Item label={"No"} value={"no"} />
                          <Picker.Item label={"Partial"} value={"partial"} />
                        </Picker>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মন্তব্য: </Text>
                        <TextInput
                          style={{
                            height: 50,
                            width: 250,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>

                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <Text>
                      ৬. শিক্ষক নির্দেশনা অনুযায়ী বর্ণ/ যুক্তবর্ণ / শব্দ / বাক্য
                      লেখার কাজ করিয়েছেন । (প্রযোজ্য ক্ষেত্রে)
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ২
                    </Text>
                  </Card>
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>পর্যবেক্ষণ: </Text>
                        <Picker
                          style={{
                            height: 40,
                            width: 100,
                          }}
                          selectedValue={
                            (this.state && this.state.option) || "yes"
                          }
                          onValueChange={(value) => {
                            this.setState({ option: value });
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"Yes"} value={"yes"} />
                          <Picker.Item label={"No"} value={"no"} />
                          <Picker.Item label={"Partial"} value={"partial"} />
                        </Picker>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মন্তব্য: </Text>
                        <TextInput
                          style={{
                            height: 50,
                            width: 250,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>

                <View style={{ padding: 5, flexDirection: "row" }}>
                  <Text
                    style={{
                      backgroundColor: "green",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    সার্বিক (সমগ্র পাঠ উপস্থাপন সংশ্লিষ্ট এবং সম্পূর্ণ পাঠ
                    উপস্থাপন শেষে পূরণ করেতে হবে)
                  </Text>
                </View>

                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <Text>
                      ৭. শিক্ষক শিখন-শিখানো কার্যক্রমে আমি করি-আমরা করি-তুমি কর
                      পদ্ধতিটি ব্যাবহার করেছেন । (প্রযোজ্য ক্ষেত্রে)
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ১
                    </Text>
                  </Card>
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>পর্যবেক্ষণ: </Text>
                        <Picker
                          style={{
                            height: 40,
                            width: 100,
                          }}
                          selectedValue={
                            (this.state && this.state.option) || "yes"
                          }
                          onValueChange={(value) => {
                            this.setState({ option: value });
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"Yes"} value={"yes"} />
                          <Picker.Item label={"No"} value={"no"} />
                          <Picker.Item label={"Partial"} value={"partial"} />
                        </Picker>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মন্তব্য: </Text>
                        <TextInput
                          style={{
                            height: 50,
                            width: 250,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>

                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <Text>
                      ৮. শিক্ষক শিক্ষার্থীদের এককভাবে বা জুটিতে বা দলে পড়ার
                      সুযোগ দিয়েছেন । (প্রযোজ্য ক্ষেত্রে)
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ১
                    </Text>
                  </Card>
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>পর্যবেক্ষণ: </Text>
                        <Picker
                          style={{
                            height: 40,
                            width: 100,
                          }}
                          selectedValue={
                            (this.state && this.state.option) || "yes"
                          }
                          onValueChange={(value) => {
                            this.setState({ option: value });
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"Yes"} value={"yes"} />
                          <Picker.Item label={"No"} value={"no"} />
                          <Picker.Item label={"Partial"} value={"partial"} />
                        </Picker>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মন্তব্য: </Text>
                        <TextInput
                          style={{
                            height: 50,
                            width: 250,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>

                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <Text>
                      ৯. শিক্ষক নির্ধারিত সময়ের মধ্যে পাঠের সকল কাজ
                      ধারাবাহিকভাবে সম্পন্ন করেছেন ।
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ৩
                    </Text>
                  </Card>
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>পর্যবেক্ষণ: </Text>
                        <Picker
                          style={{
                            height: 40,
                            width: 100,
                          }}
                          selectedValue={
                            (this.state && this.state.option) || "yes"
                          }
                          onValueChange={(value) => {
                            this.setState({ option: value });
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"Yes"} value={"yes"} />
                          <Picker.Item label={"No"} value={"no"} />
                          <Picker.Item label={"Partial"} value={"partial"} />
                        </Picker>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মন্তব্য: </Text>
                        <TextInput
                          style={{
                            height: 50,
                            width: 250,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>

                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <Text>
                      ১০. শিক্ষক পাঠের শিখন-শিখানো কাজে সহায়ক উপকরণ (রুম টু রিড
                      কর্তৃক প্রদত্ত) ব্যাবহার করেছেন ।
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ২
                    </Text>
                  </Card>
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>পর্যবেক্ষণ: </Text>
                        <Picker
                          style={{
                            height: 40,
                            width: 100,
                          }}
                          selectedValue={
                            (this.state && this.state.option) || "yes"
                          }
                          onValueChange={(value) => {
                            this.setState({ option: value });
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"Yes"} value={"yes"} />
                          <Picker.Item label={"No"} value={"no"} />
                          <Picker.Item label={"Partial"} value={"partial"} />
                        </Picker>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মন্তব্য: </Text>
                        <TextInput
                          style={{
                            height: 50,
                            width: 250,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>

                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <Text>
                      ১১. শিক্ষার্থীদের বই, ওয়ার্কবুকের কাজ নিশ্চিত করে যে গত
                      ভিজিটের পর পাঠের ধারাবাহিকতা অনুসারে অগ্রগতি হয়েছে ।
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ২
                    </Text>
                  </Card>
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>পর্যবেক্ষণ: </Text>
                        <Picker
                          style={{
                            height: 40,
                            width: 100,
                          }}
                          selectedValue={
                            (this.state && this.state.option) || "yes"
                          }
                          onValueChange={(value) => {
                            this.setState({ option: value });
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"Yes"} value={"yes"} />
                          <Picker.Item label={"No"} value={"no"} />
                          <Picker.Item label={"Partial"} value={"partial"} />
                        </Picker>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মন্তব্য: </Text>
                        <TextInput
                          style={{
                            height: 50,
                            width: 250,
                            padding: 5,
                            borderWidth: 1,
                          }}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                </Card>

                <Card
                  style={{
                    padding: 10,
                    margin: 10,
                    flex: 1,
                    alignSelf: "center",
                  }}
                >
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <Text>
                      ১২. শিক্ষক ছেলে-মেয়ে, বিশেষ চাহিদা সম্পন্ন ও পিছিয়ে পড়া
                      শিক্ষার্থীদেরকে পাঠের কাজে এবং মূল্যায়নে অংশ গ্রহণ
                      করিয়েছেন ।
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ২
                    </Text>
                  </Card>
                  <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>পর্যবেক্ষণ: </Text>
                        <Picker
                          style={{
                            height: 40,
                            width: 100,
                          }}
                          selectedValue={
                            (this.state && this.state.option) || "yes"
                          }
                          onValueChange={(value) => {
                            this.setState({ option: value });
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"Yes"} value={"yes"} />
                          <Picker.Item label={"No"} value={"no"} />
                          <Picker.Item label={"Partial"} value={"partial"} />
                        </Picker>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>মন্তব্য: </Text>
                        <TextInput
                          style={{
                            height: 50,
                            width: 250,
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
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <Text style={{ backgroundColor: "green" }}>
                শ্রেণি শিক্ষকের সাথে আলোচনার জন্য গুরুত্বপূর্ণ কিছু বিষয় ঃ
              </Text>
              <View style={{ padding: 5 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      শিক্ষক ভালো করেছেন এমন ২/৩ টি সূচক ( অগ্রুধিকার এরিয়ায়র
                      নম্বর ) উল্লেখ করুন ।
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
                      অগ্রাধিকারভিত্তিতে শিক্ষককে তার নিজস্ব উন্নয়নের জন্য যে
                      ১/২ টি সূচক (এরিয়ার নম্বর) চিহ্নিত করেছেন তা উল্লেখ করুন
                      এবং তিনি তার উন্নয়ন এ কিভাবে এটি করবেন সেটি উল্লেখ করুন ।
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
                      যে কাজ গুলো করার জন্য শ্রেণি শিক্ষক একমত হয়েছেন সেটি/
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

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>মূল্যায়নঃ </Text>

            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text style={{ backgroundColor: "green" }}>
                      দৈবচয়ন পদ্ধতিতে ৫ জন শিক্ষার্থী নির্বাচন করুন এবং
                      সংক্ষিপ্ত মূল্যায়ন করুনঃ
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      মূল্যায়নের জন্য নির্বাচিত বর্ণ, শব্দ অথবা বাক্য এখানে
                      লিখুনঃ
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 30, padding: 5, borderWidth: 1 }}
                      placeholder="1"
                    ></TextInput>
                    <TextInput
                      style={{ height: 30, padding: 5, borderWidth: 1 }}
                      placeholder="2"
                    ></TextInput>
                    <TextInput
                      style={{ height: 30, padding: 5, borderWidth: 1 }}
                      placeholder="3"
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>শিক্ষার্থীর নামঃ</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>সঠিক বলেছেঃ</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>ভুল বলেছেঃ</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মোট সংখ্যাঃ</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 20, padding: 5, borderWidth: 1 }}
                      placeholder=""
                    ></TextInput>
                  </View>
                </View>
              </View>
            </Card>
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
