import React from "react";
import { Link } from "react-router-dom";

// ==========================

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

//===============================

const useStyles = makeStyles({
  root: {
    maxWidth: "30%",
    minWidth: "30%",
    margin: "5% auto",
    minHeight: "60vh",
    maxHeight: "60vh"
  },
  media: {
    minHeight: "25vh",
    maxHeight: "25vh"
  }
});

export default function EventList(props) {
  const checkEvents = props.events ? (
    props.events.length < 1 ? (
      <h1 className="check-event-text">No Events Were Made</h1>
    ) : props.events.length === 1 ? (
      <h1 className="check-event-text">
        {" "}
        {props.events.length} Event Available
      </h1>
    ) : (
      <h1 className="check-event-text">
        {" "}
        {props.events.length} Events Available
      </h1>
    )
  ) : (
    ""
  );

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 30 30"
      Style={{ fill: "#000000" }}
      className="event-svg"
    >
      <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
    </svg>
  );

  const classes = useStyles();
  return (
    <div>
      <form className="event-form">
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          name="name"
          label="Title"
          variant="outlined"
          value={props.state}
          onChange={props.onChange}
        />
        <TextField
          id="outlined-full-width"
          name="picture"
          label="ImageURL"
          style={{ width: "90%" }}
          placeholder="Placeholder"
          margin="normal"
          variant="outlined"
          value={props.state}
          onChange={props.onChange}
        />
        <TextField
          id="outlined-multiline-static"
          name="description"
          label="Description"
          multiline
          rows="2"
          style={{ width: "90%" }}
          variant="outlined"
          value={props.state}
          onChange={props.onChange}
        />
        <Button
          onClick={props.onSubmit}
          style={{ marginTop: "2%", width: "30%" }}
          variant="outlined"
        >
          ADD EVENT
        </Button>
      </form>
      {checkEvents}
      <div className="events-container">
        {!props.events ? (
          <h1 className="check-event-text" style={{ textAlign: "center" }}>
            Waiting Events To Fetch
          </h1>
        ) : (
          props.events.map(event => (
            <Card key={event.id} className={classes.root}>
              <CardActionArea>
                <span onClick={() => props.onDelete(event.id)}>{svg}</span>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/event/${event.id}`}
                >
                  <CardMedia
                    className={classes.media}
                    image={event.picture}
                    title="Contemplative Reptile"
                  />{" "}
                  <CardContent>
                    <Typography
                      style={{ fontSize: "2vw" }}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {event.name}
                    </Typography>
                    <Typography
                      style={{ fontSize: "1vw" }}
                      calssName={classes.typography}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {event.description}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
