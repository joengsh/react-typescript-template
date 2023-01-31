import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import tw, { css } from 'twin.macro';

import { FormStep1, FormStep2, FormStep3 } from './FormStep';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion elevation={0} square {...props} />
))(({ theme }) => [
  tw`bg-gray-100 rounded-lg`,
  css`
    &:before {
      display: none;
    }
    &.MuiPaper-root.MuiAccordion-root {
      &, &.Mui-expanded {
        margin: 0.25rem 0;
      },
    }
  `,
]);
// ({
//   backgroundColor: 'grey',
//   // border: `1px solid ${theme.palette.divider}`,
//   borderRadius: '0.5rem',
//   '&:before': {
//     display: 'none',
//   },
//   '&.MuiPaper-root.MuiAccordion-root': {
//     '&, &.Mui-expanded': {
//       margin: '0.25rem 0',
//     },
//   },
// }));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => [
  tw`bg-amber-200 rounded-lg! flex-row-reverse`,
  css`
    & .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
      transform: rotate(90deg);
    }
    & .MuiAccordionSummary-content {
      &, &.Mui-expanded {
        ${tw`ml-2`}
      }
    },
  `,
]);
// ({
//   borderRadius: '0.5rem',
//   backgroundColor: 'rgb(253 230 138)',
//   // theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
//   flexDirection: 'row-reverse',
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//     transform: 'rotate(90deg)',
//   },
//   '& .MuiAccordionSummary-content': {
//     marginLeft: theme.spacing(1),
//   },
// })
// );

const AccordionDetails = styled(MuiAccordionDetails)(
  ({ theme }) => [tw`p-2 rounded-b-lg -mt-2 bg-gray-100`]
  // ({
  //   padding: theme.spacing(2),
  //   borderBottomLeftRadius: '0.5rem',
  //   borderBottomRightRadius: '0.5rem',
  //   marginTop: '-0.5rem',
  //   backgroundColor: 'grey',
  //   borderTop: '1px solid rgba(0, 0, 0, .125)',
  // })
);

export default function StepForm() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div tw="w-full h-full flex flex-col justify-center items-center">
      <div tw="w-3/4 overflow-scroll bg-pink-200 px-1">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Step 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormStep1 onConfirm={(a, b, c) => console.log(a, b, c)} />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Step 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Step 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
