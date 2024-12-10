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
}

function CreateModal(props: Readonly<IProps>) {
  const { modalVisible, setModalVisible } = props;

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={{ fontSize: 25 }}>Create a review</Text>

              <AntDesign
                onPress={() => setModalVisible(false)}
                name="close"
                size={24}
                color="black"
              />
            </View>

            {/* Body */}
            <View>
              <View style={styles.groupInput}>
                <Text style={styles.text}>Title</Text>
                <TextInput style={styles.input} />
              </View>

              <View style={styles.groupInput}>
                <Text style={styles.text}>Rating</Text>
                <TextInput style={styles.input} keyboardType="numeric" />
              </View>
            </View>

            {/* Footer */}
            <View>
              <Button title="Add" />
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
