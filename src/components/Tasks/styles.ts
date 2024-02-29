import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: "#262626",
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 8
  },

  checkboxBase: {
    width: 17,
    height: 17,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    marginRight: 8
  },

  checkboxChecked: {
    borderWidth: 0,
    width: 17,
    height: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInput: {
    fontSize: 14,
    color: '#F2F2F2',
    flex: 1,
    fontFamily: 'Inter_400Regular'
  },

  textInputChecked: {
    textDecorationLine: 'line-through',
    color: '#808080',
    fontFamily: 'Inter_400Regular'
  }
})