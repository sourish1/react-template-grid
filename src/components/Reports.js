import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';


const styles = theme => ({
    root: {
      marginTop: '1%',
      marginLeft: '1%',
      marginRight: '1%'
    },
    heading: {
        float: 'left',
        marginBottom: '1%'
    },
    view: {
        float: 'right',
        color: 'blue',
        marginBottom: '1%'
    },
    cardRoot: {

    },
    cardParent: {
        display: 'flex',
        flexDirection: 'column'
    },
    cardImg: {

    },
    cardContent: {
        display: 'inline-flex'
    },
    line: {
        width: '100%'
    },
    avatar: {
        marginLeft: '5px',
        marginBottom: '5px'
    }
});
class Reports extends Component {
    state = {
        data: []
      }

      componentDidMount(){
        fetch("http://localhost:8000/pinnedActions")
        .then((res) => res.json())
        .catch((err) =>
          fetch("db.json")
            .then((res) => res.json())
            .then((data) => data.products)
        )
        .then((data) => {
            this.setState({ data });
        });
      }
    render() {
        const { classes } = this.props;
        console.log(this.state.data);
        return (
            <div className={classes.root}>
                <Typography variant="h5" className={classes.heading}>
                Reports
                </Typography>
                <Typography variant="body1" className={classes.view}>
                View All
                </Typography>
                <Grid container spacing={3}>

                {this.state.data.map((data,key) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <Card className={classes.cardRoot} variant="outlined">
                                <div className={classes.cardParent}>
                                    <div className={classes.cardImg}>
                                    <img src={`assets/undraw.svg`} alt='report' />
                                    </div>
                                    <hr className={classes.line} />
                                    <div className={classes.cardContent}>
                                    <Avatar className={classes.avatar}
                                     style={{color:`${data.color}`, backgroundColor:`${data.backgroundColor}`}}>N</Avatar>
                                    <Typography variant="body2" align="left" style={{padding:'10px'}}>Form Description More Details....</Typography>     
                                    </div>
                                </div>
                        </Card>
                    </Grid>
                ))}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Reports);
