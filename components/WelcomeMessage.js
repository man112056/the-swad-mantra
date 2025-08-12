import { useState } from "react";
import { Alert, Button, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function WelcomeMessage(){

    const [name, setName] = useState('')
    const scrollingItems = Array.from({length: 5}, (_, i) => i)
    return(
        <View style={{padding: 20, backgroundColor : '#f0f0f0', borderRadius: 10}}>
            <Text>Hello this is React native day 2</Text>
            <Text style={{fontSize: 28, color: 'blue'}}>this is text with blue</Text>
            <Image
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                style={{width: 50, height: 50,
                borderRadius: 25, marginTop: 10,
                justifyContent:'center',
                alignItems: 'center'
                 }}/>
            <TextInput 
                style={wcMsgStyles.input}
                placeholder="Type something here..."
                value={name}
                onChangeText={(userInput)=> setName(userInput)}
                />
        <Text style={{fontSize: 14, color: 'blue'}}>Input value is {name}</Text>

        <Button style={{borderRadius:40}}
        color="blue"
         title="Click"
         onPress={() => Alert.alert('Button Pressed', `You typed: ${name}`)}
         />

         <Pressable
         onPress={() => Alert.alert('Pressable Pressed', `You typed: ${name}  in Pressable`)}
         >

            <Text style={{fontSize: 20, color: 'blue', marginTop: 10}}>Pressable Button</Text>
         </Pressable>

         {/* <ScrollView>
            {
                scrollingItems.map(data => (
                
                    <Text key={data}> Item {data+1}</Text>
                ))
            }
         </ScrollView> */}

         <FlatList
          data={scrollingItems}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
           <Text>{item.title}</Text>
         
      )}
        />


        </View>
    )
}

const wcMsgStyles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },

    input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },



})