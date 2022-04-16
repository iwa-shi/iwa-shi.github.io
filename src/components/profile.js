import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';

const ProfileArea = () => {
    return (
        <>
            <Card>
                <CardMedia
                    component="img"
                    image="/IMG_3514.png"
                    sx={{ width: 151 }}
                >
                </CardMedia>
                Hi
            </Card>
        </>
    )
}

export default ProfileArea