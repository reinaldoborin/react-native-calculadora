import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('')
  const [resultado, setResultado] = useState('')

  const handleOp = async (op) => {
    if (op === 'C') {
      setDisplay('')
      setResultado('')
    } else if (op === '=') {
      setDisplay(resultado)
      setResultado('')
    } else {
      try {
        setDisplay(display + op)
        let fixedOp = display.split('x').join('*')
        fixedOp = fixedOp.split('÷').join('/')
        fixedOp = fixedOp.split(',').join('.')
        valor = new String(eval(fixedOp)).toString()
      } catch (err) { console.log(err) }
      setResultado(valor)
    }
  }

  const col1Buttons = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    [',', '0', '=']
  ]

  const col2Buttons = ['C', '÷', 'x', '-', '+']

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <Text style={styles.resultado}>{resultado}</Text>
      <View style={styles.buttons}>
        <View style={styles.col1}>
          {col1Buttons.map((line, ind) => <View key={ind} style={styles.line}>
            {line.map(op => <TouchableOpacity key={op} style={styles.btn} onPress={() => handleOp(op)}>
              <Text style={styles.btnText}>{op}</Text>
            </TouchableOpacity>)}
          </View>)}
        </View>
        <View style={styles.col2}>
          {col2Buttons.map(op => <TouchableOpacity key={op} style={styles.btn} onPress={() => handleOp(op)}>
            <Text style={styles.btnText}>{op}</Text>
          </TouchableOpacity>)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  display: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    fontSize: 80,
    textAlign: 'right',
    paddingTop: 30,
    paddingRight: 10
  },
  resultado: {
    flex: 0.4,
    backgroundColor: '#EFEFEF',
    fontSize: 40,
    textAlign: 'right',
    paddingRight: 10,
    paddingBottom: 10
  },
  buttons: {
    flex: 5,
    flexDirection: 'row'
  },
  col1: {
    flex: 3,
    backgroundColor: 'grey',
    backgroundColor: '#0f0f0f'
  },
  line: {
    flex: 1,
    flexDirection: 'row'
  },
  btn: {
    flex: 1,
    justifyContent: 'center'
  },
  btnText: {
    textAlign: 'center',
    fontSize: 50,
    color: 'white'
  },
  col2: {
    flex: 1,
    backgroundColor: '#0a0a0a'
  },
});


