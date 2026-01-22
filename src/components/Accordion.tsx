import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';


type SimpleAccordionProps = {
    title?: React.ReactNode;
    children?: React.ReactNode;
};

function SimpleAccordion({ title = 'About Me', children }: SimpleAccordionProps) {
    return (
        <Accordion sx={{ background: '#15181b', color: 'white', border: 'none'}}> 
            <AccordionSummary sx={{ '& .MuiAccordionSummary-content': { justifyContent: 'center', alignItems: 'center', fontSize: '70px' }, textAlign: 'center' }}>{title}</AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
    );
}

{/*#5728c5ff'*/}

export default SimpleAccordion;

