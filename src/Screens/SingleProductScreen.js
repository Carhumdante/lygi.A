import React, { useState } from 'react'
import { Text,View,Box, ScrollView, Image, Heading, HStack, Spacer } from 'native-base'
import { Colors } from 'react-native-paper';
import Rating from '../Components/Rating';
import Buttone from '../Components/Buttone';
import Review from '../Components/Review';
import NumericInput from "react-native-numeric-input";
import { useNavigation } from '@react-navigation/native';

function SingleProductScreen({route}) {
  const [value, setvalue] = useState(0)
  const navigation = useNavigation()
  const product = route.params
  return (
    <Box safeArea flex={1} bg={Colors.white}>
        <ScrollView px={5} showsVerticalScrollIndicator={false}>
          <Image source={{uri:product.image}}
          alt="Image" 
          w="full" 
          h={300} 
          resizeMode="contain"
          />
          <Heading bold fontSize={15} mb={2} lineHeight={22}>

          {product.name}            
            
          </Heading>

          <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
          <HStack space={2} alignItems="center" my={5}>
          {product.countInStock > 0 ? (
          <NumericInput 
            value={value} 
            totalWidth={140} 
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={product.countInStock}
            minValue={0}
            borderColor={Colors.blue200}
            rounded
            textColor={Colors.black}
            iconStyle={{Colors:Colors.white}}
            rightButtonBackgroundColor={Colors.blue200}
            leftButtonBackgroundColor={Colors.blue200}
            />
            ) : (

          <Heading bold color={Colors.red} italic fontSize={12}>
          Out of stock
          </Heading> 

          )}
   
            <Spacer/>
            <Heading bold color={Colors.black} italic fontSize={19}>
              ${product.price}
            </Heading>
            </HStack>
            <Text lineHeight={24} fontSize={12}>
            {product.description}
            </Text>
            <Buttone onPress={() => navigation.navigate("Cart")} bg={Colors.blue200} color={Colors.white} mt={10}>
              ADD TO CART
            </Buttone>
            {/*REVIEW*/}
            <Review />
            
        </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;