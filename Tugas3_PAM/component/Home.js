import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = ({ navigation }) => {
  const [Awal, setAwal] = useState("");
  const [Tujuan, setTujuan] = useState("");
  const [Tgl, setTgl] = useState("27 Maret 2023");

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Icon name="bars" size={30} style={{ color: "#fff", margin: 20 }} />
        <Icon
          name="user"
          size={40}
          style={{
            color: "#fff",
            marginLeft: "auto",
            marginRight: 20,
            marginTop: -53,
          }}
        />
        <Text style={styles.headerText}>Hiling.id</Text>
      </View>
      <View style={styles.box2} />
      <View style={styles.boxInput}>
        <SafeAreaView>
          <Text style={styles.textInput}>Lokasi Keberangkatan</Text>
          <TextInput
            placeholder="Masukkan Lokasi Keberangkatan"
            style={styles.input}
            onChangeText={(val) => setAwal(val)}
          />
          <Text style={styles.textInput}>Lokasi Tujuan</Text>
          <TextInput
            placeholder="Masukkan Lokasi Tujuan"
            style={styles.input}
            onChangeText={(val) => setTujuan(val)}
          />
          <Text style={styles.textInput}>Tanggal Keberangkatan</Text>
          <TextInput
            placeholder="Masukkan Tanggal Keberangkatan"
            style={styles.input}
            onChangeText={(val) => setTgl(val)}
          />
        </SafeAreaView>
        <Button
          title="Cari"
          color="#FF7F10"
          onPress={() =>
            navigation.navigate("Hasil Jadwal Pencarian", {
              awal: Awal,
              tujuan: Tujuan,
              tgl: Tgl,
            })
          }
        />
      </View>
      <Text style={{ textAlign: "center", marginBottom: 10 }}>
        Copyright Gracia Sherianta Br Sitepu - 120140084
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: "green",
    flex: 1.3,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
    marginTop: 40,
  },
  box2: {
    backgroundColor: "#fff",
    flex: 1,
  },
  boxInput: {
    backgroundColor: "white",
    position: "absolute",
    top: 150,
    left: 35,
    padding: 20,
    width: 300,
    height: "auto",
    borderRadius: 20,
    borderWidth: 1,
  },
  textInput: {
    fontWeight: 700,
    fontSize: 16,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    marginBottom: 20,
  },
});

export default HomeScreen;