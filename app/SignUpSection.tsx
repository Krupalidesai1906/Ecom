import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

export default function SignUpSection() {
  return (
    <View style={styles.container}>
      {/* Sign up and Save Section */}
      <Text style={styles.title}>Sign up & save</Text>
      <Text style={styles.subtitle}>
        Be updated on new arrivals, trends and offers. Sign up now!
      </Text>

      {/* Email Input and Subscribe Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter email address"
          placeholderTextColor="gray"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Subscribe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#333333",
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "transparent",
    borderColor:'white',
    borderWidth:1,
    padding:10

  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: "#000",

  },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize:16
  },
});
