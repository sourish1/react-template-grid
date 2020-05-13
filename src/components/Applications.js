import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
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
    },
    cardImg: {
        display: 'inline-block',
        flex: 1,
        margin: 'auto'
    },
    button: {
        fontSize: '10px',
        textAlign: 'left',
        textTransform: 'capitalize',
        fontWeight: '800',
        whiteSpace: 'nowrap'
    },
    cardHead: {
        fontSize: '13px',
        fontWeight: '500',
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '5px'
    },
    cardContent: {
        flex: '3',
    },

});
class Applications extends Component {
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
                Applications
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
                                        <img style={{height:'97px'}} src={`assets/rect.png`} alt='rectangle' />
                                    </div>
                                    <div className={classes.cardContent}>
                                        <span className={classes.cardHead}>
                                        <mark style={{color:'#dcb189', backgroundColor:'#fff0de'}}>2 members</mark>
                                        </span>
                                        <Typography variant="h6" align="left">Group name 123</Typography>
                                        <Typography variant="body2" align="left">Form Description More Details....</Typography>
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

export default withStyles(styles, { withTheme: true })(Applications);
