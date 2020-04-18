import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListDetails from './components/ListDetails'
import Pictures from './components/Pictures';
import PriceList from './components/PriceList';
import AlertNotify from './components/AlertNotify';
import { Grid, Stepper, Step, StepLabel, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
  },
  btnGroup: {
    textAlign: 'center',
    marginTop: 50
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Listing Details', 'Pictures', 'Price & List'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ListDetails />;
    case 1:
      return <Pictures />;
    case 2:
      return <PriceList />;
    default:
      return 'Unknown step';
  }
}


const NewListingDetails = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <AlertNotify  />
        ) : (
          <div>
            <Grid className={classes.instructions}>{getStepContent(activeStep)}</Grid>
            <div className={classes.btnGroup}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.buttonNext}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewListingDetails

// REFACTOR REDIRECT TO LISTINS PAGE