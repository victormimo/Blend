import { Flex, Image} from '@chakra-ui/react'

export const StreamButtons = ({ streamButtons, toggleVideoMute }) =>{
    return (
        streamButtons.map((name) => (
            <Flex
              h={20}
              w={20}
              border="1px"
              borderColor="gray.900"
              rounded={100}
              justify="center"
              align="center"
              onClick={toggleVideoMute}
            >
             <Image h={7} w={7} src={name} alt={name} /> 
            </Flex>
         ))
    )
}