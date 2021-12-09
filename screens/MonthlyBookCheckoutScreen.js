//  Author: Mohammad Jihad Hossain
//  Create Date: 11/10/2021
//  Modify Date: 08/12/2021
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
            </Card>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>নির্দেশনা </Text>
            <Card style={{ padding: 10, margin: 10 }}>
              <Text style={{ padding: 5, fontWeight: "bold" }}>
                পূর্ববর্তী মাসে বই চেক-আউট হয়েছে (নিচের টেবিল অনুযায়ী প্রতিটি
                বিদ্যালয় থেকে তথ্য সংগ্রহ করুন এবং এবং প্রতি মাসের তথ্য পরের
                মাসের ২৫ তারিখের মধ্যে বিদ্যলয়ের বই চেক-আউট সংক্রান্ত তথ্য
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
