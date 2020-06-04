import React from "react";
// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
// Icons
import ArrowDropUpOutlinedIcon from "@material-ui/icons/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "lightGrey",
    height: "100vh"
  },
  icon: {
    height: 30,
    width: 30,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  paperCenter: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: 10,
    color: theme.palette.text.secondary
  }
}));

function Voting({ likeCount, upVote, downVote }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          direction="column"
          xs={1}
        >
          <Paper className={classes.icon}>
            <IconButton
              aria-label="upvote"
              className={classes.icon}
              onClick={upVote}
            >
              <ArrowDropUpOutlinedIcon />
            </IconButton>
          </Paper>
          <p style={{ margin: 10 }}>{likeCount}</p>
          <Paper className={classes.icon}>
            <IconButton
              aria-label="downvote"
              className={classes.icon}
              onClick={downVote}
            >
              <ArrowDropDownOutlinedIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={11}>
          <Paper className={classes.paperCenter}>Avatar, Title, Date</Paper>
          <Paper className={classes.paper}>Just a simple message...</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Voting;
