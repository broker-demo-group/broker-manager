import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="overview" value="1" />
                        <Tab label="data analysis" value="2" />
                        <Tab label="other" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">Overview</TabPanel>
                <TabPanel value="2">data analysis</TabPanel>
                <TabPanel value="3">other</TabPanel>
            </TabContext>
        </Box>
    );
}
