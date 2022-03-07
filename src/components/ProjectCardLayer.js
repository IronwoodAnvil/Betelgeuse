import React from 'react';

import { FormClose, CaretPrevious, CaretNext } from 'grommet-icons';

import { Box, Button, Layer, Grid } from 'grommet';
import { ProjectCard } from './ProjectCard';

export const ProjectCardLayer = ({open, project, hide, next, prev}) => {
    

    return (

        <Box fill align="center" justify="center"> 
            {open && (
                <Layer
                    position="center"
                    modal={false}
                    margin={{ vertical: 'large', horizontal: 'large' }}
                    onEsc={hide}
                    onClickOutside={hide}
                    responsive={true}
                    background={{ opacity: true }}
                >
                    <Box
                    >
                        Just clicked: {project}
                        <Grid
                            rows={["flex"]}
                            columns={['xxsmall', 'flex', 'xxsmall']}
                            areas={[
                                { name: 'left', start: [0, 0], end: [0, 0] },
                                { name: 'center', start: [1, 0], end: [1, 0] },
                                { name: 'right', start: [2, 0], end: [2, 0] },
                            ]}
                            justify="center"
                            align="center"
                        >
                            <Button  gridArea='left' icon={<CaretPrevious />} onClick={prev} plain/>
                            <Box gridArea='center' pad="small" background="high" round="medium">
                                <ProjectCard />
                            </Box>
                            <Button alignSelf='start' gridArea='center' icon={<FormClose />} onClick={hide} plain />
                            <Button alignSelf="center" gridArea='right' icon={<CaretNext />} onClick={next} plain />
                        </Grid>
                    </Box>
                </Layer>
            )}
        </Box>
        // </Grommet>
    );
};


