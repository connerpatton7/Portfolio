import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';


type SimpleAccordionProps = {
    title?: React.ReactNode;
    children?: React.ReactNode;
    expanded?: boolean;
    onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
};

function SimpleAccordion({ title = 'About Me', children, expanded, onChange }: SimpleAccordionProps) {
    return (
        <Accordion
            expanded={expanded}
            onChange={onChange}
            sx={{ background: `transparent`, color: 'var(--text-primary)', border: 'none', boxShadow: 'none' }}
        >
            <AccordionSummary
                sx={{
                    // Keep the purple divider visible even when expanded
                    background: 'var(--accent-primary-dark)',
                    color: 'white !important',
                    borderRadius: '15px',
                    padding: '8px 14px',
                    textAlign: 'center',
                    '& .MuiAccordionSummary-content': {
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '60px',
                        transition: 'font-size 180ms ease, color 180ms ease',
                        color: 'inherit',
                    },
                    // When expanded, keep the purple bar as a top divider (rounded top corners only)
                    '&.Mui-expanded': {
                        background: 'var(--accent-primary-dark)',
                        color: 'white !important',
                        borderRadius: '10px 10px 0 0',
                        padding: '8px 14px',
                        boxShadow: '0 6px 18px rgba(0,0,0,0.28)',
                        '& .MuiAccordionSummary-content': {
                            fontSize: '60px',
                        },
                    },
                }}
            >
                {title}
            </AccordionSummary>
            <AccordionDetails sx={{ background: 'transparent', color: 'var(--text-primary)', padding: '24px' }}>
                {children}
            </AccordionDetails>
        </Accordion>
    );
}

{/*#5728c5ff'*/ }

export default SimpleAccordion;

