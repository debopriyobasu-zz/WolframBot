import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Tooltip from 'material-ui/Tooltip';
const styles = theme => ({
  card: {
    maxWidth: 800,
    marginLeft:"auto",
    marginRight:"auto",
    marginTop: 20,
  },
  media: {
    height: 250,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="https://cdn-images-1.medium.com/max/2000/1*1osKSYkYEd8jUMAZVYbhrA.png" //all credits go to the creator
            title="Bot illustration"
          />
          <CardContent>
            <Typography component="p">
            A chat-bot made using Dialogflow and ReactJS that connects to the Wolfram Short Answers API to fetch main results of a query. Click on the floating action button to start the chat with Wolfram Bot.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
          <Tooltip id="tooltip-icon" title="View Source Code">
            <IconButton aria-label="GitHub link" target="_blank" href="https://github.com/debopriyobasu/WolframBot">
            <i class="fab fa-github" style={{color:'#FBC02D'}}></i>
            </IconButton>
            </Tooltip>
            <Tooltip id="tooltip-icon" title="Read More">
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
            </Tooltip>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Details:
              </Typography>
              <Typography paragraph>
              The Short Answers API returns a single plain text result directly from Wolfram|Alpha.In general, this text is taken directly from the Result pod of Wolfram|Alpha output.This API type is designed to deliver brief answers in the most basic format possible.It is implemented in a standard REST protocol using HTTP GET requests.Because this API is designed to return a single result, queries may fail if no sufficiently short result can be found.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);