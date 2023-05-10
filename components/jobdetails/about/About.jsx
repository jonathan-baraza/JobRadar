import React from "react";
import { View, Text } from "react-native";
import style from "./about.style";

const About = ({ info }) => {
  return (
    <View style={style.container}>
      <Text style={style.headText}>About the job</Text>
      <View style={style.contentBox}>
        <Text style={style.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default About;
