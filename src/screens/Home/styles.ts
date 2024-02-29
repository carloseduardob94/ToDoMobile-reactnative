import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    height: 173,
    width: '100%',
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24
  },

  main: {
    backgroundColor: '#1A1A1A',
    flex: 1,
    paddingHorizontal: 24
  },

  button: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },

  input: {
    flex: 1,
    backgroundColor: '#262626',
    height: 54,
    padding: 16,
    borderRadius: 6,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    color: '#F2F2F2',
    fontFamily: 'Inter_400Regular'
  },

  form: {
    flexDirection: 'row',
    gap: 4,
    marginTop: -25
  }
})