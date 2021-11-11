//  Author: Mohammad Jihad Hossain
//  Create Date: 17/08/2021
//  Modify Date: 09/11/2021
//  Description: Library management observation screen component

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
} from "react-native";

import { Card } from "react-native-shadow-cards";

import DateTimePicker from "@react-native-community/datetimepicker";

export default class LibraryManagementObservationScreen extends React.Component {
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
              marginTop: 100,
              alignContent: "center",
              textAlign: "center",
              alignSelf: "center",
              marginLeft: 100,
              marginRight: 100,
            }}
          >
            শ্রেণীকক্ষ পাঠাগার পর্যবেক্ষণ ফরম
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 50,
            marginLeft: 100,
            marginRight: 100,
          }}
        >
          (এলএফ-দের জন্য)
        </Text>
        <ScrollView>
          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>সাধারণ তথ্য:</Text>

            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
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
                    <Picker.Item label={"অ আ স্কুল"} value={"LF"} />
                    <Picker.Item label={"ক খ  স্কুল"} value={"LPO"} />
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
                      width: 120,
                    }}
                    selectedValue={(this.state && this.state.option) || "yes"}
                    onValueChange={(value) => {
                      this.setState({ option: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
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
              </View>
            </Card>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>নির্দেশনা </Text>
            <Card style={{ padding: 10, margin: 10 }}>
              <Text style={{ padding: 5 }}>
                ১ প্রধান ইনডিকেটরের অধীন সকল সাব-ইনডিকেটর "হ্যাঁ" হলে প্রধান
                ইনডিকেটরটি "হ্যাঁ" হবে ।
              </Text>
              <Text style={{ padding: 5 }}>
                ২. পাঠাগার সংক্রান্ত 2-3 টি ভালো দিক উল্লেখ করুন।
              </Text>
              <Text style={{ padding: 5 }}>
                ৩. প্রথম যে ২-৩ টি ইনডিকেটরের উত্তর "না" হয়েছে তার আলোকে সহায়তার
                জন্য অগ্রাধিকারভিত্তিক ইনডিকেটর উল্লেখ করুন ।
              </Text>
              <Text style={{ padding: 5 }}>
                ৪. শ্রেণীকক্ষ পাঠাগারের সমস্যা নিয়ে "না" হলে করনীয় কলামে
                উল্লেখিত ব্যক্তি/ব্যক্তিবর্গের সাথে আলোচনা করুন।
              </Text>
              <Text style={{ padding: 5 }}>
                ৫ রুমটোরিড থেকে কোনো পদক্ষেপ গ্রহণের প্রয়োজন হলে উল্লেখ করুন ।
              </Text>
            </Card>
            <Card style={{ padding: 10, margin: 10 }}>
              <Text style={{ justifyContent: "flex-end" }}>
                ফলো-আপ করার জন্য গত পরিদর্শন থেকে প্রাপ্ত ১-২ টি বিষয় উল্লেখ
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
            <Text style={styles.bigRedText}>ইনডিকেটর</Text>
            <View style={{ padding: 5, flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  alignContent: "center",
                  textAlign: "center",
                }}
              >
                ইনডিকেটর(প্রতিটি সাব-ইনডিকেটর "হ্যাঁ" হলে প্রধান ইনডিকেটর
                "হ্যাঁ" হবে)
              </Text>
            </View>

            <View style={{ padding: 5, flexDirection: "row" }}>
              <Text style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}>
                প্রাইওরিটি এরিয়া -১ঃ উন্নয়নশীল (১-৭ পর্যন্ত সবগুলো প্রধান সূচক
                "হ্যাঁ" না হওয়া পর্যন্ত বিদ্যালয়ের শ্রেণি পাঠাগারগুলো
                "উন্নয়নশীল" হিসেবে গণ্য হবে)
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
                  <Text style={{ fontWeight: "bold" }}>
                    ১. বিদ্যালয়ের সংশ্লিষ্ট শিক্ষক পাঠাগার ব্যবস্থাপনা বিষয়ে
                    প্রশিক্ষণে অংশগ্রহণ করেছেন
                  </Text>
                  <Text>
                    ১.১ পাঠাগার বাবস্থাপনার জন্য পর্যবেক্ষণকৃত শ্রেণিতে একজন
                    প্রশিক্ষণ প্রাপ্ত লাইব্রেরি শিক্ষক দায়িত্ব প্রাপ্ত আছেন
                  </Text>
                  <Text>
                    ১.২ বিদ্যালয়ের প্রধান শিক্ষক রুম টু রিড পরিচালিত পাঠাগার
                    ব্যবস্থাপনা প্রশিক্ষণে অংশগ্রহণ করেছেন
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        এলপিও-কে অবহিত করুন এবং রুম টু রিডের সহায়তা প্রয়োজন হলে
                        মাসিক প্রতিবেদনে উল্লেখ করুন
                      </Text>
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
                  <Text style={{ fontWeight: "bold" }}>
                    ১. বিদ্যালয়ের সংশ্লিষ্ট শিক্ষক পাঠাগার ব্যবস্থাপনা বিষয়ে
                    প্রশিক্ষণে অংশগ্রহণ করেছেন
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        এলপিও-কে অবহিত করুন এবং রুম টু রিডের সহায়তা প্রয়োজন হলে
                        মাসিক প্রতিবেদনে উল্লেখ করুন
                      </Text>
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
                  <Text>
                    ১.১ পাঠাগার বাবস্থাপনার জন্য পর্যবেক্ষণকৃত শ্রেণিতে একজন
                    প্রশিক্ষণ প্রাপ্ত লাইব্রেরি শিক্ষক দায়িত্ব প্রাপ্ত আছেন
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        এলপিও-কে অবহিত করুন এবং রুম টু রিডের সহায়তা প্রয়োজন হলে
                        মাসিক প্রতিবেদনে উল্লেখ করুন
                      </Text>
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
                  <Text>
                    ১.২ বিদ্যালয়ের প্রধান শিক্ষক রুম টু রিড পরিচালিত পাঠাগার
                    ব্যবস্থাপনা প্রশিক্ষণে অংশগ্রহণ করেছেন
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        এলপিও-কে অবহিত করুন এবং রুম টু রিডের সহায়তা প্রয়োজন হলে
                        মাসিক প্রতিবেদনে উল্লেখ করুন
                      </Text>
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
                  <Text style={{ fontWeight: "bold" }}>
                    ২. পাঠাগার কার্যক্রম পরিচালনার জন্য শ্রেণীকক্ষটি উপযোগী
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        প্রধান শিক্ষকের সাথে আলোচনা এবং LPO-কে অবহিত করুন ।
                        সহায়তা প্রয়োজন হলে মাসিক প্রতিবেদন উল্লেখ করুন
                      </Text>
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
                  <Text>
                    ২.১ শ্রেণীকক্ষের দরজা-জানালা ভালো অবস্থায় এবং তালা দেওয়ার
                    ব্যবস্থা আছে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        প্রধান শিক্ষকের সাথে আলোচনা এবং LPO-কে অবহিত করুন ।
                        সহায়তা প্রয়োজন হলে মাসিক প্রতিবেদন উল্লেখ করুন
                      </Text>
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
                  <Text>
                    ২.২ শিক্ষার্থীদের বসার জন্য শ্রেণীকক্ষ নিরাপদ ও পরিষ্কার
                    (ফাটল, গর্ত ইত্যাদি সমস্যা নাই)
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        প্রধান শিক্ষকের সাথে আলোচনা এবং LPO-কে অবহিত করুন ।
                        সহায়তা প্রয়োজন হলে মাসিক প্রতিবেদন উল্লেখ করুন
                      </Text>
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
                  <Text style={{ fontWeight: "bold" }}>
                    ৩. পাঠাগার বুক শেলফটি ঠিকমত স্থাপন করা হয়েছে এবং ভালো
                    অবস্থায় আছে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        পাঠাগার ব্যবস্থাপনা ম্যনুয়ালের আলোকে আরও ভালো কোনো
                        স্থানে ঠিকমত বুক-শেলফটি স্থাপন করা যায় কিনা এ বিষয়ে
                        পাঠাগারের প্রধান শিক্ষকের সাথে আলোচনা করুন । প্রয়োজনে
                        স্থাপন করে দেখান ।
                      </Text>
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
                  <Text>
                    ৩.১ বুক শেলফের আশে পাশে পর্যাপ্ত জায়গা রয়েছে যাতে
                    শিক্ষারতিরা সহজে চলাচল করতে পারে, সহজে বই নিতে পারে এবং বই
                    পড়ার কাজে অংশ নিতে পারে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        পাঠাগার ব্যবস্থাপনা ম্যনুয়ালের আলোকে আরও ভালো কোনো
                        স্থানে ঠিকমত বুক-শেলফটি স্থাপন করা যায় কিনা এ বিষয়ে
                        পাঠাগারের প্রধান শিক্ষকের সাথে আলোচনা করুন । প্রয়োজনে
                        স্থাপন করে দেখান ।
                      </Text>
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
                  <Text>
                    ৩.২ বুক শেলফ এমন জায়গায় স্থাপন করা হয়েছে যার ফলে বইয়ের উপর
                    সরাসরি সূর্যের আলো বা বৃষ্টি পড়ে না কিংবা সরাসরি জানালার
                    সম্মুখে নয়
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        পাঠাগার ব্যবস্থাপনা ম্যনুয়ালের আলোকে আরও ভালো কোনো
                        স্থানে ঠিকমত বুক-শেলফটি স্থাপন করা যায় কিনা এ বিষয়ে
                        পাঠাগারের প্রধান শিক্ষকের সাথে আলোচনা করুন । প্রয়োজনে
                        স্থাপন করে দেখান ।
                      </Text>
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
                  <Text>
                    ৩.৩ বুক শেলফ এবং শিক্ষকের টেবিল ভালো অবস্থায় আছে (ভাঙ্গা/
                    ব্যবহার অনুপযোগী নয়)
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        পাঠাগার ব্যবস্থাপনা ম্যনুয়ালের আলোকে আরও ভালো কোনো
                        স্থানে ঠিকমত বুক-শেলফটি স্থাপন করা যায় কিনা এ বিষয়ে
                        পাঠাগারের প্রধান শিক্ষকের সাথে আলোচনা করুন । প্রয়োজনে
                        স্থাপন করে দেখান ।
                      </Text>
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
                  <Text style={{ fontWeight: "bold" }}>
                    ৪. বুক রেজিস্টার আছে এবং নতুন বই পাওয়ার সাথে সাথে নিয়মিত
                    হালনাগাদ করা হয়
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        বুক রেজিস্টার যাচাই করুন এবং হালনাগাদ করুন । পাঠাগারের
                        প্রধান শিক্ষকের সাথে আলোচনা করুন । প্রয়োজনে সংশ্লিষ্ট
                        এসআরএম শিক্ষককে অবহিত করুন ।
                      </Text>
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
                  <Text style={{ fontWeight: "bold" }}>
                    ৫. বুক শেলফে নির্দেশনা অনুযায়ী বই সাজানো হয়েছে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        পাঠাগার ব্যবস্থাপনা ম্যনুয়ালের আলোকে বই কিভাবে সাজাতে হয়
                        বলুন এবং পাঠাগার শিক্ষক বা বুক ক্যাপ্টেনের সাথে নিয়ে বই
                        সাজিয়ে দেখান ।
                      </Text>
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
                  <Text style={{ fontSize: 16 }}>
                    ৫.১ পড়ার ঘণ্টায় সকল বই এবং পড়ার সামগ্রী শেলফ-এ সাজানো আছে,
                    বাক্সে তালাবদ্ধ নয়
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        পাঠাগার ব্যবস্থাপনা ম্যনুয়ালের আলোকে বই কিভাবে সাজাতে হয়
                        বলুন এবং পাঠাগার শিক্ষক বা বুক ক্যাপ্টেনের সাথে নিয়ে বই
                        সাজিয়ে দেখান ।
                      </Text>
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
                  <Text style={{ fontSize: 16 }}>
                    ৫.২ সকল বই লেভেল অনুযায়ী সাজানো এবং বইয়ের প্রচ্ছদ/কভারেরপ
                    লেভেল সহজেই চোখে পড়ে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        পাঠাগার ব্যবস্থাপনা ম্যনুয়ালের আলোকে বই কিভাবে সাজাতে হয়
                        বলুন এবং পাঠাগার শিক্ষক বা বুক ক্যাপ্টেনের সাথে নিয়ে বই
                        সাজিয়ে দেখান ।
                      </Text>
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
                  <Text style={{ fontSize: 16 }}>
                    ৫.৩ বইগুলো এমনভাবে সাজানো আছে যাতে শিখাত্রিরা সহজেই নিতে
                    পারে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        পাঠাগার ব্যবস্থাপনা ম্যনুয়ালের আলোকে বই কিভাবে সাজাতে হয়
                        বলুন এবং পাঠাগার শিক্ষক বা বুক ক্যাপ্টেনের সাথে নিয়ে বই
                        সাজিয়ে দেখান ।
                      </Text>
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
                  <Text style={{ fontWeight: "bold" }}>
                    ৬. ছাপাসমৃদ্ধ উপকরণ যেমন চার্ট, পোস্টার অথবা শিক্ষার্থীদের
                    সৃজনশীল কাজ (আঁকা এবং লেখা) প্রদর্শিত আছে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        পাঠাগার ব্যবস্থাপনা ম্যানুয়ালএর আলোকে শ্রেণীকক্ষ
                        ছাপাসমৃদ্ধ করার পদক্ষেপ নিন । প্রয়োজনে সংশ্লিষ্ট এসআরএম
                        শিক্ষককে অবহিত করুন ।
                      </Text>
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
                  <Text style={{ fontWeight: "bold" }}>
                    ৭. কার্যকরী বই চেক-আউট ব্যবস্থা বিদ্যমান আছে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        পাঠাগার ব্যবস্থাপনা ম্যানুয়ালএর আলোকে বই গ্রহণ ও জমা
                        রেজিস্টার নিশ্চিত করুন । বই কম চেক-আউট হয়ে থাকলে প্রধান
                        শিক্ষকের সাথে এর কারণ সমূহ আলোচনা করুন । বুক চেক- আউট
                        বাড়ানোর ব্যাপারে তাঁর সাথে আলোচনা করুন এবং প্রয়োজনীয়
                        পদক্ষেপ নিন ।
                      </Text>
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
                  <Text style={{ fontSize: 16 }}>
                    ৭.১ বই চেক-আউটের নিয়মাবলী ও প্রক্রিয়া শ্রেণীকক্ষে পোস্টারে
                    প্রদর্শিত আছে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        পাঠাগার ব্যবস্থাপনা ম্যানুয়ালএর আলোকে বই গ্রহণ ও জমা
                        রেজিস্টার নিশ্চিত করুন । বই কম চেক-আউট হয়ে থাকলে প্রধান
                        শিক্ষকের সাথে এর কারণ সমূহ আলোচনা করুন । বুক চেক- আউট
                        বাড়ানোর ব্যাপারে তাঁর সাথে আলোচনা করুন এবং প্রয়োজনীয়
                        পদক্ষেপ নিন ।
                      </Text>
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
                  <Text style={{ fontSize: 16 }}>
                    ৭.২ বই চেক-আউট করার জন্য রেজিস্টার এর ব্যবহার আছে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        পাঠাগার ব্যবস্থাপনা ম্যানুয়ালএর আলোকে বই গ্রহণ ও জমা
                        রেজিস্টার নিশ্চিত করুন । বই কম চেক-আউট হয়ে থাকলে প্রধান
                        শিক্ষকের সাথে এর কারণ সমূহ আলোচনা করুন । বুক চেক- আউট
                        বাড়ানোর ব্যাপারে তাঁর সাথে আলোচনা করুন এবং প্রয়োজনীয়
                        পদক্ষেপ নিন ।
                      </Text>
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
                  <Text style={{ fontSize: 16 }}>
                    ৭.৩ পূর্ববর্তী সপ্তাহের বই গ্রহণ ও জমা দেয়ার তথ্য রেজিস্টারে
                    লিপিবদ্ধ আছে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        পাঠাগার ব্যবস্থাপনা ম্যানুয়ালএর আলোকে বই গ্রহণ ও জমা
                        রেজিস্টার নিশ্চিত করুন । বই কম চেক-আউট হয়ে থাকলে প্রধান
                        শিক্ষকের সাথে এর কারণ সমূহ আলোচনা করুন । বুক চেক- আউট
                        বাড়ানোর ব্যাপারে তাঁর সাথে আলোচনা করুন এবং প্রয়োজনীয়
                        পদক্ষেপ নিন ।
                      </Text>
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
                  <Text style={{ fontSize: 16 }}>
                    ৭.৪ গত মাস পর্যন্ত ফেরত দেওয়া হয়নি এমন বইসমূহের নাম
                    রেজিস্টারে লিপিবদ্ধ আছে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        পাঠাগার ব্যবস্থাপনা ম্যানুয়ালএর আলোকে বই গ্রহণ ও জমা
                        রেজিস্টার নিশ্চিত করুন । বই কম চেক-আউট হয়ে থাকলে প্রধান
                        শিক্ষকের সাথে এর কারণ সমূহ আলোচনা করুন । বুক চেক- আউট
                        বাড়ানোর ব্যাপারে তাঁর সাথে আলোচনা করুন এবং প্রয়োজনীয়
                        পদক্ষেপ নিন ।
                      </Text>
                    </View>
                  </View>
                </Card>
              </Card>
            </View>

            <View style={{ padding: 5, flexDirection: "row" }}>
              <Text style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}>
                প্রাইওরিটি এরিয়া -২ঃ কার্যকরী (১-৭ পর্যন্ত সবগুলো প্রধান সূচক
                "হ্যাঁ" হলে এবং ৮-৯ ইনডিকেটর চলমান থাকলে বিদ্যালয়টি "কার্যকরী"
                হিসেবে গণ্য হবে) ।
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
                  <Text style={{ fontWeight: "bold" }}>
                    ৮. নির্দিষ্ট পড়ার ঘণ্টা বিদ্যমান রয়েছে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        LPO-কে অবহিত করুন এবং রুম টু রিডের সহায়তা প্রয়োজন হলে
                        মাসিক প্রতিবেদন উল্লেখ করুন । প্রয়োজন হলে প্রধান
                        শিক্ষকের সাথে আলোচনা করুন ।
                      </Text>
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
                  <Text style={{ fontSize: 16 }}>
                    ৮.১ পর্যবেক্ষণকৃত শ্রেণির রুটিনে সপ্তাহে একদিন পড়ার ঘণ্টা
                    কার্যক্রম আছে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        LPO-কে অবহিত করুন এবং রুম টু রিডের সহায়তা প্রয়োজন হলে
                        মাসিক প্রতিবেদন উল্লেখ করুন । প্রয়োজন হলে প্রধান
                        শিক্ষকের সাথে আলোচনা করুন ।
                      </Text>
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
                  <Text style={{ fontSize: 16 }}>
                    ৮.২ প্রতিদিন বিদ্যালয় ছুটির পূর্বে বা পরে অথবা বিরতির সময় বই
                    পড়ার চেক-আউটের সুযোগ আছে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        LPO-কে অবহিত করুন এবং রুম টু রিডের সহায়তা প্রয়োজন হলে
                        মাসিক প্রতিবেদন উল্লেখ করুন । প্রয়োজন হলে প্রধান
                        শিক্ষকের সাথে আলোচনা করুন ।
                      </Text>
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
                  <Text style={{ fontWeight: "bold" }}>
                    ৯. পড়া ভিত্তিক কার্যক্রমের তথ্য লিপিবদ্ধ করার জন্য একটি
                    রেজিস্টার রয়েছে এবং শিক্ষক প্রতি সপ্তাহে পড়ার ঘণ্টায় কি কি
                    কার্যক্রম করেছেন তা লিপিবদ্ধ করেন
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        LPO-কে অবহিত করুন এবং মাসিক সভায় তা তুলে ধরুন ।
                      </Text>
                    </View>
                  </View>
                </Card>
              </Card>
            </View>

            <View style={{ padding: 5, flexDirection: "row" }}>
              <Text style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}>
                প্রাইওরিটি এরিয়া -৩ঃ অধিকতর কার্যকরী (১-৯ পর্যন্ত সবগুলো প্রধান
                সূচক "হ্যাঁ" হলে এবং ১০-১২ পর্যন্ত ইনডিকেটর চলমান থাকলে
                বিদ্যালয়টি "অধিক কার্যকরী" হিসেবে গণ্য হবে) ।
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
                  <Text style={{ fontWeight: "bold" }}>
                    ১০. গত ছয় মাসে কমপক্ষে একটি অভিভাবক সভা হয়েছে যেখানে
                    সংশ্লিষ্ট শ্রেণির শিক্ষার্থীদের পঠন অথবা পাঠাগার বিষয়ে
                    আলোচনা হয়েছে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        প্রধান শিক্ষককের জানান এবং LPO-কে অবহিত করুন ।
                      </Text>
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
                  <Text style={{ fontWeight: "bold" }}>
                    ১১. বিদ্যালয়ে বিগত বছরে অভিভাবক ও স্থানীয় জনগণের অংশগ্রহণে
                    অন্তত একটি পড়া বিষয়ক অনুষ্ঠান হয়েছে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        প্রধান শিক্ষককের সাথে আলোচনা করুন এবং LPO'র ফলোআপের জন্য
                        নোট নিন ।
                      </Text>
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
                  <Text style={{ fontWeight: "bold" }}>
                    ১২. পাঠাগার কর্মসূচি দীর্ঘ মেয়াদে পরিচালনার জন্য ব্যবস্থাপনা
                    কমিটি পরিকল্পনা গ্রহণ করেছে
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        প্রধান শিক্ষককের সাথে আলোচনা করুন এবং LPO'র ফলোআপের জন্য
                        নোট নিন ।
                      </Text>
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
                  <Text style={{ fontSize: 16 }}>
                    ১২.১ অভিভাবক, স্থানীয় জনগণ এবং প্রধান শিক্ষক যৌথভাবে একমত
                    হয়ে পরিকল্পনাটি করেছেন ।
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        প্রধান শিক্ষককের সাথে আলোচনা করুন এবং LPO'র ফলোআপের জন্য
                        নোট নিন ।
                      </Text>
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
                  <Text style={{ fontSize: 16 }}>
                    ১২.২ পরিকল্পনায় অভিভাবক ও স্থানীয় জনগণ সুনির্দিষ্ট দায়িত্বের
                    বিষয়টি উল্লেখ আছে ।
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
                      <Text style={{ fontWeight: "bold" }}>না হলে করনীয়: </Text>
                      <Text>
                        প্রধান শিক্ষককের সাথে আলোচনা করুন এবং LPO'র ফলোআপের জন্য
                        নোট নিন ।
                      </Text>
                    </View>
                  </View>
                </Card>
              </Card>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>আলোচনা</Text>
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <Text style={{ backgroundColor: "#ADD8E6" }}>
                প্রধান শিক্ষকের সাথে আলোচনার জন্য গুরুত্বপূর্ণ কিছু বিষয়ঃ
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
