import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Link,
    Image,
    Card,
} from 'rebass';

function App() {
    return (
        <div className="App">
            <Box variant='styles.root'>
                <Flex
                    px={2}
                    color='white'
                    bg='black'
                    alignItems='center'>
                    <Text p={2} fontWeight='bold'>Nathan Mascari</Text>
                    <Box mx='auto' />
                    <Link variant='nav' href='#!'
                        sx={{
                            display: 'inline-block',
                            fontWeight: 'bold',
                            px: 2,
                            py: 1,
                            color: 'inherit',
                        }}>
                        Nav Link
                    </Link>
                    <Link variant='nav' href='#!'
                        sx={{
                            display: 'inline-block',
                            fontWeight: 'bold',
                            px: 2,
                            py: 1,
                            color: 'inherit',
                        }}>
                        Nav Link 2
                    </Link>
                </Flex>
                <Box
                    sx={{
                        display: 'grid',
                        gridGap: 4,
                        gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
                    }}>
                    <Heading p={3} bg='muted'>Hello</Heading>
                    <Box p={3} color='background' bg='blue'>CSS Grid</Box>
                </Box>
            </Box>
        </div>
    );
}

export default App;