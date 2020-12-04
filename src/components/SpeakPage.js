import React, { Fragment, useEffect, useState } from "react";
import { useRoundware } from "../hooks";
import TagSelectForm from "./tag-select-form";
import LocationSelectForm from "./location-select-form";
import CreateRecordingForm from "./create-recording-form";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";

const useStyles = () => makeStyles(theme => ({
  root: {
    paddingTop: "5rem",
    paddingBottom: "5rem"
  },
  responsiveFormContainer: {
    margin: "auto"
  }
}))


const SpeakPage = (props) => {
  const { roundware, draftRecording } = useRoundware();
  const history = useHistory()
  const location = useLocation();
  const classes = useStyles();
  useEffect(() => {
    let nextForm = "tags/0";

    if (draftRecording.doneTagging) {
      nextForm = "location";
    }
    if (draftRecording.doneSelectingLocation) {
      nextForm = "recording";
    }
    if (location !== nextForm) {
      window.scrollTo(0, 0);
    }
    history.push(`/speak/${nextForm}`);
  }, [draftRecording.doneTagging, draftRecording.doneSelectingLocation]);

  if (roundware === null || !roundware.uiConfig) {
    return null;
  }
  return (
    <Grid container className={classes.root}>
      <Grid item container
            className={classes.responsiveFormContainer}
            style={{'margin': "auto"}}
            xs={12} sm={10} md={6} lg={4} >
        <Switch>
          <Route path={`${props.match.path}/tags/:tagGroupIndex`} component={TagSelectForm } />
          <Route path={`${props.match.path}/location`} component={LocationSelectForm} />
          <Route path={`${props.match.path}/recording`} component={CreateRecordingForm} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default SpeakPage;
