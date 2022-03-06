import React from 'react';

import { Avatar, Anchor, Box, Header, Nav } from 'grommet';

const items = [
    { label: 'About', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Art Blog', href: '#' },
    { label: 'Contact', href: '#' },
];

const gravatarSrc =
    'https://img.jakpost.net/c/2020/04/07/2020_04_07_92088_1586233705._large.jpg';

export const OnHeaderNav = () => (
    <Header background="low" pad="small" elevation='medium'>
        <Box direction="row" align="center" gap="small">
            <Avatar src={gravatarSrc} />
            <Anchor color='highlight' href="https://github.com/IronwoodAnvil">Nathan Mascari</Anchor>
        </Box>
        <Nav direction="row">
            {items.map((item) => (
                <Anchor href={item.href} label={item.label} key={item.label} color={'highlight'} />
            ))}
        </Nav>
    </Header >
);

