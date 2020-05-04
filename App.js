import React,{ Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(){
    super()
    this.state={}
  }
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.result}></View>
      <View style={styles.calculation}></View>
      <View style={styles.buttons}>
         <View style={styles.numbers}>
             <View style={styles.row}>
                <TouchableOpacity>
                    <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>3</Text>
                </TouchableOpacity>
             </View>
             <View style={styles.row}>
                <TouchableOpacity>
                    <Text>4</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>5</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>6</Text>
                </TouchableOpacity>
             </View>
             <View style={styles.row}>
                <TouchableOpacity >
                    <Text>7</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>8</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text>9</Text>
                </TouchableOpacity>
             </View>
             <View style={styles.row}>
                <TouchableOpacity>
                    <Text>0</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>.</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>=</Text>
                </TouchableOpacity>
             </View>

         </View>

         <View style={styles.operations}></View>
      </View>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1
    },  
    result:{
      backgroundColor:'#ff6666',
      flex: 2
    },
    buttons:{
      flexDirection:'row',
      flex:7
        },
   calculation:{
      backgroundColor:'#00cc99',
      flex: 1
    },
    numbers:{
      backgroundColor:'#ffcc66',
      flex: 3
    },
    operations:{
      backgroundColor:'black',
      flex: 1
    },
    row:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    },
    btn:{
        flex:1,
        alignItems:'center',
        alignSelf:'stretch',
        justifyContent:'center'
    }

   
});
