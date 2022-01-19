import { StyleSheet } from "react-native";


export default StyleSheet.create({

  textFont:{
    fontFamily:'textFont'
  },
  headerFont:{
    fontFamily:'headerFont'
  },

  //Main body
  BG: {
    flex: 1,
    backgroundColor: '#333'
  },
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },

  //Home page
  categoryWrapper:{
    margin:5,
    alignSelf:'center',
    width:385,
    borderRadius:25,
    overflow:'hidden'
  },



  //GridComponent
  gridItem: {
    flex: 1,
    height: 150,
  },
  prodWrapper:{
    marginBottom:5,
    alignSelf:'center',
    width:350,
    borderRadius:25,
    overflow:'hidden',
    elevation:5
  },
  gridCartContainer: {
    flex: 1,
    height: 85,
    width: "75%",
    shadowColor: "grey",
    marginVertical: 2
  },
  gridContainer: {
    flex: 1,
    width: "100%",
    shadowColor: "grey",
  },
  titles: {
    fontSize: 28,
    color: "white",
    textShadowColor: `#999999`,
    textShadowRadius: 10,
    textShadowOffset: { width: 2, height: 2 },
  },


  //BG img
  BGImg: {
    height: 163,
    width: "100%"
  },


  // Product Page
  mainHL: {
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 40,
    color: 'beige',
    textShadowColor: 'brown',
    textShadowOffset: { width: 2, height: 3 }
  },

  headLines: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 35,
    color: '#fff',
    textShadowColor: 'red',
    textShadowOffset: { width: 1, height: 2 }
  },
  cardProd:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom:25,
    height:750,
    width:350,
    borderRadius:25,
    elevation:15,
    backgroundColor:'#4169e1',
  },

  regText: {
    fontSize: 18,
    color: 'cornsilk',
  },
  prodImg: {
    alignSelf:'center',
    marginVertical:40,
    width: 250,
    height: 250,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#dc143c"
  },
  boxFrame: {
    borderWidth: 1,
    borderColor: '#dc143c',
    borderRadius: 20,
    margin: 10,
    padding: 20,
    flexWrap: "wrap",
  },

  //Cart page
  deleteBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red',
    width: 100,
  },
  cardCart: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical:25,
    height:400,
    width:350,
    borderRadius:25,
    elevation:15,
    backgroundColor:'#4169e1',
  },

  //Payment page
  inputBox: {
    borderWidth: 2,
    borderColor: '#dc143c',
    borderRadius: 5,
    width: 200,
    padding: 2,
    paddingHorizontal: 6,
    margin: 15,
    color: 'white',
  },
  sendBtn: {
    alignSelf: 'center',
    margin: 15,
    marginBottom: 50,
    padding:10,
    width:100,
    borderRadius: 8,
    backgroundColor: '#dc143c'
  },
  
  

  // Purchased made screen
  cardWrapper:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical:150,
    width:350,
    borderRadius:25,
    elevation:15,
    backgroundColor:'#4169e1',
  },
  purchText:{
    textAlign:'center',
    fontSize: 26,
    color: "white",
    marginVertical:25,
  },
  popToTop:{
    marginVertical:15,
    justifyContent:'center',
    height:45,
    width:250,
    backgroundColor:'#dc143c',
    borderRadius:17,
  },

});