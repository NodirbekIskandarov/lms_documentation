import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 200, }}
        >
            <Tabs className=''
                sx={{width:200}}
                orientation="vertical"
                value={value}
                onChange={handleChange}
                // aria-label="Vertical tabs example"
            >
                <Tab label="Ma’muriy boshqaruv" {...a11yProps(0)} />
                <Tab label="O‘quv jarayoni" {...a11yProps(1)} />
                <Tab label="Ilmiy faoliyat" {...a11yProps(2)} />
                <Tab label="Moliyaviy faoliyat" {...a11yProps(3)} />
            </Tabs>

            <TabPanel value={value} index={0}>
                OTM strukturasi, fakultetlar va kafedralar, xodimlar va oʻqituvchilar tarkibi, talabalar kontingenti va
            </TabPanel>
            <TabPanel value={value} index={1}>
                O‘quv dasturlari, fanlarni hamda talabalarning o‘quv faoliyatini boshqarish, universitet bitiruvchilarini
            </TabPanel>
            <TabPanel value={value} index={2}>
                Tadqiqot jarayonlarining axborot ta’minoti va rejalashtirish jarayonlari, nashrlar, intellektual mulk va o‘quv ishlari jarayonlarini
            </TabPanel>
            <TabPanel value={value} index={3}>
            Stipendiyalar va ish haqi to‘lanishini nazorat qilish, shuningdek talabalar to‘lovlarini hisobga olish
            </TabPanel>
        </Box>
    );
}