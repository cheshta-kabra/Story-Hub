import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity , TextInput} from 'react-native';

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
      this.state = {
        Author:'',
        Title:'',
        Story:''
        }
    }
    addStory = async()=>{
        // db.collection('students').add({
         db.collection("stories").doc(this.state.Story).set({
            Story_Title:this.state.Title,
            Author_Name:this.state.Author,
            Write_Your_Story :this.state.Story
         })
         
         Alert.alert('story added')
         //ToastAndroid.show('Book Issued',ToastAndroid.SHORT)
         this.setState({Author:'',Title:'',Story:''})
     }
    render(){
        return(
        <View style={styles.container}>
            <TextInput style={styles.inputBox} placeholder={'Name of the story'}
             onChangeText={(text)=>{this.setState({
                Title:text
              })}}
              value={this.state.Title} />
            <TextInput style={styles.inputBox}  placeholder={'Author of the  story'} 
             onChangeText={(text)=>{this.setState({
                Author:text
              })}}
              value={this.state.Author} />
            <TextInput style={styles.inputBox}  placeholder={'Write your story'} multiline={true}
             onChangeText={(text)=>{this.setState({
                Story:text
              })}}
              value={this.state.Story} />
        <TouchableOpacity style={styles.scanButton}
        onPress={this.addStory}>
                        <Text style={styles.buttonText}>SUMBIT</Text>
                        </TouchableOpacity>
            </View>
            )
    }
}
const styles = StyleSheet.create({ 
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
     displayText:{ fontSize: 15, textDecorationLine: 'underline' }, 
     scanButton:{ backgroundColor: '#2196F3', padding: 10, margin: 10 }, 
     buttonText:{ fontSize: 20, },
     inputView:{ flexDirection: 'row', margin: 20 }, 
     inputBox:{ width: 200, height: 40, borderWidth: 1.5, borderRightWidth: 0, fontSize: 20 },
     });