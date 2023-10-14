import { SafeAreaView, Text } from 'react-native';
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicatorWrapper, ActionsheetDragIndicator, ActionsheetItem, ActionsheetItemText } from '@gluestack-ui/themed';
import {
  Box,
  GluestackUIProvider,
  VStack,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';
import * as Speech from 'expo-speech';


export default function App() {

  const [showActionsheet, setShowActionsheet] = React.useState(false)
  const handleClose = () => setShowActionsheet(!showActionsheet)

  const speak = () => {
    Speech.speak(`Hello, Users! This is a Text-to-Speech Component. One of the React Native Components`, {
      language: "tl-PH",
    });
  };
  speak();

  const Asheet = () => {
  return (
    <VStack
      h="100%"
      justifyContent="center"
      alignContent='center'
      alignItems='center'
      bg="$backgroundLight0"
      sx={{
        _web: {
          minHeight: '100vh',
        },
      }}>

      <Box width='100%' margin={20} height='100%' alignItems="center" backgroundColor='#ffffff' flex={0} justifyContent='center'>

          <Text style={{fontWeight: 'bold'}}>
            Hello, Users! This is a Text-to-Speech Component. One of the React Native Components
          </Text>
      </Box>
    </VStack>
  );
};

  return (
    <SafeAreaView >
      <GluestackUIProvider config={config}>
        <Asheet />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}