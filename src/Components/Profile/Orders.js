
import { Box, Button, HStack, ScrollView, Text } from 'native-base'
import React from 'react'
import { Pressable } from 'react-native';
import { Colors } from 'react-native-paper'

const Orders = () => {
  return (
    <Box h='full' bg={Colors.white} pt={5}>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/*PAID ORDER*/}
        <Pressable>
            <HStack space={4} 
            justifyContent="space-between" 
            alignItems="center"
            bg={Colors.blue200}
            py={5}
            px={2}
            >
                <Text fontSize={9} color={Colors.black} isTruncated>
                    1231231231
                </Text>
                <Text fontSize={12} color={Colors.black} isTruncated>
                    PAID
                </Text>
                <Text fontSize={11} italic color={Colors.black} isTruncated>
                    Dec 12 2022
                </Text>
                <Button
                px={7}
                py={1.5}
                rounded={50}
                bg={Colors.blue600}
                _text={{
                    color: Colors.white
                }}
                _pressed={{
                    bg: Colors.blue200
                }}
                >
                    $465
                </Button>
                
            </HStack>
        </Pressable>
         {/*PAID ORDER*/}
         <Pressable>
            <HStack space={4} 
            justifyContent="space-between" 
            alignItems="center"
            py={5}
            px={2}
            >
                <Text fontSize={9} color={Colors.black} isTruncated>
                    1231231231
                </Text>
                <Text fontSize={12} color={Colors.black} isTruncated>
                    NOT PAID
                </Text>
                <Text fontSize={11} italic color={Colors.black} isTruncated>
                Jan 12 2022
                </Text>
                <Button
                px={7}
                py={1.5}
                rounded={50}
                bg={Colors.red600}
                _text={{
                    color: Colors.white
                }}
                _pressed={{
                    bg: Colors.blue200
                }}
                >
                    $200
                </Button>
                
            </HStack>
        </Pressable>

      </ScrollView>
    </Box>
  );
}

export default Orders