import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    // putting the content in the middle of the page

    <Flex
      minHeight={"100vh"}
      justifyContent={"conter"}
      alignItems={"center"}
      px={4}
    >
      <Container maxWidth={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* left side 
                    - on the mobile version - the "mobile image" disappears 
                    - making something responsive -  put another of {}
                    - on the base smaller screen and above : none
                    - medium screen and above : block

                */}

          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" height={650} alt="phone-image" />
          </Box>

          {/* right side  */}

          <VStack spacing={4} align={"stretch"}>
            <AuthForm />

            <Box textAlign={"center"}>Get the App</Box>

            <Flex gap={5} justifyContent={"center"}>
              {/* for images - start with / "you are already in the public folder" */}
              <Image src="/playstore.png" height={"10"} alt="playstore-logo" />
              <Image src="/microsoft.png" height={"10"} alt="microsoft-logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;

/*

    <div>AuthPage</div>
*/
