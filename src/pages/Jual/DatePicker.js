// import React, { useState } from "react";
// import { Button, View } from "react-native";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
 
// const DatePicker = () => {
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 
//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };
 
//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };
 
//   const handleConfirm = (date) => {
//     console.warn("A date has been picked: ", date);
//     hideDatePicker();
//   };

//   return (
//     <View>
//       <Button title="Waktu Berakhir" onPress={showDatePicker} />
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="time"
//         is24Hour={true}
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//       />
//     </View>
//   );
// };

// export default DatePicker;
import React, { Component } from "react";
import { AppRegistry, StyleSheet, TouchableOpacity, Button, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment' 

export default class App extends Component{
  constructor() {
    super()
    this.state = {
      isVisible: false,
      chosenTime: ''
    }
  }
  
  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenTime: moment(datetime).format('hh:mm:ss a')
    })
  }

  showPicker = () => {
    this.setState({
      isVisible: true
    })
  }

  hidePicker = () => {
    this.setState({
      isVisible: false
    })
  }

render(){
  return (
    <View>
      
      <TouchableOpacity style={styles.button} onPress={this.showPicker}>
        <Text style={styles.text}>Waktu Berakhir</Text>
      </TouchableOpacity>

      <Text style={{ color : '#00ACEE', fontSize: 16, textAlign: 'center'}}>
        {this.state.chosenTime}
      </Text>
      
      <DateTimePickerModal
        isVisible={this.state.isVisible}
        mode={'time'}
        onConfirm={this.handlePicker}
        onCancel={this.hidePicker}
        is24Hour={true}
      />
    </View>
  )
}
}

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 45,
    backgroundColor: '#DFE1F2',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 15
  },
  text: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center'
  }
})