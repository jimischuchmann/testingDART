import React, {Fragment} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link, withRouter} from 'react-router-dom';
import 'typeface-roboto';
import {
  Typography,
  Box,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from '@material-ui/core';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import {ExpandMore} from '@material-ui/icons';

const ExpansionPanel = withStyles({
  root: {
    border: '0px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
    '&hover': {
      backgroundColor: 'primary',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  listItemTertiary: {
    marginTop: '0',
    flexGrow: '0',
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '0.875rem',
  },
  listItemTextNoMargin: {
    marginBottom: '0',
    flexGrow: '0',
  },
  linkNoDecorationAndCorrection: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

export const Programs = [
  {
    title: 'Acceleron Loyalty',
    id: 'SDACCL',
    version: 'Version 1.1',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 5,323,000 USD',
    type: 'Type: Loyalty Incentive',
    components: 'Components: 2',
  },
  {
    title: '2020 Asgrow 2 You - 2018 - 2020',
    id: 'SD2U80',
    version: 'Version 1.0',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 2,189,000 USD',
    type: 'Type: Volume Incentive',
    components: 'Components: 3',
  },
  {
    title: '2020 Asgrow 2 You - 2019 - 2021',
    id: 'SD2U91',
    version: 'Version 1.1',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 5,323,000 USD',
    type: 'Type: Volume Incentive',
    components: 'Components: 4',
  },
  {
    title: '2020 Asgrow-DEKALB-DeltaPine Subs and Cuts Program USA',
    id: 'SDADSC',
    version: 'Version 1.1',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 4,286,000 USD',
    type: 'Type: Volume Incentive',
    components: 'Components: 1',
  },
  {
    title: '2020 Bayer Plus Portfolio Rewards',
    id: 'CHRRPL',
    version: 'Version 2.0',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 115,752,000 USD',
    type: 'Type: Purchase Behavior Incentive',
    components: 'Components: 5',
  },
  {
    title: '2020 Bayer Plus Portfolio Rewards v2',
    id: 'CHRRPL',
    version: 'Version 2.0',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 115,752,000 USD',
    type: 'Type: Purchase Behavior Incentive',
    components: 'Components: 1',
  },
  {
    title: '2020 Branded Seed DDR',
    id: 'SDTDDR',
    version: 'Version 1.1',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 12,340,000 USD',
    type: 'Type: Activity Incentive',
    components: 'Components: 2',
  },
  {
    title: '2020 Branded Seed LCR',
    id: 'SDBRSD',
    version: 'Version 1.2',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 292,659,000 AUD',
    type: 'Type: Volume Incentive',
    components: 'Components: 5',
  },
  {
    title: '2020 Coastal Seed and Trait Crop Switch Replant',
    id: 'SDCLMSCN2',
    version: 'Version 1.0',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 2,505,000 EUR',
    type: 'Type: Guarantee/Claim',
    components: 'Components: 6',
  },
  {
    title: '2020 DEKALB and Asgrow Production Grower Program',
    id: 'SDPROD',
    version: 'Version 1.0',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 1,058,000 USD',
    type: 'Type: Purchase Behavior Incentive',
    components: 'Components: 1',
  },
];

const ProgramListItemsAll = () => {
  const classes = useStyles();

  return (
    <>
      <Box pt={1} pb={1}>
        {Programs.map(
          ({title, id, version, year, budget, type, components}, i) => (
            <Fragment key={i}>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                flexGrow="1"
                style={{height: '100%'}}
              >
                <ListItem
                  style={{height: '100%'}}
                  className={classes.linkNoDecorationAndCorrection}
                  button
                  component={Link}
                  to={'/program/' + i}
                  rel="noopener noreferrer"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    style={{height: '100%'}}
                  >
                    <ListItemText
                      className={classes.listItemTextNoMargin}
                      primary={
                        <Typography
                          variant="subtitle1"
                          style={{fontWeight: 'bold'}}
                        >
                          {title}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2">
                          {[id, version, year].join(' • ')}
                        </Typography>
                      }
                    />
                    <ListItemText
                      classes={{primary: classes.listItemTertiary}}
                      primary={
                        <>
                          <Typography variant="body2">
                            {[budget, type].join(' • ')}
                          </Typography>
                        </>
                      }
                    />
                  </Box>
                </ListItem>
                <ExpansionPanel elevation={0} square style={{width: '100%'}}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMore />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                  >
                    <Typography variant="body2">{components}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Box display="flex" flexDirection="column">
                      <Typography color="textSecondary">
                        Component Name - 1,000,000 USD
                      </Typography>
                      <Typography color="textSecondary">
                        Component Name - 1,000,000 USD
                      </Typography>
                      <Typography color="textSecondary">
                        Component Name - 1,000,000 USD
                      </Typography>
                      <Typography color="textSecondary">
                        Component Name - 1,000,000 USD
                      </Typography>
                      <Typography color="textSecondary">
                        Component Name - 1,000,000 USD
                      </Typography>
                      <Typography color="textSecondary">
                        Component Name - 1,000,000 USD
                      </Typography>
                      <Typography color="textSecondary">
                        Component Name - 1,000,000 USD
                      </Typography>
                      <Typography color="textSecondary">
                        Component Name - 1,000,000 USD
                      </Typography>
                      <Typography color="textSecondary">
                        Component Name - 1,000,000 USD
                      </Typography>
                    </Box>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Box>
              <Divider />
            </Fragment>
          )
        )}
      </Box>
    </>
  );
};

export default withRouter(ProgramListItemsAll);
