import React,{ Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
export default class App extends Component {
  constructor(){
    super()
    this.state={
      resultText:""
    }
  }
  buttonpressed(text){
    this.setState({
      resultText:this.state.resultText+text
    })
              
  }
 
  render(){
    let rows=[]
    let nums=[[1,2,3], [4,5,6], [7,8,9], [0,".","="]]
    for(let i=0;i<4;i++){
      let row=[]
      for(let j=0;j<3;j++){
        row.push(<TouchableOpacity onPress={() => this.buttonpressed(nums[i][j])} style={styles.btn}><Text style={styles.btntext}>{nums[i][j]}</Text></TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }
    let operations=['+','-','*','/']
    let ops=[]
    for(let i=0;i<4;i++){
      ops.push(<TouchableOpacity onPress={() => this.buttonpressed(operations[i])} style={styles.btn}><Text style={styles.opstext}>{operations[i]}</Text></TouchableOpacity>)
    }
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{this.state.resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calctext}>121</Text>
      </View>
      <View style={styles.buttons}>
         <View style={styles.numbers}>
           {rows}
         </View>
         <View style={styles.operations}>
           {ops}
         </View>
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
      backgroundColor:'#EBF5FB',
      flex: 2,
      justifyContent:'center',
      alignItems:'flex-end'
    },
    buttons:{
      flexDirection:'row',
      flex:7
        },
    calculation:{
      backgroundColor:'#AED6F1',
      flex: 1,
      justifyContent:'center',
      alignItems:'flex-end'
    },
    numbers:{
      backgroundColor:'#5DADE2',
      flex: 3
    },
    operations:{
      backgroundColor:'#212F3C',
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
    },
    btntext:{
      color:'#212F3C',
      fontSize:30
    },
    opstext:{
      color:'#AED6F1',
      fontSize:30
    },
    resultText:{
      color:'#5DADE2',
      fontSize:40,
      

    },
    calctext:
    {
      fontSize:40,
      color:'#212F3C'
    }

   
});
