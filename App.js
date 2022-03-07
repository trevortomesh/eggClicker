/**
 *  file: App.js
 *  author: Trevor M. Tomesh <trevor.tomesh@uregina.ca>
 *  version: 0.1
 *  date-created: feb-2-2022 
 *  last-modified: feb-9-2022
 */

import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Pressable,
  TextInput,
  Switch,
} from 'react-native';

var bgColor = 'white';
var txtColor = 'black';

const EggClicker = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const [isEnabled, setIsEnabled] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  /**
   * checkPass
   * Purpose: This function checks to see if the password entered in the textInput
   *          is the desired password
   * Parameter(s):
   *  <1> cheatText: string value to compare to "fuzznugget"
   * 
   * Precondition(s): 
   * <1> count and setCount must be initialized and 
   * <2> count must be a number
   * 
   * Returns: N/A
   * 
   * Side effect:
   * <1> Text wil change 
   * <2> if cheatText is 'fuzznugget' count will incrament by 100
   */
  const checkPass = (cheatText) => {
    if (cheatText == 'fuzznugget') {
      setCount(count + 100);
      setText('');
    }
    else{
      setText(cheatText);
    }
  };

/**
 * checkDarkMode
 * Purpose: this function toggles the background colors between black / white 
 *          and the font colors between black and white depending on whether or
 *          not the toggleSwitch is true.
 * 
 * Parameter(s):
 *  <1> switchMode: a boolean that keeps track of the state of the switch
 * 
 * Precondition(s):
 * <1> bgColor and txtColor are defined
 * <2> switchMode must be defined
 * 
 * Returns: N/A
 * 
 * Side effect:
 * <1> changes bgColor and txtColor
 *  
 */

  const checkDarkMode = (switchMode) =>{
    if (switchMode) {
      bgColor = 'black';
      txtColor = 'white';
    } else {
      bgColor = 'white';
      txtColor = 'black';
    }
  }
  
  //checkDarkMode(switchValue);

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={{ color: txtColor }}>
        {switchValue ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Switch
        style={[{ marginTop: 30, marginBottom: 30 }]}
        onValueChange={(s) =>
        {
          checkDarkMode(s);
          toggleSwitch(s);
          }
        }
        value={switchValue}
      />
      <Text style={[styles.baseText, { color: txtColor }]}>
        You clicked the egg {count} times!{' '}
      </Text>

      <Pressable onPress={() => setCount(count + 1)}>
        <Text style={styles.eggButton}>🥚</Text>
      </Pressable>

      {/**
       * TextInput
       * Purpose: Take a password from the user
       * Prop(s):
       * <1> style:
       * <2> placeholder:
       *  
       */}
      <TextInput
        style={({ height: 40 }, { color: txtColor })}
        placeholder=""
        value={text}
        onChangeText={(newText) => 
        {
          checkPass(newText);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  eggButton: {
    fontSize: 100,
    textAlign: 'center',
    marginVertical: 8,
  },

  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default EggClicker;
