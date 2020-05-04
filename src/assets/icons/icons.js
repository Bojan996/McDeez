import React from 'react';

import EcoIcon from '@material-ui/icons/Eco';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import AppleIcon from '@material-ui/icons/Apple';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import PieChartIcon from '@material-ui/icons/PieChart';


const icons = (props) => {

    let iconPicker = null;

    switch(props.icon){
        case 'Regular':
            return iconPicker = <FastfoodIcon fontSize='large'/>;
        case 'Vegetables':
            return iconPicker = <EcoIcon fontSize='large'/>;
        case 'Meet':
            return iconPicker = <OutdoorGrillIcon fontSize='large'/>;
        case 'Sauces':
            return iconPicker = <InvertColorsIcon fontSize='large'/>;
        case 'Dressing':
            return iconPicker = <FormatColorFillIcon fontSize='large'/>;
        case 'Fruits':
            return iconPicker = <AppleIcon fontSize='large'/>;
        case 'Shakes':
            return iconPicker = <FreeBreakfastIcon fontSize='large'/>;
        case 'Pie':
            return iconPicker = <PieChartIcon fontSize='large'/>;
        case 'Fried':
            return iconPicker = <FastfoodIcon fontSize='large'/>;
        default: 
            return iconPicker; 
    }
}

export default icons;
    