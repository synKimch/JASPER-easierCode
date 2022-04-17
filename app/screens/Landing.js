import React from "react";
import { Image, SafeAreaView, View, StyleSheet, Button } from "react-native";

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("Login")}
          title="Get Started"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    width: 240,
    height: 90,
    position: "absolute",
    top: 200,
    left: 70,
    resizeMode: "stretch",
  },
  button: {
    justifyContent: "flex-end",
    paddingBottom: 100,
  },
});

export default Landing;
