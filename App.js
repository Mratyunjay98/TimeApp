import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [currentTime, setCurrentTime] = useState("");

  const fetchTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    setCurrentTime(timeString);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>This is the app to show current time. {'\n'}{'\n'}Click on the button to fetch current time</Text>
      <View style={styles.topContainer}>
        <Text style={styles.timeContainer}>{currentTime}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={fetchTime}
        ><Text style ={styles.btn}>Check current time</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: 'center'
  },
  topContainer: {
    flex: 2,
    backgroundColor: "#ADD8E6",
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    textAlignVertical: 'center',
    width: '50%',
    textAlign: 'center',
    fontWeight: '500'
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 16,
    borderRadius: 24,
    backgroundColor: '#FFE7C7',
    borderWidth: 0.5,
    elevation: 5
  },
  btn: {
    fontSize: 20,
  },
  timeContainer: {
    fontSize: 40,
    margin: 40,
  },
});
