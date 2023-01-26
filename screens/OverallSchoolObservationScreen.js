//  Author: Mohammad Jihad Hossain
//  Create Date: 29/08/2021
//  Modify Date: 25/01/2023
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

      allOverallIndicator: [],
      allOverallSchoolData: [],

      //Preloaded Data

      // previous visit data of the OverallSchool
      preMonthData: [],
      // previous visit data of the OverallSchool

      // Duplicate data check
      duplicateOverallSchoolData: [],
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
      teacherGender: "",
      note: "",

      lastFollowupTopic1: "",
      lastFollowupTopic2: "",
      lastFollowupTopic3: "",

      prePrimaryClassObservation: "",
      oneClassObservation: "",
      twoClassObservation: "",
      threeClassObservation: "",
      fourClassObservation: "",
      fiveClassObservation: "",
      classObservationComment: "",

      prePrimaryBanglaClassObservation1: "",
      oneBanglaClassObservation1: "",
      twoBanglaClassObservation1: "",
      threeBanglaClassObservation1: "",
      fourBanglaClassObservation1: "",
      fiveBanglaClassObservation1: "",
      banglaClassComment1: "",

      prePrimaryBanglaClassObservation2: "",
      oneBanglaClassObservation2: "",
      twoBanglaClassObservation2: "",
      threeBanglaClassObservation2: "",
      fourBanglaClassObservation2: "",
      fiveBanglaClassObservation2: "",
      banglaClassComment2: "",

      prePrimarySRMClassObservation1: "",
      oneSRMClassObservation1: "",
      twoSRMClassObservation1: "",
      threeSRMClassObservation1: "",
      fourSRMClassObservation1: "",
      fiveSRMClassObservation1: "",
      srmComment1: "",

      prePrimarySRMClassObservation2: "",
      oneSRMClassObservation2: "",
      twoSRMClassObservation2: "",
      threeSRMClassObservation2: "",
      fourSRMClassObservation2: "",
      fiveSRMClassObservation2: "",
      srmComment2: "",

      prePrimaryLibraryObservation: "",
      oneLibraryObservation: "",
      twoLibraryObservation: "",
      threeLibraryObservation: "",
      fourLibraryObservation: "",
      fiveLibraryObservation: "",
      libraryObservationComment: "",

      classObservationTeacherPriority: "",
      banglaTeacherPriority1: "",
      banglaTeacherPriority2: "",
      srmTeacherPriority1: "",
      srmTeacherPriority2: "",
      libraryObservationTeacherPriority: "",

      schoolPriorityArea: "",
      comment: "",
      other: "",

      ind1AllTeacherTrainedStatus: "",
      ind1AllTeacherTrainedNotes: "",

      ind2FollowedRTRTrainingSixtyStatus: "",
      ind2FollowedRTRTrainingSixtyNotes: "",

      ind3RTRMaterialStatus: "",
      ind3RTRMaterialNotes: "",

      ind4InfluenceToBCOFiftyStatus: "",
      ind4InfluenceToBCOFiftyNotes: "",

      ind5PrePrimaryBanglaSRMSeventyStatus: "",
      ind5PrePrimaryBanglaSRMSeventyNotes: "",

      ind6BanglaClassResultFortyStatus: "",
      ind6BanglaClassResultFortyNotes: "",

      ind7BanglaSRMStatus: "",
      ind7BanglaSRMNotes: "",

      ind8SMCMeetingStatus: "",
      ind8SMCMeetingNotes: "",

      ind9ReadingMaterialStatus: "",
      ind9ReadingMaterialNotes: "",

      ind10FollowedRtRTrainingEightyStatus: "",
      ind10FollowedRtRTrainingEightyNotes: "",

      ind11InfluenceToBCOSeventyStatus: "",
      ind11InfluenceToBCOSeventyNotes: "",

      ind12PrePrimaryBanglaSRMEightyStatus: "",
      ind12PrePrimaryBanglaSRMEightyNotes: "",

      ind13BanglaClassResultSixtyStatus: "",
      ind13BanglaClassResultSixtyNotes: "",

      ind14MeetingDiscussionStatus: "",
      ind14MeetingDiscussionNotes: "",

      ind15LastMonthObservationStatus: "",
      ind15LastMonthObservationNotes: "",

      ind16StudentTrackingStatus: "",
      ind16StudentTrackingNotes: "",

      ind17GovtOfficialVisitStatus: "",
      ind17GovtOfficialVisitNotes: "",

      ind18ParentsSMCParticipationStatus: "",
      ind18ParentsSMCParticipationNotes: "",

      bestPracticeInd1: "",
      bestPracticeInd2: "",
      bestPracticeInd3: "",

      coachingSupportInd1: "",
      coachingSupportInd2: "",
      coachingSupportInd3: "",
      coachingSupportDetailsInd1: "",
      coachingSupportDetailsInd2: "",
      coachingSupportDetailsInd3: "",

      agreedStatement1: "",
      agreedStatement2: "",

      schoolStatus: "",

      dateError: "",
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
    this.getAllOverallIndicator();
    this.getAllOverallObservation();
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

  // Update state
  updateState = () => {
    this.setState({
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
      teacherGender: "",
      note: "",

      lastFollowupTopic1: "",
      lastFollowupTopic2: "",
      lastFollowupTopic3: "",

      prePrimaryClassObservation: "",
      oneClassObservation: "",
      twoClassObservation: "",
      threeClassObservation: "",
      fourClassObservation: "",
      fiveClassObservation: "",
      classObservationComment: "",

      prePrimaryBanglaClassObservation1: "",
      oneBanglaClassObservation1: "",
      twoBanglaClassObservation1: "",
      threeBanglaClassObservation1: "",
      fourBanglaClassObservation1: "",
      fiveBanglaClassObservation1: "",
      banglaClassComment1: "",

      prePrimaryBanglaClassObservation2: "",
      oneBanglaClassObservation2: "",
      twoBanglaClassObservation2: "",
      threeBanglaClassObservation2: "",
      fourBanglaClassObservation2: "",
      fiveBanglaClassObservation2: "",
      banglaClassComment2: "",

      prePrimarySRMClassObservation1: "",
      oneSRMClassObservation1: "",
      twoSRMClassObservation1: "",
      threeSRMClassObservation1: "",
      fourSRMClassObservation1: "",
      fiveSRMClassObservation1: "",
      srmComment1: "",

      prePrimarySRMClassObservation2: "",
      oneSRMClassObservation2: "",
      twoSRMClassObservation2: "",
      threeSRMClassObservation2: "",
      fourSRMClassObservation2: "",
      fiveSRMClassObservation2: "",
      srmComment2: "",

      prePrimaryLibraryObservation: "",
      oneLibraryObservation: "",
      twoLibraryObservation: "",
      threeLibraryObservation: "",
      fourLibraryObservation: "",
      fiveLibraryObservation: "",
      libraryObservationComment: "",

      classObservationTeacherPriority: "",
      banglaTeacherPriority1: "",
      banglaTeacherPriority2: "",
      srmTeacherPriority1: "",
      srmTeacherPriority2: "",
      libraryObservationTeacherPriority: "",

      schoolPriorityArea: "",
      comment: "",
      other: "",

      ind1AllTeacherTrainedStatus: "",
      ind1AllTeacherTrainedNotes: "",

      ind2FollowedRTRTrainingSixtyStatus: "",
      ind2FollowedRTRTrainingSixtyNotes: "",

      ind3RTRMaterialStatus: "",
      ind3RTRMaterialNotes: "",

      ind4InfluenceToBCOFiftyStatus: "",
      ind4InfluenceToBCOFiftyNotes: "",

      ind5PrePrimaryBanglaSRMSeventyStatus: "",
      ind5PrePrimaryBanglaSRMSeventyNotes: "",

      ind6BanglaClassResultFortyStatus: "",
      ind6BanglaClassResultFortyNotes: "",

      ind7BanglaSRMStatus: "",
      ind7BanglaSRMNotes: "",

      ind8SMCMeetingStatus: "",
      ind8SMCMeetingNotes: "",

      ind9ReadingMaterialStatus: "",
      ind9ReadingMaterialNotes: "",

      ind10FollowedRtRTrainingEightyStatus: "",
      ind10FollowedRtRTrainingEightyNotes: "",

      ind11InfluenceToBCOSeventyStatus: "",
      ind11InfluenceToBCOSeventyNotes: "",

      ind12PrePrimaryBanglaSRMEightyStatus: "",
      ind12PrePrimaryBanglaSRMEightyNotes: "",

      ind13BanglaClassResultSixtyStatus: "",
      ind13BanglaClassResultSixtyNotes: "",

      ind14MeetingDiscussionStatus: "",
      ind14MeetingDiscussionNotes: "",

      ind15LastMonthObservationStatus: "",
      ind15LastMonthObservationNotes: "",

      ind16StudentTrackingStatus: "",
      ind16StudentTrackingNotes: "",

      ind17GovtOfficialVisitStatus: "",
      ind17GovtOfficialVisitNotes: "",

      ind18ParentsSMCParticipationStatus: "",
      ind18ParentsSMCParticipationNotes: "",

      bestPracticeInd1: "",
      bestPracticeInd2: "",
      bestPracticeInd3: "",

      coachingSupportInd1: "",
      coachingSupportInd2: "",
      coachingSupportInd3: "",
      coachingSupportDetailsInd1: "",
      coachingSupportDetailsInd2: "",
      coachingSupportDetailsInd3: "",

      agreedStatement1: "",
      agreedStatement2: "",

      schoolStatus: "",
    });
  };
  // Update state

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

  // Get All Overall Indicator
  getAllOverallIndicator = async () => {
    try {
      const response = await axios(
        "http://118.179.80.51:8080/api/v1/overall-indicator",
        {
          method: "GET",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      this.setState({ allOverallIndicator: response.data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };
  // Get All Overall Indicator

  // Get All Overall Data for school
  getAllOverallObservation = async () => {
    try {
      const response = await axios(
        "http://118.179.80.51:8080/api/v1/overall-school",
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
        allOverallSchoolData: response.data,
        isLoading: false,
      });
      console.log(
        "All OverallSchool Data: ",
        this.state.allOverallSchoolData.length
      );
    } catch (error) {
      console.log(error);
    }
  };
  // Get All Overall Data for school

  // Register new book-checkout data
  saveOverallObservation = async () => {
    const newOverall = {
      // General data
      date: this.state.date,
      visitNo: this.state.visitNo,
      fieldOffice: this.state.pickerOffice,
      project: this.state.pickerProject,
      district: this.state.pickerDistrict.name,
      upazilla: this.state.pickerUpazilla.name,
      school: this.state.pickerSchool,
      visitor: this.state.pickerVisitor,
      visitorDesignation: this.state.pickerDesignation,
      visitorOffice: this.state.pickerVisitorOffice,
      lf: this.state.pickerLF.employeeRegId,
      lpo: this.state.pickerLPO.employeeRegId,
      lfName: this.state.pickerLFName.name,
      lpoName: this.state.pickerLPOName.name,
      month: this.state.pickerMonth,
      year: this.state.pickerYear,
      headTeacher: this.state.headTeacher,
      teacherGender: this.state.teacherGender,
      note: this.state.note,

      lastFollowupTopic1: this.state.lastFollowupTopic1,
      lastFollowupTopic2: this.state.lastFollowupTopic2,
      lastFollowupTopic3: this.state.lastFollowupTopic3,

      prePrimaryClassObservation: this.state.prePrimaryClassObservation,
      oneClassObservation: this.state.oneClassObservation,
      twoClassObservation: this.state.twoClassObservation,
      threeClassObservation: this.state.threeClassObservation,
      fourClassObservation: this.state.fourClassObservation,
      fiveClassObservation: this.state.fiveClassObservation,
      classObservationComment: this.state.classObservationComment,

      prePrimaryBanglaClassObservation1:
        this.state.prePrimaryBanglaClassObservation1,
      oneBanglaClassObservation1: this.state.oneBanglaClassObservation1,
      twoBanglaClassObservation1: this.state.twoBanglaClassObservation1,
      threeBanglaClassObservation1: this.state.threeBanglaClassObservation1,
      fourBanglaClassObservation1: this.state.fourBanglaClassObservation1,
      fiveBanglaClassObservation1: this.state.fiveBanglaClassObservation1,
      banglaClassComment1: this.state.banglaClassComment1,

      prePrimaryBanglaClassObservation2:
        this.state.prePrimaryBanglaClassObservation2,
      oneBanglaClassObservation2: this.state.oneBanglaClassObservation2,
      twoBanglaClassObservation2: this.state.twoBanglaClassObservation2,
      threeBanglaClassObservation2: this.state.threeBanglaClassObservation2,
      fourBanglaClassObservation2: this.state.fourBanglaClassObservation2,
      fiveBanglaClassObservation2: this.state.fiveBanglaClassObservation2,
      banglaClassComment2: this.state.banglaClassComment2,

      prePrimarySRMClassObservation1: this.state.prePrimarySRMClassObservation1,
      oneSRMClassObservation1: this.state.oneSRMClassObservation1,
      twoSRMClassObservation1: this.state.twoSRMClassObservation1,
      threeSRMClassObservation1: this.state.threeSRMClassObservation1,
      fourSRMClassObservation1: this.state.fourSRMClassObservation1,
      fiveSRMClassObservation1: this.state.fiveSRMClassObservation1,
      srmComment1: this.state.srmComment1,

      prePrimarySRMClassObservation2: this.state.prePrimarySRMClassObservation2,
      oneSRMClassObservation2: this.state.oneSRMClassObservation2,
      twoSRMClassObservation2: this.state.twoSRMClassObservation2,
      threeSRMClassObservation2: this.state.threeSRMClassObservation2,
      fourSRMClassObservation2: this.state.fourSRMClassObservation2,
      fiveSRMClassObservation2: this.state.fiveSRMClassObservation2,
      srmComment2: this.state.srmComment2,

      prePrimaryLibraryObservation: this.state.prePrimaryLibraryObservation,
      oneLibraryObservation: this.state.oneLibraryObservation,
      twoLibraryObservation: this.state.twoLibraryObservation,
      threeLibraryObservation: this.state.threeLibraryObservation,
      fourLibraryObservation: this.state.fourLibraryObservation,
      fiveLibraryObservation: this.state.fiveLibraryObservation,
      libraryObservationComment: this.state.libraryObservationComment,

      classObservationTeacherPriority:
        this.state.classObservationTeacherPriority,
      banglaTeacherPriority1: this.state.banglaTeacherPriority1,
      banglaTeacherPriority2: this.state.banglaTeacherPriority2,
      srmTeacherPriority1: this.state.srmTeacherPriority1,
      srmTeacherPriority2: this.state.srmTeacherPriority2,
      libraryObservationTeacherPriority:
        this.state.libraryObservationTeacherPriority,

      schoolPriorityArea: this.state.schoolPriorityArea,
      comment: this.state.comment,
      other: this.state.other,

      ind1AllTeacherTrainedStatus: this.state.ind1AllTeacherTrainedStatus,
      ind1AllTeacherTrainedNotes: this.state.ind1AllTeacherTrainedNotes,

      ind2FollowedRTRTrainingSixtyStatus:
        this.state.ind2FollowedRTRTrainingSixtyStatus,
      ind2FollowedRTRTrainingSixtyNotes:
        this.state.ind2FollowedRTRTrainingSixtyNotes,

      ind3RTRMaterialStatus: this.state.ind3RTRMaterialStatus,
      ind3RTRMaterialNotes: this.state.ind3RTRMaterialNotes,

      ind4InfluenceToBCOFiftyStatus: this.state.ind4InfluenceToBCOFiftyStatus,
      ind4InfluenceToBCOFiftyNotes: this.state.ind4InfluenceToBCOFiftyNotes,

      ind5PrePrimaryBanglaSRMSeventyStatus:
        this.state.ind5PrePrimaryBanglaSRMSeventyStatus,
      ind5PrePrimaryBanglaSRMSeventyNotes:
        this.state.ind5PrePrimaryBanglaSRMSeventyNotes,

      ind6BanglaClassResultFortyStatus:
        this.state.ind6BanglaClassResultFortyStatus,
      ind6BanglaClassResultFortyNotes:
        this.state.ind6BanglaClassResultFortyNotes,

      ind7BanglaSRMStatus: this.state.ind7BanglaSRMStatus,
      ind7BanglaSRMNotes: this.state.ind7BanglaSRMNotes,

      ind8SMCMeetingStatus: this.state.ind8SMCMeetingStatus,
      ind8SMCMeetingNotes: this.state.ind8SMCMeetingNotes,

      ind9ReadingMaterialStatus: this.state.ind9ReadingMaterialStatus,
      ind9ReadingMaterialNotes: this.state.ind9ReadingMaterialNotes,

      ind10FollowedRtRTrainingEightyStatus:
        this.state.ind10FollowedRtRTrainingEightyStatus,
      ind10FollowedRtRTrainingEightyNotes:
        this.state.ind10FollowedRtRTrainingEightyNotes,

      ind11InfluenceToBCOSeventyStatus:
        this.state.ind11InfluenceToBCOSeventyStatus,
      ind11InfluenceToBCOSeventyNotes:
        this.state.ind11InfluenceToBCOSeventyNotes,

      ind12PrePrimaryBanglaSRMEightyStatus:
        this.state.ind12PrePrimaryBanglaSRMEightyStatus,
      ind12PrePrimaryBanglaSRMEightyNotes:
        this.state.ind12PrePrimaryBanglaSRMEightyNotes,

      ind13BanglaClassResultSixtyStatus:
        this.state.ind13BanglaClassResultSixtyStatus,
      ind13BanglaClassResultSixtyNotes:
        this.state.ind13BanglaClassResultSixtyNotes,

      ind14MeetingDiscussionStatus: this.state.ind14MeetingDiscussionStatus,
      ind14MeetingDiscussionNotes: this.state.ind14MeetingDiscussionNotes,

      ind15LastMonthObservationStatus:
        this.state.ind15LastMonthObservationStatus,
      ind15LastMonthObservationNotes: this.state.ind15LastMonthObservationNotes,

      ind16StudentTrackingStatus: this.state.ind16StudentTrackingStatus,
      ind16StudentTrackingNotes: this.state.ind16StudentTrackingNotes,

      ind17GovtOfficialVisitStatus: this.state.ind17GovtOfficialVisitStatus,
      ind17GovtOfficialVisitNotes: this.state.ind17GovtOfficialVisitNotes,

      ind18ParentsSMCParticipationStatus:
        this.state.ind18ParentsSMCParticipationStatus,
      ind18ParentsSMCParticipationNotes:
        this.state.ind18ParentsSMCParticipationNotes,

      bestPracticeInd1: this.state.bestPracticeInd1,
      bestPracticeInd2: this.state.bestPracticeInd2,
      bestPracticeInd3: this.state.bestPracticeInd3,

      coachingSupportInd1: this.state.coachingSupportInd1,
      coachingSupportInd2: this.state.coachingSupportInd2,
      coachingSupportInd3: this.state.coachingSupportInd3,
      coachingSupportDetailsInd1: this.state.coachingSupportDetailsInd1,
      coachingSupportDetailsInd2: this.state.coachingSupportDetailsInd2,
      coachingSupportDetailsInd3: this.state.coachingSupportDetailsInd3,

      agreedStatement1: this.state.agreedStatement1,
      agreedStatement2: this.state.agreedStatement2,

      schoolStatus: this.state.schoolStatus,
    };

    // Validation

    //Check duplicate data
    this.state.duplicateOverallSchoolData =
      this.state.allOverallSchoolData.filter((item) => {
        return (
          item.date == this.state.date.toISOString().slice(0, 10) &&
          item.visitNo == this.state.visitNo &&
          item.school == this.state.pickerSchool &&
          item.month == this.state.pickerMonth &&
          item.year == this.state.pickerYear
        );
      });

    console.log(
      "Duplicate OverallSchool Data: ",
      this.state.duplicateOverallSchoolData.length
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
    } else if (this.state.headTeacher === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Head Teacher can not be empty");
      return;
    } else if (this.state.teacherGender === "") {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Gender can not be empty");
      return;
    } else if (this.state.duplicateOverallSchoolData.length > 0) {
      this.setState({ dateError: "Date can not be empty" });
      Alert.alert("Alert", "Duplicate Overall School data !!");
      return;
    } else {
      // Set error message empty
      this.setState({ dateError: "" });

      // Send data to API
      try {
        let response = await fetch(
          "http://118.179.80.51:8080/api/v1/overall-school",
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newOverall),
          }
        );
        if (response.status >= 200 && response.status < 300) {
          Alert.alert(
            "Alert",
            "Overall School Observation data saved successfully!!!"
          );
          this.getAllOverallObservation();
          this.updateState();
        } else {
          Alert.alert("Alert", "Error there !!!");
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
                        preMonthData: this.state.allOverallSchoolData.filter(
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
                        console.log("followup2 :" + followup2);
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
                    selectedValue={this.state.teacherGender}
                    onValueChange={(value) => {
                      this.setState({ teacherGender: value });
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
                ১। প্রায়োরিটি এরিয়াসমুহ পর্যায়ক্রমে পর্যবেক্ষণ করেতে হবে অর্থাৎ
                কেবল প্রাইওরিটি এরিয়া ১ এর সকল সূচকে "হ্যাঁ" হলে প্রায়োরিটি
                এরিয়া ১ ও ২ এর সকল সূচকে "হ্যাঁ" হলে প্রায়োরিটি এরিয়া ৩ এর
                সূচকগুলা পর্যবেক্ষণ করা যাবে ।
              </Text>
              <Text style={{ padding: 5 }}>
                ২। বিদ্যালয়ের সামগ্রিক অবস্থা পর্যবেক্ষণ ২-৩ টি ভালো দিক উল্লেখ
                করুন ।
              </Text>
              <Text style={{ padding: 5 }}>
                ৩। প্রায়োরিটি এরিয়ার ভিত্তিতে যে ২-৩ টি ইনডিকেটরের উত্তর "না"
                তার আলোকে সহায়তার জন্য অগ্রাধিকারভিত্তিক ইনডিকেটর উল্লেখ করুন ।
              </Text>
              <Text style={{ padding: 5 }}>
                ৪। বিদ্যালয়ের সামগ্রিক অবস্থা সংক্রান্ত সমস্যা নিয়ে প্রধান
                শিক্ষকের সাথে আলোচনা করুন।
              </Text>
              <Text style={{ padding: 5 }}>
                ৫। রুম টু রিড থেকে কোনো পদক্ষেপ গ্রহণের প্রয়োজন হলে উল্লেখ করুন
                ।
              </Text>
            </Card>
            <Card style={{ padding: 10, margin: 10 }}>
              <Text style={{ justifyContent: "flex-end" }}>
                ফলো-আপ করার জন্য গত পরিদর্শন থেকে প্রাপ্ত ২-৩ টি বিষয় উল্লেখ
                করুন যেখানে উন্নতি প্রয়োজন ছিল:
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <View style={{ padding: 5 }}>
                    <Text>১.</Text>

                    <TextInput
                      style={{ height: 150, padding: 5, borderWidth: 1 }}
                      multiline={true}
                      numberOfLines={20}
                      placeholder=""
                      editable={false}
                      value={this.state.lastFollowupTopic1 + ""}
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ padding: 5 }}>
                    <Text>২.</Text>

                    <TextInput
                      style={{ height: 150, padding: 5, borderWidth: 1 }}
                      multiline={true}
                      numberOfLines={20}
                      placeholder=""
                      editable={false}
                      value={this.state.lastFollowupTopic2 + ""}
                    ></TextInput>
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
                  <Text style={styles.bigRedText}>ক্লাস পর্যবেক্ষণ</Text>
                </Card>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>প্রাক প্রাথমিক শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.prePrimaryClassObservation}
                        onValueChange={(value) => {
                          this.setState({ prePrimaryClassObservation: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>প্রথম শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.oneClassObservation}
                        onValueChange={(value) => {
                          this.setState({ oneClassObservation: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>দ্বিতীয় শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.twoClassObservation}
                        onValueChange={(value) => {
                          this.setState({ twoClassObservation: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>তৃতীয় শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.threeClassObservation}
                        onValueChange={(value) => {
                          this.setState({ threeClassObservation: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>চতুর্থ শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.fourClassObservation}
                        onValueChange={(value) => {
                          this.setState({ fourClassObservation: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>পঞ্চম শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.fiveClassObservation}
                        onValueChange={(value) => {
                          this.setState({ fiveClassObservation: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শিক্ষকের প্রায়োরিটি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={
                          this.state.classObservationTeacherPriority
                        }
                        onValueChange={(value) => {
                          this.setState({
                            classObservationTeacherPriority: value,
                          });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"1"} value={"1"} />
                        <Picker.Item label={"2"} value={"2"} />
                        <Picker.Item label={"3"} value={"3"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                </Card>
                <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য: </Text>
                    <TextInput
                      style={{ height: 50, padding: 5, borderWidth: 1 }}
                      keyboardType="default"
                      placeholder=""
                      editable={true}
                      onChangeText={(text) =>
                        this.setState({
                          classObservationComment: text,
                        })
                      }
                      value={this.state.classObservationComment + ""}
                    ></TextInput>
                  </View>
                </Card>
              </Card>
            </View>

            <View style={{ padding: 5 }}>
              <Card style={{ padding: 5, margin: 10, flex: 1 }}>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <Text style={styles.bigRedText}>
                    বাংলা ক্লাস পর্যবেক্ষণ ১
                  </Text>
                </Card>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>প্রাক প্রাথমিক শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={
                          this.state.prePrimaryBanglaClassObservation1
                        }
                        onValueChange={(value) => {
                          this.setState({
                            prePrimaryBanglaClassObservation1: value,
                          });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>প্রথম শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.oneBanglaClassObservation1}
                        onValueChange={(value) => {
                          this.setState({ oneBanglaClassObservation1: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>দ্বিতীয় শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.twoBanglaClassObservation1}
                        onValueChange={(value) => {
                          this.setState({ twoBanglaClassObservation1: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>তৃতীয় শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.threeBanglaClassObservation1}
                        onValueChange={(value) => {
                          this.setState({
                            threeBanglaClassObservation1: value,
                          });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>চতুর্থ শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.fourBanglaClassObservation1}
                        onValueChange={(value) => {
                          this.setState({ fourBanglaClassObservation1: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>পঞ্চম শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.fiveBanglaClassObservation1}
                        onValueChange={(value) => {
                          this.setState({ fiveBanglaClassObservation1: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শিক্ষকের প্রায়োরিটি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.banglaTeacherPriority1}
                        onValueChange={(value) => {
                          this.setState({
                            banglaTeacherPriority1: value,
                          });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"1"} value={"1"} />
                        <Picker.Item label={"2"} value={"2"} />
                        <Picker.Item label={"3"} value={"3"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                </Card>
                <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য: </Text>
                    <TextInput
                      style={{ height: 50, padding: 5, borderWidth: 1 }}
                      keyboardType="default"
                      placeholder=""
                      editable={true}
                      onChangeText={(text) =>
                        this.setState({
                          banglaClassComment1: text,
                        })
                      }
                      value={this.state.banglaClassComment1 + ""}
                    ></TextInput>
                  </View>
                </Card>
              </Card>
            </View>

            <View style={{ padding: 5 }}>
              <Card style={{ padding: 5, margin: 10, flex: 1 }}>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <Text style={styles.bigRedText}>
                    বাংলা ক্লাস পর্যবেক্ষণ ২
                  </Text>
                </Card>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>প্রাক প্রাথমিক শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={
                          this.state.prePrimaryBanglaClassObservation2
                        }
                        onValueChange={(value) => {
                          this.setState({
                            prePrimaryBanglaClassObservation2: value,
                          });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>প্রথম শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.oneBanglaClassObservation2}
                        onValueChange={(value) => {
                          this.setState({ oneBanglaClassObservation2: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>দ্বিতীয় শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.twoBanglaClassObservation2}
                        onValueChange={(value) => {
                          this.setState({ twoBanglaClassObservation2: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>তৃতীয় শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.threeBanglaClassObservation2}
                        onValueChange={(value) => {
                          this.setState({
                            threeBanglaClassObservation2: value,
                          });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>চতুর্থ শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.fourBanglaClassObservation2}
                        onValueChange={(value) => {
                          this.setState({ fourBanglaClassObservation2: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>পঞ্চম শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.fiveBanglaClassObservation2}
                        onValueChange={(value) => {
                          this.setState({ fiveBanglaClassObservation2: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শিক্ষকের প্রায়োরিটি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.banglaTeacherPriority2}
                        onValueChange={(value) => {
                          this.setState({
                            banglaTeacherPriority2: value,
                          });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"1"} value={"1"} />
                        <Picker.Item label={"2"} value={"2"} />
                        <Picker.Item label={"3"} value={"3"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                </Card>
                <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য: </Text>
                    <TextInput
                      style={{ height: 50, padding: 5, borderWidth: 1 }}
                      keyboardType="default"
                      placeholder=""
                      editable={true}
                      onChangeText={(text) =>
                        this.setState({
                          banglaClassComment2: text,
                        })
                      }
                      value={this.state.banglaClassComment2 + ""}
                    ></TextInput>
                  </View>
                </Card>
              </Card>
            </View>

            <View style={{ padding: 5 }}>
              <Card style={{ padding: 5, margin: 10, flex: 1 }}>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <Text style={styles.bigRedText}>
                    শ্রেণি পাঠ/পড়ার ঘণ্টা পর্যবেক্ষণ ১
                  </Text>
                </Card>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>প্রাক প্রাথমিক শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={
                          this.state.prePrimarySRMClassObservation1
                        }
                        onValueChange={(value) => {
                          this.setState({
                            prePrimarySRMClassObservation1: value,
                          });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>প্রথম শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.oneSRMClassObservation1}
                        onValueChange={(value) => {
                          this.setState({ oneSRMClassObservation1: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>দ্বিতীয় শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.twoSRMClassObservation1}
                        onValueChange={(value) => {
                          this.setState({ twoSRMClassObservation1: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>তৃতীয় শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.threeSRMClassObservation1}
                        onValueChange={(value) => {
                          this.setState({ threeSRMClassObservation1: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>চতুর্থ শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.fourSRMClassObservation1}
                        onValueChange={(value) => {
                          this.setState({ fourSRMClassObservation1: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>পঞ্চম শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.fiveSRMClassObservation1}
                        onValueChange={(value) => {
                          this.setState({ fiveSRMClassObservation1: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শিক্ষকের প্রায়োরিটি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.srmTeacherPriority1}
                        onValueChange={(value) => {
                          this.setState({
                            srmTeacherPriority1: value,
                          });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"1"} value={"1"} />
                        <Picker.Item label={"2"} value={"2"} />
                        <Picker.Item label={"3"} value={"3"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                </Card>
                <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য: </Text>
                    <TextInput
                      style={{ height: 50, padding: 5, borderWidth: 1 }}
                      keyboardType="default"
                      placeholder=""
                      editable={true}
                      onChangeText={(text) =>
                        this.setState({
                          srmComment1: text,
                        })
                      }
                      value={this.state.srmComment1 + ""}
                    ></TextInput>
                  </View>
                </Card>
              </Card>
            </View>

            <View style={{ padding: 5 }}>
              <Card style={{ padding: 5, margin: 10, flex: 1 }}>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <Text style={styles.bigRedText}>
                    শ্রেণি পাঠ/পড়ার ঘণ্টা পর্যবেক্ষণ ২
                  </Text>
                </Card>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>প্রাক প্রাথমিক শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={
                          this.state.prePrimarySRMClassObservation2
                        }
                        onValueChange={(value) => {
                          this.setState({
                            prePrimarySRMClassObservation2: value,
                          });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>প্রথম শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.oneSRMClassObservation2}
                        onValueChange={(value) => {
                          this.setState({ oneSRMClassObservation2: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>দ্বিতীয় শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.twoSRMClassObservation2}
                        onValueChange={(value) => {
                          this.setState({ twoSRMClassObservation2: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>তৃতীয় শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.threeSRMClassObservation2}
                        onValueChange={(value) => {
                          this.setState({ threeSRMClassObservation2: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>চতুর্থ শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.fourSRMClassObservation2}
                        onValueChange={(value) => {
                          this.setState({ fourSRMClassObservation2: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>পঞ্চম শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.fiveSRMClassObservation2}
                        onValueChange={(value) => {
                          this.setState({ fiveSRMClassObservation2: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শিক্ষকের প্রায়োরিটি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.srmTeacherPriority2}
                        onValueChange={(value) => {
                          this.setState({
                            srmTeacherPriority2: value,
                          });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"1"} value={"1"} />
                        <Picker.Item label={"2"} value={"2"} />
                        <Picker.Item label={"3"} value={"3"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                </Card>
                <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য: </Text>
                    <TextInput
                      style={{ height: 50, padding: 5, borderWidth: 1 }}
                      keyboardType="default"
                      placeholder=""
                      editable={true}
                      onChangeText={(text) =>
                        this.setState({
                          srmComment2: text,
                        })
                      }
                      value={this.state.srmComment2 + ""}
                    ></TextInput>
                  </View>
                </Card>
              </Card>
            </View>

            <View style={{ padding: 5 }}>
              <Card style={{ padding: 5, margin: 10, flex: 1 }}>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <Text style={styles.bigRedText}>
                    পাঠাগার ব্যবস্থাপনা পর্যবেক্ষণ
                  </Text>
                </Card>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>প্রাক প্রাথমিক শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.prePrimaryLibraryObservation}
                        onValueChange={(value) => {
                          this.setState({
                            prePrimaryLibraryObservation: value,
                          });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>প্রথম শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.oneLibraryObservation}
                        onValueChange={(value) => {
                          this.setState({ oneLibraryObservation: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>দ্বিতীয় শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.twoLibraryObservation}
                        onValueChange={(value) => {
                          this.setState({ twoLibraryObservation: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>তৃতীয় শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.threeLibraryObservation}
                        onValueChange={(value) => {
                          this.setState({ threeLibraryObservation: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>চতুর্থ শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.fourLibraryObservation}
                        onValueChange={(value) => {
                          this.setState({ fourLibraryObservation: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>পঞ্চম শ্রেনি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.fiveLibraryObservation}
                        onValueChange={(value) => {
                          this.setState({ fiveLibraryObservation: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"হ্যাঁ"} value={"yes"} />
                        <Picker.Item label={"না"} value={"no"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>শিক্ষকের প্রায়োরিটি</Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={
                          this.state.libraryObservationTeacherPriority
                        }
                        onValueChange={(value) => {
                          this.setState({
                            libraryObservationTeacherPriority: value,
                          });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"1"} value={"1"} />
                        <Picker.Item label={"2"} value={"2"} />
                        <Picker.Item label={"3"} value={"3"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
                    </View>
                  </View>
                </Card>
                <Card style={{ padding: 10, flex: 1, alignSelf: "center" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য: </Text>
                    <TextInput
                      style={{ height: 50, padding: 5, borderWidth: 1 }}
                      keyboardType="default"
                      placeholder=""
                      editable={true}
                      onChangeText={(text) =>
                        this.setState({
                          libraryObservationComment: text,
                        })
                      }
                      value={this.state.libraryObservationComment + ""}
                    ></TextInput>
                  </View>
                </Card>
              </Card>
            </View>

            <View style={{ padding: 5 }}>
              <Card style={{ padding: 5, margin: 10, flex: 1 }}>
                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <Text style={styles.bigRedText}>
                    বিদ্যালয়ের সার্বিক অবস্থা পর্যবেক্ষণ
                  </Text>
                </Card>

                <Card style={{ padding: 5, flex: 1, alignSelf: "center" }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>বিদ্যালয়ের প্রায়োরিটি এরিয়া: </Text>
                      <Picker
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        selectedValue={this.state.schoolPriorityArea}
                        onValueChange={(value) => {
                          this.setState({ schoolPriorityArea: value });
                        }}
                        itemStyle={{ color: "white" }}
                      >
                        <Picker.Item label={"নির্বাচন করুন"} value={""} />
                        <Picker.Item label={"1"} value={"1"} />
                        <Picker.Item label={"2"} value={"2"} />
                        <Picker.Item label={"3"} value={"3"} />
                        <Picker.Item label={"N/A"} value={"N/A"} />
                      </Picker>
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
                    keyboardType="default"
                    placeholder=""
                    editable={true}
                    onChangeText={(text) =>
                      this.setState({
                        other: text,
                      })
                    }
                    value={this.state.other + ""}
                  ></TextInput>
                </Card>
              </Card>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>
              প্রাক-প্রাথমিক থেকে পঞ্চম শ্রেণি পর্যবেক্ষণের বিষয়সমূহ
            </Text>
            <Text style={styles.bigRedText}>
              প্রায়োরিটি এরিয়া এবং ইনডিকেটর
            </Text>

            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5, flexDirection: "row" }}>
                <Text
                  style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                >
                  প্রায়োরিটি এরিয়া -১ঃ উন্নয়নশীল (১-৮ পর্যন্ত সকল ইনডিকেটর
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
                            width: 150,
                          }}
                          selectedValue={this.state.ind1AllTeacherTrainedStatus}
                          onValueChange={(value) => {
                            this.setState({
                              ind1AllTeacherTrainedStatus: value,
                            });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind1AllTeacherTrainedNotes: text,
                            })
                          }
                          value={this.state.ind1AllTeacherTrainedNotes + ""}
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
                      পাঠ/কার্যক্রম পরিচালনা করেছেন । (অন্তত পর্যবেক্ষণকৃত
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
                            width: 150,
                          }}
                          selectedValue={
                            this.state.ind2FollowedRTRTrainingSixtyStatus
                          }
                          onValueChange={(value) => {
                            this.setState({
                              ind2FollowedRTRTrainingSixtyStatus: value,
                            });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind2FollowedRTRTrainingSixtyNotes: text,
                            })
                          }
                          value={
                            this.state.ind2FollowedRTRTrainingSixtyNotes + ""
                          }
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
                      ৩. রুম টু রিড কর্তৃক সরবরাহকৃত সকল উপকরণ শ্রেনিকক্ষে বিতরণ
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
                            width: 150,
                          }}
                          selectedValue={this.state.ind3RTRMaterialStatus}
                          onValueChange={(value) => {
                            this.setState({ ind3RTRMaterialStatus: value });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind3RTRMaterialNotes: text,
                            })
                          }
                          value={this.state.ind3RTRMaterialNotes + ""}
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
                      (গত মাসে ৫০% শিক্ষার্থী অন্তত ১ টি বই নিয়েছে)
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
                            width: 150,
                          }}
                          selectedValue={
                            this.state.ind4InfluenceToBCOFiftyStatus
                          }
                          onValueChange={(value) => {
                            this.setState({
                              ind4InfluenceToBCOFiftyStatus: value,
                            });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind4InfluenceToBCOFiftyNotes: text,
                            })
                          }
                          value={this.state.ind4InfluenceToBCOFiftyNotes + ""}
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
                      উপস্থিত)
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
                            width: 150,
                          }}
                          selectedValue={
                            this.state.ind5PrePrimaryBanglaSRMSeventyStatus
                          }
                          onValueChange={(value) => {
                            this.setState({
                              ind5PrePrimaryBanglaSRMSeventyStatus: value,
                            });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind5PrePrimaryBanglaSRMSeventyNotes: text,
                            })
                          }
                          value={
                            this.state.ind5PrePrimaryBanglaSRMSeventyNotes + ""
                          }
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
                            width: 150,
                          }}
                          selectedValue={
                            this.state.ind6BanglaClassResultFortyStatus
                          }
                          onValueChange={(value) => {
                            this.setState({
                              ind6BanglaClassResultFortyStatus: value,
                            });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind6BanglaClassResultFortyNotes: text,
                            })
                          }
                          value={
                            this.state.ind6BanglaClassResultFortyNotes + ""
                          }
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
                      জেন্ডার রেসপন্সিভ শিখন-শেখানো বিষয়ক পরামর্শ প্রদান করেছেন
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
                            width: 150,
                          }}
                          selectedValue={this.state.ind7BanglaSRMStatus}
                          onValueChange={(value) => {
                            this.setState({ ind7BanglaSRMStatus: value });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind7BanglaSRMNotes: text,
                            })
                          }
                          value={this.state.ind7BanglaSRMNotes + ""}
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
                      সুশাসন, জেন্ডার সাম্যতামুলক শিখন পরিবেশ এবং কমিউনিটির
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
                            width: 150,
                          }}
                          selectedValue={this.state.ind8SMCMeetingStatus}
                          onValueChange={(value) => {
                            this.setState({ ind8SMCMeetingStatus: value });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind8SMCMeetingNotes: text,
                            })
                          }
                          value={this.state.ind8SMCMeetingNotes + ""}
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
                  প্রায়োরিটি এরিয়া ২ কার্যকরী (১-৮ পর্যন্ত সকল ইনডিকেটর "হ্যাঁ"
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
                      ৯. স্কুলে শিশুদের বয়স-উপযোগী ও জেন্ডার রেসপন্সিভ পঠন উপকরণ
                      রয়েছে এবং নির্দেশনা অনুসারে শিক্ষক কর্তৃক ব্যবহৃত হচ্ছে ।
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
                          selectedValue={this.state.ind9ReadingMaterialStatus}
                          onValueChange={(value) => {
                            this.setState({ ind9ReadingMaterialStatus: value });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind9ReadingMaterialNotes: text,
                            })
                          }
                          value={this.state.ind9ReadingMaterialNotes + ""}
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
                            width: 150,
                          }}
                          selectedValue={
                            this.state.ind10FollowedRtRTrainingEightyStatus
                          }
                          onValueChange={(value) => {
                            this.setState({
                              ind10FollowedRtRTrainingEightyStatus: value,
                            });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind10FollowedRtRTrainingEightyNotes: text,
                            })
                          }
                          value={
                            this.state.ind10FollowedRtRTrainingEightyNotes + ""
                          }
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
                            width: 150,
                          }}
                          selectedValue={
                            this.state.ind11InfluenceToBCOSeventyStatus
                          }
                          onValueChange={(value) => {
                            this.setState({
                              ind11InfluenceToBCOSeventyStatus: value,
                            });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind11InfluenceToBCOSeventyNotes: text,
                            })
                          }
                          value={
                            this.state.ind11InfluenceToBCOSeventyNotes + ""
                          }
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
                      শিক্ষার্থী উপস্থিত ) ।
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
                          selectedValue={
                            this.state.ind12PrePrimaryBanglaSRMEightyStatus
                          }
                          onValueChange={(value) => {
                            this.setState({
                              ind12PrePrimaryBanglaSRMEightyStatus: value,
                            });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind12PrePrimaryBanglaSRMEightyNotes: text,
                            })
                          }
                          value={
                            this.state.ind12PrePrimaryBanglaSRMEightyNotes + ""
                          }
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
                            width: 150,
                          }}
                          selectedValue={
                            this.state.ind13BanglaClassResultSixtyStatus
                          }
                          onValueChange={(value) => {
                            this.setState({
                              ind13BanglaClassResultSixtyStatus: value,
                            });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind13BanglaClassResultSixtyNotes: text,
                            })
                          }
                          value={
                            this.state.ind13BanglaClassResultSixtyNotes + ""
                          }
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
                      সক্রিয় অংশগ্রহণের মাধ্যমে শিক্ষার মান-উন্নয়নের জন্য দীর্ঘ
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
                            width: 150,
                          }}
                          selectedValue={
                            this.state.ind14MeetingDiscussionStatus
                          }
                          onValueChange={(value) => {
                            this.setState({
                              ind14MeetingDiscussionStatus: value,
                            });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind14MeetingDiscussionNotes: text,
                            })
                          }
                          value={this.state.ind14MeetingDiscussionNotes + ""}
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
                  প্রায়োরিটি এরিয়া -৩ঃ অধিকতর কার্যকরী (১-১৪ পর্যন্ত সকল
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
                            width: 150,
                          }}
                          selectedValue={
                            this.state.ind15LastMonthObservationStatus
                          }
                          onValueChange={(value) => {
                            this.setState({
                              ind15LastMonthObservationStatus: value,
                            });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind15LastMonthObservationNotes: text,
                            })
                          }
                          value={this.state.ind15LastMonthObservationNotes + ""}
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
                            width: 150,
                          }}
                          selectedValue={this.state.ind16StudentTrackingStatus}
                          onValueChange={(value) => {
                            this.setState({
                              ind16StudentTrackingStatus: value,
                            });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind16StudentTrackingNotes: text,
                            })
                          }
                          value={this.state.ind16StudentTrackingNotes + ""}
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
                    <Text> </Text>
                    <Text>
                      শ্রেণি শিক্ষককে বাংলাপাঠ/ পড়ার ঘণ্টা / একীভূত শিক্ষা বিষয়ক
                      পরামর্শ প্রদান করেছেন
                    </Text>
                    <Text> </Text>
                    <Text>
                      প্রধান শিক্ষককে একাডেমিক লিডারশীপ এবং কমিউনিটি সম্পৃক্ততা
                      বিষয়ক পরামর্শ প্রদান করেছেন
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
                            width: 150,
                          }}
                          selectedValue={
                            this.state.ind17GovtOfficialVisitStatus
                          }
                          onValueChange={(value) => {
                            this.setState({
                              ind17GovtOfficialVisitStatus: value,
                            });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind17GovtOfficialVisitNotes: text,
                            })
                          }
                          value={this.state.ind17GovtOfficialVisitNotes + ""}
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                  {/* <Card
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
                  </Card> */}
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
                    <Text> </Text>
                    <Text>শ্রেণিপাঠ পরিদর্শন</Text>
                    <Text> </Text>
                    <Text>দিবস উদযাপন</Text>
                    <Text> </Text>
                    <Text>লাইব্রেরী কার্যক্রম পরিদর্শন</Text>
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
                            width: 150,
                          }}
                          selectedValue={
                            this.state.ind18ParentsSMCParticipationStatus
                          }
                          onValueChange={(value) => {
                            this.setState({
                              ind18ParentsSMCParticipationStatus: value,
                            });

                            // Set school status
                            if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes" &&
                              this.state.ind9ReadingMaterialStatus === "Yes" &&
                              this.state
                                .ind10FollowedRtRTrainingEightyStatus ===
                                "Yes" &&
                              this.state.ind11InfluenceToBCOSeventyStatus ===
                                "Yes" &&
                              this.state
                                .ind12PrePrimaryBanglaSRMEightyStatus ===
                                "Yes" &&
                              this.state.ind13BanglaClassResultSixtyStatus ===
                                "Yes" &&
                              this.state.ind14MeetingDiscussionStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 3",
                              });
                            } else if (
                              this.state.ind1AllTeacherTrainedStatus ===
                                "Yes" &&
                              this.state.ind2FollowedRTRTrainingSixtyStatus ===
                                "Yes" &&
                              this.state.ind3RTRMaterialStatus === "Yes" &&
                              this.state.ind4InfluenceToBCOFiftyStatus ===
                                "Yes" &&
                              this.state
                                .ind5PrePrimaryBanglaSRMSeventyStatus ===
                                "Yes" &&
                              this.state.ind6BanglaClassResultFortyStatus ===
                                "Yes" &&
                              this.state.ind7BanglaSRMStatus === "Yes" &&
                              this.state.ind8SMCMeetingStatus === "Yes"
                            ) {
                              this.setState({
                                schoolStatus: "Priority 2",
                              });
                            } else {
                              this.setState({
                                schoolStatus: "Priority 1",
                              });
                            }
                            // Set school status
                          }}
                          itemStyle={{ color: "white" }}
                        >
                          <Picker.Item label={"নির্বাচন করুন"} value={""} />
                          <Picker.Item label={"হ্যাঁ"} value={"Yes"} />
                          <Picker.Item label={"না"} value={"No"} />
                          <Picker.Item label={"আংশিক"} value={"Partial"} />
                          <Picker.Item label={"N/A"} value={"N/A"} />
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
                          keyboardType="default"
                          placeholder=""
                          editable={true}
                          onChangeText={(text) =>
                            this.setState({
                              ind18ParentsSMCParticipationNotes: text,
                            })
                          }
                          value={
                            this.state.ind18ParentsSMCParticipationNotes + ""
                          }
                        ></TextInput>
                      </View>
                    </View>
                  </Card>
                  {/* <Card
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
                        <Text>লাইব্রেরী কার্যক্রম পরিদর্শন</Text>
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
                        <Text>দিবস উদযাপন</Text>
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
                  </Card> */}
                </Card>
              </View>
            </Card>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>আলোচনা</Text>
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <Text style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}>
                প্রধান শিক্ষকের সাথে আলোচনার জন্য গুরুত্বপূর্ণ কিছু বিষয়ঃ
              </Text>
              <View style={{ padding: 5 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      বিদ্যালয় ভালো অবস্থায় আছে এমন এমন ২/৩ টি ইনডিকেটর (
                      নম্বরসহ ) উল্লেখ করুন ।
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>১.</Text>
                    <Picker
                      style={{
                        height: 40,
                        width: 150,
                      }}
                      selectedValue={this.state.bestPracticeInd1}
                      onValueChange={(value) => {
                        this.setState({ bestPracticeInd1: value });

                        // Set school status
                        if (
                          this.state.ind1AllTeacherTrainedStatus === "Yes" &&
                          this.state.ind2FollowedRTRTrainingSixtyStatus ===
                            "Yes" &&
                          this.state.ind3RTRMaterialStatus === "Yes" &&
                          this.state.ind4InfluenceToBCOFiftyStatus === "Yes" &&
                          this.state.ind5PrePrimaryBanglaSRMSeventyStatus ===
                            "Yes" &&
                          this.state.ind6BanglaClassResultFortyStatus ===
                            "Yes" &&
                          this.state.ind7BanglaSRMStatus === "Yes" &&
                          this.state.ind8SMCMeetingStatus === "Yes" &&
                          this.state.ind9ReadingMaterialStatus === "Yes" &&
                          this.state.ind10FollowedRtRTrainingEightyStatus ===
                            "Yes" &&
                          this.state.ind11InfluenceToBCOSeventyStatus ===
                            "Yes" &&
                          this.state.ind12PrePrimaryBanglaSRMEightyStatus ===
                            "Yes" &&
                          this.state.ind13BanglaClassResultSixtyStatus ===
                            "Yes" &&
                          this.state.ind14MeetingDiscussionStatus === "Yes"
                        ) {
                          this.setState({
                            schoolStatus: "Priority 3",
                          });
                        } else if (
                          this.state.ind1AllTeacherTrainedStatus === "Yes" &&
                          this.state.ind2FollowedRTRTrainingSixtyStatus ===
                            "Yes" &&
                          this.state.ind3RTRMaterialStatus === "Yes" &&
                          this.state.ind4InfluenceToBCOFiftyStatus === "Yes" &&
                          this.state.ind5PrePrimaryBanglaSRMSeventyStatus ===
                            "Yes" &&
                          this.state.ind6BanglaClassResultFortyStatus ===
                            "Yes" &&
                          this.state.ind7BanglaSRMStatus === "Yes" &&
                          this.state.ind8SMCMeetingStatus === "Yes"
                        ) {
                          this.setState({
                            schoolStatus: "Priority 2",
                          });
                        } else {
                          this.setState({
                            schoolStatus: "Priority 1",
                          });
                        }
                        // Set school status
                      }}
                      itemStyle={{ color: "white" }}
                    >
                      <Picker.Item label={"নির্বাচন করুন"} value={""} />
                      {this.state.allOverallIndicator.map((item) => {
                        return (
                          <Picker.Item
                            key={item.id}
                            label={item.indicatorDetail}
                            value={item.indicatorDetail}
                          />
                        );
                      })}
                      <Picker.Item label={"N/A"} value={"N/A"} />
                    </Picker>
                    <Text>১.</Text>
                    <TextInput
                      style={{ height: 150, padding: 5, borderWidth: 1 }}
                      multiline={true}
                      numberOfLines={20}
                      placeholder=""
                      editable={false}
                      value={this.state.bestPracticeInd1}
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>২.</Text>
                    <Picker
                      style={{
                        height: 40,
                        width: 150,
                      }}
                      selectedValue={this.state.bestPracticeInd2}
                      onValueChange={(value) => {
                        this.setState({ bestPracticeInd2: value });
                      }}
                      itemStyle={{ color: "white" }}
                    >
                      <Picker.Item label={"নির্বাচন করুন"} value={""} />
                      {this.state.allOverallIndicator.map((item) => {
                        return (
                          <Picker.Item
                            key={item.id}
                            label={item.indicatorDetail}
                            value={item.indicatorDetail}
                          />
                        );
                      })}
                      <Picker.Item label={"N/A"} value={"N/A"} />
                    </Picker>
                    <Text>২.</Text>
                    <TextInput
                      style={{ height: 150, padding: 5, borderWidth: 1 }}
                      multiline={true}
                      numberOfLines={20}
                      placeholder=""
                      editable={false}
                      value={this.state.bestPracticeInd2}
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>৩.</Text>
                    <Picker
                      style={{
                        height: 40,
                        width: 150,
                      }}
                      selectedValue={this.state.bestPracticeInd3}
                      onValueChange={(value) => {
                        this.setState({ bestPracticeInd3: value });
                      }}
                      itemStyle={{ color: "white" }}
                    >
                      <Picker.Item label={"নির্বাচন করুন"} value={""} />
                      {this.state.allOverallIndicator.map((item) => {
                        return (
                          <Picker.Item
                            key={item.id}
                            label={item.indicatorDetail}
                            value={item.indicatorDetail}
                          />
                        );
                      })}
                      <Picker.Item label={"N/A"} value={"N/A"} />
                    </Picker>
                    <Text>৩.</Text>
                    <TextInput
                      style={{ height: 150, padding: 5, borderWidth: 1 }}
                      multiline={true}
                      numberOfLines={20}
                      placeholder=""
                      editable={false}
                      value={this.state.bestPracticeInd3}
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      ২/৩ টি নম্বরসহ উল্লেখ করুন যেখানে প্রধান শিক্ষক উন্নয়নের
                      জন্য সহায়তা করতে পারেন । কিভাবে তিনি উন্নয়ন সহায়তা করবেন
                      সেটি উল্লেখ করুন ।
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>১.</Text>
                    <Picker
                      style={{
                        height: 40,
                        width: 150,
                      }}
                      selectedValue={this.state.coachingSupportInd1}
                      onValueChange={(value) => {
                        this.setState({ coachingSupportInd1: value });
                      }}
                      itemStyle={{ color: "white" }}
                    >
                      <Picker.Item label={"নির্বাচন করুন"} value={""} />
                      {this.state.allOverallIndicator.map((item) => {
                        return (
                          <Picker.Item
                            key={item.id}
                            label={item.indicatorDetail}
                            value={item.indicatorDetail}
                          />
                        );
                      })}
                      <Picker.Item label={"N/A"} value={"N/A"} />
                    </Picker>
                    <Text>১.</Text>
                    <TextInput
                      style={{ height: 150, padding: 5, borderWidth: 1 }}
                      multiline={true}
                      numberOfLines={20}
                      placeholder=""
                      editable={false}
                      value={this.state.coachingSupportInd1}
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>২.</Text>
                    <Picker
                      style={{
                        height: 40,
                        width: 150,
                      }}
                      selectedValue={this.state.coachingSupportInd2}
                      onValueChange={(value) => {
                        this.setState({ coachingSupportInd2: value });
                      }}
                      itemStyle={{ color: "white" }}
                    >
                      <Picker.Item label={"নির্বাচন করুন"} value={""} />
                      {this.state.allOverallIndicator.map((item) => {
                        return (
                          <Picker.Item
                            key={item.id}
                            label={item.indicatorDetail}
                            value={item.indicatorDetail}
                          />
                        );
                      })}
                      <Picker.Item label={"N/A"} value={"N/A"} />
                    </Picker>
                    <Text>২.</Text>
                    <TextInput
                      style={{ height: 150, padding: 5, borderWidth: 1 }}
                      multiline={true}
                      numberOfLines={20}
                      placeholder=""
                      editable={false}
                      value={this.state.coachingSupportInd2}
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
                      keyboardType="default"
                      editable={true}
                      onChangeText={(text) =>
                        this.setState({
                          coachingSupportDetailsInd1: text,
                        })
                      }
                      value={this.state.coachingSupportDetailsInd1 + ""}
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 80, padding: 5, borderWidth: 1 }}
                      placeholder="২."
                      keyboardType="default"
                      editable={true}
                      onChangeText={(text) =>
                        this.setState({
                          coachingSupportDetailsInd2: text,
                        })
                      }
                      value={this.state.coachingSupportDetailsInd2 + ""}
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      যে কাজ গুলো করার জন্য প্রধান শিক্ষক একমত হয়েছেন সেটি
                      উল্লেখ করুন ।
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 80, padding: 5, borderWidth: 1 }}
                      placeholder="১."
                      keyboardType="default"
                      editable={true}
                      onChangeText={(text) =>
                        this.setState({
                          agreedStatement1: text,
                        })
                      }
                      value={this.state.agreedStatement1 + ""}
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 80, padding: 5, borderWidth: 1 }}
                      placeholder="২."
                      keyboardType="default"
                      editable={true}
                      onChangeText={(text) =>
                        this.setState({
                          agreedStatement2: text,
                        })
                      }
                      value={this.state.agreedStatement2 + ""}
                    ></TextInput>
                  </View>
                </View>
              </View>
            </Card>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>বিদ্যালয়ের অবস্থা</Text>
            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
              <View style={{ padding: 5 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 3, padding: 2 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      ইনডিকেটর অনুযায়ী বিদ্যালয়ের অবস্থা
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      {this.state.schoolStatus}
                      {/* {this.state.teacherStatus} */}
                    </Text>
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
              // disabled={
              //   !this.state.pickerMonth ||
              //   !this.state.pickerYear ||
              //   !this.state.pickerDistrict ||
              //   !this.state.pickerUpazilla ||
              //   !this.state.pickerOffice ||
              //   !this.state.pickerProject ||
              //   !this.state.pickerLPO ||
              //   !this.state.pickerLF ||
              //   !this.state.pickerSchool ||
              //   !this.state.pickerVisitor ||
              //   !this.state.pickerDesignation ||
              //   !this.state.pickerVisitorOffice ||
              //   !this.state.headTeacher ||
              //   !this.state.teacherGender ||
              //   !this.state.note ||
              //   !this.state.prePrimaryClassObservation ||
              //   !this.state.oneClassObservation ||
              //   !this.state.twoClassObservation ||
              //   !this.state.threeClassObservation ||
              //   !this.state.fourClassObservation ||
              //   !this.state.fiveClassObservation ||
              //   !this.state.classObservationComment ||
              //   !this.state.prePrimaryBanglaClassObservation1 ||
              //   !this.state.oneBanglaClassObservation1 ||
              //   !this.state.twoBanglaClassObservation1 ||
              //   !this.state.threeBanglaClassObservation1 ||
              //   !this.state.fourBanglaClassObservation1 ||
              //   !this.state.fiveBanglaClassObservation1 ||
              //   !this.state.banglaClassComment1 ||
              //   !this.state.prePrimaryBanglaClassObservation2 ||
              //   !this.state.oneBanglaClassObservation2 ||
              //   !this.state.twoBanglaClassObservation2 ||
              //   !this.state.threeBanglaClassObservation2 ||
              //   !this.state.fourBanglaClassObservation2 ||
              //   !this.state.fiveBanglaClassObservation2 ||
              //   !this.state.banglaClassComment2 ||
              //   !this.state.prePrimarySRMClassObservation1 ||
              //   !this.state.oneSRMClassObservation1 ||
              //   !this.state.twoSRMClassObservation1 ||
              //   !this.state.threeSRMClassObservation1 ||
              //   !this.state.fourSRMClassObservation1 ||
              //   !this.state.fiveSRMClassObservation1 ||
              //   !this.state.srmComment1 ||
              //   !this.state.prePrimarySRMClassObservation2 ||
              //   !this.state.oneSRMClassObservation2 ||
              //   !this.state.twoSRMClassObservation2 ||
              //   !this.state.threeSRMClassObservation2 ||
              //   !this.state.fourSRMClassObservation2 ||
              //   !this.state.fiveSRMClassObservation2 ||
              //   !this.state.srmComment2 ||
              //   !this.state.prePrimaryLibraryObservation ||
              //   !this.state.oneLibraryObservation ||
              //   !this.state.twoLibraryObservation ||
              //   !this.state.threeLibraryObservation ||
              //   !this.state.fourLibraryObservation ||
              //   !this.state.fiveLibraryObservation ||
              //   !this.state.libraryObservationComment ||
              //   !this.state.classObservationTeacherPriority ||
              //   !this.state.banglaTeacherPriority1 ||
              //   !this.state.banglaTeacherPriority2 ||
              //   !this.state.srmTeacherPriority1 ||
              //   !this.state.srmTeacherPriority2 ||
              //   !this.state.libraryObservationTeacherPriority ||
              //   !this.state.schoolPriorityArea ||
              //   !this.state.comment ||
              //   !this.state.other ||
              //   !this.state.ind1AllTeacherTrainedStatus ||
              //   !this.state.ind1AllTeacherTrainedNotes ||
              //   !this.state.ind2FollowedRTRTrainingSixtyStatus ||
              //   !this.state.ind2FollowedRTRTrainingSixtyNotes ||
              //   !this.state.ind3RTRMaterialStatus ||
              //   !this.state.ind3RTRMaterialNotes ||
              //   !this.state.ind4InfluenceToBCOFiftyStatus ||
              //   !this.state.ind4InfluenceToBCOFiftyNotes ||
              //   !this.state.ind5PrePrimaryBanglaSRMSeventyStatus ||
              //   !this.state.ind5PrePrimaryBanglaSRMSeventyNotes ||
              //   !this.state.ind6BanglaClassResultFortyStatus ||
              //   !this.state.ind6BanglaClassResultFortyNotes ||
              //   !this.state.ind7BanglaSRMStatus ||
              //   !this.state.ind7BanglaSRMNotes ||
              //   !this.state.ind8SMCMeetingStatus ||
              //   !this.state.ind8SMCMeetingNotes ||
              //   !this.state.ind9ReadingMaterialStatus ||
              //   !this.state.ind9ReadingMaterialNotes ||
              //   !this.state.ind10FollowedRtRTrainingEightyStatus ||
              //   !this.state.ind10FollowedRtRTrainingEightyNotes ||
              //   !this.state.ind11InfluenceToBCOSeventyStatus ||
              //   !this.state.ind11InfluenceToBCOSeventyNotes ||
              //   !this.state.ind12PrePrimaryBanglaSRMEightyStatus ||
              //   !this.state.ind12PrePrimaryBanglaSRMEightyNotes ||
              //   !this.state.ind13BanglaClassResultSixtyStatus ||
              //   !this.state.ind13BanglaClassResultSixtyNotes ||
              //   !this.state.ind14MeetingDiscussionStatus ||
              //   !this.state.ind14MeetingDiscussionNotes ||
              //   !this.state.ind15LastMonthObservationStatus ||
              //   !this.state.ind15LastMonthObservationNotes ||
              //   !this.state.ind16StudentTrackingStatus ||
              //   !this.state.ind16StudentTrackingNotes ||
              //   !this.state.ind17GovtOfficialVisitStatus ||
              //   !this.state.ind17GovtOfficialVisitNotes ||
              //   !this.state.ind18ParentsSMCParticipationStatus ||
              //   !this.state.ind18ParentsSMCParticipationNotes ||
              //   !this.state.bestPracticeInd1 ||
              //   !this.state.bestPracticeInd2 ||
              //   !this.state.bestPracticeInd3 ||
              //   !this.state.coachingSupportInd1 ||
              //   !this.state.coachingSupportInd2 ||
              //   !this.state.coachingSupportDetailsInd1 ||
              //   !this.state.coachingSupportDetailsInd2 ||
              //   !this.state.agreedStatement1 ||
              //   !this.state.agreedStatement2
              // }
              onPress={this.saveOverallObservation.bind(this)}
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
    alignSelf: "center",
    alignContent: "center",
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
