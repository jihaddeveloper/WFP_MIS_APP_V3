//  Author: Mohammad Jihad Hossain
//  Create Date: 29/08/2021
//  Modify Date: 30/11/2022
//  Description: Overall school observation screen component

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
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { Card } from "react-native-shadow-cards";

import { divisions, districts, upazillas, unions } from "bd-geojs";

import DateTimePicker from "@react-native-community/datetimepicker";

import DatePicker from "react-native-modern-datepicker";

const { width, height } = Dimensions.get("window");

export default class OverallSchoolObservationScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,

      option: "yes",

      choosenIndex: 0,

      //Preloaded Data
      allProject: [],
      allSchool: [],
      allTeacher: [],
      allEmployee: [],
      allOffice: [],
      allDesignation: [],
      allLibraryIndicator: [],
      allBanglaIndicator: [],
      allLibraryObservationData: [],
      allBanglaClassObservationData: [],
      //Preloaded Data

      // previous visit data of the bangla class
      preMonthData: [],
      // previous visit data of the bangla class

      // Duplicate data check
      duplicateBanglaClassObservationData: [],
      // Duplicate data check

      //button status
      buttonState: false,
      //button status

      isLoading: true,

      checked: false,

      option: "yes",

      choosenIndex: 0,

      // Date picker property
      date: new Date(),
      time: new Date(Date.now()),
      mode: "date",
      show: false,
      startTime: "",
      endTime: "",
      // Date picker property

      // General data
      visitNo: 0,
      pickerOffice: "",
      pickerProject: "",
      pickerDistrict: "",
      pickerDistrictKey: "",
      pickerUpazilla: "",
      pickerUpazillaKey: "",
      pickerSchool: "",
      pickerVisitor: "",
      pickerDesignation: "",
      pickerVisitorOffice: "",
      pickerLF: "",
      pickerLPO: "",
      pickerLFName: "",
      pickerLPOName: "",
      pickerMonth: "",
      pickerYear: "",
      headTeacher: "",
      note: "",
    };
  }

  //Geo values
  divisions = divisions;
  districts = districts;
  upazillas = upazillas;
  unions = unions;
  //Geo values

  //Load data from server
  componentDidMount() {
    this.getAllSchool();
    this.getAllEmployee();
    this.getAllDesignation();
    this.getAllBanglaIndicator();
    this.getAllBanglaClassObservation();
  }
  //Load data from server

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
      const response = await fetch("http://118.179.80.51:8080/api/v1/projects");
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
      const response = await fetch("http://118.179.80.51:8080/api/v1/offices");
      const json = await response.json();
      this.setState({ allOffice: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  // Get All Office}

  // Get All School
  getAllSchool = async () => {
    try {
      const response = await axios("http://118.179.80.51:8080/api/v1/schools", {
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
      const response = await fetch("http://118.179.80.51:8080/api/v1/teachers");
      const json = await response.json();
      this.setState({ allTeacher: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  // Get All Teacher

  // Get All Employee
  getAllEmployee = async () => {
    try {
      const response = await axios(
        "http://118.179.80.51:8080/api/v1/employees",
        {
          method: "GET",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      this.setState({ allEmployee: response.data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };
  // Get All Employee

  // Get All Designation
  getAllDesignation = async () => {
    try {
      const response = await axios(
        "http://118.179.80.51:8080/api/v1/designations",
        {
          method: "GET",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      this.setState({ allDesignation: response.data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };
  // Get All Designation

  // Get All Bangla Indicator
  getAllBanglaIndicator = async () => {
    try {
      const response = await axios(
        "http://118.179.80.51:8080/api/v1/bangla-indicator",
        {
          method: "GET",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      this.setState({ allBanglaIndicator: response.data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };
  // Get All Bangla Indicator

  // Get All Book-checkout Data for school
  getAllBanglaClassObservation = async () => {
    try {
      const response = await axios(
        "http://118.179.80.51:8080/api/v1/bangla-class",
        {
          method: "GET",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      this.setState({
        allBanglaClassObservationData: response.data,
        isLoading: false,
      });
      console.log(
        "All Bangla-class Data: ",
        this.state.allBanglaClassObservationData.length
      );
    } catch (error) {
      console.log(error);
    }
  };
  // Get All Book-checkout Data for school

  // Register new book-checkout data
  saveBanglaClassObservation = async () => {
    const newBanglaClass = {
      date: this.state.date,
      month: this.state.pickerMonth,
      year: this.state.pickerYear,
      district: this.state.pickerDistrict.name,
      upazilla: this.state.pickerUpazilla.name,
      fieldOffice: this.state.pickerOffice,
      project: this.state.pickerProject,
      visitNo: this.state.visitNo,
      lpo: this.state.pickerLPO.employeeRegId,
      lpoName: this.state.pickerLPOName.name,
      lf: this.state.pickerLF.employeeRegId,
      lfName: this.state.pickerLFName.name,
      school: this.state.pickerSchool,
      visitor: this.state.pickerVisitor,
      visitorDesignation: this.state.pickerDesignation,
      visitorOffice: this.state.pickerVisitorOffice,
      classTeacher: this.state.classTeacher,
      teacherGender: this.state.classTeacherGender,
      isTrained: this.state.teacherTrained,
      grade: this.state.grade,
      section: this.state.section,
      classStartTime: this.state.classStartTime,
      classEndTime: this.state.classEndTime,
      contentName: this.state.teachingTopic,
      periodDay: this.state.teachingDay,
      totalAdmittedStudent: this.state.studentTotal,
      totalAdmittedGirl: this.state.studentGirl,
      totalAdmittedBoy: this.state.studentBoy,
      totalPresentStudent: this.state.presentTotal,
      totalPresentGirl: this.state.presentGirl,
      totalPresentBoy: this.state.presentBoy,

      lastFollowupTopic1: this.state.lastFollowupTopic1,
      lastFollowupTopic2: this.state.lastFollowupTopic2,
      lastFollowupTopic3: this.state.lastFollowupTopic3,

      ind1PhonemicAwarenessStatus: this.state.ind1PhonemicAwarenessStatus,
      ind1PhonemicAwarenessNotes: this.state.ind1PhonemicAwarenessNotes,

      ind2LetterIdentificationStatus: this.state.ind2LetterIdentificationStatus,
      ind2LetterIdentificationNotes: this.state.ind2LetterIdentificationNotes,

      ind3VocabularyIdentificationStatus:
        this.state.ind3VocabularyIdentificationStatus,
      ind3VocabularyIdentificationNotes:
        this.state.ind3VocabularyIdentificationNotes,

      ind4FluencyIdentificationStatus:
        this.state.ind4FluencyIdentificationStatus,
      ind4FluencyIdentificationNotes: this.state.ind4FluencyIdentificationNotes,

      ind5ComprehensionStatus: this.state.ind5ComprehensionStatus,
      ind5ComprehensionNotes: this.state.ind5ComprehensionNotes,

      ind6WritingActivitiesStatus: this.state.ind6WritingActivitiesStatus,
      ind6WritingActivitiesNotes: this.state.ind6WritingActivitiesNotes,

      ind7IDoWeDoYouDoStatus: this.state.ind7IDoWeDoYouDoStatus,
      ind7IDoWeDoYouDoNotes: this.state.ind7IDoWeDoYouDoNotes,

      ind8GroupWorkStatus: this.state.ind8GroupWorkStatus,
      ind8GroupWorkNotes: this.state.ind8GroupWorkNotes,

      ind9TimeOnTaskStatus: this.state.ind9TimeOnTaskStatus,
      ind9TimeOnTaskNotes: this.state.ind9TimeOnTaskNotes,

      ind10UseTeachingAidStatus: this.state.ind10UseTeachingAidStatus,
      ind10UseTeachingAidNotes: this.state.ind10UseTeachingAidNotes,

      ind11ContinuityOfLessonsStatus: this.state.ind11ContinuityOfLessonsStatus,
      ind11ContinuityOfLessonsNotes: this.state.ind11ContinuityOfLessonsNotes,

      ind12AssessmentStatus: this.state.ind12AssessmentStatus,
      ind12AssessmentNotes: this.state.ind12AssessmentNotes,

      bestPracticeInd1: this.state.bestPracticeInd1,
      bestPracticeInd2: this.state.bestPracticeInd2,
      bestPracticeInd3: this.state.bestPracticeInd3,

      coachingSupportInd1: this.state.coachingSupportInd1,
      coachingSupportInd2: this.state.coachingSupportInd2,
      coachingSupportDetailsInd1: this.state.coachingSupportDetailsInd1,
      coachingSupportDetailsInd2: this.state.coachingSupportDetailsInd2,

      agreedStatement1: this.state.agreedStatement1,
      agreedStatement2: this.state.agreedStatement2,

      question1: this.state.question1,

      student1: this.state.student1,
      student2: this.state.student2,
      student3: this.state.student3,
      student4: this.state.student4,
      student5: this.state.student5,

      noRightFor1: this.state.noRightFor1,
      noWrongFor1: this.state.noWrongFor1,
      totalFor1: this.state.totalFor1,
      noRightFor2: this.state.noRightFor2,
      noWrongFor2: this.state.noWrongFor2,
      totalFor2: this.state.totalFor2,
      noRightFor3: this.state.noRightFor3,
      noWrongFor3: this.state.noWrongFor3,
      totalFor3: this.state.totalFor3,
      noRightFor4: this.state.noRightFor4,
      noWrongFor4: this.state.noWrongFor4,
      totalFor4: this.state.totalFor4,
      noRightFor5: this.state.noRightFor5,
      noWrongFor5: this.state.noWrongFor5,
      totalFor5: this.state.totalFor5,

      teacherStatus: this.state.teacherStatus,
    };

    // Validation

    //Check duplicate data
    this.state.duplicateBanglaClassObservationData =
      this.state.allBanglaClassObservationData.filter((item) => {
        return (
          item.date == this.state.date.toISOString().slice(0, 10) &&
          item.visitNo == this.state.visitNo &&
          item.school == this.state.pickerSchool &&
          item.month == this.state.pickerMonth &&
          item.year == this.state.pickerYear
        );
      });

    console.log(
      "Duplicate Bangla Class Data: ",
      this.state.duplicateBanglaClassObservationData.length
    );
    //Check duplicate data

    // Validation
    if (this.state.date === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Date can not be empty");
      return;
    } else if (this.state.pickerMonth === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Month can not be empty");
      return;
    } else if (this.state.pickerYear === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Year can not be empty");
      return;
    } else if (this.state.pickerDistrict === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "District can not be empty");
      return;
    } else if (this.state.pickerUpazilla === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Upazilla can not be empty");
      return;
    } else if (this.state.pickerOffice === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Office can not be empty");
      return;
    } else if (this.state.pickerProject === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Project can not be empty");
      return;
    } else if (this.state.visitNo === 0) {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Visit No can not be 0");
      return;
    } else if (this.state.pickerLF === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "LF can not be empty");
      return;
    } else if (this.state.pickerLPO === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "LPO can not be empty");
      return;
    } else if (this.state.pickerSchool === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "School can not be empty");
      return;
    } else if (this.state.pickerVisitor === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Visitor can not be empty");
      return;
    } else if (this.state.pickerDesignation === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Designation can not be empty");
      return;
    } else if (this.state.pickerVisitorOffice === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Visitor Office can not be empty");
      return;
    } else if (this.state.classTeacher === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Class Teacher can not be empty");
      return;
    } else if (this.state.classTeacherGender === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Gender can not be empty");
      return;
    } else if (this.state.teacherTrained === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Teacher training can not be empty");
      return;
    } else if (this.state.grade === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Grade can not be empty");
      return;
    } else if (this.state.section === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Section can not be empty");
      return;
    } else if (this.state.classStartTime === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Class Start Time can not be empty");
      return;
    } else if (this.state.classEndTime === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Class End Time can not be empty");
      return;
    } else if (this.state.teachingTopic === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Teaching Topic can not be empty");
      return;
    } else if (this.state.teachingDay === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Teaching Day can not be empty");
      return;
    } else if (this.state.studentBoy === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Student Boy can not be empty");
      return;
    } else if (this.state.studentGirl === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Student Girl can not be empty");
      return;
    } else if (this.state.presentBoy === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Present Boy can not be empty");
      return;
    } else if (this.state.presentGirl === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Present Girl can not be empty");
      return;
    } else if (this.state.ind1PhonemicAwarenessStatus === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Indicator 1 can not be empty");
      return;
    } else if (this.state.ind2LetterIdentificationStatus === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Indicator 2 can not be empty");
      return;
    } else if (this.state.ind3VocabularyIdentificationStatus === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Indicator 3 can not be empty");
      return;
    } else if (this.state.ind4FluencyIdentificationStatus === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Indicator 4 can not be empty");
      return;
    } else if (this.state.ind5ComprehensionStatus === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Indicator 5 can not be empty");
      return;
    } else if (this.state.ind6WritingActivitiesStatus === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Indicator 6 can not be empty");
      return;
    } else if (this.state.ind7IDoWeDoYouDoStatus === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Indicator 7 can not be empty");
      return;
    } else if (this.state.ind8GroupWorkStatus === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Indicator 8 can not be empty");
      return;
    } else if (this.state.ind9TimeOnTaskStatus === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Indicator 9 can not be empty");
      return;
    } else if (this.state.ind10UseTeachingAidStatus === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Indicator 10 can not be empty");
      return;
    } else if (this.state.ind11ContinuityOfLessonsStatus === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Indicator 11 can not be empty");
      return;
    } else if (this.state.ind12AssessmentStatus === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Indicator 12 can not be empty");
      return;
    } else if (this.state.bestPracticeInd1 === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Best Practice Ind1 can not be empty");
      return;
    } else if (this.state.bestPracticeInd2 === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Best Practice Ind2 can not be empty");
      return;
    } else if (this.state.bestPracticeInd3 === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Best Practice Ind3 can not be empty");
      return;
    } else if (this.state.coachingSupportInd1 === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Coaching Support Ind1 can not be empty");
      return;
    } else if (this.state.coachingSupportInd2 === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Coaching Support Ind2 can not be empty");
      return;
    } else if (this.state.coachingSupportDetailsInd1 === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Coaching Support Details Ind1 can not be empty");
      return;
    } else if (this.state.coachingSupportDetailsInd2 === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Coaching Support Details Ind2 can not be empty");
      return;
    } else if (this.state.agreedStatement1 === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Agreed Statement1 can not be empty");
      return;
    } else if (this.state.agreedStatement2 === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Agreed Statement2 can not be empty");
      return;
    } else if (this.state.duplicateBanglaClassObservationData.length > 0) {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Duplicate Bangla Class data !!");
      return;
    } else {
      // Set error message empty
      this.setState({ dateError: "" });

      // Send data to API
      try {
        let response = await fetch(
          "http://118.179.80.51:8080/api/v1/bangla-class",
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newBanglaClass),
          }
        );
        if (response.status >= 200 && response.status < 300) {
          Alert.alert(
            "Alert",
            "Bangla class obsvervatio data saved successfully!!!"
          );
          this.getAllBanglaClassObservation();
          this.updateToInitialState();
        }
      } catch (errors) {
        alert(errors);
      }
      // Send data to API
    }
  };
  // Register new bangla class data

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
              marginTop: 50,
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
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      তারিখ:
                    </Text>
                    <Text
                      style={{ textAlign: "right", color: "red", fontSize: 16 }}
                    >
                      *
                    </Text>
                  </View>
                  <Text style={{ fontSize: 14 }}>
                    {String(this.state.date.toISOString().slice(0, 10))}
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
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      মাস:
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
                    selectedValue={this.state.pickerMonth}
                    onValueChange={(value) => {
                      this.setState({ pickerMonth: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"January"} value={"January"} />
                    <Picker.Item label={"February"} value={"February"} />
                    <Picker.Item label={"March"} value={"Dhaka LP Program"} />
                    <Picker.Item label={"April"} value={"April"} />
                    <Picker.Item label={"May"} value={"May"} />
                    <Picker.Item label={"June"} value={"June"} />
                    <Picker.Item label={"July"} value={"July"} />
                    <Picker.Item label={"August"} value={"August"} />
                    <Picker.Item label={"September"} value={"September"} />
                    <Picker.Item label={"October"} value={"October"} />
                    <Picker.Item label={"November"} value={"November"} />
                    <Picker.Item label={"December"} value={"December"} />
                  </Picker>
                  {/* <Text style={{ color: "red" }}>
                    {this.state.projectError}
                  </Text> */}
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      বছর:
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
                    selectedValue={this.state.pickerYear}
                    onValueChange={(value) => {
                      this.setState({ pickerYear: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"2018"} value={"2018"} />
                    <Picker.Item label={"2019"} value={"2019"} />
                    <Picker.Item label={"2020"} value={"2020"} />
                    <Picker.Item label={"2021"} value={"2021"} />
                    <Picker.Item label={"2022"} value={"2022"} />
                    <Picker.Item label={"2023"} value={"2023"} />
                  </Picker>
                  {/* <Text style={{ color: "red" }}>
                    {this.state.projectError}
                  </Text> */}
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
                      জেলা:
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
                    selectedValue={this.state.pickerDistrict}
                    onValueChange={(item, key) => {
                      // console.log(item, key);
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
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      উপজেলা:
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
                    selectedValue={this.state.pickerUpazilla}
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
                      ফিল্ড অফিস:
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
                    selectedValue={this.state.pickerOffice}
                    onValueChange={(value) => {
                      this.setState({ pickerOffice: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"DFO"} value={"DFO"} />
                    <Picker.Item label={"CFO"} value={"CFO"} />
                    <Picker.Item label={"NFO"} value={"NFO"} />
                    <Picker.Item label={"MFO"} value={"MFO"} />
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
                      প্রোজেক্ট:
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
                    selectedValue={this.state.pickerProject}
                    onValueChange={(value) => {
                      this.setState({ pickerProject: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item
                      label={"WFP funded project"}
                      value={"WFP funded project"}
                    />
                    <Picker.Item
                      label={"Natore LP Program"}
                      value={"Natore LP Program"}
                    />
                    <Picker.Item
                      label={"Dhaka LP Program"}
                      value={"Dhaka LP Program"}
                    />
                    <Picker.Item
                      label={"Moulvibazar LP Program"}
                      value={"Moulvibazar LP Program"}
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
                      ভিজিট নম্বর:
                    </Text>
                    <Text
                      style={{ textAlign: "right", color: "red", fontSize: 16 }}
                    >
                      *
                    </Text>
                  </View>
                  <TextInput
                    style={{
                      height: 30,
                      width: 100,
                      padding: 5,
                      borderWidth: 1,
                    }}
                    keyboardType="numeric"
                    placeholder=""
                    editable={true}
                    onChangeText={(text) =>
                      this.setState({ visitNo: Number(text) })
                    }
                    value={this.state.visitNo + ""}
                  />
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
                      দায়িত্ব প্রাপ্ত এলপিও
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
                    selectedValue={this.state.pickerLPO}
                    onValueChange={(value) => {
                      this.setState({
                        pickerLPO: value,
                        pickerLPOName: value,
                      });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    {this.state.allEmployee
                      .filter((item) => {
                        return item.designation == "LPO";
                      })
                      .map((item) => {
                        return (
                          <Picker.Item
                            key={item.id}
                            label={item.name}
                            value={item}
                            //item.employeeRegId
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
                      দায়িত্ব প্রাপ্ত এলএফ
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
                    selectedValue={this.state.pickerLF}
                    onValueChange={(value) => {
                      this.setState({
                        pickerLF: value,
                        pickerLFName: value,
                      });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    {this.state.allEmployee
                      .filter((item) => {
                        return (
                          item.designation == "LF" &&
                          item.supervisor == this.state.pickerLPO.employeeRegId
                        );
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
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      বিদ্যালয়ের নাম:
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
                    selectedValue={this.state.pickerSchool}
                    onValueChange={(value) => {
                      this.setState({ pickerSchool: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    {this.state.allSchool
                      .filter((item) => {
                        return item.lf == this.state.pickerLF.employeeRegId;
                      })
                      .map((item) => {
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
                    selectedValue={this.state.pickerVisitor}
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
                    selectedValue={this.state.pickerDesignation}
                    onValueChange={(value) => {
                      this.setState({ pickerDesignation: value });

                      this.setState({
                        preMonthData:
                          this.state.allBanglaClassObservationData.filter(
                            (item) => {
                              return (
                                item.visitNo ===
                                  parseInt(parseInt(this.state.visitNo) - 1) &&
                                item.school === this.state.pickerSchool &&
                                item.project === this.state.pickerProject &&
                                item.year === this.state.pickerYear
                              );
                            }
                          ),
                      });

                      // console.log(
                      //   "this.state.pickerSchool : " + this.state.pickerSchool
                      // );

                      // console.log(
                      //   "this.state.pickerProject : " + this.state.pickerProject
                      // );

                      // console.log(
                      //   "this.state.pickerYear : " + this.state.pickerYear
                      // );

                      // console.log(
                      //   "parseInt(this.state.visitNo) : " +
                      //     parseInt(parseInt(this.state.visitNo) - 1)
                      // );

                      // console.log(
                      //   "allLibraryObservationData: " +
                      //     this.state.allLibraryObservationData
                      // );

                      //console.log("preMonthData: " + this.state.preMonthData);
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    {this.state.allDesignation.map((item) => {
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
                      পরিদর্শক এর অফিস:
                    </Text>
                    <Text
                      style={{ textAlign: "right", color: "red", fontSize: 16 }}
                    >
                      *
                    </Text>
                  </View>
                  <Picker
                    selectedValue={this.state.pickerVisitorOffice}
                    onValueChange={(value) => {
                      this.setState({ pickerVisitorOffice: value });
                      console.log(
                        "preMonthData: " + this.state.preMonthData.length
                      );
                      if (this.state.preMonthData.length > 0) {
                        const followup1 = this.state.preMonthData
                          .map((item) => {
                            return item.coachingSupportInd1;
                          })
                          .toString();

                        const followup2 = this.state.preMonthData
                          .map((item) => {
                            return item.coachingSupportInd2;
                          })
                          .toString();
                        console.log("followup1 :" + followup1);
                        this.setState({
                          lastFollowupTopic1: followup1,
                        });
                        this.setState({
                          lastFollowupTopic2: followup2,
                        });
                      }
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
                    <Picker.Item label={"MFO"} value={"MFO"} />
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
                    keyboardType="default"
                    placeholder=""
                    editable={true}
                    onChangeText={(text) =>
                      this.setState({
                        headTeacher: text,
                      })
                    }
                    value={this.state.headTeacher + ""}
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
                    selectedValue={this.state.classTeacherGender}
                    onValueChange={(value) => {
                      this.setState({ classTeacherGender: value });
                    }}
                    itemStyle={{ color: "white" }}
                  >
                    <Picker.Item label={"নির্বাচন করুন"} value={""} />
                    <Picker.Item label={"Female"} value={"Female"} />
                    <Picker.Item label={"Male"} value={"Male"} />
                    <Picker.Item label={"Other"} value={"Other"} />
                  </Picker>
                </View>
              </View>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ flex: 2 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    মন্তব্য :
                  </Text>
                  <TextInput
                    style={{
                      height: 80,
                      width: 520,
                      padding: 5,
                      borderWidth: 1,
                    }}
                    keyboardType="default"
                    placeholder=""
                    editable={true}
                    onChangeText={(text) =>
                      this.setState({
                        note: text,
                      })
                    }
                    value={this.state.note + ""}
                  />
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
  container: {
    alignItems: "center",
    flex: 1,
    height: height,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
