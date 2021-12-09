//  Author: Mohammad Jihad Hossain
//  Create Date: 29/08/2021
//  Modify Date: 08/12/2021
//  Description: Overall school observation screen component

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

export default class OverallSchoolObservationScreen extends React.Component {
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
        <View style={{ flexShrink: 1 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 100,
              marginBottom: 50,
              alignContent: "center",
              textAlign: "center",
              alignSelf: "center",
              marginLeft: 100,
              marginRight: 100,
            }}
          >
            বিদ্যালয়ের সামগ্রিক অবস্থা পর্যবেক্ষণ ফরম (প্রতি মাসে একবার)
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

                  {/* <Button onPress={this.timepicker} title="Show time picker!" /> */}
                  {show && (
                    <DateTimePicker
                      value={date}
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={this.setDate}
                    />
                  )}

                  {/* <DatePicker
                    style={{ width: 150 }}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: "absolute",
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        marginLeft: 0,
                      },
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {
                      this.setState({ date: date });
                    }}
                  /> */}
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
                    প্রধান শিক্ষকের নাম:
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
            </Card>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>নির্দেশনা </Text>

            <Card style={{ padding: 10, margin: 10, justifyContent: "center" }}>
              <Text style={{ padding: 5 }}>
                ১। প্রাইওরিটি এরিয়াসমুহ পর্যায়ক্রমে পর্যবেক্ষণ করেতে হবে অর্থাৎ
                কেবল প্রাইওরিটি এরিয়া ১ এর সকল সূচকে "হ্যাঁ" হলে প্রাইওরিটি
                এরিয়া ১ ও ২ এর সকল সূচকে "হ্যাঁ" হলে প্রাইওরিটি এরিয়া ৩ এর
                সূচকগুলা পর্যবেক্ষণ করা যাবে ।
              </Text>
              <Text style={{ padding: 5 }}>
                ২। বিদ্যালয়ের সামগ্রিক অবস্থা পর্যবেক্ষণ ২-৩ টি ভালো দিক উল্লেখ
                করুন ।
              </Text>
              <Text style={{ padding: 5 }}>
                ৩। প্রাইওরিটি এরিয়ার ভিত্তিতে যে ২-৩ টি ইনডিকেটরের উত্তর "না"
                তার আলোকে সহায়তার জন্য অগ্রাধিকারভিত্তিক ইনডিকেটর উল্লেখ করুন ।
              </Text>
              <Text style={{ padding: 5 }}>
                ৪। বিদ্যালয়ের সামগ্রিক অবস্থা সংক্রান্ত সমস্যা নিয়ে প্রধান
                শিক্ষকের সাথে আলোচনা করুন।
              </Text>
              <Text style={{ padding: 5 }}>
                ৫। রুমটোরিড থেকে কোনো পদক্ষেপ গ্রহণের প্রয়োজন হলে উল্লেখ করুন ।
              </Text>
            </Card>
            <Card style={{ padding: 10, margin: 10 }}>
              <Text style={{ justifyContent: "flex-end" }}>
                ফলো-আপ করার জন্য গত পরিদর্শন থেকে প্রাপ্ত ২-৩ টি বিষয় উল্লেখ
                করুন যেখানে উন্নতি প্রয়োজন ছিল ঃ
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
            <Text style={styles.bigRedText}>পর্যবেক্ষণকৃত কার্যাবলী</Text>

