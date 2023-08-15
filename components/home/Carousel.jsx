import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
// import styles from "./carousel.style";
import { COLORS, SIZES } from "../../constants";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const slides = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1rcdN7DExMIR7k1-u7H0vcf55ORqVCVfCYeaj24SarhQSawv_NlE6yeswFVMWfvkPQP0&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1rcdN7DExMIR7k1-u7H0vcf55ORqVCVfCYeaj24SarhQSawv_NlE6yeswFVMWfvkPQP0&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1rcdN7DExMIR7k1-u7H0vcf55ORqVCVfCYeaj24SarhQSawv_NlE6yeswFVMWfvkPQP0&usqp=CAU",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        // inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "95%",
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
