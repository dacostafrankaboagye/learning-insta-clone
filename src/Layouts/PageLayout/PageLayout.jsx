import { Flex, Box } from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar/Sidebar'
import {useLocation} from 'react-router-dom'

const PageLayout = ({children}) => {
  const { pathname } = useLocation();
  return (
    <Flex>
        {/* Sidebar - left */}
        { pathname !== "/auth" && (
                <Box width={{base: "70px", md: "240px"}}>
                    <Sidebar/>
                </Box>
        ) }
        {/* content - right */}

        <Box flex={1} width={{base:"calc(100% -70px)", md:"calc(100% - 240px)"}}>
            {children}
        </Box>

    </Flex>
  )
}

export default PageLayout