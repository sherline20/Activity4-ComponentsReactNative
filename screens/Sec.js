import { View, TouchableOpacity, StyleSheet, ScrollView, scrollViewRef, screenIndex } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';
import {
  Box,
  Text,
  GluestackUIProvider,
  VStack,
  Image,
  HStack,
  Heading,
  Icon,
} from '@gluestack-ui/themed';
import LottieView from 'lottie-react-native';
import { ChevronDown, Camera, ChromeIcon, InstagramIcon, FacebookIcon } from 'lucide-react-native';

export default function Sec({ navigation }) {  

  const Main = () => {
    return (  
      <Box
        style={{backgroundColor: '#ffffff'}}
        justifyContent="center"
        px={4}
        bg="$backgroundLight0"
        sx={{
          _web: {
            minHeight: '100vh',
          },
        }}>
          <ScrollView ref={scrollViewRef} pagingEnabled={true} >
          <VStack alignItems="center" space="lg" paddingTop={50} paddingBottom= {10}>
                     
          </VStack>      

          <VStack
          h="100%"
          flex={1}
          justifyContent="center"
          alignContent='center'
          bg="$backgroundLight0"
          sx={{
            _web: {
              minHeight: '100vh',
            },
          }}>
    <Box width='100%' height='100%' alignItems="center" flexWrap='wrap' flexDirection='row' backgroundColor='#ffffff' gap={20} justifyContent='space-evenly' paddingBottom={50}>
      
    <TouchableOpacity 
    onPress={()=> navigation.navigate('Asheet')}>
        <Box backgroundColor='#272821' style={styles.container}>
            <Text style={styles.txtcolor}>Text-to-Speech</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Alert')}>
        <Box backgroundColor='#272821' style={styles.container}>
            <Text style={styles.txtcolor}>AlertDialog</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('AlertInfo')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text  style={styles.txtcolor}>Alert</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Avatar')}>   
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Avatar</Text>
        </Box>
    </TouchableOpacity >

    <TouchableOpacity onPress={()=> navigation.navigate('Badge')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Badge</Text>
        </Box>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={()=> navigation.navigate('Box')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Box</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Form')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Forms</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Divider')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Divider</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Fab')}>
         <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Fab</Text>
        </Box>
    </TouchableOpacity>
   
    <TouchableOpacity onPress={()=> navigation.navigate('Prog')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Progress</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Mod')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Modal</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Rad')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Radio Button</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Sel')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Select</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Slide')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Slider</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Spin')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Spinner</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Swit')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Switch</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Txt')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Textarea</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Toast')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Toast</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Tip')}>
      <Box backgroundColor='pink' style={styles.container}>
          <Text style={styles.txtcolor}>Tooltip</Text>
      </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Car')}>
    <Box backgroundColor='pink' style={styles.container}>
        <Text style={styles.txtcolor}>Carousel</Text>
    </Box>
  </TouchableOpacity>
  
  <Box height= '100%' justifyContent='Center' alignContent='center' alignItems='center' >
      <TouchableOpacity onPress={()=> {                  
      }}>

    </TouchableOpacity> 
    <Box paddingTop={30} justifyContent='space-evenly' gap={20}>
 
    </Box>
    
  </Box>


  </Box>
              

          </VStack>
        </ScrollView>
      </Box>
    );
  };


  const CustomDrawer = props => {
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20,
              backgroundColor: '#ffff',
              marginBottom: 20,
            }}
          >
            <View>
              <Text style={{fontSize: 20,fontWeight: 'bold', color: '#EA1179'}}>Activity 4</Text>
            </View>

          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            left: 0,
            bottom: 50,
            backgroundColor: '#ffffff',
            padding: 0,
          }}
        >

        </TouchableOpacity>
      </View>
    );
  };
  
  const Drawer = createDrawerNavigator();

  return (
    <VStack style={{backgroundColor: '#272829', flex: 1}}>
      <GluestackUIProvider>
          <NavigationContainer >
              <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{headerStyle:{ backgroundColor: 'violet'}, drawerStyle:{backgroundColor: '#ffffff'}}} >
                <Drawer.Screen name="Components" component={Main} />
              </Drawer.Navigator>
          </NavigationContainer>
      </GluestackUIProvider>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
      height: 110,
      width: 150, 
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: '#ffff',
      backgroundColor: 'white',
      borderWidth: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      shadowOffset: {width: -2, height: 2},  
      shadowColor: 'gray',  
      shadowOpacity: 0.1,  
      elevation: 5,
      shadowRadius: 3,  
    },
    txtcolor: {
      fontSize: 18,
    }
});