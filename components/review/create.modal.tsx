import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { IReview } from "./home";
import { Dispatch, SetStateAction, useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },

  header: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 20,
  },
  groupInput: {
    marginBottom: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

interface IProps {
  modalVisible: boolean;
  setModalVisible: (v: boolean) => void;
  reviews: IReview[];
  setReviews: Dispatch<SetStateAction<IReview[]>>;
}

function CreateModal(props: Readonly<IProps>) {
  const { modalVisible, setModalVisible, reviews, setReviews } = props;

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(5);

  const turnOffModel = () => {
    setTitle("");
    setRating(5);
    setModalVisible(false);
  };

  const addReview = (title: string, rating: number) => {
    const uid = uuidv4();

    turnOffModel();
    setReviews([
      {
        id: uid,
        title: title,
        star: rating,
      },
      ...reviews,
    ]);
  };

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={{ fontSize: 25 }}>Create a review</Text>

              <AntDesign
                onPress={() => turnOffModel()}
                name="close"
                size={24}
                color="black"
              />
            </View>

            {/* Body */}
            <View>
              <View style={styles.groupInput}>
                <Text style={styles.text}>Title</Text>
                <TextInput
                  style={styles.input}
                  value={title}
                  onChangeText={(text) => setTitle(text)}
                />
              </View>

              <View style={styles.groupInput}>
                <Text style={styles.text}>Rating</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={rating?.toString()}
                  onChangeText={(text) => {
                    const numericValue = text.replace(/[^0-5]/g, "");
                    if (
                      Number(numericValue) >= 1 &&
                      Number(numericValue) <= 5
                    ) {
                      setRating(parseInt(numericValue));
                    } else if (numericValue === "") {
                      setRating(0);
                    }
                  }}
                />
              </View>
            </View>

            {/* Footer */}
            <View>
              <Button
                disabled={title.trim() === ""}
                onPress={() => addReview(title, rating)}
                title="Add"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

export default CreateModal;

//              <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
