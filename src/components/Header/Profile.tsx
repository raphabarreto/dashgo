import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Raphael Barreto</Text>
        <Text color="gray.300" fontSize="small">
          tnt.raphael@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Raphael Barreto"
        src="https://github.com/raphabarreto.png"
      />
    </Flex>
  );
}