            <View style={{ padding: 5 }}>
              <Card style={{ padding: 5, margin: 10, flex: 1 }}>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <Text>ক্লাস পর্যবেক্ষণ</Text>
                </Card>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
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
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শ্রেণি </Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 180,
                        }}
                        selectedValue={
                          (this.state && this.state.option) || "yes"
                        }
                        onValueChange={(value) => {
                          this.setState({ option: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item
                          label={"প্রাক প্রাথমিক"}
                          value={"pri primary"}
                        />
                        <Picker.Item label={"১"} value={"1"} />
                        <Picker.Item label={"২"} value={"2"} />
                        <Picker.Item label={"৩"} value={"3"} />
                        <Picker.Item label={"৪"} value={"4"} />
                        <Picker.Item label={"৫"} value={"5"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শিক্ষক অগ্রাধিকার </Text>
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
                        <Picker.Item label={"১"} value={"yes"} />
                        <Picker.Item label={"২"} value={"no"} />
                        <Picker.Item label={"৩"} value={"no"} />
                      </Picker>
                    </View>
                  </View>
                </Card>
                <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য: </Text>
                    <TextInput
                      style={{ height: 50, padding: 5, borderWidth: 1 }}
                    ></TextInput>
                  </View>
                </Card>
              </Card>
            </View>

            <View style={{ padding: 5 }}>
              <Card style={{ padding: 5, margin: 10, flex: 1 }}>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <Text>বাংলা ক্লাস পর্যবেক্ষণ</Text>
                </Card>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
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
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শ্রেণি </Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 180,
                        }}
                        selectedValue={
                          (this.state && this.state.option) || "yes"
                        }
                        onValueChange={(value) => {
                          this.setState({ option: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item
                          label={"প্রাক প্রাথমিক"}
                          value={"pri primary"}
                        />
                        <Picker.Item label={"১"} value={"1"} />
                        <Picker.Item label={"২"} value={"2"} />
                        <Picker.Item label={"৩"} value={"3"} />
                        <Picker.Item label={"৪"} value={"4"} />
                        <Picker.Item label={"৫"} value={"5"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শিক্ষক অগ্রাধিকার </Text>
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
                        <Picker.Item label={"১"} value={"yes"} />
                        <Picker.Item label={"২"} value={"no"} />
                        <Picker.Item label={"৩"} value={"no"} />
                      </Picker>
                    </View>
                  </View>
                </Card>
                <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য: </Text>
                    <TextInput
                      style={{ height: 50, padding: 5, borderWidth: 1 }}
                    ></TextInput>
                  </View>
                </Card>
              </Card>
            </View>

            <View style={{ padding: 5 }}>
              <Card style={{ padding: 5, margin: 10, flex: 1 }}>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <Text>বাংলা ক্লাস পর্যবেক্ষণ</Text>
                </Card>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
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
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শ্রেণি </Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 180,
                        }}
                        selectedValue={
                          (this.state && this.state.option) || "yes"
                        }
                        onValueChange={(value) => {
                          this.setState({ option: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item
                          label={"প্রাক প্রাথমিক"}
                          value={"pri primary"}
                        />
                        <Picker.Item label={"১"} value={"1"} />
                        <Picker.Item label={"২"} value={"2"} />
                        <Picker.Item label={"৩"} value={"3"} />
                        <Picker.Item label={"৪"} value={"4"} />
                        <Picker.Item label={"৫"} value={"5"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শিক্ষক অগ্রাধিকার </Text>
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
                        <Picker.Item label={"১"} value={"yes"} />
                        <Picker.Item label={"২"} value={"no"} />
                        <Picker.Item label={"৩"} value={"no"} />
                      </Picker>
                    </View>
                  </View>
                </Card>
                <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য: </Text>
                    <TextInput
                      style={{ height: 50, padding: 5, borderWidth: 1 }}
                    ></TextInput>
                  </View>
                </Card>
              </Card>
            </View>

            <View style={{ padding: 5 }}>
              <Card style={{ padding: 5, margin: 10, flex: 1 }}>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <Text>শ্রেণি পাঠ/পড়ার ঘণ্টা পর্যবেক্ষণ</Text>
                </Card>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
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
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শ্রেণি </Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 180,
                        }}
                        selectedValue={
                          (this.state && this.state.option) || "yes"
                        }
                        onValueChange={(value) => {
                          this.setState({ option: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item
                          label={"প্রাক প্রাথমিক"}
                          value={"pri primary"}
                        />
                        <Picker.Item label={"১"} value={"1"} />
                        <Picker.Item label={"২"} value={"2"} />
                        <Picker.Item label={"৩"} value={"3"} />
                        <Picker.Item label={"৪"} value={"4"} />
                        <Picker.Item label={"৫"} value={"5"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শিক্ষক অগ্রাধিকার </Text>
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
                        <Picker.Item label={"১"} value={"yes"} />
                        <Picker.Item label={"২"} value={"no"} />
                        <Picker.Item label={"৩"} value={"no"} />
                      </Picker>
                    </View>
                  </View>
                </Card>
                <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য: </Text>
                    <TextInput
                      style={{ height: 50, padding: 5, borderWidth: 1 }}
                    ></TextInput>
                  </View>
                </Card>
              </Card>
            </View>

            <View style={{ padding: 5 }}>
              <Card style={{ padding: 5, margin: 10, flex: 1 }}>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <Text>শ্রেণি পাঠ/পড়ার ঘণ্টা পর্যবেক্ষণ</Text>
                </Card>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
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
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শ্রেণি </Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 180,
                        }}
                        selectedValue={
                          (this.state && this.state.option) || "yes"
                        }
                        onValueChange={(value) => {
                          this.setState({ option: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item
                          label={"প্রাক প্রাথমিক"}
                          value={"pri primary"}
                        />
                        <Picker.Item label={"১"} value={"1"} />
                        <Picker.Item label={"২"} value={"2"} />
                        <Picker.Item label={"৩"} value={"3"} />
                        <Picker.Item label={"৪"} value={"4"} />
                        <Picker.Item label={"৫"} value={"5"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শিক্ষক অগ্রাধিকার </Text>
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
                        <Picker.Item label={"১"} value={"yes"} />
                        <Picker.Item label={"২"} value={"no"} />
                        <Picker.Item label={"৩"} value={"no"} />
                      </Picker>
                    </View>
                  </View>
                </Card>
                <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য: </Text>
                    <TextInput
                      style={{ height: 50, padding: 5, borderWidth: 1 }}
                    ></TextInput>
                  </View>
                </Card>
              </Card>
            </View>

            <View style={{ padding: 5 }}>
              <Card style={{ padding: 5, margin: 10, flex: 1 }}>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <Text>পাঠাগার ব্যবস্থাপনা পর্যবেক্ষণ</Text>
                </Card>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
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
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শ্রেণি </Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 180,
                        }}
                        selectedValue={
                          (this.state && this.state.option) || "yes"
                        }
                        onValueChange={(value) => {
                          this.setState({ option: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item
                          label={"প্রাক প্রাথমিক"}
                          value={"pri primary"}
                        />
                        <Picker.Item label={"১"} value={"1"} />
                        <Picker.Item label={"২"} value={"2"} />
                        <Picker.Item label={"৩"} value={"3"} />
                        <Picker.Item label={"৪"} value={"4"} />
                        <Picker.Item label={"৫"} value={"5"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শিক্ষক অগ্রাধিকার </Text>
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
                        <Picker.Item label={"১"} value={"yes"} />
                        <Picker.Item label={"২"} value={"no"} />
                        <Picker.Item label={"৩"} value={"no"} />
                      </Picker>
                    </View>
                  </View>
                </Card>
                <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য: </Text>
                    <TextInput
                      style={{ height: 50, padding: 5, borderWidth: 1 }}
                    ></TextInput>
                  </View>
                </Card>
              </Card>
            </View>

            <View style={{ padding: 5 }}>
              <Card style={{ padding: 5, margin: 10, flex: 1 }}>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <Text>বিদ্যালয়ের সার্বিক অবস্থা পর্যবেক্ষণ</Text>
                </Card>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <Text>পর্যবেক্ষণঃ</Text>
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
                    <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                    <Picker.Item label={"না"} value={"no"} />
                  </Picker>
                </Card>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>বিদ্যালয়ের প্রায়োরিটি এরিয়া: </Text>
                      <TextInput
                        style={{ height: 50, padding: 5, borderWidth: 1 }}
                      ></TextInput>
                    </View>
                  </View>
                </Card>
              </Card>
            </View>

            <View style={{ padding: 5 }}>
              <Card style={{ padding: 5, margin: 10, flex: 1 }}>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <Text>অন্যান্যঃ</Text>
                  <TextInput
                    style={{ height: 50, padding: 5, borderWidth: 1 }}
                  ></TextInput>
                </Card>
              </Card>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>
              প্রাক- প্রাথমিক থেকে পঞ্চম শ্রেণি পর্যবেক্ষণের বিষয়সমূহ
            </Text>
            <Text style={styles.bigRedText}>প্রাইওরিটি এরিয়া এবং ইনডিকেটর</Text>

            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5, flexDirection: "row" }}>
                <Text
                  style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                >
                  প্রাইওরিটি এরিয়া -১ঃ উন্নয়নশীল (১-৮ পর্যন্ত সকল ইনডিকেটর
                  "হ্যাঁ" না হওয়া পর্যন্ত বিদ্যালয়টি "উন্নয়নশীল" হিসেবে গণ্য
                  হবে)
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
                      ১. প্রধান শিক্ষকসহ সংশ্লিষ্ট সকল শিক্ষক রুম টু রিড কর্তৃক
                      আয়োজিত প্রশিক্ষণে অংশ গ্রহণ করেছেন ।
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ১
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
                  <Card
                    style={{
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text>
                      ২. রুম টু রিড কর্তৃক আয়োজিত প্রশিক্ষণের আলোকে শিক্ষকগণ
                      পাঠ/ কার্যক্রম পরিচালনা করেছেন । (অন্তত পর্যবেক্ষণকৃত
                      শিক্ষকের ৬০% এর ক্ষেত্রে )
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ১
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
                  <Card
                    style={{
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text>
                      ৩. রুম টু রিড কর্তৃক সরবরাহকৃত সকল উপকরণ শ্রেণীকক্ষে বিতরণ
                      করা হয়েছে এবং ভালো অবস্থায় আছে ।
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ১
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
                  <Card
                    style={{
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text>
                      ৪. শিক্ষকগণ পাঠাগার থেকে নিয়মিত বুক চেক আউট করতে
                      শিক্ষার্থীদের (ছেলে-মেয়ে ও প্রতিবন্ধী) উৎসাহিত করেছেন ।
                      (গত মাসে ৫০% শিক্ষারতি অন্তত ১ টি বই নিয়েছে)
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ১
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
                  <Card
                    style={{
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text>
                      ৫. শিক্ষার্থীরা নিয়মিত বাংলা পাঠ ও পড়ার ঘণ্টা কার্যক্রমে
                      অংশগ্রহণ করে (পর্যবেক্ষণ দিনে কমপক্ষে ৭০ % শিক্ষার্থী
                      উপস্তিত)
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ১
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
                  <Card
                    style={{
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text>
                      ৬. বাংলা ক্লাসে পঠন যাচাইএ অন্তত ৪০% শিক্ষার্থী
                      (ছেলে-মেয়ে) প্রত্যাশিত-ফলাফল অর্জন (৫ টির মধ্যে অন্তত ৩ টি
                      করছে)।
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ১
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
                  <Card
                    style={{
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text>
                      ৭. গত এক মাসে প্রধান শিক্ষক অন্তত একটি বাংলাপাঠ বা একটি
                      পড়ার ঘণ্টা পর্যবেক্ষণ করেছেন এবং শিক্ষার্থী কেন্দ্রিকতা,
                      জেন্ডার রেস্পন্সিভ শিখন-শেখানো বিষয়ক পরামর্শ প্রদান করেছেন
                      ।
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ১
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
                  <Card
                    style={{
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text>
                      ৮. বিদ্যালয়ে তিন মাসে অন্তত একটি এসএমসি সভা অনুষ্ঠিত হয়েছে
                      যেখানে প্রধান শিক্ষক প্রশিক্ষণে প্রাপ্ত ধারনার আলোকে
                      সুশাসন, জেন্ডার সাম্যতামুলক শিখন পরিবেশ এবং কমুউনিটির
                      সম্পৃক্ততা বিষয়ক আলোচনা করেছেন ।
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ১
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
              </View>

              <View style={{ padding: 5, flexDirection: "row" }}>
                <Text
                  style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                >
                  প্রাইওরিটি এরিয়া ২ কার্যকরী (১-৮ পর্যন্ত সকল ইনডিকেটর "হ্যাঁ"
                  হলে এবং ৯-১৪ পর্যন্ত সকল ইনডিকেটর চলমান থাকলে বিদ্যালয়টি
                  "কার্যকরী" হিসেবে গণ্য হবে)
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
                      ৯. স্কুলে শিশুদের বয়স-উপযোগী ও জেন্ডার রেস্পন্সিভ পঠন
                      উপকরণ রয়েছে এবং নির্দেশনা অনুসারে শিক্ষক কর্তৃক ব্যবহৃত
                      হচ্ছে ।
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
                  <Card
                    style={{
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text>
                      ১০. রুম টু রিড কর্তৃক প্রদত্ত প্রশিক্ষনের আলোকে শিক্ষকগণ
                      পাঠ/কার্যক্রম পরিচালনা করেছেন । (অন্তত পর্যবেক্ষণকৃত
                      শিক্ষকের ৮০% এর ক্ষেত্রে)
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
                  <Card
                    style={{
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text>
                      ১১. শিক্ষকগণ পাঠাগার থেকে নিয়মিত বুক চেক আউট করতে
                      শিক্ষার্থীদের (ছেলে-মেয়ে ও প্রতিবন্ধী শিশু) উৎসাহিত করেছেন
                      (গত মাসে ৭০% শিক্ষার্থী অন্তত ১টি বই নিয়েছে ) ।
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
                  <Card
                    style={{
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text>
                      ১২. শিক্ষার্থীরা নিয়মিত প্রাক-প্রাথমিক বাংলা পাঠ ও পড়ার
                      ঘণ্টা কার্যক্রম অংশগ্রহণ করে (পর্যবেক্ষণ দিনে কমপক্ষে ৮০%
                      শিক্ষার্থী উপস্তিত ) ।
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
                  <Card
                    style={{
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text>
                      ১৩. বাংলা ক্লাস পঠন যাচাইয়ে অন্তত ৬০% শিক্ষার্থী
                      (ছেলে-মেয়ে) প্রতাশিত-ফলাফল অর্জন (৫ টির মধ্যে ৩ টি) করেছে
                      ।
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
                  <Card
                    style={{
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text>
                      ১৪. বিদ্যালয় কর্তৃপক্ষ, অভিভাবক, এসএমসি ও স্থানীয় জনগণের
                      সক্রিয়ু অংশগ্রহণের মাধ্যমে শিক্ষার মান-উন্নয়নের জন্য দীর্ঘ
                      মেয়াদি পরিকল্পনা গ্রহণ করেছে এবং তার অগ্রগতি মাসিকভিত্তিতে
                      পর্যালোচনা করা হয় ।
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
              </View>
              <View style={{ padding: 5, flexDirection: "row" }}>
                <Text
                  style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                >
                  প্রাইওরিটি এরিয়া -৩ঃ অধিকতর কার্যকরী (১-১৪ পর্যন্ত সকল
                  ইনডিকেটর "হ্যাঁ" হলে এবং ১৫-১৮ পর্যন্ত সকল ইনডিকেটর চলমান
                  থাকলে বিদ্যালয়টি "অধিকতর কার্যকরী" হিসেবে গণ্য হবে)
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
                      ১৫. গত মাসের বাংলা ক্লাস পর্যবেক্ষণ, পড়ার ঘণ্টা কার্যক্রম
                      পর্যবেক্ষণ এবং শ্রেণীকক্ষ পাঠাগার পর্যবেক্ষণ ফর্মের
                      সুপারিশের ভিত্তিত্তে সংশ্লিষ্ট শিক্ষক সুস্পষ্ট পরিকল্পনা
                      করেছেন এবং প্রধান শিক্ষকের নেতৃত্বে উক্ত পরিকল্পনা
                      বাস্তবায়ন করে হচ্ছে ।
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ৩
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
                  <Card
                    style={{
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text>
                      ১৬. ধারাবাহিক মূল্যায়ন বা স্টুডেন্ট-ট্র্যাকিংএর ফলাফলের
                      ভিত্তিতে স্কুল পর্যায়ে শিক্ষার্থীর শিখনমান উন্নয়নের
                      পরিকল্পনা করা হয়েছে (কি পরিকল্পনা গ্রহণ করছে মন্তব্যের ঘরে
                      লিখুন) এবং প্রধান শিক্ষকের নেতৃত্বে সংশ্লিষ্ট শিক্ষক
                      সুস্পষ্ট পরিকল্পনা বাস্তবায়ন করছে ।
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ৩
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
                  <Card
                    style={{
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text>
                      ১৭. গত তিন মাসে এডিপিইও/এইউইও/ইউও/সংশ্লিষ্ট শিক্ষা
                      কর্মকর্তা অন্তত একবার বিদ্যালয়টি পরিদর্শন করে ।
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ৩
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
                        <Text>
                          শ্রেণি শিক্ষককে বাংলাপাঠ/ পড়ার ঘণ্টা / একীভূত শিক্ষা
                          বিষয়ক পরামর্শ প্রদান করেছেনঃ
                        </Text>
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
                          <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                          <Picker.Item label={"না"} value={"no"} />
                        </Picker>
                      </View>
                    </View>
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
                        <Text>
                          প্রধান শিক্ষককে একাডেমিক লিডারশীপ এবং কমুউনিটির
                          সম্পৃক্ততা বিষয়ক পরামর্শ প্রদান করেছেন
                        </Text>
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
                          <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                          <Picker.Item label={"না"} value={"no"} />
                        </Picker>
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
                  <Card
                    style={{
                      padding: 5,
                      margin: 5,
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Text>
                      ১৮. গত তিন মাসে বিদ্যালয়ের ব্যবস্থাপনা, উন্নয়ন বা অন্য কোন
                      কাজে অভিভাবক বা এসএমসির সদস্য অংশগ্রহণ করেছেন। নিম্নে
                      উল্লেখিত কার্যক্রমে সক্রিয় অংশ গ্রহণ করেছেন ।
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      অগ্রাধিকার এরিয়া: ৩
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
                        <Text>শ্রেণিপাঠ পরিদর্শনঃ</Text>
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
                          <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                          <Picker.Item label={"না"} value={"no"} />
                        </Picker>
                      </View>
                    </View>
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
                        <Text>লাইব্রেরী কার্যক্রম পরিদর্শনঃ</Text>
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
                          <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                          <Picker.Item label={"না"} value={"no"} />
                        </Picker>
                      </View>
                    </View>
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
                        <Text>দিবস উদযাপনঃ</Text>
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
                          <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                          <Picker.Item label={"না"} value={"no"} />
                        </Picker>
                      </View>
                    </View>
                  </Card>
                </Card>
              </View>
            </Card>
          </View>

          <View style={{ padding: 10 }}>
            <View style={{ padding: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text
                    style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                  >
                    প্রাইওরিটি এরিয়া এবং ইনডিকেটর
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
                    মন্তব্য
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                >
                  প্রাইওরিটি এরিয়া -২ঃ কার্যকরী
                </Text>
                <Text style={{ backgroundColor: "#ADD8E6" }}>
                  (১-৭ পর্যন্ত সকল ইনডিকেটর "হ্যাঁ" হলে এবং ৮-১৩ পর্যন্ত
                  ইনডিকেটর চলমান থাকলে বিদ্যালয়টি "কার্যকরী" হিসেবে গণ্য হবে)
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১১.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষকগণ পাঠাগার থেকে নিয়মিত বুক চেক আউট করতে শিক্ষার্থীদের
                    (ছেলে-মেয়ে ও প্রতিবন্ধী শিশু) উৎসাহিত করেছেন (গত মাসে ৭০%
                    শিক্ষার্থী অন্তত ১টি বই নিয়েছে ) ।
                  </Text>
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
                  <Text>মন্তব্য</Text>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১২.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষার্থীরা নিয়মিত বাংলা পাঠ ও পড়ার ঘণ্টা কার্যক্রম
                    অংশগ্রহণ করে (পর্যবেক্ষণ দিনে কমপক্ষে ৮০% শিক্ষার্থী উপস্তিত
                    ) ।
                  </Text>
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
                  <Text>মন্তব্য</Text>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১৩.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    বাংলা ক্লাস পঠন যাচাইয়ে অন্তত ৬০% শিক্ষার্থী (ছেলে-মেয়ে)
                    প্রতাশিত-ফলাফল অর্জন (৫ টির মধ্যে ৩ টি) করেছে ।
                  </Text>
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
                  <Text>মন্তব্য</Text>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১৪.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    বিদ্যালয় কত্রিপক্ষ, অভিভাবক, এসএমসি ও স্থানীয় জনগণের সক্রিয়ু
                    অংশগ্রহণের মাধ্যমে শিক্ষার মান-উন্নয়নের জন্য দীর্ঘ মেয়াদি
                    পরিকল্পনা গ্রহণ করেছে এবং তার অগ্রগতি মাসিকভিত্তিতে
                    পর্যালোচনা করা হয় ।
                  </Text>
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
                  <Text>মন্তব্য</Text>
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
                  প্রাইওরিটি এরিয়া -৩ঃ অধিক কার্যকরী
                </Text>
                <Text style={{ backgroundColor: "#ADD8E6" }}>
                  (১-১৪ পর্যন্ত সকল ইনডিকেটর "হ্যাঁ" হলে এবং ১৫-১৮ পর্যন্ত
                  ইনডিকেটর চলমান থাকলে বিদ্যালয়টি "অধিক কার্যকরী" হিসেবে গণ্য
                  হবে)
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১৫.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষার্থীরা নিয়মিত বাংলা পাঠ ও পড়ার ঘণ্টা কার্যক্রম
                    অংশগ্রহণ করে (পর্যবেক্ষণ দিনে কমপক্ষে ৮০% শিক্ষার্থী উপস্তিত
                    ) ।
                  </Text>
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
                  <Text>মন্তব্য</Text>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <Text style={{ backgroundColor: "#ADD8E6" }}>
                শ্রেণি শিক্ষকের সাথে আলোচনার জন্য গুরুত্বপূর্ণ কিছু বিষয়ঃ
              </Text>
              <View style={{ padding: 5 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      শিক্ষক ভালো করেছেন এমন ২/৩ টি সূচক ( অগ্রাধিকার এরিয়ার
                      নম্বর ) উল্লেখ করুন ।
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5, borderWidth: 1 }}
                      placeholder="১।"
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5, borderWidth: 1 }}
                      placeholder="২।"
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5, borderWidth: 1 }}
                      placeholder="৩।"
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
                      যে কাজ গুলো করার জন্য শ্রেণি শিক্ষক একমত হয়েছেন সেটি
                      উল্লেখ করুন ।
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 60, padding: 5, borderWidth: 1 }}
                      placeholder="১."
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2, borderWidth: 1 }}>
                    <TextInput
                      style={{ height: 60, padding: 5 }}
                      placeholder="২."
                    ></TextInput>
                  </View>
                </View>
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
