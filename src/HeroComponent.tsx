import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Button } from 'heroui-native/button'
import { Card } from "heroui-native/card";
import { BottomSheet } from 'heroui-native/bottom-sheet';
import { Checkbox } from 'heroui-native/checkbox';
import { Skeleton } from 'heroui-native/skeleton';
import { Input } from "heroui-native/input"

const HeroComponent = () => {
    const [isSelected, setIsSelected] = React.useState(false);
  return (
    <View className='flex-1 bg-white justify-center items-center'>

    
    <Card className='rounded-3xl flex gap-2'>
    <View className='flex justify-center items-center gap-4'>
      <Text className='text-white'>HeroComponent</Text>
      <Button>Get Started</Button>
      <Checkbox isSelected={isSelected} onSelectedChange={setIsSelected} className='bg-white' >
        <Checkbox.Indicator className='bg-[#ce212f]'>

        </Checkbox.Indicator>
      </Checkbox>
      
    </View>
    </Card>
    <Skeleton isLoading={true} className="h-20 w-20 rounded-lg">
  <View className="h-20 bg-primary rounded-lg">
    <Text>Loaded Content</Text>
  </View>
</Skeleton>
    
    <BottomSheet>
  <BottomSheet.Trigger asChild>
    <Button>Open Bottom Sheet</Button>
  </BottomSheet.Trigger>
  <BottomSheet.Portal>
    <BottomSheet.Overlay />
    <BottomSheet.Content className=' text-pink-500' snapPoints={['25%', '50%', '90%']}>
      <BottomSheet.Close />
      <BottomSheet.Title>
        <Text>Hello Bottom Sheet</Text>
      </BottomSheet.Title>
      <BottomSheet.Description className='flex gap-2'>
        <View className='flex gap-4 '>
            <Text className='text-white'>Selected and opened a bottom sheet</Text>
        <TextInput className='w-full rounded-2xl h-12 border border-white' />
          <Input aria-label="Name" className="w-64 border border-gray-400" placeholder="Enter your name" />;
        </View>
      </BottomSheet.Description>
    </BottomSheet.Content>
  </BottomSheet.Portal>
</BottomSheet>
    </View>
  )
}

export default HeroComponent