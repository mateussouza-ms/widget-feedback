import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    marginVertical: 16,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  titleText: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
  input: {
    height: 112,
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlignVertical: "top",
  },

  footer: {
    flexDirection: "row",
    marginBottom: 16,
  },
});
